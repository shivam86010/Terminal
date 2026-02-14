import React, { useState, useEffect } from "react";

interface TypewriterOutputProps {
  text?: string;
}

export const TypewriterOutput: React.FC<TypewriterOutputProps> = ({
  text = "Hello, I'm a typewriter effect! Watch me type character by character...",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="font-mono space-y-4 fade-in">
      <div className="text-lg">
        <span className="text-primary">{displayedText}</span>
        <span
          className={`text-primary ${cursorVisible ? "opacity-100" : "opacity-0"}`}
        >
          ▌
        </span>
      </div>

      <div className="text-muted-foreground text-sm">
        Characters typed: {displayedText.length} / {text.length}
      </div>

      <pre className="text-secondary text-xs mt-4">
        {`
  ╔══════════════════════════════════╗
  ║  ⌨️  TYPEWRITER EFFECT v1.0     ║
  ║  Speed: 50ms per character       ║
  ║  Status: ${displayedText.length === text.length ? "Complete ✓" : "Typing..."}              ║
  ╚══════════════════════════════════╝
`}
      </pre>
    </div>
  );
};
