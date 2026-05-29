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
} from "lucide-react";

export const AboutOutput: React.FC = () => {
  const topSkills = skills.flatMap((s) => s.items).slice(0, 8);

  return (
    <div className="slide-up space-y-6 max-w-6xl mx-auto">
      {/* Hero Section - Enhanced */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/10 border border-primary/30 p-6 sm:p-8">
        {/* Animated background effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        <div className="relative flex flex-col sm:flex-row items-center gap-6">
          {/* Avatar with glow effect */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative w-28 h-28 sm:w-96 sm:h-96 rounded-2xl overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30">
              <img
                src="/shivam-pixel.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-background flex items-center justify-center shadow-lg">
              <span className="text-sm font-bold">✓</span>
            </div>
          </div>

          {/* Info - Single Line Name */}
          <div className="text-center sm:text-left flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                Available for opportunities
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
              {personalInfo.name}
            </h1>
            <p className="text-lg text-muted-foreground mt-1 flex items-center justify-center sm:justify-start gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              {personalInfo.title}
            </p>

            {/* Social Links - Enhanced */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">
              {[
                {
                  href: `mailto:${personalInfo.email}`,
                  Icon: Mail,
                  label: "Email",
                },
                { href: personalInfo.github, Icon: Github, label: "GitHub" },
                {
                  href: personalInfo.linkedin,
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
                { href: personalInfo.twitter, Icon: Twitter, label: "Twitter" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-muted/50 hover:bg-gradient-to-r hover:from-primary/20 hover:to-purple-500/20 border border-transparent hover:border-primary/30 transition-all duration-300"
                  title={label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Button - Enhanced */}
          <button
            onClick={() =>
              window.open(`mailto:${personalInfo.email}`, "_blank")
            }
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Me
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-purple-500/50 to-pink-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>

      {/* Bio Section - Enhanced Card */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5" /> About Me
          </h3>
          <p className="text-foreground/90 leading-relaxed text-lg whitespace-pre-line">
            {personalInfo.bio}
          </p>
        </div>
      </div>

      {/* Stats Grid - Enhanced */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          {
            icon: Briefcase,
            label: "Years Experience",
            value: "5+",
            color: "from-blue-400 to-cyan-400",
            shadow: "shadow-blue-500/20",
          },
          {
            icon: Rocket,
            label: "Projects Done",
            value: "50+",
            color: "from-green-400 to-emerald-400",
            shadow: "shadow-green-500/20",
          },
          {
            icon: Award,
            label: "Technologies",
            value: "20+",
            color: "from-purple-400 to-pink-400",
            shadow: "shadow-purple-500/20",
          },
          {
            icon: Coffee,
            label: "Coffee Consumed",
            value: "∞",
            color: "from-amber-400 to-orange-400",
            shadow: "shadow-amber-500/20",
          },
        ].map((stat, i) => (
          <div key={i} className="group relative">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
            />
            <div
              className={`relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1 ${stat.shadow} shadow-lg`}
            >
              <div
                className={`w-12 h-12 mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills - Enhanced */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/50">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-5 flex items-center gap-2">
            <Zap className="w-5 h-5" /> Top Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {topSkills.map((skill, i) => (
              <span
                key={i}
                className="group/skill px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-purple-500/10 text-foreground rounded-xl border border-primary/20 hover:border-primary/50 hover:from-primary/20 hover:to-purple-500/20 hover:scale-105 transition-all cursor-default shadow-sm"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Interests - Enhanced Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          {
            emoji: "🌐",
            name: "Open Source",
            color: "hover:border-green-500/50",
          },
          { emoji: "🤖", name: "AI/ML", color: "hover:border-blue-500/50" },
          { emoji: "⛓️", name: "Web3", color: "hover:border-purple-500/50" },
          { emoji: "🎨", name: "UI/UX", color: "hover:border-pink-500/50" },
          {
            emoji: "🏗️",
            name: "System Design",
            color: "hover:border-amber-500/50",
          },
          { emoji: "🚀", name: "DevOps", color: "hover:border-cyan-500/50" },
        ].map((interest, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-muted/30 to-muted/20 rounded-xl border border-border/30 ${interest.color} transition-all hover:scale-105 hover:-translate-y-0.5 cursor-default`}
          >
            <span className="text-2xl">{interest.emoji}</span>
            <span className="text-sm font-medium text-foreground/80">
              {interest.name}
            </span>
          </div>
        ))}
      </div>

      {/* Terminal hint - Enhanced */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30 border border-border/30 p-4">
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="text-primary font-mono font-bold">'skills'</span>
            <span>for detailed skills</span>
          </span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1">
            <span className="text-primary font-mono font-bold">
              'experience'
            </span>
            <span>for work history</span>
          </span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1">
            <span className="text-primary font-mono font-bold">'contact'</span>
            <span>to connect</span>
          </span>
        </div>
      </div>
    </div>
  );
};


