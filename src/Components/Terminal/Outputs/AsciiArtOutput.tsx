import React from "react";

type ArtType = "coffee" | "rocket" | "heart" | "skull" | "cat" | "dog";

interface AsciiArtOutputProps {
  type: ArtType;
}

const artCollection: Record<
  ArtType,
  { art: string; message: string; color: string }
> = {
  coffee: {
    art: `
      ( (
       ) )
    .______.
    |      |]
    \\      /
     \`----'
    `,
    message: "Fuel for developers!",
    color: "text-terminal-warning",
  },
  rocket: {
    art: `
        ^
       /|\\
      / | \\
     /  |  \\
    |   |   |
    |  ~~~  |
    |  ~~~  |
   /|   |   |\\
  / |   |   | \\
 /__|___|___|__\\
    |___|___|
    `,
    message: "To infinity and beyond! 🚀",
    color: "text-terminal-info",
  },
  heart: {
    art: `
   ████████████████████████████████
   ██████████████    ██████████████
   ████████████        ████████████
   ██████████            ██████████
   ████████                ████████
   ██████                    ██████
   █████                      █████
   █████                      █████
   ██████                    ██████
   ███████                  ███████
   █████████              █████████
   ███████████          ███████████
   █████████████      █████████████
   ███████████████  ███████████████
   ████████████████████████████████
    `,
    message: "Made with love ❤️",
    color: "text-terminal-error",
  },
  skull: {
    art: `
       ______
    .-"      "-.
   /   O    O   \\
  :                :
  |                |
  :    .------.    :
   \\  '        '  /
    '.          .'
      '-......-'
    `,
    message: "Danger Zone! ☠️",
    color: "text-muted-foreground",
  },
  cat: {
    art: `
    /\\_____/\\
   /  o   o  \\
  ( ==  ^  == )
   )         (
  (           )
 ( (  )   (  ) )
(__(__)___(__)__)
    `,
    message: "Meow! 🐱",
    color: "text-terminal-warning",
  },
  dog: {
    art: `
       / \\__
      (    @\\___
      /         O
     /   (_____/
    /_____/   U
    `,
    message: "Woof! 🐕",
    color: "text-terminal-success",
  },
};

export const AsciiArtOutput: React.FC<AsciiArtOutputProps> = ({ type }) => {
  const { art, message, color } = artCollection[type];

  return (
    <div className="slide-up font-mono">
      <pre
        className={`${color} terminal-glow text-xs sm:text-sm leading-tight`}
      >
        {art}
      </pre>
      <div className="mt-2 text-muted-foreground text-sm">{message}</div>
    </div>
  );
};
