// import React from "react";
// // import { personalInfo } from "@/data/portfolio";

// export const HeroOutput: React.FC = () => {
//   return (
//     <div className="slide-up">
//       {/* Main ASCII Art Name */}
//       <div className="relative overflow-hidden">
//         <pre className="text-primary terminal-glow-strong text-[8px] sm:text-xs md:text-sm leading-tight whitespace-pre overflow-x-auto">
//           {`
// ███████╗██╗  ██╗██╗██╗   ██╗ █████╗ ███╗   ███╗
// ██╔════╝██║  ██║██║██║   ██║██╔══██╗████╗ ████║
// ███████╗███████║██║██║   ██║███████║██╔████╔██║
// ╚════██║██╔══██║██║╚██╗ ██╔╝██╔══██║██║╚██╔╝██║
// ███████║██║  ██║██║ ╚████╔╝ ██║  ██║██║ ╚═╝ ██║
// ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝     ╚═╝

// ███████╗██╗███╗   ██╗ ██████╗ ██╗  ██╗
// ██╔════╝██║████╗  ██║██╔════╝ ██║  ██║
// ███████╗██║██╔██╗ ██║██║  ███╗███████║
// ╚════██║██║██║╚██╗██║██║   ██║██╔══██║
// ███████║██║██║ ╚████║╚██████╔╝██║  ██║
// ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝
// `}
//         </pre>
//         {/* Gradient overlay for cool effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />
//       </div>

//       {/* Decorative line */}
//       <div className="flex items-center gap-3 my-6">
//         <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
//         <div className="flex gap-1">
//           <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
//           <div
//             className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"
//             style={{ animationDelay: "0.2s" }}
//           />
//           <div
//             className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"
//             style={{ animationDelay: "0.4s" }}
//           />
//         </div>
//         <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
//       </div>

//       {/* Title and subtitle */}
//       <div className="space-y-4">
//         <div className="flex items-center gap-2">
//           <span className="text-secondary font-bold text-lg">{">"}</span>
//           {/* <span className="text-secondary terminal-glow text-lg sm:text-xl typing-effect">
//             {personalInfo.title}
//           </span> */}
//           <span className="inline-block w-2 h-5 bg-secondary cursor-blink ml-1" />
//         </div>

//         {/* Welcome message box */}
//         <div className="border border-terminal-border rounded-lg p-4 terminal-box-glow bg-muted/10">
//           <p className="text-muted-foreground mb-3">
//             Welcome to my interactive terminal portfolio. Navigate using
//             commands below.
//           </p>

//           {/* Quick commands grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
//             {[
//               { cmd: "about", icon: "👤", desc: "Who am I" },
//               { cmd: "skills", icon: "💻", desc: "Tech stack" },
//               { cmd: "projects", icon: "🚀", desc: "My work" },
//               { cmd: "connect", icon: "📧", desc: "Contact me" },
//             ].map((item) => (
//               <div
//                 key={item.cmd}
//                 className="p-2 border border-terminal-border/50 rounded hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group"
//               >
//                 <div className="flex items-center gap-2">
//                   <span>{item.icon}</span>
//                   <span className="text-primary group-hover:terminal-glow font-mono">
//                     /{item.cmd}
//                   </span>
//                 </div>
//                 <div className="text-muted-foreground text-[10px] mt-1">
//                   {item.desc}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Help hint */}
//         <p className="text-muted-foreground text-sm">
//           Type <span className="text-primary font-bold">'help'</span> to see all
//           available commands or try{" "}
//           <span className="text-secondary font-bold">'neofetch'</span> for fun!
//         </p>
//       </div>

