// ─── Skills Data ────────────────────────────────────────────
// Each skill has a name, level (0-100), and category.
// Replace or add your own skills here.

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#7c3aed",
    skills: [
      { name: "React Native", level: 100, icon: "reactnative" },
      { name: "React", level: 100, icon: "react" },
      { name: "Tailwind CSS", level: 100, icon: "tailwind" },
      { name: "JavaScript", level: 100, icon: "js" },
      { name: "Daisy UI", level: 100, icon: "daisyui" },
      { name: "TypeScript", level: 100, icon: "ts" }, 
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#3b82f6",
    skills: [
      { name: "Node.js / Express.js", level: 100, icon: "node" },
      { name: "Python", level: 100, icon: "python" },
      { name: "Java", level: 100, icon: "java" },
      { name: "MongoDB", level: 100, icon: "mongo" },
      { name: "REST APIs", level: 100, icon: "api" },
      { name: "MySQL", level: 100, icon: "mysql"},
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    color: "#06b6d4",
    skills: [
      { name: "WireShark", level: 100, icon: "wireshark" },
      { name: "Render / Vercel", level: 100, icon: "render" },
      { name: "Git / GitHub", level: 100, icon: "git" },
      { name: "Cisco Packet Tracer", level: 100, icon: "ciscopackettracer" },
      { name: "Expo Go", level: 100, icon: "expo" },
      { name: "Postman", level: 100, icon: "postman" },
      { name: "MS Office", level: 100, icon: "msoffice" },
    ],
  },
];

// Tech stack icons for the floating pills in hero
export const techPills = [
  "React", "TypeScript", "Node.js", "Python", "Java",
  "Postman", "WireShark", "Render", "Tailwind CSS", "Cisco Packet Tracer",
];
