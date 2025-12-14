// import { Project } from "@/types/terminal";

export const personalInfo = {
  name: "Alex Chen",
  title: "Full Stack Developer",
  email: "alex.chen@example.dev",
  github: "https://github.com/alexchen",
  linkedin: "https://linkedin.com/in/alexchen",
  twitter: "https://twitter.com/alexchen",
  resumeUrl: "/resume.pdf",
  bio: `Passionate developer with 5+ years of experience building scalable web applications.
Specializing in React, Node.js, and cloud architecture.
I love turning complex problems into elegant solutions.`,
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
  },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Jira", "Linux"] },
];

export const experiences = [
  {
    company: "TechCorp Inc.",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description:
      "Leading development of microservices architecture serving 1M+ users.",
    highlights: [
      "Reduced API response time by 60%",
      "Implemented real-time collaboration features",
      "Mentored team of 5 junior developers",
    ],
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Built core product features from MVP to Series A funding.",
    highlights: [
      "Developed payment integration with Stripe",
      "Created automated testing pipeline",
      "Scaled application to handle 100k daily users",
    ],
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2019 - 2020",
    description: "Crafted pixel-perfect UIs for enterprise clients.",
    highlights: [
      "Delivered 20+ client projects",
      "Introduced component library reducing dev time by 40%",
      'Won "Best UI Implementation" award',
    ],
  },
];

// export const projects: Project[] = [
//   {
//     id: "neural-chat",
//     name: "NeuralChat",
//     description:
//       "AI-powered chat application with real-time translation and sentiment analysis.",
//     tech: ["React", "Node.js", "OpenAI", "WebSocket", "Redis"],
//     liveUrl: "https://neuralchat.demo.com",
//     githubUrl: "https://github.com/alexchen/neural-chat",
//     files: [
//       {
//         name: "src",
//         type: "folder",
//         children: [
//           {
//             name: "App.tsx",
//             type: "file",
//             language: "typescript",
//             content: `import React from 'react';
// import { ChatProvider } from './context/ChatContext';
// import { ChatWindow } from './components/ChatWindow';
// import { Sidebar } from './components/Sidebar';

// function App() {
//   return (
//     <ChatProvider>
//       <div className="flex h-screen bg-gray-900">
//         <Sidebar />
//         <ChatWindow />
//       </div>
//     </ChatProvider>
//   );
// }

// export default App;`,
//           },
//           {
//             name: "components",
//             type: "folder",
//             children: [
//               {
//                 name: "ChatWindow.tsx",
//                 type: "file",
//                 language: "typescript",
//                 content: `import React, { useState, useEffect, useRef } from 'react';
// import { useChat } from '../hooks/useChat';
// import { MessageBubble } from './MessageBubble';
// import { InputBar } from './InputBar';

