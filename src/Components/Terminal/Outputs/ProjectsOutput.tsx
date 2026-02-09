import React from "react";
import { projects } from "../../../Data/portfolio";

export const ProjectsOutput: React.FC = () => {
  return (
    <div className="slide-up space-y-4">
      <h2 className="text-primary terminal-glow text-xl">{">"} Projects</h2>
      <p className="text-muted-foreground text-sm">
        Use <span className="text-primary">/project/[name]</span> to open in
        code editor
      </p>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="border border-terminal-border rounded p-4 terminal-box-glow fade-in hover:border-primary transition-colors cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-secondary terminal-glow font-semibold">
                {project.name}
              </h3>
              <span className="text-primary text-sm font-mono">
                /project/{project.id}
              </span>
            </div>

            <p className="text-muted-foreground text-sm mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs border border-terminal-border rounded text-terminal-info"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-success hover:underline flex items-center gap-1"
                >
                  🌐 Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-info hover:underline flex items-center gap-1"
                >
                  📂 Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
