import React from "react";

interface CowsayOutputProps {
  message?: string;
}

export const CowsayOutput: React.FC<CowsayOutputProps> = ({
  message = "Hello! I'm a developer who loves to code!",
}) => {
  const maxWidth = 40;
  const words = message.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    if ((currentLine + " " + word).trim().length <= maxWidth) {
      currentLine = (currentLine + " " + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  });
  if (currentLine) lines.push(currentLine);

  const bubbleWidth = Math.max(...lines.map((l) => l.length), 2);

  const topBorder = " " + "_".repeat(bubbleWidth + 2);
  const bottomBorder = " " + "-".repeat(bubbleWidth + 2);

  const paddedLines = lines.map((line, index) => {
    const padded = line.padEnd(bubbleWidth);
    if (lines.length === 1) {
      return `< ${padded} >`;
    } else if (index === 0) {
      return `/ ${padded} \\`;
    } else if (index === lines.length - 1) {
      return `\\ ${padded} /`;
    } else {
      return `| ${padded} |`;
    }
  });

  return (
    <div className="slide-up font-mono">
      <pre className="text-foreground text-sm leading-tight">
        {topBorder}
        {paddedLines.join("\n")}
        {bottomBorder}
        {`        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
      </pre>
      <div className="mt-4 text-xs text-muted-foreground">
        <span className="text-terminal-info">Tip:</span> Try{" "}
        <span className="text-primary">cowsay [your message]</span>
      </div>
    </div>
  );
};
