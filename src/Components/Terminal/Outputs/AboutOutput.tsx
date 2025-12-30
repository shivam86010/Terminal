// import React from "react";
// import { personalInfo, skills } from "../../../Data/portfolio";
// import {
//   Mail,
//   MapPin,
//   Github,
//   Linkedin,
//   Twitter,
//   Sparkles,
//   Code2,
//   Rocket,
//   Coffee,
//   Award,
//   Briefcase,
//   GraduationCap,
//   ExternalLink,
//   Terminal,
//   Zap,
// } from "lucide-react";

// export const AboutOutput: React.FC = () => {
//   const topSkills = skills.flatMap((s) => s.items).slice(0, 8);

//   return (
//     <div className="slide-up space-y-6 max-w-4xl mx-auto">
//       {/* Hero Section - Enhanced */}
//       <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/10 border border-primary/30 p-6 sm:p-8">
//         {/* Animated background effects */}
//         <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/30 to-transparent rounded-full blur-3xl animate-pulse" />
//         <div
//           className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "1s" }}
//         />
//         <div
//           className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full blur-2xl animate-pulse"
//           style={{ animationDelay: "0.5s" }}
//         />

//         <div className="relative flex flex-col sm:flex-row items-center gap-6">
//           {/* Avatar with glow effect */}
//           <div className="relative group">
//             <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
//             <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30">
//               <img
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
//                 alt={personalInfo.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>
//             <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-background flex items-center justify-center shadow-lg">
//               <span className="text-sm font-bold">✓</span>
//             </div>
//           </div>

//           {/* Info - Single Line Name */}
//           <div className="text-center sm:text-left flex-1">
//             <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
//               <Sparkles className="w-5 h-5 text-primary animate-pulse" />
//               <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
//                 Available for opportunities
//               </span>
//             </div>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
//               {personalInfo.name}
//             </h1>
//             <p className="text-lg text-muted-foreground mt-1 flex items-center justify-center sm:justify-start gap-2">
//               <Terminal className="w-4 h-4 text-primary" />
//               {personalInfo.title}
//             </p>

//             {/* Social Links - Enhanced */}
//             <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">
//               {[
//                 {
//                   href: `mailto:${personalInfo.email}`,
//                   Icon: Mail,
//                   label: "Email",
//                 },
//                 { href: personalInfo.github, Icon: Github, label: "GitHub" },
//                 {
//                   href: personalInfo.linkedin,
//                   Icon: Linkedin,
//                   label: "LinkedIn",
//                 },
//                 { href: personalInfo.twitter, Icon: Twitter, label: "Twitter" },
//               ].map(({ href, Icon, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group p-3 rounded-xl bg-muted/50 hover:bg-gradient-to-r hover:from-primary/20 hover:to-purple-500/20 border border-transparent hover:border-primary/30 transition-all duration-300"
//                   title={label}
//                 >
//                   <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Button - Enhanced */}
//           <button
//             onClick={() =>
//               window.open(`mailto:${personalInfo.email}`, "_blank")
//             }
//             className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
//           >
//             <span className="relative z-10 flex items-center gap-2">
//               Contact Me
//               <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-purple-500/50 to-pink-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//           </button>
//         </div>
//       </div>

//       {/* Bio Section - Enhanced Card */}
//       <div className="relative group">
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//         <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
//           <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
//             <Code2 className="w-5 h-5" /> About Me
//           </h3>
//           <p className="text-foreground/90 leading-relaxed text-lg whitespace-pre-line">
//             {personalInfo.bio}
//           </p>
//         </div>
//       </div>

