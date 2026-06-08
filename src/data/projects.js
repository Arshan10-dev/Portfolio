// ─── Projects Data ──────────────────────────────────────────
// Replace these with your actual projects. Each project has:
//   title, description, image (URL or local), tags, github, live
import titanaiImg from "../assets/titanai.png";
import smsImg from "../assets/Sms.png";
import cncImg from "../assets/cnc.png";

export const projects = [
  {
    id: 1,
    title: "Titan Ai",
    description: "A modern cross-platform AI chatbot uses GPT-3.5/4 built with React Native and Expo, featuring real-time conversations, chat history management, and a sleek responsive interface.",
    image: titanaiImg,
    tags: ["React", "TypeScript", "Node.js", "OpenRouter", "Python", "ExpoGO"],
    github: "https://github.com/Arshan10-dev/TitanAi", // ← replace with your link
    live: "https://titanai-frontend.onrender.com/",       // ← replace with your link
    featured: true,
  },
  {
    id: 2,
    title: "Student Management System",
    description: "A full-stack Student Management System built with React, Node.js, Express, and MongoDB featuring secure CRUD operations, fee tracking, search, filtering, and admin authentication.",
    image: smsImg,
    tags: ["React", "Node.js", "CRUD API", "MongoDB", "DaisyUI", "Tailwind CSS"],
    github: "https://github.com/Arshan10-dev/student-management-system",
    live: "https://student-management-system-frontend-5ts5.onrender.com",
    featured: false,
  },
  {
    id: 3,
    title: "Nutri IQ",
    description: "Nutri IQ is a modern nutrition and calorie intelligence platform that calculates daily calorie needs, BMI, macronutrients, water intake, and fitness goals in real time using scientifically based formulas.",
    image: cncImg,
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Recharts", "Lucide React"],
    github: "https://github.com/Arshan10-dev/NutriIQ",
    live: "https://nutriiq-03gf.onrender.com",
    featured: true,
  },
];