// export const ChatWindow: React.FC = () => {
//   const { messages, sendMessage, isTyping } = useChat();
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <div className="flex-1 flex flex-col">
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((msg) => (
//           <MessageBubble key={msg.id} message={msg} />
//         ))}
//         {isTyping && <TypingIndicator />}
//         <div ref={scrollRef} />
//       </div>
//       <InputBar onSend={sendMessage} />
//     </div>
//   );
// };`,
//               },
//               {
//                 name: "MessageBubble.tsx",
//                 type: "file",
//                 language: "typescript",
//                 content: `import React from 'react';
// import { Message } from '../types';
// import { SentimentBadge } from './SentimentBadge';

// interface Props {
//   message: Message;
// }

// export const MessageBubble: React.FC<Props> = ({ message }) => {
//   const isOwn = message.sender === 'user';

//   return (
//     <div className={\`flex \${isOwn ? 'justify-end' : 'justify-start'}\`}>
//       <div className={\`max-w-xs lg:max-w-md px-4 py-2 rounded-lg \${
//         isOwn ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-100'
//       }\`}>
//         <p>{message.content}</p>
//         {message.sentiment && <SentimentBadge sentiment={message.sentiment} />}
//         <span className="text-xs opacity-50">{message.timestamp}</span>
//       </div>
//     </div>
//   );
// };`,
//               },
//             ],
//           },
//           {
//             name: "hooks",
//             type: "folder",
//             children: [
//               {
//                 name: "useChat.ts",
//                 type: "file",
//                 language: "typescript",
//                 content: `import { useState, useCallback, useEffect } from 'react';
// import { Message } from '../types';
// import { socketService } from '../services/socket';
// import { analyzesentiment } from '../services/ai';

// export const useChat = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [isTyping, setIsTyping] = useState(false);

//   useEffect(() => {
//     socketService.on('message', handleIncoming);
//     socketService.on('typing', () => setIsTyping(true));
    
//     return () => socketService.disconnect();
//   }, []);

//   const sendMessage = useCallback(async (content: string) => {
//     const sentiment = await analyzeSentiment(content);
//     const message: Message = {
//       id: Date.now().toString(),
//       content,
//       sender: 'user',
//       sentiment,
//       timestamp: new Date().toISOString(),
//     };
    
//     setMessages(prev => [...prev, message]);
//     socketService.emit('message', message);
//   }, []);

//   return { messages, sendMessage, isTyping };
// };`,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "package.json",
//         type: "file",
//         language: "json",
//         content: `{
//   "name": "neural-chat",
//   "version": "1.0.0",
//   "dependencies": {
//     "react": "^18.2.0",
//     "socket.io-client": "^4.6.0",
//     "openai": "^4.0.0",
//     "tailwindcss": "^3.3.0"
//   }
// }`,
//       },
//       {
//         name: "README.md",
//         type: "file",
//         language: "markdown",
//         content: `# NeuralChat

// AI-powered chat application with real-time translation and sentiment analysis.

// ## Features
// - 🤖 AI-powered responses
// - 🌍 Real-time translation
// - 😊 Sentiment analysis
// - ⚡ WebSocket communication

// ## Getting Started

// \`\`\`bash
// npm install
// npm run dev
// \`\`\``,
//       },
//     ],
//   },
//   {
//     id: "devops-dashboard",
//     name: "DevOps Dashboard",
//     description:
//       "Real-time monitoring dashboard for Kubernetes clusters with alerting.",
//     tech: ["React", "Go", "Prometheus", "Grafana", "K8s"],
//     liveUrl: "https://devops-dash.demo.com",
//     githubUrl: "https://github.com/alexchen/devops-dashboard",
//     files: [
//       {
//         name: "src",
//         type: "folder",
//         children: [
//           {
//             name: "App.tsx",
//             type: "file",
//             language: "typescript",
//             content: `import React from 'react';
// import { Dashboard } from './pages/Dashboard';
// import { MetricsProvider } from './context/MetricsContext';

// function App() {
//   return (
//     <MetricsProvider>
//       <Dashboard />
//     </MetricsProvider>
//   );
// }

// export default App;`,
//           },
//           {
//             name: "pages",
//             type: "folder",
//             children: [
//               {
//                 name: "Dashboard.tsx",
//                 type: "file",
//                 language: "typescript",
//                 content: `import React from 'react';
// import { ClusterOverview } from '../components/ClusterOverview';
// import { MetricsGrid } from '../components/MetricsGrid';
// import { AlertsPanel } from '../components/AlertsPanel';

// export const Dashboard: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 p-6">
//       <h1 className="text-3xl font-bold text-white mb-6">
//         Kubernetes Dashboard
//       </h1>
//       <div className="grid grid-cols-12 gap-6">
//         <div className="col-span-8">
//           <ClusterOverview />
//           <MetricsGrid />
//         </div>
//         <div className="col-span-4">
//           <AlertsPanel />
//         </div>
//       </div>
//     </div>
//   );
// };`,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "README.md",
//         type: "file",
//         language: "markdown",
//         content: `# DevOps Dashboard

// Real-time Kubernetes monitoring with Prometheus metrics.

// ## Features
// - 📊 Real-time metrics visualization
// - 🚨 Alert management
// - 🎯 Resource utilization tracking
// - 📈 Historical data analysis`,
//       },
//     ],
//   },
//   {
//     id: "crypto-tracker",
//     name: "CryptoTracker",
//     description:
//       "Cryptocurrency portfolio tracker with real-time prices and analytics.",
//     tech: ["Vue.js", "Python", "FastAPI", "WebSocket", "Chart.js"],
//     liveUrl: "https://crypto-tracker.demo.com",
//     files: [
//       {
//         name: "src",
//         type: "folder",
//         children: [
//           {
//             name: "main.ts",
//             type: "file",
//             language: "typescript",
//             content: `import { createApp } from 'vue';
// import App from './App.vue';
// import { createPinia } from 'pinia';
// import router from './router';

// const app = createApp(App);
// app.use(createPinia());
// app.use(router);
// app.mount('#app');`,
//           },
//           {
//             name: "App.vue",
//             type: "file",
//             language: "vue",
//             content: `<template>
//   <div class="app">
//     <Navbar />
//     <router-view />
//   </div>
// </template>

// <script setup lang="ts">
// import Navbar from './components/Navbar.vue';
// </script>

// <style>
// .app {
//   min-height: 100vh;
//   background: linear-gradient(135deg, #1a1a2e, #16213e);
// }
// </style>`,
//           },
//         ],
//       },
//       {
//         name: "README.md",
//         type: "file",
//         language: "markdown",
//         content: `# CryptoTracker

// Track your cryptocurrency portfolio in real-time.

// ## Features
// - 💰 Portfolio management
// - 📈 Live price updates
// - 📊 Advanced analytics
// - 🔔 Price alerts`,
//       },
//     ],
//   },
// ];

export const commands = [
  { command: "/herosection", description: "Go to the main hero section" },
  { command: "/about", description: "View my professional background" },
  { command: "/experience", description: "See my work history" },
  { command: "/projects", description: "List all projects" },
  { command: "/project/:name", description: "Open project in code editor" },
  { command: "/connect", description: "View contact information" },
  { command: "clear | cls", description: "Clear terminal" },
  { command: "help", description: "Show all commands" },
  { command: "whoami", description: "Display personal summary" },
  { command: "resume", description: "Open resume PDF" },
  { command: "git status", description: "Check portfolio status" },
  { command: "skills", description: "View technical skills" },
  { command: "theme [name]", description: "Change theme (dark/light/hacker)" },
  { command: "run", description: "Run current project demo" },
];