//       {/* Stats Grid - Enhanced */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//         {[
//           {
//             icon: Briefcase,
//             label: "Years Experience",
//             value: "5+",
//             color: "from-blue-400 to-cyan-400",
//             shadow: "shadow-blue-500/20",
//           },
//           {
//             icon: Rocket,
//             label: "Projects Done",
//             value: "50+",
//             color: "from-green-400 to-emerald-400",
//             shadow: "shadow-green-500/20",
//           },
//           {
//             icon: Award,
//             label: "Technologies",
//             value: "20+",
//             color: "from-purple-400 to-pink-400",
//             shadow: "shadow-purple-500/20",
//           },
//           {
//             icon: Coffee,
//             label: "Coffee Consumed",
//             value: "∞",
//             color: "from-amber-400 to-orange-400",
//             shadow: "shadow-amber-500/20",
//           },
//         ].map((stat, i) => (
//           <div key={i} className="group relative">
//             <div
//               className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
//             />
//             <div
//               className={`relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1 ${stat.shadow} shadow-lg`}
//             >
//               <div
//                 className={`w-12 h-12 mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
//               >
//                 <stat.icon className="w-6 h-6 text-white" />
//               </div>
//               <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
//                 {stat.value}
//               </div>
//               <div className="text-sm text-muted-foreground mt-1">
//                 {stat.label}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Skills - Enhanced */}
//       <div className="relative group">
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//         <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/50">
//           <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-5 flex items-center gap-2">
//             <Zap className="w-5 h-5" /> Top Skills
//           </h3>
//           <div className="flex flex-wrap gap-3">
//             {topSkills.map((skill, i) => (
//               <span
//                 key={i}
//                 className="group/skill px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-purple-500/10 text-foreground rounded-xl border border-primary/20 hover:border-primary/50 hover:from-primary/20 hover:to-purple-500/20 hover:scale-105 transition-all cursor-default shadow-sm"
//                 style={{ animationDelay: `${i * 50}ms` }}
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Interests - Enhanced Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//         {[
//           {
//             emoji: "🌐",
//             name: "Open Source",
//             color: "hover:border-green-500/50",
//           },
//           { emoji: "🤖", name: "AI/ML", color: "hover:border-blue-500/50" },
//           { emoji: "⛓️", name: "Web3", color: "hover:border-purple-500/50" },
//           { emoji: "🎨", name: "UI/UX", color: "hover:border-pink-500/50" },
//           {
//             emoji: "🏗️",
//             name: "System Design",
//             color: "hover:border-amber-500/50",
//           },
//           { emoji: "🚀", name: "DevOps", color: "hover:border-cyan-500/50" },
//         ].map((interest, i) => (
//           <div
//             key={i}
//             className={`flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-muted/30 to-muted/20 rounded-xl border border-border/30 ${interest.color} transition-all hover:scale-105 hover:-translate-y-0.5 cursor-default`}
//           >
//             <span className="text-2xl">{interest.emoji}</span>
//             <span className="text-sm font-medium text-foreground/80">
//               {interest.name}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Terminal hint - Enhanced */}
//       <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30 border border-border/30 p-4">
//         <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
//           <span className="flex items-center gap-1">
//             <span className="text-primary font-mono font-bold">'skills'</span>
//             <span>for detailed skills</span>
//           </span>
//           <span className="text-border">•</span>
//           <span className="flex items-center gap-1">
//             <span className="text-primary font-mono font-bold">
//               'experience'
//             </span>
//             <span>for work history</span>
//           </span>
//           <span className="text-border">•</span>
//           <span className="flex items-center gap-1">
//             <span className="text-primary font-mono font-bold">'contact'</span>
//             <span>to connect</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { personalInfo, skills } from "../../../Data/portfolio";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  Code2,
  Rocket,
  Coffee,
  Award,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Terminal,
  Zap,
  Brain,
  Cpu,
  Palette,
  Database,
  Cloud,
  Globe,
  Users,
  Target,
  Heart,
} from "lucide-react";

