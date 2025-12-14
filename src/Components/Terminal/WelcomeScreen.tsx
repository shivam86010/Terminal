// import React, { useState, useEffect } from "react";

// interface WelcomeScreenProps {
//   onComplete: () => void;
// }

// export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
//   const [phase, setPhase] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [showCursor, setShowCursor] = useState(true);

//   const bootSequence = [
//     "Initializing system...",
//     "Loading kernel modules...",
//     "Mounting file systems...",
//     "Starting network services...",
//     "Loading portfolio data...",
//     "System ready.",
//   ];

//   const fullName = "SHIVAM SINGH";
//   const title = "SOFTWARE DEVELOPER";

//   useEffect(() => {
//     const cursorInterval = setInterval(() => {
//       setShowCursor((prev) => !prev);
//     }, 500);
//     return () => clearInterval(cursorInterval);
//   }, []);

//   useEffect(() => {
//     if (phase < bootSequence.length) {
//       const timeout = setTimeout(() => {
//         setPhase((prev) => prev + 1);
//       }, 400);
//       return () => clearTimeout(timeout);
//     } else if (phase === bootSequence.length) {
//       // Start typing name
//       let index = 0;
//       const typeInterval = setInterval(() => {
//         if (index <= fullName.length) {
//           setDisplayText(fullName.slice(0, index));
//           index++;
//         } else {
//           clearInterval(typeInterval);
//           setPhase((prev) => prev + 1);
//         }
//       }, 80);
//       return () => clearInterval(typeInterval);
//     } else if (phase === bootSequence.length + 1) {
//       const timeout = setTimeout(() => {
//         onComplete();
//       }, 1500);
//       return () => clearTimeout(timeout);
//     }
//   }, [phase, onComplete]);

//   return (
//     <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
//       {/* Animated background grid */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="grid-background" />
//       </div>

//       {/* Glowing orbs */}
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
//       <div
//         className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse"
//         style={{ animationDelay: "1s" }}
//       />

//       <div className="relative z-10 text-center px-4">
//         {/* Boot sequence */}
//         {phase <= bootSequence.length && (
//           <div className="mb-12 text-left max-w-md mx-auto">
//             {bootSequence.slice(0, phase).map((line, index) => (
//               <div
//                 key={index}
//                 className="text-sm font-mono text-muted-foreground opacity-70 mb-1 fade-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <span className="text-terminal-success mr-2">[OK]</span>
//                 {line}
//               </div>
//             ))}
//             {phase < bootSequence.length && (
//               <div className="text-sm font-mono text-muted-foreground">
//                 <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
//               </div>
//             )}
//           </div>
//         )}

//         {/* Main title */}
//         {phase >= bootSequence.length && (
//           <div className="space-y-6 slide-up">
//             {/* ASCII art frame */}
//             <pre className="text-primary/30 text-xs sm:text-sm font-mono leading-tight mb-4">
//               {`╔══════════════════════════════════════════════╗
// ║                                              ║
// ║                                              ║
// ║                                              ║
// ╚══════════════════════════════════════════════╝`}
//             </pre>

//             {/* Name with glitch effect */}
//             <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.3em] terminal-glow-strong text-primary relative">
//               <span className="relative inline-block glitch-text">
//                 {displayText}
//                 {showCursor && phase === bootSequence.length && (
//                   <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse" />
//                 )}
//               </span>
//             </h1>

//             {/* Decorative line */}
//             <div className="flex items-center justify-center gap-4 my-6">
//               <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-primary" />
//               <div className="w-2 h-2 rotate-45 bg-primary terminal-glow" />
//               <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-primary" />
//             </div>

//             {/* Title */}
//             {phase > bootSequence.length && (
//               <p className="text-lg sm:text-xl tracking-[0.5em] text-secondary terminal-glow fade-in uppercase">
//                 {title}
//               </p>
//             )}

//             {/* Loading bar */}
//             {phase > bootSequence.length && (
//               <div className="mt-12 max-w-xs mx-auto fade-in">
//                 <div className="h-1 bg-muted rounded overflow-hidden">
//                   <div className="h-full bg-gradient-to-r from-primary via-secondary to-primary loading-bar" />
//                 </div>
//                 <p className="text-xs text-muted-foreground mt-3 tracking-widest uppercase">
//                   Entering terminal...
//                 </p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Corner decorations */}
//       <div className="absolute top-8 left-8 text-primary/30 font-mono text-xs">
//         <div>SYS://PORTFOLIO</div>
//         <div>v1.0.0</div>
//       </div>
//       <div className="absolute top-8 right-8 text-primary/30 font-mono text-xs text-right">
//         <div>{new Date().toLocaleDateString()}</div>
//         <div>{new Date().toLocaleTimeString()}</div>
//       </div>
//       <div className="absolute bottom-8 left-8 text-primary/30 font-mono text-xs">
//         [PRESS ANY KEY TO SKIP]
//       </div>
//       <div className="absolute bottom-8 right-8 text-primary/30 font-mono text-xs">
//         STATUS: ONLINE
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";

