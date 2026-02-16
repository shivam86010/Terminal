import React, { useState, useEffect } from "react";

export const HackerOutput: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const hackerLines = [
    "Initializing neural network...",
    "Bypassing firewall: ██████████ 100%",
    "Accessing mainframe...",
    "Decrypting secure channels...",
    "Installing backdoor: /dev/null/portfolio",
    "Extracting data packets...",
    "Compiling quantum algorithms...",
    "Overclocking CPU cores...",
    "Establishing VPN tunnel...",
    "Rerouting through 47 proxies...",
    'Injecting payload: <script>console.log("Hired!")</script>',
    "Access granted. Welcome, Admin.",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < hackerLines.length) {
        setLines((prev) => [...prev, hackerLines[index]]);
        index++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slide-up font-mono">
      <div className="border border-terminal-success/50 rounded p-4 bg-black/50">
        <div className="text-terminal-success text-xs sm:text-sm space-y-1">
          {lines.map((line, index) => (
            <div key={index} className="fade-in flex items-center gap-2">
              <span className="text-terminal-success">{">"}</span>
              <span
                className={
                  index === lines.length - 1 && isComplete
                    ? "terminal-glow-strong"
                    : ""
                }
              >
                {line}
              </span>
            </div>
          ))}
          {!isComplete && (
            <div className="flex items-center gap-2">
              <span className="text-terminal-success">{">"}</span>
              <span className="inline-block w-2 h-4 bg-terminal-success animate-pulse" />
            </div>
          )}
        </div>

        {isComplete && (
          <div className="mt-4 pt-4 border-t border-terminal-success/30 text-center">
            <pre className="text-terminal-success text-xs terminal-glow">
              {`
 █████╗  ██████╗ ██████╗███████╗███████╗███████╗
██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝
███████║██║     ██║     █████╗  ███████╗███████╗
██╔══██║██║     ██║     ██╔══╝  ╚════██║╚════██║
██║  ██║╚██████╗╚██████╗███████╗███████║███████║
╚═╝  ╚═╝ ╚═════╝ ╚═════╝╚══════╝╚══════╝╚══════╝
      G R A N T E D
`}
            </pre>
            <p className="text-muted-foreground text-xs mt-2">
              Just kidding! This is just a fun animation. 😄
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
