export interface CommandEntry {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: Date;
}

export interface ProjectFile {
  name: string;
  type: "file" | "folder";
  content?: string;
  language?: string;
  children?: ProjectFile[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  files: ProjectFile[];
}

export type ThemeType = "dark" | "light" | "hacker";

export type ViewType = "terminal" | "project-editor";
