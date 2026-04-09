import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaPython,
  FaWordpress,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFirebase,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiLaravel,
  SiBootstrap,
  SiSass,
  SiVuedotjs,
  SiAngular,
  SiJquery,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiElectron,
  SiDotnet,
  SiCplusplus,
  SiGo,
  SiRust,
  SiRedis,
  SiSupabase,
  SiExpo,
  SiIonic,
  SiApachecordova,
  SiTwilio,
  SiWebrtc,
  SiSocketdotio,
} from "react-icons/si";

export const techIconList = [
  // ================= FRONTEND =================
  { name: "react", icon: FaReact, color: "#61DAFB" },
  { name: "nextjs", icon: SiNextdotjs, color: "#000000" },
  { name: "vue", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "nuxtjs", icon: SiNextdotjs, color: "#00DC82" },
  { name: "angular", icon: SiAngular, color: "#DD0031" },

  // ================= STYLING =================
  { name: "tailwindcss", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "sass", icon: SiSass, color: "#CC6699" },
  { name: "css", icon: FaCss3Alt, color: "#1572B6" },
  { name: "html", icon: FaHtml5, color: "#E34F26" },

  // ================= LANGUAGES =================
  { name: "javascript", icon: FaJs, color: "#F7DF1E" },
  { name: "typescript", icon: SiTypescript, color: "#3178C6" },
  { name: "python", icon: FaPython, color: "#3776AB" },
  { name: "php", icon: FaPhp, color: "#777BB4" },
  { name: "java", icon: FaJava, color: "#007396" },
  { name: "c++", icon: SiCplusplus, color: "#00599C" },
  { name: "go", icon: SiGo, color: "#00ADD8" },
  { name: "rust", icon: SiRust, color: "#000000" },

  // ================= BACKEND =================
  { name: "nodejs", icon: FaNodeJs, color: "#339933" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "express", icon: SiExpress, color: "#000000" },
  { name: "django", icon: SiDjango, color: "#092E20" },
  { name: "laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: ".net", icon: SiDotnet, color: "#512BD4" },

  // ================= DATABASE =================
  { name: "mongodb", icon: SiMongodb, color: "#47A248" },
  { name: "mysql", icon: SiMysql, color: "#4479A1" },
  { name: "postgresql", icon: SiPostgresql, color: "#336791" },
  { name: "redis", icon: SiRedis, color: "#DC382D" },

  // ================= STATE / API =================
  { name: "redux", icon: SiRedux, color: "#764ABC" },
  { name: "graphql", icon: SiGraphql, color: "#E10098" },

  // ================= CLOUD / BaaS =================
  { name: "firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "supabase", icon: SiSupabase, color: "#3ECF8E" },

  // ================= MOBILE DEV =================
  { name: "flutter", icon: SiFlutter, color: "#02569B" },
  { name: "react native", icon: FaReact, color: "#61DAFB" },
  { name: "kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "swift", icon: SiSwift, color: "#FA7343" },
  { name: "expo", icon: SiExpo, color: "#000020" },
  { name: "ionic", icon: SiIonic, color: "#3880FF" },
  { name: "cordova", icon: SiApachecordova, color: "#E8E8E8" },

  // ================= DESKTOP APP =================
  { name: "electron", icon: SiElectron, color: "#47848F" },

  // ================= CMS =================
  { name: "wordpress", icon: FaWordpress, color: "#21759B" },

  // ================= LIBRARIES =================
  { name: "jquery", icon: SiJquery, color: "#0769AD" },

  { name: "twilio", icon: SiTwilio, color: "#FF0000" },
  { name: "voip", icon: SiSocketdotio, color: "#00ADEF" },
  { name: "api", icon: SiSocketdotio, color: "#FF6F00" },
  { name: "webrtc", icon: SiWebrtc, color: "#2255FF" },
];

export const getTechIcon = (tech: string) => {
  const normalized = tech.toLowerCase().replace(/\s/g, "");

  return techIconList.find((t) => t.name === normalized);
};
