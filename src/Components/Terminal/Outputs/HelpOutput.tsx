import React from "react";

export const HelpOutput: React.FC = () => {
  const navigationCommands = [
    { command: "/herosection", description: "Go to the main hero section" },
    { command: "/about", description: "View my professional background" },
    { command: "/experience", description: "See my work history" },
    { command: "/projects", description: "List all projects" },
    { command: "/connect", description: "View contact information" },
  ];

  const projectCommands = [
    { command: "cd <project>", description: "Navigate to a project directory" },
    { command: "code .", description: "Open current project in editor" },
    { command: "npm run dev", description: "Run the current project" },
    { command: "npm install <pkg>", description: "Install a package" },
    { command: "ls | dir", description: "List current directory contents" },
    { command: "tree", description: "Show file structure as ASCII tree" },
    { command: "pwd", description: "Print working directory" },
    { command: "touch <file>", description: "Create a new file" },
    { command: "rm <file>", description: "Delete a file" },
    { command: "mkdir <dir>", description: "Create a directory" },
    { command: "cat <file>", description: "View file contents" },
  ];

  const utilityCommands = [
    { command: "clear | cls", description: "Clear terminal" },
    { command: "help", description: "Show all commands" },
    { command: "whoami", description: "Display personal summary" },
    { command: "resume", description: "Open resume PDF" },
    { command: "git status", description: "Check portfolio status" },
    { command: "git log", description: "View commit history" },
    { command: "skills", description: "View technical skills" },
    { command: "run", description: "Run current project demo" },
    { command: "date | time", description: "Show current date/time" },
    { command: "uptime", description: "Show portfolio uptime" },
    { command: "history", description: "View command history" },
    { command: "echo <text>", description: "Echo text back" },
  ];

  const keyboardShortcuts = [
    { command: "Ctrl+K", description: "Clear terminal" },
    { command: "Ctrl+L", description: "Toggle theme (dark/light/hacker)" },
    { command: "Ctrl+S", description: "Save file (in editor)" },
    { command: "Ctrl+`", description: "Toggle terminal panel (in editor)" },
    { command: "Ctrl+B", description: "Toggle sidebar (in editor)" },
    { command: "↑ / ↓", description: "Navigate command history" },
    { command: "Tab", description: "Auto-complete command" },
  ];

  const themeCommands = [
    { command: "theme dark", description: "Switch to dark theme" },
    { command: "theme light", description: "Switch to light theme" },
    { command: "theme hacker", description: "Switch to hacker theme" },
  ];

  const funCommands = [
    { command: "matrix", description: "Enter the Matrix" },
    { command: "neofetch", description: "System information display" },
    { command: "cowsay <msg>", description: "Make a cow say something" },
    { command: "fortune", description: "Get a fortune cookie" },
    { command: "weather", description: "Check the weather" },
    { command: "hack", description: "Hack the mainframe!" },
    { command: "coffee", description: "Get some coffee ☕" },
    { command: "rocket", description: "Launch a rocket 🚀" },
    { command: "heart", description: "Spread some love ❤️" },
    { command: "cat | dog", description: "See cute ASCII art" },
    { command: "loading", description: "Spinning loader animation" },
    { command: "ping", description: "Ping pong!" },
    { command: "42", description: "The answer to everything" },
  ];

  const connectCommands = [
    { command: "connect email", description: "Open email client" },
    { command: "connect github", description: "Open GitHub profile" },
    { command: "connect linkedin", description: "Open LinkedIn profile" },
    { command: "connect twitter", description: "Open Twitter profile" },
  ];

  const CommandSection = ({
    title,
    commands,
  }: {
    title: string;
    commands: { command: string; description: string }[];
  }) => (
    <div className="mb-4">
      <h3 className="text-secondary mb-2">--- {title} ---</h3>
      <div className="space-y-1">
        {commands.map((cmd, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-primary font-mono w-36 shrink-0">
              {cmd.command}
            </span>
            <span className="text-muted-foreground">- {cmd.description}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="slide-up space-y-4">
      <h2 className="text-primary terminal-glow text-xl">
        {">"} Available Commands
      </h2>

      <div className="space-y-2">
        <CommandSection title="Navigation" commands={navigationCommands} />
        <CommandSection title="Project Management" commands={projectCommands} />
        <CommandSection title="Utilities & System" commands={utilityCommands} />
        <CommandSection title="Personalization" commands={themeCommands} />
        <CommandSection title="Fun Commands" commands={funCommands} />
        <CommandSection title="Connect" commands={connectCommands} />

        <CommandSection
          title="Keyboard Shortcuts"
          commands={keyboardShortcuts}
        />

        <div className="mt-4 p-3 border border-border rounded bg-muted/20">
          <p className="text-muted-foreground text-sm">
            <span className="text-secondary">TIP:</span> Use ↑↓ arrows for
            command history, TAB for auto-complete
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            <span className="text-secondary">WORKFLOW:</span> cd project-name →
            code . → npm run dev
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            <span className="text-secondary">EDITOR:</span> Ctrl+S save, Ctrl+`
            terminal, Ctrl+B sidebar
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            <span className="text-secondary">FILE OPS:</span> touch/rm/mkdir
            commands or use File menu in editor
          </p>
        </div>
      </div>
    </div>
  );
};
