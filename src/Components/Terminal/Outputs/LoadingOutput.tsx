import React, { useState, useEffect } from "react";

interface LoadingOutputProps {
  message?: string;
}

export const LoadingOutput: React.FC<LoadingOutputProps> = ({
  message = "Loading...",
}) => {
  const [frame, setFrame] = useState(0);

  const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  const barFrames = ["█", "▓", "▒", "░"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % spinnerFrames.length);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const progressBar = Array(20)
    .fill(null)
    .map((_, i) => {
      const pos = (frame * 2 + i) % 20;
      if (pos < 5) return "█";
      if (pos < 8) return "▓";
      if (pos < 11) return "▒";
      return "░";
    })
    .join("");

  return (
    <div className="font-mono space-y-3 fade-in">
      <div className="flex items-center gap-3">
        <span className="text-primary text-xl">{spinnerFrames[frame]}</span>
        <span className="text-foreground">{message}</span>
      </div>

      <div className="text-primary">[{progressBar}]</div>

      <div className="flex gap-4 text-sm">
        <span className="text-muted-foreground">Spinner frames:</span>
        <div className="flex gap-1">
          {spinnerFrames.map((s, i) => (
            <span
              key={i}
              className={
                i === frame ? "text-primary" : "text-muted-foreground/50"
              }
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <pre className="text-secondary text-xs">
        {`
   ╭──────────────────╮
   │  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄  │
   │  █ Loading... █  │
   │  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀  │
   ╰──────────────────╯
`}
      </pre>
    </div>
  );
};
