import React, { useEffect, useRef, useState } from "react";

export const MatrixOutput: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 200;

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    let animationId: number;
    let frameCount = 0;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff00";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = `rgba(0, ${150 + Math.random() * 105}, 0, ${0.8 + Math.random() * 0.2})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      frameCount++;
      if (frameCount < 300 && isRunning) {
        animationId = requestAnimationFrame(draw);
      } else {
        setIsRunning(false);
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isRunning]);

  return (
    <div className="slide-up space-y-4">
      <div className="text-terminal-success terminal-glow font-bold mb-2">
        {">"} Entering the Matrix...
      </div>
      <div className="border border-terminal-border rounded overflow-hidden terminal-box-glow">
        <canvas
          ref={canvasRef}
          className="w-full h-[200px] bg-black"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
      <div className="text-muted-foreground text-sm">
        <span className="text-terminal-info">Wake up, Neo...</span>
        <br />
        <span className="text-primary">The Matrix has you...</span>
      </div>
      {!isRunning && (
        <div className="text-terminal-warning text-sm fade-in">
          Follow the white rabbit. 🐰
        </div>
      )}
    </div>
  );
};
