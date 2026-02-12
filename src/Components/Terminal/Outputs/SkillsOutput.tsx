import React from "react";
import { skills } from "../../../Data/portfolio";

export const SkillsOutput: React.FC = () => {
  return (
    <div className="slide-up space-y-4">
      <h2 className="text-primary terminal-glow text-xl">
        {">"} Technical Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((category, index) => (
          <div
            key={category.category}
            className="border border-terminal-border rounded p-4 terminal-box-glow fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-secondary terminal-glow mb-3">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-sm border border-terminal-border rounded text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