interface WelcomeScreenProps {
  onComplete: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);
  const [hologramProgress, setHologramProgress] = useState(0);

  const bootSequence = [
    "QUANTUM SYSTEM ONLINE",
    "NEURAL INTERFACE ACTIVE",
    "HOLOGRAPHIC MATRIX INITIALIZED",
    "BIOMETRIC SYNCHRONIZATION COMPLETE",
    "MEMORY CORE: READY",
    "VISUAL PROCESSORS: ONLINE",
    "AUDIO SYSTEMS: ACTIVE",
    "FINALIZING BOOT SEQUENCE",
    "ACCESSING PORTFOLIO DATABASE",
    "WELCOME TO THE SYSTEM",
  ];

  const fullName = "SHIVAM SINGH";
  const title = "FULL-STACK ARCHITECT";
  const subtitle = "DIGITAL INNOVATOR";

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Hologram construction effect
  useEffect(() => {
    if (phase >= bootSequence.length) {
      const interval = setInterval(() => {
        setHologramProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 0.5;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [phase]);

  // Glitch effects
  useEffect(() => {
    if (phase >= bootSequence.length) {
      const glitchInterval = setInterval(() => {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 100);
      }, 3000 + Math.random() * 2000);
      return () => clearInterval(glitchInterval);
    }
  }, [phase]);

  // Main sequence
  useEffect(() => {
    if (phase < bootSequence.length) {
      const timeout = setTimeout(
        () => {
          setPhase((prev) => prev + 1);
        },
        phase === 0 ? 800 : 200 + Math.random() * 100
      );
      return () => clearTimeout(timeout);
    } else if (phase === bootSequence.length) {
      // Type name
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= fullName.length) {
          setDisplayText(fullName.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setPhase((prev) => prev + 1);
          }, 800);
        }
      }, 120);
      return () => clearInterval(typeInterval);
    } else if (phase === bootSequence.length + 1) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [phase, onComplete]);

  // Keyboard skip
  useEffect(() => {
    const handleKeyPress = () => onComplete();
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden font-mono">
      {/* Holographic Background */}
      <div className="absolute inset-0">
        {/* Base Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              animation: "gridFlow 20s linear infinite",
            }}
          />
        </div>

        {/* Animated Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3].map((ring) => (
            <div
              key={ring}
              className="absolute rounded-full border border-primary/20"
              style={{
                width: `${ring * 33}%`,
                height: `${ring * 33}%`,
                animation: `ringPulse ${4 + ring * 2}s ease-in-out infinite`,
                animationDelay: `${ring * 0.5}s`,
                opacity: 0.3 - ring * 0.1,
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-primary/30 to-secondary/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `particleFloat ${
                  Math.random() * 3 + 2
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        {/* Boot Terminal */}
        {phase <= bootSequence.length && (
          <div className="w-full max-w-2xl mb-16">
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-white/80 tracking-wider">
                    SYSTEM_BOOT_TERMINAL
                  </span>
                </div>
                <div className="text-xs text-white/50">
                  {phase}/{bootSequence.length}
                </div>
              </div>

              {/* Boot Messages */}
              <div className="space-y-2 font-mono text-sm">
                {bootSequence.slice(0, phase).map((line, index) => (
                  <div
                    key={index}
                    className="flex items-start"
                    style={{
                      animation: `slideIn 0.3s ease-out ${index * 0.05}s both`,
                    }}
                  >
                    <span className="text-green-400 mr-3">$</span>
                    <span
                      className={`${
                        index === bootSequence.length - 1
                          ? "text-primary"
                          : "text-white/70"
                      } tracking-wide`}
                    >
                      {line}
                    </span>
                    <span className="ml-2 text-green-400 animate-pulse">
                      {index === phase - 1 ? "■" : "✓"}
                    </span>
                  </div>
                ))}

                {phase < bootSequence.length && (
                  <div className="flex items-center animate-pulse">
                    <span className="text-green-400 mr-3">$</span>
                    <span className="text-white/70 tracking-wide">LOADING</span>
                    <div className="ml-2 flex space-x-1">
                      <div
                        className="w-1 h-1 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0s" }}
                      />
                      <div
                        className="w-1 h-1 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-1 h-1 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Indicator */}
              <div className="mt-6">
                <div className="flex justify-between text-xs text-white/50 mb-2">
                  <span>BOOT PROGRESS</span>
                  <span>
                    {Math.round((phase / bootSequence.length) * 100)}%
                  </span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300"
                    style={{ width: `${(phase / bootSequence.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Holographic Name Display */}
        {phase >= bootSequence.length && (
          <div className="w-full max-w-4xl">
            {/* Hologram Container */}
            <div className="relative">
              {/* Hologram Construction Lines */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl">
                {/* Top-left to bottom-right construction */}
                <div
                  className="absolute inset-0 border-t-2 border-r-2 border-primary rounded-tr-2xl"
                  style={{
                    clipPath: `polygon(0 0, ${hologramProgress}% 0, ${hologramProgress}% ${hologramProgress}%, 0 ${hologramProgress}%)`,
                  }}
                />
                {/* Bottom-left to top-right construction */}
                <div
                  className="absolute inset-0 border-b-2 border-l-2 border-secondary rounded-bl-2xl"
                  style={{
                    clipPath: `polygon(100% 100%, ${
                      100 - hologramProgress
                    }% 100%, ${100 - hologramProgress}% ${
                      100 - hologramProgress
                    }%, 100% ${100 - hologramProgress}%)`,
                  }}
                />
              </div>

              {/* Main Content Area */}
              <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-12 border border-white/10 shadow-2xl">
                {/* Name with Glitch Effect */}
                <div className="text-center mb-8">
                  <h1
                    className={`text-5xl sm:text-7xl lg:text-8xl font-bold tracking-wider uppercase relative ${
                      glitchActive ? "glitch-active" : ""
                    }`}
                  >
                    <span className="relative inline-block">
                      {/* Main Text */}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                        {displayText}
                      </span>

                      {/* Glitch Layers */}
                      {glitchActive && (
                        <>
                          <span className="absolute top-0 left-0 text-primary opacity-60 animate-glitch-fast">
                            {displayText}
                          </span>
                          <span className="absolute top-0 left-0 text-secondary opacity-60 animate-glitch-slow">
                            {displayText}
                          </span>
                        </>
                      )}

                      {/* Cursor */}
                      {showCursor && phase === bootSequence.length && (
                        <span className="inline-block w-[3px] h-[1.2em] bg-primary ml-2 animate-pulse" />
                      )}
                    </span>
                  </h1>

                  {/* Underline Effect */}
                  <div className="relative mt-6">
                    <div
                      className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto animate-expandWidth"
                      style={{ maxWidth: `${hologramProgress}%` }}
                    />
                    <div className="absolute -top-1 left-1/2 w-3 h-3 -translate-x-1/2 rotate-45 bg-primary animate-pulse" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                {phase > bootSequence.length && (
                  <div className="text-center space-y-6 animate-fadeInUp">
                    <div className="space-y-2">
                      <p className="text-xl tracking-[0.3em] text-white/80 uppercase">
                        {title}
                      </p>
                      <div className="flex items-center justify-center space-x-4">
                        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary" />
                        <div className="w-2 h-2 rotate-45 bg-primary animate-pulse" />
                        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-secondary" />
                      </div>
                      <p className="text-lg tracking-[0.2em] text-white/60 uppercase">
                        {subtitle}
                      </p>
                    </div>

                    {/* Final Loading Animation */}
                    <div className="pt-8 max-w-md mx-auto">
                      <div className="relative">
                        <div className="text-sm text-white/50 tracking-wider mb-4">
                          INITIALIZING USER INTERFACE
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full animate-loadingBar" />
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-white/40">
                          <span>PREPARING ASSETS</span>
                          <span className="text-primary animate-pulse">
                            98%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Corner Ornaments */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-primary" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-secondary" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-primary" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-secondary" />
              </div>
            </div>

            {/* System Status Footer */}
            <div className="mt-8 flex flex-wrap justify-between items-center text-sm text-white/40">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  <span className="tracking-wider">SYSTEM: OPERATIONAL</span>
                </div>
                <div className="hidden sm:block">|</div>
                <div className="hidden sm:block">
                  <span className="tracking-wider">
                    SESSION:{" "}
                    {new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <div className="tracking-wider">
                  {new Date()
                    .toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                    .toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skip Prompt */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/30 tracking-wider animate-pulse">
          PRESS ANY KEY TO ENTER →
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes gridFlow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }

        @keyframes ringPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.4;
          }
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loadingBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes glitch-fast {
          0%,
          100% {
            transform: translate(0);
            clip-path: inset(0 0 0 0);
          }
          10% {
            transform: translate(-2px, 1px);
            clip-path: inset(10% 0 20% 0);
          }
          20% {
            transform: translate(1px, -1px);
            clip-path: inset(20% 0 10% 0);
          }
        }

        @keyframes glitch-slow {
          0%,
          100% {
            transform: translate(0);
            clip-path: inset(0 0 0 0);
          }
          15% {
            transform: translate(1px, -2px);
            clip-path: inset(15% 0 25% 0);
          }
          25% {
            transform: translate(-1px, 2px);
            clip-path: inset(25% 0 15% 0);
          }
        }

        .glitch-active {
          position: relative;
        }

        .animate-expandWidth {
          animation: expandWidth 1s ease-out 0.5s both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .animate-glitch-fast {
          animation: glitch-fast 0.3s ease-in-out;
        }

        .animate-glitch-slow {
          animation: glitch-slow 0.4s ease-in-out;
          animation-delay: 0.1s;
        }

        .animate-loadingBar {
          animation: loadingBar 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
