import React from "react";

const fortunes = [
  "A beautiful, smart, and loving person will be coming into your life... Oh wait, that's me! 🪞",
  "404: Fortune not found. Try again later.",
  "You will write code that works on the first try... eventually.",
  "Today is a good day to finally understand CSS flexbox.",
  "A semicolon in the right place will save your day.",
  "Your next bug will be a missing comma.",
  "The best code is the code you don't have to write.",
  "git push --force and pray 🙏",
  "You will meet a beautiful async/await pattern today.",
  "TypeScript errors are just suggestions... aggressive suggestions.",
  "Stack Overflow will guide you to enlightenment.",
  "Your console.log will reveal the truth.",
  "Trust the process, and the tests will pass.",
  "Today's bug is tomorrow's feature.",
  "May your dependencies always be up to date.",
  "The answer you seek is in the documentation you didn't read.",
];

const luckyNumbers = () => {
  const nums: number[] = [];
  while (nums.length < 6) {
    const n = Math.floor(Math.random() * 42) + 1;
    if (!nums.includes(n)) nums.push(n);
  }
  return nums.sort((a, b) => a - b);
};

export const FortuneCookieOutput: React.FC = () => {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const numbers = luckyNumbers();

  return (
    <div className="slide-up">
      <pre className="text-terminal-warning text-xs sm:text-sm leading-tight">
        {`
   _______
  /       \\
 /  ~~~~~  \\
|  /     \\  |
| |       | |
|  \\_____/  |
 \\         /
  \\_______/
`}
      </pre>
      <div className="mt-4 border border-terminal-border rounded p-4 terminal-box-glow">
        <div className="text-primary terminal-glow italic">"{fortune}"</div>
        <div className="mt-4 text-sm">
          <span className="text-secondary">Lucky numbers:</span>
          <span className="text-foreground ml-2">
            {numbers.map((n, i) => (
              <span
                key={i}
                className="inline-block px-2 py-0.5 bg-muted rounded mx-0.5"
              >
                {n}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};
