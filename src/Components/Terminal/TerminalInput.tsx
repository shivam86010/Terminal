import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTerminal } from "../../Context/TerminalContext";
import { useCommandProcessor } from "@/hooks/useCommandProcessor";

export const TerminalInput: React.FC = () => {
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const {
    commandHistory,
    inputRef,
    currentDirectory,
    clearHistory,
    setTheme,
    theme,
  } = useTerminal();
  const { processCommand, getAutoCompleteSuggestions } = useCommandProcessor();
  const localInputRef = useRef<HTMLInputElement>(null);
  const activeRef = inputRef || localInputRef;

  // focus input on mount and clicks
  useEffect(() => {
    activeRef.current?.focus();
  }, []);

  // global keyboard shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // ctrl+K to clear terminal
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        clearHistory();
      }
      // Ctrl+L to toggle theme
      if (e.ctrlKey && e.key === "l") {
        e.preventDefault();
        const themes = ["dark", "light", "hacker"] as const;
        const currentIndex = themes.indexOf(theme);
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        setTheme(nextTheme);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [clearHistory, setTheme, theme]);

  // update suggestion on input change
  useEffect(() => {
    if (input) {
      const suggestions = getAutoCompleteSuggestions(input);
      setSuggestion(suggestions.length > 0 ? suggestions[0] : null);
    } else {
      setSuggestion(null);
    }
  }, [input, getAutoCompleteSuggestions]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (input.trim()) {
        processCommand(input);
        setInput("");
        setHistoryIndex(-1);
        setSuggestion(null);
      }
    },
    [input, processCommand]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      // history navigation
      if (e.key === "ArrowUp") {
        e.preventDefault();
        const commands = commandHistory.map((entry) => entry.command);
        if (commands.length > 0 && historyIndex < commands.length - 1) {
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);
          setInput(commands[commands.length - 1 - newIndex]);
        }
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const commands = commandHistory.map((entry) => entry.command);
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setInput(commands[commands.length - 1 - newIndex]);
        } else if (historyIndex === 0) {
          setHistoryIndex(-1);
          setInput("");
        }
      }

      // tab completion
      if (e.key === "Tab") {
        e.preventDefault();
        if (suggestion) {
          setInput(suggestion);
          setSuggestion(null);
        }
      }
    },
    [commandHistory, historyIndex, suggestion]
  );

  const handleContainerClick = () => {
    activeRef.current?.focus();
  };

  // Get short directory name for prompt
  const getPromptDir = () => {
    if (currentDirectory === "~") return "~";
    const parts = currentDirectory.split("/");
    return parts[parts.length - 1] || "~";
  };

  return (
    <div
      className="flex items-center gap-2 py-2 cursor-text"
      onClick={handleContainerClick}
    >
      <span className="text-terminal-prompt terminal-glow font-bold select-none shrink-0">
        <span className="text-primary">guest</span>
        <span className="text-muted-foreground">@</span>
        <span className="text-secondary">portfolio</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-terminal-info">{getPromptDir()}</span>
        <span className="text-foreground">$</span>
      </span>
      <form onSubmit={handleSubmit} className="flex-1 relative">
        <input
          ref={activeRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent text-foreground outline-none font-mono caret-terminal-cursor"
          autoComplete="off"
          spellCheck={false}
          autoFocus
        />
        {/* auto-suggestion ghost text */}
        {suggestion && input && (
          <span className="absolute left-0 top-0 text-muted-foreground/40 pointer-events-none font-mono">
            {suggestion}
          </span>
        )}
        {/* blinking cursor when empty */}
        {!input && (
          <span className="text-terminal-cursor cursor-blink absolute left-0">
            ▋
          </span>
        )}
      </form>
    </div>
  );
};
