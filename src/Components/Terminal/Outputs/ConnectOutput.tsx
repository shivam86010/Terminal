import React from "react";
import { personalInfo } from "@/data/portfolio";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Send,
  MessageSquare,
  Globe,
  ArrowRight,
  Sparkles,
  MapPin,
  Phone,
} from "lucide-react";

export const ConnectOutput: React.FC = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      command: "connect email",
      color: "from-rose-500 to-pink-500",
      hoverBg: "hover:border-rose-500/50",
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/shivamsingh",
      command: "connect linkedin",
      color: "from-blue-500 to-cyan-500",
      hoverBg: "hover:border-blue-500/50",
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/shivamsingh",
      command: "connect github",
      color: "from-gray-600 to-gray-800",
      hoverBg: "hover:border-gray-500/50",
      href: personalInfo.github,
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@shivamsingh",
      command: "connect twitter",
      color: "from-sky-400 to-blue-500",
      hoverBg: "hover:border-sky-500/50",
      href: personalInfo.twitter,
    },
  ];

  return (
    <div className="slide-up space-y-6 max-w-3xl mx-auto">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/10 border border-primary/30 p-6 text-center">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-2xl" />

        <div className="relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-purple-500 mb-4 shadow-lg shadow-primary/30">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground via-primary to-purple-400 bg-clip-text text-transparent mb-2">
            Let's Connect!
          </h2>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            I'm always open to chat about technology, opportunities, or just say
            hi!
          </p>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-semibold text-foreground">
              {personalInfo.location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Timezone</p>
            <p className="font-semibold text-foreground">IST (UTC+5:30)</p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((contact, index) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-2xl border border-border/50 ${contact.hoverBg} transition-all hover:scale-[1.02] hover:-translate-y-1 cursor-pointer fade-in`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-5 group-hover:opacity-10 transition-opacity`}
            />

            <div className="relative p-5">
              <div className="flex items-start justify-between">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-bold text-foreground">
                  {contact.label}
                </h3>
                <p className="text-muted-foreground text-sm truncate">
                  {contact.value}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-border/30">
                <span className="text-xs font-mono text-primary/70 bg-primary/5 px-2 py-1 rounded">
                  '{contact.command}'
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
        <a
          href={`mailto:${personalInfo.email}`}
          className="relative flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <Send className="w-5 h-5" />
          Send me a message
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>

      {/* Terminal hint */}
      <div className="text-center text-sm text-muted-foreground py-3 border-t border-border/30">
        <span className="font-mono">Tip:</span> Use{" "}
        <span className="text-primary font-mono">'connect [platform]'</span> to
        open directly
      </div>
    </div>
  );
};
