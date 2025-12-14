import React, { useState, useEffect, useRef } from "react";

interface InitialLoaderProps {
  onComplete: () => void;
}

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Progress animation with easing
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        // Smooth easing
        const increment = Math.max(0.4, (100 - prev) * 0.02);
        return Math.min(prev + increment, 100);
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Canvas particle effect - simplified
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      angle: number;
      color: string;
    }> = [];

    // Initialize particles around center
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 200;
      particles.push({
        x: canvas.width / 2 + Math.cos(angle) * distance,
        y: canvas.height / 2 + Math.sin(angle) * distance,
        size: Math.random() * 1.5 + 0.5,
        speed: 0.3 + Math.random() * 0.7,
        angle: angle + Math.random() * Math.PI,
        color: `hsla(${260 + Math.random() * 40}, 100%, 70%, ${
          0.15 + Math.random() * 0.2
        })`,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((p) => {
        // Move particle in circular pattern
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        // Boundary check
        const dx = p.x - canvas.width / 2;
        const dy = p.y - canvas.height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 250) {
          p.x = canvas.width / 2;
          p.y = canvas.height / 2;
        }

        // Draw particle with trail effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black overflow-hidden flex items-center justify-center transition-all duration-700 ${
        isComplete ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.4 }}
      />

      {/* Main loader */}
      <div className="relative z-10 flex flex-col items-center space-y-10">
        {/* Floating geometric loader */}
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute -inset-12 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-full blur-xl" />

          {/* Main loader circle */}
          <div className="relative w-64 h-64">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border border-white/5">
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-secondary"
                style={{
                  transform: `rotate(${progress * 3.6}deg)`,
                  transition: "transform 0.2s ease-out",
                }}
              />
            </div>

            {/* Inner rotating rings */}
            <div className="absolute inset-8 rounded-full">
              <div
                className="absolute inset-0 rounded-full border border-primary/30"
                style={{
                  transform: `rotate(${-progress * 2}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
              />
            </div>

            {/* Pulsing center */}
            <div className="absolute inset-20 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 backdrop-blur-sm">
              {/* Core glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-transparent to-secondary/40 blur-md" />

              {/* Percentage display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary transition-all duration-300"
                  style={{
                    filter: `drop-shadow(0 0 ${
                      8 + progress * 0.2
                    }px rgba(var(--primary), 0.4))`,
                  }}
                >
                  {Math.round(progress)}
                  <span className="text-xl opacity-70">%</span>
                </div>
              </div>
            </div>

            {/* Floating dots */}
            {[0, 1, 2].map((i) => (
              <div
                key={`dot-${i}`}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `
                    translate(-50%, -50%)
                    rotate(${i * 120 + progress * 3.6}deg)
                    translateX(96px)
                  `,
                  filter: `blur(${1 + Math.sin(progress * 0.1 + i) * 0.5}px)`,
                  opacity: 0.7 + Math.sin(progress * 0.05 + i) * 0.3,
                  boxShadow: `0 0 ${
                    8 + Math.sin(progress * 0.1 + i) * 4
                  }px rgba(var(--primary), 0.6)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Simple progress indicator */}
        <div className="w-72 space-y-4">
          {/* Progress bar */}
          <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="absolute h-full rounded-full bg-gradient-to-r from-primary via-white to-secondary transition-all duration-150"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>

            {/* Glowing end */}
            <div
              className="absolute top-1/2 w-3 h-3 rounded-full bg-white -translate-y-1/2 transition-all duration-150"
              style={{
                left: `${progress}%`,
                filter: "blur(4px)",
                opacity: 0.7,
              }}
            />
          </div>

          {/* Simple status text */}
          <div className="text-center">
            <div className="text-sm text-white/60 tracking-wider font-light">
              {progress < 100 ? "LOADING" : "READY"}
            </div>
          </div>
        </div>
      </div>

      {/* Minimal corner elements */}
      <div className="absolute top-6 left-6">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <div className="text-xs text-white/30">LOAD</div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6">
        <div className="text-xs text-white/20">{Math.round(progress)}%</div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
