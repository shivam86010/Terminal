import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
// import { CommandEntry, ThemeType, ViewType, Project } from "@/types/terminal";
// import { projects } from "@/Data/portfolio";

interface TerminalContextType {
  commandHistory: CommandEntry[];
  addCommand: (command: string, output: React.ReactNode) => void;
  clearHistory: () => void;
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const TerminalContext = createContext<TerminalContextType | undefined>(
  undefined
);

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [commandHistory, setCommandHistory] = useState<CommandEntry[]>([]);
  const [currentView, setCurrentView] = useState<ViewType>("terminal");
  const [theme, setThemeState] = useState<ThemeType>("dark");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSection, setCurrentSection] = useState<string>("home");
  const inputRef = useRef<HTMLInputElement>(null);

  const setTheme = useCallback((newTheme: ThemeType) => {
    setThemeState(newTheme);
    document.documentElement.classList.remove(
      "theme-dark",
      "theme-light",
      "theme-hacker"
    );
    if (newTheme !== "dark") {
      document.documentElement.classList.add(`theme-${newTheme}`);
    }
  }, []);

  const addCommand = useCallback((command: string, output: React.ReactNode) => {
    const entry: CommandEntry = {
      id: Date.now().toString(),
      command,
      output,
      timestamp: new Date(),
    };
    setCommandHistory((prev) => [...prev, entry]);
  }, []);

  const clearHistory = useCallback(() => {
    setCommandHistory([]);
  }, []);

  // Initialize theme
  useEffect(() => {
    document.documentElement.classList.remove(
      "theme-dark",
      "theme-light",
      "theme-hacker"
    );
  }, []);

  return (
    <TerminalContext.Provider
      value={{
        commandHistory,
        addCommand,
        clearHistory,
        currentView,
        setCurrentView,
        theme,
        setTheme,
        selectedProject,
        setSelectedProject,
        currentSection,
        setCurrentSection,
        inputRef,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error("useTerminal must be used within a TerminalProvider");
  }
  return context;
};
