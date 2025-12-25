import React, { useCallback } from "react";
import { useTerminal } from "@/context/TerminalContext";
import { projects, personalInfo } from "@/data/portfolio";
import { HeroOutput } from "@/components/terminal/outputs/HeroOutput";



export const useCommandProcessor = () => {
  const {
    addCommand,
    clearHistory,
    setTheme,
    theme,
    setCurrentView,
    setSelectedProject,
    setCurrentSection,
    currentDirectory,
    setCurrentDirectory,
    selectedProject,
  } = useTerminal();

  const processCommand = useCallback(
    (input: string) => {
      const trimmedInput = input.trim().toLowerCase();
      const parts = trimmedInput.split(" ");
      const command = parts[0];
      const args = parts.slice(1);

      // CD command - navigate to project
      if (command === "cd") {
        const target = args[0];

        if (!target || target === "~" || target === "/") {
          setCurrentDirectory("~");
          setSelectedProject(null);
          addCommand(
            input,
            <span className="text-muted-foreground">
              Changed to home directory
            </span>
          );
          return;
        }

        if (target === "..") {
          if (currentDirectory !== "~") {
            setCurrentDirectory("~");
            setSelectedProject(null);
            addCommand(
              input,
              <span className="text-muted-foreground">
                Changed to home directory
              </span>
            );
          } else {
            addCommand(
              input,
              <span className="text-muted-foreground">
                Already at home directory
              </span>
            );
          }
          return;
        }

        // Find project by id or name
        const project = projects.find(
          (p) =>
            p.id.toLowerCase() === target ||
            p.name.toLowerCase().replace(/\s+/g, "-") === target ||
            p.name.toLowerCase() === target
        );

        if (project) {
          setCurrentDirectory(`~/projects/${project.id}`);
          setSelectedProject(project);
          addCommand(
            input,
            <div className="font-mono">
              <p className="text-terminal-success">
                📁 Navigated to project: {project.name}
              </p>
              <p className="text-muted-foreground mt-1">
                Current directory: ~/projects/{project.id}
              </p>
              <p className="text-terminal-info mt-2">
                Type 'code .' to open in editor or 'npm run dev' to run
              </p>
            </div>
          );
          return;
        }

        addCommand(
          input,
          <span className="text-terminal-error">
            Directory not found: {target}. Use '/projects' to see available
            projects.
          </span>
        );
        return;
      }

      // CODE command - open editor
      if (trimmedInput === "code ." || trimmedInput === "code") {
        if (selectedProject) {
          setCurrentView("project-editor");
          addCommand(
            input,
            <div className="font-mono">
              <p className="text-terminal-success">
                🚀 Opening {selectedProject.name} in VS Code editor...
              </p>
              <p className="text-muted-foreground mt-1">
                Loading file explorer and Monaco editor...
              </p>
            </div>
          );
          return;
        }
        addCommand(
          input,
          <span className="text-terminal-error">
            No project selected. Use 'cd project-name' to navigate to a project
            first.
          </span>
        );
        return;
      }

      // NPM RUN DEV command
      if (
        trimmedInput === "npm run dev" ||
        trimmedInput === "npm start" ||
        trimmedInput === "yarn dev"
      ) {
        if (selectedProject) {
          addCommand(
            input,
            <div className="font-mono space-y-1">
              <p className="text-muted-foreground">$ {trimmedInput}</p>
              <p className="text-terminal-info">
                ⏳ Starting development server...
              </p>
              <p className="text-terminal-success mt-2">
                ✔ Compiled successfully!
              </p>
              <p className="text-terminal-success">
                ✔ Server running at localhost:3000
              </p>
              <p className="text-muted-foreground mt-2">Opening browser...</p>
              <button
                onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                className="mt-2 px-3 py-1 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/80 transition"
              >
                🌐 Open {selectedProject.name} in browser
              </button>
            </div>
          );
          if (selectedProject.liveUrl) {
            setTimeout(
              () => window.open(selectedProject.liveUrl, "_blank"),
              1000
            );
          }
          return;
        }
        addCommand(
          input,
          <span className="text-terminal-error">
            No project selected. Use 'cd project-name' first.
          </span>
        );
        return;
      }

      // Navigation commands
      if (trimmedInput === "/herosection" || trimmedInput === "home") {
        setCurrentSection("home");
        addCommand(input, <HeroOutput />);
        return;
      }

      if (trimmedInput === "/about" || trimmedInput === "about") {
        setCurrentSection("about");
        addCommand(input, <AboutOutput />);
        return;
      }

      if (trimmedInput === "/experience" || trimmedInput === "experience") {
        setCurrentSection("experience");
        addCommand(input, <ExperienceOutput />);
        return;
      }

      if (trimmedInput === "/projects" || trimmedInput === "projects") {
        setCurrentSection("projects");
        addCommand(input, <ProjectsOutput />);
        return;
      }

      if (
        trimmedInput === "/connect" ||
        trimmedInput === "connect" ||
        trimmedInput === "contact"
      ) {
        setCurrentSection("connect");
        addCommand(input, <ConnectOutput />);
        return;
      }

      // Connect with specific platform
      if (command === "connect" && args[0]) {
        const platform = args[0];
        if (platform === "email") {
          window.open(`mailto:${personalInfo.email}`, "_blank");
          addCommand(
            input,
            <span className="text-terminal-success">
              Opening email client...
            </span>
          );
          return;
        }
        if (platform === "github") {
          window.open(personalInfo.github, "_blank");
          addCommand(
            input,
            <span className="text-terminal-success">
              Opening GitHub profile...
            </span>
          );
          return;
        }
        if (platform === "linkedin") {
          window.open(personalInfo.linkedin, "_blank");
          addCommand(
            input,
            <span className="text-terminal-success">
              Opening LinkedIn profile...
            </span>
          );
          return;
        }
        if (platform === "twitter") {
          window.open(personalInfo.twitter, "_blank");
          addCommand(
            input,
            <span className="text-terminal-success">
              Opening Twitter profile...
            </span>
          );
          return;
        }
      }

      // Project commands (legacy)
      if (trimmedInput.startsWith("/project/")) {
        const projectName = trimmedInput.replace("/project/", "");
        const project = projects.find(
          (p) => p.id === projectName || p.name.toLowerCase() === projectName
        );

        if (project) {
          setSelectedProject(project);
          setCurrentDirectory(`~/projects/${project.id}`);
          setCurrentView("project-editor");
          addCommand(
            input,
            <span className="text-terminal-success">
              Opening project: {project.name} in VS Code viewer...
            </span>
          );
          return;
        } else {
          addCommand(
            input,
            <span className="text-terminal-error">
              Project not found: {projectName}. Use '/projects' to see available
              projects.
            </span>
          );
          return;
        }
      }

      // Utility commands
      if (trimmedInput === "clear" || trimmedInput === "cls") {
        clearHistory();
        return;
      }

      if (trimmedInput === "help") {
        addCommand(input, <HelpOutput />);
        return;
      }

      if (trimmedInput === "whoami") {
        addCommand(input, <WhoamiOutput />);
        return;
      }

      if (trimmedInput === "resume") {
        addCommand(
          input,
          <span className="text-terminal-success">Opening resume.pdf...</span>
        );
        window.open(personalInfo.resumeUrl, "_blank");
        return;
      }

      if (trimmedInput === "git status") {
        addCommand(
          input,
          <div className="font-mono">
            <p className="text-terminal-success">On branch main</p>
            <p className="text-terminal-success">Your portfolio is clean ✔</p>
            <p className="text-muted-foreground mt-2">
              nothing to commit, working tree clean
            </p>
          </div>
        );
        return;
      }

      if (trimmedInput === "skills") {
        addCommand(input, <SkillsOutput />);
        return;
      }

      // Theme commands
      if (command === "theme") {
        const themeName = args[0];
        if (
          themeName === "dark" ||
          themeName === "light" ||
          themeName === "hacker"
        ) {
          setTheme(themeName);
          addCommand(
            input,
            <span className="text-terminal-success">
              Theme changed to: {themeName}
            </span>
          );
          return;
        } else if (!themeName) {
          addCommand(
            input,
            <div>
              <p className="text-muted-foreground">
                Current theme: <span className="text-primary">{theme}</span>
              </p>
              <p className="text-muted-foreground mt-1">
                Available themes: dark, light, hacker
              </p>
            </div>
          );
          return;
        } else {
          addCommand(
            input,
            <span className="text-terminal-error">
              Unknown theme: {themeName}. Available: dark, light, hacker
            </span>
          );
          return;
        }
      }

      if (trimmedInput === "run") {
        addCommand(
          input,
          <div className="font-mono">
            <p className="text-terminal-info">Compiling portfolio...</p>
            <p className="text-terminal-success mt-1">✔ Build successful</p>
            <p className="text-terminal-success">✔ Projects loaded</p>
            <p className="text-muted-foreground mt-2">
              Portfolio is running at localhost:3000
            </p>
          </div>
        );
        return;
      }

      // ==================== EASTER EGG COMMANDS ====================

      // Matrix effect
      if (trimmedInput === "matrix") {
        addCommand(input, <MatrixOutput />);
        return;
      }

      // Neofetch - system info
      if (trimmedInput === "neofetch") {
        addCommand(input, <NeofetchOutput />);
        return;
      }

      // Cowsay
      if (command === "cowsay") {
        const message = args.length > 0 ? args.join(" ") : undefined;
        addCommand(input, <CowsayOutput message={message} />);
        return;
      }

      // Fortune cookie
      if (trimmedInput === "fortune" || trimmedInput === "fortune cookie") {
        addCommand(input, <FortuneCookieOutput />);
        return;
      }

      // Weather
      if (trimmedInput === "weather") {
        addCommand(input, <WeatherOutput />);
        return;
      }

      // Hacker mode
      if (
        trimmedInput === "hack" ||
        trimmedInput === "hacker" ||
        trimmedInput === "hack the planet"
      ) {
        addCommand(input, <HackerOutput />);
        return;
      }

      // Loading animation
      if (trimmedInput === "loading" || trimmedInput === "spinner") {
        addCommand(input, <LoadingOutput />);
        return;
      }

      // Typewriter effect
      if (command === "typewriter") {
        const text = args.length > 0 ? args.join(" ") : undefined;
        addCommand(input, <TypewriterOutput text={text} />);
        return;
      }

      // ASCII Art commands
      if (trimmedInput === "coffee") {
        addCommand(input, <AsciiArtOutput type="coffee" />);
        return;
      }

      if (trimmedInput === "rocket" || trimmedInput === "🚀") {
        addCommand(input, <AsciiArtOutput type="rocket" />);
        return;
      }

      if (
        trimmedInput === "heart" ||
        trimmedInput === "❤️" ||
        trimmedInput === "<3"
      ) {
        addCommand(input, <AsciiArtOutput type="heart" />);
        return;
      }

      if (trimmedInput === "skull" || trimmedInput === "💀") {
        addCommand(input, <AsciiArtOutput type="skull" />);
        return;
      }

      if (trimmedInput === "cat" || trimmedInput === "🐱") {
        addCommand(input, <AsciiArtOutput type="cat" />);
        return;
      }

      if (trimmedInput === "dog" || trimmedInput === "🐕") {
        addCommand(input, <AsciiArtOutput type="dog" />);
        return;
      }

      // Fun responses
      if (trimmedInput === "sudo rm -rf /") {
        addCommand(
          input,
          <span className="text-terminal-error">
            Nice try! 😄 This portfolio is indestructible.
          </span>
        );
        return;
      }

      if (trimmedInput === "sudo make me a sandwich") {
        addCommand(
          input,
          <div className="font-mono">
            <pre className="text-terminal-warning text-xs">
              {`
  🥪
 /|\\
/ | \\
`}
            </pre>
            <p className="text-terminal-success mt-2">
              Here's your sandwich, master!
            </p>
          </div>
        );
        return;
      }

      if (
        trimmedInput === "hello" ||
        trimmedInput === "hi" ||
        trimmedInput === "hey"
      ) {
        const greetings = [
          "Hello there! 👋 Welcome to my portfolio!",
          "Hey! Nice to meet you! Type 'help' to explore.",
          "Hi! Ready to explore? Try 'about' or 'projects'!",
          "Greetings, fellow developer! 🚀",
        ];
        addCommand(
          input,
          <span className="text-terminal-success">
            {greetings[Math.floor(Math.random() * greetings.length)]}
          </span>
        );
        return;
      }

      if (trimmedInput === "ping") {
        addCommand(
          input,
          <div className="font-mono text-sm">
            <p className="text-terminal-success">PONG! 🏓</p>
            <p className="text-muted-foreground mt-1">
              Response time: {Math.floor(Math.random() * 50) + 10}ms
            </p>
          </div>
        );
        return;
      }

      if (trimmedInput === "date" || trimmedInput === "time") {
        addCommand(
          input,
          <div className="font-mono">
            <p className="text-primary">{new Date().toLocaleString()}</p>
            <p className="text-muted-foreground text-sm mt-1">
              Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
            </p>
          </div>
        );
        return;
      }

      if (trimmedInput === "uptime") {
        const years = new Date().getFullYear() - 2019;
        addCommand(
          input,
          <div className="font-mono">
            <p className="text-terminal-info">System uptime: {years}+ years</p>
            <p className="text-muted-foreground text-sm mt-1">
              Portfolio has been running since 2019
            </p>
          </div>
        );
        return;
      }

      if (trimmedInput === "42") {
        addCommand(
          input,
          <span className="text-primary terminal-glow">
            The answer to life, the universe, and everything! 🌌
          </span>
        );
        return;
      }

      if (trimmedInput === "exit" || trimmedInput === "quit") {
        addCommand(
          input,
          <span className="text-terminal-warning">
            There is no escape from this terminal... Try 'help' instead!
          </span>
        );
        return;
      }

      if (trimmedInput === "ls" || trimmedInput === "dir") {
        if (selectedProject) {
          // Show project files
          const files = selectedProject.files.map((f) =>
            f.type === "folder" ? `📁 ${f.name}/` : `📄 ${f.name}`
          );
          addCommand(
            input,
            <div className="font-mono">
              <p className="text-muted-foreground mb-2">
                Contents of ~/projects/{selectedProject.id}:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {files.map((f, i) => (
                  <span
                    key={i}
                    className={
                      f.startsWith("📁")
                        ? "text-terminal-info"
                        : "text-foreground"
                    }
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          );
          return;
        }
        addCommand(
          input,
          <div className="font-mono">
            <p className="text-muted-foreground mb-2">Contents of ~:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <span className="text-terminal-info">📁 about/</span>
              <span className="text-terminal-info">📁 experience/</span>
              <span className="text-terminal-info">📁 projects/</span>
              <span className="text-terminal-info">📁 skills/</span>
              <span className="text-terminal-info">📁 contact/</span>
              <span className="text-foreground">📄 resume.pdf</span>
            </div>
          </div>
        );
        return;
      }

      if (trimmedInput === "pwd") {
        addCommand(
          input,
          <span className="text-foreground">{currentDirectory}</span>
        );
        return;
      }

      // Tree command - show project structure as ASCII tree
      if (trimmedInput === "tree") {
        const renderTree = (
          files: (typeof projects)[0]["files"],
          prefix = "",
          isLast = true
        ): string => {
          let result = "";
          files.forEach((file, index) => {
            const isLastItem = index === files.length - 1;
            const connector = isLastItem ? "└── " : "├── ";
            const icon = file.type === "folder" ? "📁 " : "📄 ";
            result += prefix + connector + icon + file.name + "\n";
            if (file.children) {
              const newPrefix = prefix + (isLastItem ? "    " : "│   ");
              result += renderTree(file.children, newPrefix, isLastItem);
            }
          });
          return result;
        };

        if (selectedProject) {
          const tree = renderTree(selectedProject.files);
          addCommand(
            input,
            <div className="font-mono">
              <p className="text-terminal-info mb-2">
                📁 {selectedProject.name}
              </p>
              <pre className="text-sm text-foreground whitespace-pre">
                {tree}
              </pre>
            </div>
          );
        } else {
          addCommand(
            input,
            <div className="font-mono">
              <p className="text-terminal-info mb-2">📁 ~</p>
              <pre className="text-sm text-foreground whitespace-pre">{`├── 📁 about/
├── 📁 experience/
├── 📁 projects/
│   ${projects
                .map(
                  (p, i) =>
                    `${i === projects.length - 1 ? "└" : "├"}── 📁 ${p.id}/`
                )
                .join("\n│   ")}
├── 📁 skills/
├── 📁 contact/
└── 📄 resume.pdf`}</pre>
            </div>
          );
        }
        return;
      }

      // History command with timestamps
      if (trimmedInput === "history") {
        addCommand(input, <HistoryOutput />);
        return;
      }

      // Git log command
      if (trimmedInput === "git log") {
        const commits = [
          {
            hash: "a1b2c3d",
            date: "2024-12-15",
            message: "feat: Add terminal easter eggs",
            author: "shivam",
          },
          {
            hash: "e4f5g6h",
            date: "2024-12-14",
            message: "feat: Implement project editor",
            author: "shivam",
          },
          {
            hash: "i7j8k9l",
            date: "2024-12-13",
            message: "fix: Improve responsive design",
            author: "shivam",
          },
          {
            hash: "m0n1o2p",
            date: "2024-12-12",
            message: "feat: Add theme switching",
            author: "shivam",
          },
          {
            hash: "q3r4s5t",
            date: "2024-12-11",
            message: "feat: Initial portfolio setup",
            author: "shivam",
          },
          {
            hash: "u6v7w8x",
            date: "2024-12-10",
            message: "chore: Configure Tailwind CSS",
            author: "shivam",
          },
          {
            hash: "y9z0a1b",
            date: "2024-12-09",
            message: "init: Create React + Vite project",
            author: "shivam",
          },
        ];
        addCommand(
          input,
          <div className="font-mono space-y-3">
            {commits.map((commit, index) => (
              <div
                key={index}
                className="border-l-2 border-terminal-warning pl-3 py-1"
              >
                <div className="flex items-center gap-3">
                  <span className="text-terminal-warning font-bold">
                    {commit.hash}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    ({commit.date})
                  </span>
                </div>
                <p className="text-foreground mt-1">{commit.message}</p>
                <p className="text-muted-foreground text-xs mt-1">
                  Author: {commit.author}
                </p>
              </div>
            ))}
            <p className="text-muted-foreground text-xs mt-2">
              Use 'q' to exit (just kidding, scroll up! 😄)
            </p>
          </div>
        );
        return;
      }

      if (trimmedInput.startsWith("echo ")) {
        const message = input.slice(5);
        addCommand(input, <span className="text-foreground">{message}</span>);
        return;
      }

      // Touch command - create file
      if (command === "touch") {
        const fileName = args[0];
        if (selectedProject && fileName) {
          addCommand(
            input,
            <div className="font-mono">
              <p className="text-terminal-success">
                ✔ Created file: {fileName}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Note: File created in editor. Use 'code .' to open editor and
                see the file.
              </p>
            </div>
          );
          return;
        }
        if (!selectedProject) {
          addCommand(
            input,
            <span className="text-terminal-error">
              No project selected. Use 'cd project-name' first, then touch
              filename.
            </span>
          );
          return;
        }
        addCommand(
          input,
          <span className="text-terminal-error">
            Usage: touch &lt;filename&gt;
          </span>
        );
        return;
      }

      // Rm command - delete file
      if (command === "rm") {
        const fileName = args[0];
        if (selectedProject && fileName) {
          addCommand(
            input,
            <div className="font-mono">
              <p className="text-terminal-success">✔ Removed: {fileName}</p>
              <p className="text-muted-foreground text-sm mt-1">
                Note: File removed in editor. Use 'code .' to open editor and
                verify.
              </p>
            </div>
          );
          return;
        }
        if (!selectedProject) {
          addCommand(
            input,
            <span className="text-terminal-error">
              No project selected. Use 'cd project-name' first.
            </span>
          );
          return;
        }
        addCommand(
          input,
          <span className="text-terminal-error">
            Usage: rm &lt;filename&gt;
          </span>
        );
        return;
      }

      // Mkdir command - create directory
      if (command === "mkdir") {
        const dirName = args[0];
        if (selectedProject && dirName) {
          addCommand(
            input,
            <div className="font-mono">
              <p className="text-terminal-success">
                ✔ Created directory: {dirName}/
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Directory created. Use 'code .' to open editor.
              </p>
            </div>
          );
          return;
        }
        if (!selectedProject) {
          addCommand(
            input,
            <span className="text-terminal-error">
              No project selected. Use 'cd project-name' first.
            </span>
          );
          return;
        }
        addCommand(
          input,
          <span className="text-terminal-error">
            Usage: mkdir &lt;dirname&gt;
          </span>
        );
        return;
      }

      // Cat command - show file content
      if (command === "cat") {
        const fileName = args[0];
        if (fileName) {
          addCommand(
            input,
            <div className="font-mono">
              <p className="text-muted-foreground">// {fileName}</p>
              <p className="text-foreground">
                Use 'code .' to open editor and view file contents.
              </p>
            </div>
          );
          return;
        }
        addCommand(
          input,
          <span className="text-terminal-error">
            Usage: cat &lt;filename&gt;
          </span>
        );
        return;
      }

      // NPM install command
      if (
        trimmedInput.startsWith("npm install ") ||
        trimmedInput.startsWith("npm i ")
      ) {
        const packageName = trimmedInput.replace(/^npm (install|i) /, "");
        if (selectedProject && packageName) {
          addCommand(
            input,
            <div className="font-mono space-y-1">
              <p className="text-muted-foreground">
                $ npm install {packageName}
              </p>
              <p className="text-terminal-info">⏳ Resolving packages...</p>
              <p className="text-terminal-success mt-2">
                ✔ Added {packageName}@latest
              </p>
              <p className="text-terminal-success">
                ✔ Package added to dependencies
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Note: Package installed in editor environment.
              </p>
            </div>
          );
          return;
        }
        if (!selectedProject) {
          addCommand(
            input,
            <span className="text-terminal-error">
              No project selected. Use 'cd project-name' first.
            </span>
          );
          return;
        }
      }

      // Unknown command
      addCommand(
        input,
        <span className="text-terminal-error">
          Command not found: {input}. Type 'help' for available commands.
        </span>
      );
    },
    [
      addCommand,
      clearHistory,
      setTheme,
      theme,
      setCurrentView,
      setSelectedProject,
      setCurrentSection,
      currentDirectory,
      setCurrentDirectory,
      selectedProject,
    ]
  );

  const getAutoCompleteSuggestions = useCallback((input: string): string[] => {
    const allCommands = [
      "/herosection",
      "/about",
      "/experience",
      "/projects",
      "/connect",
      "clear",
      "cls",
      "help",
      "whoami",
      "resume",
      "git status",
      "git log",
      "skills",
      "theme dark",
      "theme light",
      "theme hacker",
      "run",
      "connect email",
      "connect github",
      "connect linkedin",
      "connect twitter",
      // Project commands
      "cd",
      "code .",
      "npm run dev",
      "npm start",
      "yarn dev",
      "ls",
      "dir",
      "pwd",
      "touch",
      "rm",
      "mkdir",
      "cat",
      "npm install",
      // Easter eggs
      "matrix",
      "neofetch",
      "cowsay",
      "fortune",
      "weather",
      "hack",
      "coffee",
      "rocket",
      "heart",
      "skull",
      "cat",
      "dog",
      "loading",
      "typewriter",
      "ping",
      "date",
      "time",
      "uptime",
      "history",
      "echo",
      "tree",
      ...projects.map((p) => `cd ${p.id}`),
      ...projects.map((p) => `/project/${p.id}`),
    ];

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
