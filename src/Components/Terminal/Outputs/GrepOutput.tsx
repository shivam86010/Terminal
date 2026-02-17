import React from "react";
import { projects } from "../../../Data/portfolio";
import { ProjectFile } from "../../../Types/terminal";

interface GrepOutputProps {
  pattern: string;
  projectId?: string;
}

interface GrepMatch {
  file: string;
  line: number;
  content: string;
  match: string;
}

const searchFiles = (
  files: ProjectFile[],
  pattern: string,
  path: string = "",
): GrepMatch[] => {
  const results: GrepMatch[] = [];
  const regex = new RegExp(pattern, "gi");

  for (const file of files) {
    const currentPath = path ? `${path}/${file.name}` : file.name;

    if (file.type === "folder" && file.children) {
      results.push(...searchFiles(file.children, pattern, currentPath));
    } else if (file.type === "file" && file.content) {
      const lines = file.content.split("\n");
      lines.forEach((line, index) => {
        if (regex.test(line)) {
          results.push({
            file: currentPath,
            line: index + 1,
            content: line.trim(),
            match: pattern,
          });
        }
        regex.lastIndex = 0; // Reset regex state
      });
    }
  }

  return results;
};

export const GrepOutput: React.FC<GrepOutputProps> = ({
  pattern,
  projectId,
}) => {
  // Search in specific project or all projects
  const projectsToSearch = projectId
    ? projects.filter((p) => p.id === projectId)
    : projects;

  const allResults: { projectName: string; matches: GrepMatch[] }[] = [];

  for (const project of projectsToSearch) {
    const matches = searchFiles(project.files, pattern);
    if (matches.length > 0) {
      allResults.push({ projectName: project.name, matches });
    }
  }

  const totalMatches = allResults.reduce((acc, r) => acc + r.matches.length, 0);

  if (totalMatches === 0) {
    return (
      <div className="font-mono">
        <p className="text-terminal-warning">
          No matches found for pattern: "{pattern}"
        </p>
        <p className="text-muted-foreground text-sm mt-1">
          Try a different search pattern or navigate to a project first.
        </p>
      </div>
    );
  }

  return (
    <div className="font-mono space-y-4">
      <div className="flex items-center gap-2 text-terminal-success">
        <span>🔍</span>
        <span>
          Found {totalMatches} match{totalMatches !== 1 ? "es" : ""} for "
          {pattern}"
        </span>
      </div>

      {allResults.map(({ projectName, matches }) => (
        <div key={projectName} className="space-y-2">
          <div className="text-terminal-info font-semibold">
            📁 {projectName}
          </div>
          <div className="ml-4 space-y-1.5">
            {matches.slice(0, 20).map((match, idx) => (
              <div
                key={idx}
                className="flex flex-wrap items-start gap-2 text-sm"
              >
                <span className="text-terminal-warning min-w-[180px]">
                  {match.file}:{match.line}
                </span>
                <span className="text-muted-foreground">│</span>
                <span className="text-foreground break-all">
                  {highlightMatch(match.content, pattern)}
                </span>
              </div>
            ))}
            {matches.length > 20 && (
              <p className="text-muted-foreground text-xs">
                ... and {matches.length - 20} more matches
              </p>
            )}
          </div>
        </div>
      ))}

      <div className="text-muted-foreground text-xs pt-2 border-t border-border/20">
        Tip: Use 'grep pattern' to search all projects or 'cd project-name'
        first to search specific project
      </div>
    </div>
  );
};

const highlightMatch = (content: string, pattern: string): React.ReactNode => {
  try {
    const regex = new RegExp(`(${pattern})`, "gi");
    const parts = content.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <span
          key={i}
          className="bg-terminal-warning/30 text-terminal-warning font-semibold px-0.5 rounded"
        >
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
  } catch {
    return content;
  }
};

export default GrepOutput;