export const AboutOutput: React.FC = () => {
  const topSkills = skills.flatMap((s) => s.items).slice(0, 8);

  return (
    <div className="slide-up space-y-8 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Hero Section - Enhanced with Glass Morphism */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/15 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/10 p-6 sm:p-10">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10 animate-gradient-x" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-primary/30 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative flex flex-col lg:flex-row items-center gap-8">
          {/* Avatar with advanced effects */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-ring-pulse" />
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border-4 border-white/50 shadow-2xl group-hover:shadow-primary/50 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt={personalInfo.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Verification badge */}
            <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-background flex items-center justify-center shadow-2xl shadow-emerald-500/30 animate-bounce">
              <Brain className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Main Info */}
          <div className="text-center lg:text-left flex-1 space-y-4">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-primary/30 shadow-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Available for opportunities
              </span>
            </div>

            {/* Name with gradient and glitch effect */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-cyan-400 bg-clip-text text-transparent leading-tight">
                {personalInfo.name}
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground via-primary to-cyan-400 bg-clip-text text-transparent opacity-20 animate-glitch-fast">
                {personalInfo.name}
              </div>
            </div>

            {/* Title */}
            <p className="text-xl text-muted-foreground flex items-center justify-center lg:justify-start gap-3">
              <Terminal className="w-6 h-6 text-primary animate-terminal-flicker" />
              <span className="bg-gradient-to-r from-foreground/80 to-muted-foreground bg-clip-text text-transparent">
                {personalInfo.title}
              </span>
            </p>

            {/* Social Links - Enhanced */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              {[
                {
                  href: `mailto:${personalInfo.email}`,
                  Icon: Mail,
                  label: "Email",
                  color: "from-primary to-cyan-500",
                },
                {
                  href: personalInfo.github,
                  Icon: Github,
                  label: "GitHub",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  href: personalInfo.linkedin,
                  Icon: Linkedin,
                  label: "LinkedIn",
                  color: "from-blue-600 to-blue-800",
                },
                {
                  href: personalInfo.twitter,
                  Icon: Twitter,
                  label: "Twitter",
                  color: "from-sky-500 to-blue-500",
                },
              ].map(({ href, Icon, label, color }, i) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  title={label}
                >
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`}
                  />
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Button - Enhanced */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            <button
              onClick={() =>
                window.open(`mailto:${personalInfo.email}`, "_blank")
              }
              className="relative px-10 py-5 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 text-white font-bold rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-3xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 group-hover:animate-none animate-pulse-slow"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                <Sparkles className="w-5 h-5" />
                Contact Me
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bio Section - Enhanced */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-cyan-500/20">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              About Me
            </h3>
          </div>
          <p className="text-foreground/90 leading-relaxed text-lg md:text-xl whitespace-pre-line pl-2 border-l-4 border-primary/30">
            {personalInfo.bio}
          </p>
        </div>
      </div>

      {/* Stats Grid - Enhanced with Hover Effects */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: Briefcase,
            label: "Years Experience",
            value: "5+",
            color: "from-blue-500 to-cyan-500",
            glow: "shadow-blue-500/30",
            description: "Professional Development",
          },
          {
            icon: Rocket,
            label: "Projects Delivered",
            value: "50+",
            color: "from-green-500 to-emerald-500",
            glow: "shadow-green-500/30",
            description: "Successful Launches",
          },
          {
            icon: Cpu,
            label: "Technologies",
            value: "20+",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-purple-500/30",
            description: "Mastered Tech Stack",
          },
          {
            icon: Heart,
            label: "Satisfaction",
            value: "100%",
            color: "from-red-500 to-rose-500",
            glow: "shadow-red-500/30",
            description: "Client Happiness",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="group relative cursor-pointer"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div
              className={`relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:-translate-y-2 ${stat.glow} shadow-xl`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider">
                  0{i + 1}
                </span>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {stat.description}
              </div>
              {/* Animated bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${stat.color} animate-loading-bar`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section - Enhanced */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Top Skills
              </h3>
            </div>
            <span className="text-sm text-primary/70 font-medium px-3 py-1 rounded-full bg-primary/10">
              {topSkills.length}+
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {topSkills.map((skill, i) => (
              <div
                key={i}
                className="group/skill relative"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                <div className="relative px-4 py-3 text-sm font-medium bg-gradient-to-br from-white/5 to-white/2 text-foreground rounded-xl border border-white/10 group-hover/skill:border-primary/50 transition-all duration-300 group-hover/skill:-translate-y-1 cursor-default shadow-sm backdrop-blur-sm">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interests Grid - Enhanced */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          {
            emoji: "🌐",
            name: "Open Source",
            icon: Globe,
            color: "from-green-500/20 to-emerald-500/20",
            hover:
              "group-hover:from-green-500/30 group-hover:to-emerald-500/30",
          },
          {
            emoji: "🤖",
            name: "AI/ML",
            icon: Brain,
            color: "from-blue-500/20 to-cyan-500/20",
            hover: "group-hover:from-blue-500/30 group-hover:to-cyan-500/30",
          },
          {
            emoji: "⛓️",
            name: "Web3",
            icon: Database,
            color: "from-purple-500/20 to-pink-500/20",
            hover: "group-hover:from-purple-500/30 group-hover:to-pink-500/30",
          },
          {
            emoji: "🎨",
            name: "UI/UX",
            icon: Palette,
            color: "from-pink-500/20 to-rose-500/20",
            hover: "group-hover:from-pink-500/30 group-hover:to-rose-500/30",
          },
          {
            emoji: "🏗️",
            name: "System Design",
            icon: Cpu,
            color: "from-amber-500/20 to-orange-500/20",
            hover: "group-hover:from-amber-500/30 group-hover:to-orange-500/30",
          },
          {
            emoji: "☁️",
            name: "Cloud",
            icon: Cloud,
            color: "from-cyan-500/20 to-blue-500/20",
            hover: "group-hover:from-cyan-500/30 group-hover:to-blue-500/30",
          },
        ].map((interest, i) => (
          <div
            key={i}
            className={`group relative bg-gradient-to-br ${interest.color} ${interest.hover} backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 cursor-default shadow-lg`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <span className="text-3xl">{interest.emoji}</span>
              <span className="text-sm font-semibold text-foreground">
                {interest.name}
              </span>
              <interest.icon className="w-4 h-4 text-primary/50" />
            </div>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      {/* Terminal Hint - Enhanced */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden">
          
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                command: "'skills'",
                description: "View detailed skills matrix",
                icon: Zap,
                color: "text-primary",
              },
              {
                command: "'experience'",
                description: "Explore work history",
                icon: Briefcase,
                color: "text-cyan-500",
              },
              {
                command: "'contact'",
                description: "Get in touch with me",
                icon: Mail,
                color: "text-purple-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 transition-all group/item"
              >
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${item.color}/20 to-transparent`}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <div className="font-mono font-bold text-foreground group-hover/item:text-primary transition-colors">
                    {item.command}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>

  
      <div className="text-center py-8">
        <p className="text-muted-foreground text-sm font-medium mb-4">
          Let's build something amazing together
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary">
            Currently open to new opportunities
          </span>
        </div>
      </div>
    </div>
  );
};
