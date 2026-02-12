import React from "react";

export const WeatherOutput: React.FC = () => {
  const conditions = [
    { icon: "☀️", temp: 28, condition: "Sunny", humidity: 45 },
    { icon: "⛅", temp: 22, condition: "Partly Cloudy", humidity: 55 },
    { icon: "🌧️", temp: 18, condition: "Rainy", humidity: 80 },
    { icon: "❄️", temp: 2, condition: "Snowy", humidity: 70 },
    { icon: "⚡", temp: 25, condition: "Thunderstorm", humidity: 90 },
  ];

  const current = conditions[Math.floor(Math.random() * conditions.length)];
  const location = "Dev City, Code State";

  return (
    <div className="slide-up font-mono">
      <div className="border border-terminal-border rounded p-4 terminal-box-glow">
        <div className="flex items-start gap-6">
          {/* Weather Icon */}
          <div className="text-6xl">{current.icon}</div>

          {/* Weather Info */}
          <div className="flex-1">
            <div className="text-muted-foreground text-sm mb-1">{location}</div>
            <div className="text-3xl text-primary terminal-glow font-bold">
              {current.temp}°C
            </div>
            <div className="text-secondary">{current.condition}</div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Humidity:</span>
                <span className="text-foreground ml-2">
                  {current.humidity}%
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Wind:</span>
                <span className="text-foreground ml-2">
                  {Math.floor(Math.random() * 20 + 5)} km/h
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Code Quality:</span>
                <span className="text-terminal-success ml-2">Excellent</span>
              </div>
              <div>
                <span className="text-muted-foreground">Coffee Level:</span>
                <span className="text-terminal-warning ml-2">Low ☕</span>
              </div>
            </div>
          </div>
        </div>

        {/* Forecast */}
        <div className="mt-4 pt-4 border-t border-terminal-border">
          <div className="text-xs text-muted-foreground mb-2">
            Developer Forecast:
          </div>
          <div className="text-sm text-foreground">
            High chance of productivity with occasional debugging storms.
            Perfect weather for pushing to production! 🚀
          </div>
        </div>
      </div>
    </div>
  );
};
