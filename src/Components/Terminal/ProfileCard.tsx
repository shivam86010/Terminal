import React, {
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState,
} from "react";

interface ProfileCardProps {
  avatarUrl: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  bio?: string;
  email?: string;
  location?: string;
  skills?: string[];
  onContactClick?: () => void;
}

const clamp = (v: number, min = 0, max = 100): number =>
  Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3): number =>
  parseFloat(v.toFixed(precision));
const adjust = (
  v: number,
  fMin: number,
  fMax: number,
  tMin: number,
  tMax: number,
): number => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

export const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name = "Shivam Singh",
  title = "Software Developer",
  handle = "shivam",
  status = "Available for work",
  bio = "",
  email = "",
  location = "",
  skills = [],
  onContactClick,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const tiltEngine = useMemo(() => {
    let rafId: number | null = null;
    let running = false;
    let lastTs = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const setVarsFromXY = (x: number, y: number) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;

      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      } as Record<string, string>;

      for (const [k, v] of Object.entries(properties))
        wrap.style.setProperty(k, v);
    };

    const step = (ts: number) => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const tau = 0.14;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      setVarsFromXY(currentX, currentY);

      const stillFar =
        Math.abs(targetX - currentX) > 0.05 ||
        Math.abs(targetY - currentY) > 0.05;

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x: number, y: number) {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x: number, y: number) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      },
    };
  }, []);

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const shell = shellRef.current;
      if (!shell) return;
      const rect = shell.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine],
  );

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    tiltEngine.toCenter();
  }, [tiltEngine]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;

    shell.addEventListener("pointerenter", handlePointerEnter);
    shell.addEventListener("pointermove", handlePointerMove as EventListener);
    shell.addEventListener("pointerleave", handlePointerLeave);

    const initialX = (shell.clientWidth || 0) / 2;
    const initialY = (shell.clientHeight || 0) / 2;
    tiltEngine.setImmediate(initialX, initialY);

    return () => {
      shell.removeEventListener("pointerenter", handlePointerEnter);
      shell.removeEventListener(
        "pointermove",
        handlePointerMove as EventListener,
      );
      shell.removeEventListener("pointerleave", handlePointerLeave);
      tiltEngine.cancel();
    };
  }, [tiltEngine, handlePointerMove, handlePointerEnter, handlePointerLeave]);

  return (
    <div
      ref={wrapRef}
      className="profile-card-wrapper"
      style={
        {
          "--rotate-x": "0deg",
          "--rotate-y": "0deg",
          "--pointer-x": "50%",
          "--pointer-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Behind glow */}
      <div className="profile-behind-glow" />

      <div
        ref={shellRef}
        className={`profile-card-shell ${isHovered ? "active" : ""}`}
      >
        <div className="profile-card">
          {/* Shine effect */}
          <div className="profile-shine" />
          {/* Glare effect */}
          <div className="profile-glare" />

          <div className="profile-content">
            {/* Header with avatar */}
            <div className="profile-header">
              <div className="profile-avatar-wrapper">
                <img
                  className="profile-avatar"
                  src={avatarUrl}
                  alt={`${name} avatar`}
                  loading="lazy"
                />
                <div className="profile-status-dot" />
              </div>
              <div className="profile-header-info">
                <h3 className="profile-name">{name}</h3>
                <p className="profile-title">{title}</p>
                <div className="profile-handle">@{handle}</div>
              </div>
            </div>

            {/* Divider */}
            <div className="profile-divider" />

            {/* Bio section */}
            {bio && (
              <div className="profile-section">
                <div className="profile-section-header">
                  <span className="profile-section-icon">📝</span>
                  <span>About</span>
                </div>
                <p className="profile-bio">{bio}</p>
              </div>
            )}

            {/* Info grid */}
            <div className="profile-info-grid">
              {email && (
                <div className="profile-info-item">
                  <span className="profile-info-icon">📧</span>
                  <span className="profile-info-text">{email}</span>
                </div>
              )}
              {location && (
                <div className="profile-info-item">
                  <span className="profile-info-icon">📍</span>
                  <span className="profile-info-text">{location}</span>
                </div>
              )}
            </div>

            {/* Skills */}
            {skills.length > 0 && (
              <div className="profile-section">
                <div className="profile-section-header">
                  <span className="profile-section-icon">💻</span>
                  <span>Top Skills</span>
                </div>
                <div className="profile-skills">
                  {skills.slice(0, 6).map((skill, index) => (
                    <span key={index} className="profile-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Status bar */}
            <div className="profile-status-bar">
              <div className="profile-status-indicator" />
              <span>{status}</span>
            </div>

            {/* Action button */}
            <button
              className="profile-contact-btn"
              onClick={onContactClick}
              type="button"
            >
              <span className="profile-btn-text">Contact Me</span>
              <span className="profile-btn-icon">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
