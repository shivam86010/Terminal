import React from "react";
import { personalInfo, skills } from "../../../Data/portfolio";

export const NeofetchOutput: React.FC = () => {
  const getUptime = () => {
    const start = new Date("2019-01-01");
    const now = new Date();
    const years = now.getFullYear() - start.getFullYear();
    return `${years}+ years`;
  };

  const allSkills = skills.flatMap((s) => s.items);

  return (
    <div className="slide-up font-mono">
      <div className="flex flex-col md:flex-row gap-6">
        {/* ASCII Art Logo */}
        <pre className="text-primary terminal-glow text-xs leading-tight shrink-0">
          {`    ███████╗███████╗
    ██╔════╝██╔════╝
    ███████╗███████╗
    ╚════██║╚════██║
    ███████║███████║
    ╚══════╝╚══════╝
   SHIVAM SINGH`}
        </pre>

        {/* System Info */}
        <div className="text-sm space-y-1">
          <div>
            <span className="text-primary font-bold">
              {personalInfo.name.toLowerCase().replace(" ", "@")}@portfolio
            </span>
          </div>
          <div className="text-muted-foreground">{"─".repeat(35)}</div>

          <div>
            <span className="text-secondary">OS:</span>
            <span className="text-foreground ml-2">
              Human 1.0 (Developer Edition)
            </span>
          </div>
          <div>
            <span className="text-secondary">Host:</span>
            <span className="text-foreground ml-2">Earth, Solar System</span>
          </div>
          <div>
            <span className="text-secondary">Kernel:</span>
            <span className="text-foreground ml-2">Coffee-Driven 4.2.0</span>
          </div>
          <div>
            <span className="text-secondary">Uptime:</span>
            <span className="text-foreground ml-2">{getUptime()} in dev</span>
          </div>
          <div>
            <span className="text-secondary">Role:</span>
            <span className="text-foreground ml-2">{personalInfo.title}</span>
          </div>
          <div>
            <span className="text-secondary">Shell:</span>
            <span className="text-foreground ml-2">
              portfolio-terminal v1.0
            </span>
          </div>
          <div>
            <span className="text-secondary">Resolution:</span>
            <span className="text-foreground ml-2">Pixel Perfect</span>
          </div>
          <div>
            <span className="text-secondary">DE:</span>
            <span className="text-foreground ml-2">VS Code + Vim</span>
          </div>
          <div>
            <span className="text-secondary">Theme:</span>
            <span className="text-foreground ml-2">Cyberpunk Dark</span>
          </div>
          <div>
            <span className="text-secondary">Terminal:</span>
            <span className="text-foreground ml-2">Custom React Terminal</span>
          </div>
          <div>
            <span className="text-secondary">CPU:</span>
            <span className="text-foreground ml-2">Brain (Overclocked)</span>
          </div>
          <div>
            <span className="text-secondary">Memory:</span>
            <span className="text-foreground ml-2">
              Unlimited (with coffee)
            </span>
          </div>

          {/* Skills as packages */}
          <div className="mt-2">
            <span className="text-secondary">Packages:</span>
            <span className="text-foreground ml-2">
              {allSkills.length} (npm, yarn, pnpm)
            </span>
          </div>

          {/* Color palette */}
          <div className="flex gap-1 mt-3">
            <div className="w-4 h-4 bg-[#1a1b26]" title="Background" />
            <div className="w-4 h-4 bg-[#f7768e]" title="Red" />
            <div className="w-4 h-4 bg-[#9ece6a]" title="Green" />
            <div className="w-4 h-4 bg-[#e0af68]" title="Yellow" />
            <div className="w-4 h-4 bg-[#7aa2f7]" title="Blue" />
            <div className="w-4 h-4 bg-[#bb9af7]" title="Magenta" />
            <div className="w-4 h-4 bg-[#7dcfff]" title="Cyan" />
            <div className="w-4 h-4 bg-[#c0caf5]" title="White" />
          </div>
        </div>
      </div>
    </div>
  );
};
