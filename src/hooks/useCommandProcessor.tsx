import React, { useCallback } from "react";
import { useTerminal } from "../Context/TerminalContext";
import { HeroOutput } from "../Components/Terminal/Outputs/HeroOutput";

export const useCommandProcessor = () => {
  const { addCommand, setCurrentSection } = useTerminal();

  const processCommand = useCallback(
    (input: string) => {
      const trimmedInput = input.trim().toLowerCase();

      // Navigation commands
      if (trimmedInput === "/herosection" || trimmedInput === "home") {
        setCurrentSection("home");
        addCommand(input, <HeroOutput />);
        return;
      }
    },
    [addCommand, setCurrentSection] // ✅ dependency array
  );

  const getAutoCompleteSuggestions = useCallback((input: string): string[] => {
    const allCommands = ["/herosection"];

    if (!input) return [];

    const lowercaseInput = input.toLowerCase();
    return allCommands.filter(
      (cmd) =>
        cmd.toLowerCase().startsWith(lowercaseInput) &&
        cmd.toLowerCase() !== lowercaseInput
    );
  }, []);

  return { processCommand, getAutoCompleteSuggestions };
};
