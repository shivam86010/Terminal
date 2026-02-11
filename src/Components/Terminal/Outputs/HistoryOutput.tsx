import React from "react";
import { useTerminal } from "@/context/TerminalContext";

export const HistoryOutput: React.FC = () => {
  const { commandHistory } = useTerminal();

  if (commandHistory.length === 0) {
    return (
      <div className="text-muted-foreground">
        No command history yet. Start typing commands!
      </div>
    );
  }

  return (
    <div className="font-mono space-y-1">
      <div className="flex items-center gap-4 text-xs text-muted-foreground border-b border-border pb-2 mb-2">
        <span className="w-8">#</span>
        <span className="w-24">Time</span>
        <span>Command</span>
      </div>
      {commandHistory.slice(0, -1).map((entry, index) => (
        <div
          key={entry.id}
          className="flex items-center gap-4 text-sm hover:bg-muted/20 px-1 rounded"
        >
          <span className="w-8 text-muted-foreground">{index + 1}</span>
          <span className="w-24 text-terminal-info text-xs">
            {entry.timestamp.toLocaleTimeString()}
          </span>
          <span className="text-foreground">{entry.command}</span>
        </div>
      ))}
      <div className="mt-3 pt-2 border-t border-border text-xs text-muted-foreground">
        Total: {commandHistory.length - 1} commands | Use ↑↓ to navigate history
      </div>
    </div>
  );
};
