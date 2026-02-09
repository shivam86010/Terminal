import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Heart,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume: React.FC = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement("a");
    link.href = "/shivamsingh-resume.pdf";
    link.download = "Shivam_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Terminal</span>
            </button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Resume
            </h1>
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Resume Card */}
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 p-8 sm:p-12">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center text-5xl font-bold text-white shadow-xl">
                  SS
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    SHIVAM SINGH
                  </h1>
                  <p className="text-xl text-cyan-100 font-medium">
                    Frontend Developer
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4 text-white/90">
                    <a
                      href="mailto:shivamsingh8601018@gmail.com"
                      className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">
                        shivamsingh8601018@gmail.com
                      </span>
                    </a>
                    <a
                      href="tel:+918382044417"
                      className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+91 8382044417</span>
                    </a>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Delhi, India</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-10">
            {/* Professional Experience */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Professional Experience
                </h2>
              </div>

              <div className="space-y-6">
                {/* Experience 1 */}
                <div className="relative pl-8 border-l-2 border-cyan-500/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-gray-900"></div>
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-white/5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Test Portal Web Application
                        </h3>
                        <p className="text-cyan-400 font-medium">
                          Uda-Mandi Services Pvt. Ltd.
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                        Mar 2025 - Current
                      </span>
                    </div>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        Built test portal with candidate and company dashboards
                        for assessments and hiring insights
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        Integrated AI-based proctoring for test authenticity and
                        used Redux for smooth, reliable state management
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        Designed responsive, animated UI/UX using React.js,
                        Tailwind CSS, Framer Motion, and Recharts
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        Created a seamless user journey by combining testing,
                        and hiring workflows into one interactive platform
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900"></div>
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-white/5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          HRM Web Application
                        </h3>
                        <p className="text-blue-400 font-medium">
                          Uda-Mandi Services Pvt. Ltd.
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                        Oct 2024 - Feb 2025
                      </span>
                    </div>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▹</span>
                        Developed an HR management System using React.js and
                        Tailwind CSS
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▹</span>
                        Created interactive UI components for policy creation,
                        leave requests, announcements
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▹</span>
                        Integrated dynamic charts using Recharts for attendance
                        trends and workforce analytics
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▹</span>
                        Delivered a responsive dashboard to centralize HR
                        operations across devices
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Experience 3 */}
                <div className="relative pl-8 border-l-2 border-purple-500/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900"></div>
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-white/5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Complaint Management System
                        </h3>
                        <p className="text-purple-400 font-medium">
                          Freelance Project
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                        Jul - Dec 2023
                      </span>
                    </div>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        Developed the frontend using React.js and Strapi with
                        user-friendly interface
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        Built responsive UI components for real-time complaint
                        tracking
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        Created dynamic forms and tables for complaint data
                        entry and status filtering
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills & Education Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Skills */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <Code className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "C",
                    "C++",
                    "HTML",
                    "CSS",
                    "SQL",
                    "JavaScript",
                    "TypeScript",
                    "Tailwind",
                    "React.js",
                    "Redux",
                    "Framer Motion",
                    "Strapi",
                    "Material UI",
                    "jQuery",
                    "Shadcn UI",
                    "Rechart",
                    "UI/UX Designer",
                    "Git",
                    "GitHub",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 text-sm rounded-lg border border-emerald-500/30 hover:border-emerald-400/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Education</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5">
                    <h3 className="font-bold text-white">B.Tech (CSE)</h3>
                    <p className="text-amber-400 text-sm">
                      Krishna Engineering College, Ghaziabad
                    </p>
                    <div className="flex items-center justify-between mt-2 text-sm">
                      <span className="text-gray-400">2024</span>
                      <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded">
                        7.9 CGPA
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5">
                    <h3 className="font-bold text-white">Intermediate</h3>
                    <p className="text-amber-400 text-sm">
                      TBVIC Bedupar Turkdiha Kushinagar
                    </p>
                    <div className="flex items-center justify-between mt-2 text-sm">
                      <span className="text-gray-400">2019</span>
                      <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded">
                        7 CGPA
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Achievements & Certifications Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Achievements */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Achievements
                  </h2>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: "🏆", text: "National Chemistry Olympiad AIR-43" },
                    { icon: "🥇", text: "3 Gold Medal winner in JEE" },
                    { icon: "📚", text: "Advance Test series" },
                  ].map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-4 border border-white/5"
                    >
                      <span className="text-2xl">{achievement.icon}</span>
                      <span className="text-gray-200">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications & More */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <Star className="w-6 h-6 text-pink-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Certifications
                  </h2>
                </div>
                <div className="space-y-3">
                  {[
                    "Problem Solving (Intermediate) - HackerRank",
                    "Successful Negotiation - Coursera",
                  ].map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-4 border border-white/5"
                    >
                      <span className="text-pink-400">✓</span>
                      <span className="text-gray-200">{cert}</span>
                    </div>
                  ))}
                </div>

                {/* Strengths & Languages */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="w-4 h-4 text-rose-400" />
                      <h3 className="font-semibold text-white text-sm">
                        Strengths
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {[
                        "Positive Attitude",
                        "Self Motivated",
                        "Quick Learner",
                        "Self Management",
                      ].map((s, i) => (
                        <span key={i} className="text-xs text-gray-400">
                          {i > 0 && "•"} {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-sky-400" />
                      <h3 className="font-semibold text-white text-sm">
                        Languages
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Hindi", "English"].map((lang, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Profile Links */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <Linkedin className="w-6 h-6 text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Profile Links</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/shivamsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#0077b5]/20 text-[#0077b5] rounded-xl border border-[#0077b5]/30 hover:bg-[#0077b5]/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/shivamsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
                >
                  <Code className="w-5 h-5" />
                  <span>LeetCode</span>
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Download Button Footer */}
        <div className="mt-8 text-center">
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 px-8"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume as PDF
          </Button>
          <p className="text-muted-foreground text-sm mt-3">
            Click to download the complete resume in PDF format
          </p>
        </div>
      </main>
    </div>
  );
};

export default Resume;