//       {/* Status indicators */}
//       <div className="flex flex-wrap gap-4 mt-6 text-xs">
//         <div className="flex items-center gap-2">
//           <div className="w-2 h-2 bg-terminal-success rounded-full animate-pulse" />
//           <span className="text-muted-foreground">
//             Status: <span className="text-terminal-success">Online</span>
//           </span>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="w-2 h-2 bg-terminal-info rounded-full" />
//           <span className="text-muted-foreground">
//             Available for: <span className="text-terminal-info">Hire</span>
//           </span>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="w-2 h-2 bg-terminal-warning rounded-full" />
//           <span className="text-muted-foreground">
//             Coffee level: <span className="text-terminal-warning">Optimal</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { personalInfo } from "../../../Data/portfolio";
export const HeroOutput: React.FC = () => {
  return (
    <div className="slide-up space-y-6 md:space-y-8">
      {/* Enhanced ASCII Art Container */}
      <div className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 blur-3xl group-hover:blur-4xl transition-all duration-1000" />

        <div className="relative bg-gradient-to-r from-terminal-bg/80 to-terminal-bg/40 backdrop-blur-sm border border-terminal-border/30 rounded-xl p-4 md:p-6 shadow-2xl shadow-primary/10">
          <pre className="text-primary terminal-glow-strong text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm leading-[0.8] sm:leading-tight whitespace-pre overflow-x-auto py-2 md:py-4">
            {`
███████╗██╗  ██╗██╗██╗   ██╗ █████╗ ███╗   ███╗
██╔════╝██║  ██║██║██║   ██║██╔══██╗████╗ ████║
███████╗███████║██║██║   ██║███████║██╔████╔██║
╚════██║██╔══██║██║╚██╗ ██╔╝██╔══██║██║╚██╔╝██║
███████║██║  ██║██║ ╚████╔╝ ██║  ██║██║ ╚═╝ ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝     ╚═╝
                                                
███████╗██╗███╗   ██╗ ██████╗ ██╗  ██╗          
██╔════╝██║████╗  ██║██╔════╝ ██║  ██║          
███████╗██║██╔██╗ ██║██║  ███╗███████║          
╚════██║██║██║╚██╗██║██║   ██║██╔══██║          
███████║██║██║ ╚████║╚██████╔╝██║  ██║          
╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝          
`}
          </pre>

          {/* Animated scanning line */}
          <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-secondary" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-[1px] bg-primary/30 animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced decorative separator */}
      <div className="relative my-4 md:my-6">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-terminal-border to-primary/20" />
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-md rounded-full" />
            <div className="relative flex gap-1 p-1 bg-terminal-bg/80 backdrop-blur-sm border border-terminal-border/30 rounded-full">
              {["primary", "secondary", "accent", "primary"].map((color, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 bg-${color} rounded-full animate-ping`}
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "1.5s",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-terminal-border to-primary/20" />
        </div>
      </div>

      {/* Enhanced content area */}
      <div className="space-y-6">
        {/* Terminal prompt */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
          <div className="relative bg-gradient-to-r from-terminal-bg/90 to-terminal-bg/70 backdrop-blur-sm border border-terminal-border/40 rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-terminal-error" />
                <div className="w-2 h-2 rounded-full bg-terminal-warning" />
                <div className="w-2 h-2 rounded-full bg-terminal-success" />
              </div>
              <span className="text-secondary font-mono font-bold text-sm md:text-base">
                visitor@portfolio:~$
              </span>
              <span className="text-secondary terminal-glow text-sm md:text-lg typing-effect">
                welcome
              </span>
              <span className="inline-block w-2 h-5 bg-secondary cursor-blink ml-1" />
            </div>
          </div>
        </div>

        {/* Enhanced welcome message box */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
          <div className="relative bg-gradient-to-br from-terminal-bg/95 to-terminal-bg/90 backdrop-blur-sm border border-terminal-border/40 rounded-xl p-5 md:p-6 shadow-xl overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 animate-gradient-x" />
            <span className="text-secondary terminal-glow text-lg sm:text-xl typing-effect">
            {personalInfo.title}
            </span>
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-terminal-success animate-pulse" />
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Welcome to Terminal v2.0
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Welcome to my interactive terminal portfolio. Type commands to
                navigate, explore projects, or get in touch. Everything is
                keyboard accessible!
              </p>

              {/* Enhanced quick commands */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  {
                    cmd: "about",
                    icon: "👤",
                    desc: "Who am I",
                    color: "from-blue-500/20 to-cyan-500/20",
                  },
                  {
                    cmd: "skills",
                    icon: "💻",
                    desc: "Tech stack",
                    color: "from-purple-500/20 to-pink-500/20",
                  },
                  {
                    cmd: "projects",
                    icon: "🚀",
                    desc: "My work",
                    color: "from-orange-500/20 to-red-500/20",
                  },
                  {
                    cmd: "connect",
                    icon: "📧",
                    desc: "Contact me",
                    color: "from-green-500/20 to-emerald-500/20",
                  },
                ].map((item) => (
                  <div
                    key={item.cmd}
                    className="group/button relative overflow-hidden rounded-lg border border-terminal-border/50 bg-terminal-bg/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover/button:opacity-100 transition-opacity duration-300`}
                    />
                    <div className="relative p-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <div className="font-mono text-primary group-hover/button:terminal-glow text-sm">
                            $ {item.cmd}
                          </div>
                          <div className="text-muted-foreground text-xs mt-1">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Help hint with better styling */}
        <div className="bg-gradient-to-r from-terminal-bg/60 to-terminal-bg/40 backdrop-blur-sm border border-terminal-border/30 rounded-lg p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">
                💡 <span className="font-medium">Quick tip:</span> Type{" "}
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary font-mono text-sm">
                  help
                </span>{" "}
                to see all available commands
              </p>
              <p className="text-muted-foreground text-sm">
                Try{" "}
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/10 border border-secondary/20 rounded text-secondary font-mono text-sm">
                  neofetch
                </span>{" "}
                for a system overview
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="animate-pulse">⚡</span>
              <span>
                Press{" "}
                <kbd className="px-1.5 py-0.5 bg-terminal-bg border border-terminal-border rounded">
                  Tab
                </kbd>{" "}
                for autocomplete
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced status indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              status: "Online",
              color: "terminal-success",
              bg: "from-green-500/10 to-emerald-500/10",
              border: "border-green-500/30",
              label: "System Status",
              icon: "🟢",
            },
            {
              status: "Hire",
              color: "terminal-info",
              bg: "from-blue-500/10 to-cyan-500/10",
              border: "border-blue-500/30",
              label: "Availability",
              icon: "💼",
            },
            {
              status: "Optimal",
              color: "terminal-warning",
              bg: "from-amber-500/10 to-orange-500/10",
              border: "border-amber-500/30",
              label: "Coffee Level",
              icon: "☕",
            },
          ].map((item) => (
            <div
              key={item.status}
              className={`bg-gradient-to-br ${item.bg} backdrop-blur-sm border ${item.border} rounded-lg p-3 transition-all hover:scale-[1.02]`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className={`w-3 h-3 bg-${item.color} rounded-full animate-pulse`}
                    />
                    <div
                      className={`absolute inset-0 w-3 h-3 bg-${item.color} rounded-full animate-ping`}
                    />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">
                      {item.label}
                    </div>
                    <div className={`text-${item.color} font-bold text-sm`}>
                      {item.status}
                    </div>
                  </div>
                </div>
                <span className="text-lg">{item.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
