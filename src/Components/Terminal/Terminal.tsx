import React, { useRef, useEffect } from "react";

import { useTerminal } from "../../Context/TerminalContext";
// import { TerminalInput } from "./TerminalInput";
// import { HeroOutput } from "./outputs/HeroOutput";

export const Terminal: React.FC = () => {
  const { commandHistory } = useTerminal();
  const outputRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new commands
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [commandHistory]);

  return (
    <div className="flex flex-col h-full bg-terminal-bg border border-terminal-border rounded-lg terminal-box-glow overflow-hidden scanlines">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/20 border-b border-terminal-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-terminal-error" />
          <div className="w-3 h-3 rounded-full bg-terminal-warning" />
          <div className="w-3 h-3 rounded-full bg-terminal-success" />
        </div>
        <span className="flex-1 text-center text-sm text-muted-foreground font-mono">
          terminal@alex-portfolio
        </span>
      </div>

      {/* Terminal Output Area */}
      <div
        ref={outputRef}
        className="flex-1 overflow-y-auto p-4 terminal-scrollbar min-h-0"
      >
        {/* Initial welcome message */}
        <div className="mb-6">
          {/* <HeroOutput /> */}
        </div>

        {/* Command history */}
        {commandHistory.map((entry) => (
          <div key={entry.id} className="mb-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-terminal-prompt terminal-glow font-bold">
                guest@portfolio:~$
              </span>
              <span className="text-foreground">{entry.command}</span>
            </div>
            <div className="mt-2 pl-0">{entry.output}</div>
          </div>
        ))}

        {/* Current input line */}
        {/* <TerminalInput /> */}
      </div>
    </div>
  );
};
