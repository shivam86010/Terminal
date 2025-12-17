// import React, { useEffect, useState } from 'react'
// import { TerminalProvider, useTerminal } from "../Context/TerminalContext";
// import { WelcomeScreen } from '../Components/Terminal/WelcomeScreen';
// // import { Terminal } from '../Components/Terminal/Terminal';
// import { InitialLoader } from '../Components/Terminal/InitialLoader';
// const PortfolioContent: React.FC = () => {
// //   const { currentView } = useTerminal();
//   const [showWelcome, setShowWelcome] = useState(true);
//   useEffect(() => {
//     const handleKeyDown = () => {
//       if (showWelcome) {
//         setShowWelcome(false);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [showWelcome]);

//   if (showWelcome) {
//     return <WelcomeScreen onComplete={() => setShowWelcome(true)} />;
//   }

//   return (
//     <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8 fade-in">
//       <div className="max-w-6xl mx-auto h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)]">
//         {/* {currentView === 'terminal' ? <Terminal /> : ""} */}
//       </div>
//     </div>
//   );
// };

// function Index() {
//   return (
//     <TerminalProvider>
//         <PortfolioContent/>
//     </TerminalProvider>
//   )
// }

// export default Index

import React, { useEffect, useState } from "react";
import { TerminalProvider, useTerminal } from "../Context/TerminalContext";
import { InitialLoader } from "../Components/Terminal/InitialLoader";
import { WelcomeScreen } from "../Components/Terminal/WelcomeScreen";
import { Terminal } from '../Components/Terminal/Terminal';

const PortfolioContent: React.FC = () => {
  const { currentView } = useTerminal();
  const [showLoader, setShowLoader] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  // Handle skip on key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only allow skip on Escape or Space
      if (e.key === "Escape" || e.key === " ") {
        e.preventDefault();
        if (showLoader) {
          setShowLoader(false);
          setShowWelcome(true);
        } else if (showWelcome) {
          setShowWelcome(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showLoader, showWelcome]);

  // If loader is active
  if (showLoader) {
    return (
      <InitialLoader
        onComplete={() => {
          setShowLoader(false);
          setShowWelcome(true);
        }}
      />
    );
  }

  // If welcome screen is active
  if (showWelcome) {
    return (
      <WelcomeScreen
        onComplete={() => {
          setShowWelcome(false);
          // You can add any initialization logic here
        }}
      />
    );
  }

  // Main portfolio content
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8 fade-in">
      <div className="max-w-6xl mx-auto h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)]">
        {currentView === 'terminal' ? <Terminal /> : ""}
      </div>
    </div>
  );
};

function Index() {
  return (
    <TerminalProvider>
      <PortfolioContent />
    </TerminalProvider>
  );
}

export default Index;
