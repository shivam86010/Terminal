import React from "react";
import { experiences } from "../../../Data/portfolio";

export const ExperienceOutput: React.FC = () => {
  return (
    <div className="slide-up space-y-4">
      <h2 className="text-primary terminal-glow text-xl">
        {">"} Work Experience
      </h2>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-terminal-border rounded p-4 terminal-box-glow fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-secondary terminal-glow font-semibold">
                {exp.role}
              </h3>
              <span className="text-muted-foreground text-sm">
                {exp.period}
              </span>
            </div>

            <p className="text-primary text-sm mb-2">{exp.company}</p>
            <p className="text-muted-foreground text-sm mb-3">
              {exp.description}
            </p>

            <ul className="space-y-1">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-terminal-success">✓</span>
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
