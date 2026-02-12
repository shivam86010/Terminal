import React from "react";
import { personalInfo } from "../../../Data/portfolio";

export const WhoamiOutput: React.FC = () => {
  return (
    <div className="slide-up">
      <div className="border border-terminal-border rounded p-4 terminal-box-glow">
        <pre className="text-foreground font-mono text-sm">
          {`> ${personalInfo.name}
> ${personalInfo.title}
> 5+ years of experience
> Specializes in React, Node.js, Cloud Architecture
> Currently: Building amazing things
> Status: Open to opportunities`}
        </pre>
      </div>
    </div>
  );
};
