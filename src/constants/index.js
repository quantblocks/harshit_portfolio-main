import { Int8BufferAttribute } from "three";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  NPCI,
  ff,
  seyche,
  optimization,
  credit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Scientist",
    company_name: "National Payments Corporation of India",
    icon: NPCI,
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "Architected ANPR prototype on RTSP streams with best-frame logic and containerized YOLO & Grounding DINO on Triton, achieving 98% accuracy.",
      "Built Dagster ETL pipelines with custom preprocessing, geometric filtering, and ensemble OCR, cutting false positives by 85% on 10M+ records.",
      "Designed distributed MinIO & MongoDB platform with Change Streams and automated Ansible/Bash replication, ensuring 99.99% uptime and 60% faster multi-region access.",
      "Developed RAG system with FAISS vector search and optimized APIs, resolving UPI disputes 40% faster at 72% accuracy for 600K+ daily transactions.",
      "Engineered AML models to detect money mules in UPI and IMPS transactions."
    ],
  },
  {
    title: "Quant Intern",
    company_name: "Futures First",
    icon: ff,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Boosted RA portfolio returns by 40% using time-series analysis and yield curve pattern recognition.",
      "Performed sentiment analysis on 50+ news sources to inform yield-enhancing financial strategies.",
      "Developed interest-rate-based trading signals, increasing accuracy by 35%."
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Seyche Technologies",
    icon: seyche,
    iconBg: "#383E56",
    date: "May 2022 - July 2022",
    points: [
      "Created RFM-based customer segments to enable targeted marketing and personalized campaigns.",
      "Uncovered trends and insights that boosted conversions by 20% and reduced bounce rates by 25%.",
      "Built dashboards and visualizations to help stakeholders monitor KPIs and make data-driven decisions."
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Credit Risk Assessment",
    description: "Predictive modeling system for loan default risk using regression and classification, validated with AUC-ROC and confusion analysis to reduce defaults.",
    points: [
      "Built a predictive model to estimate individual loan default probability using financial & non-financial features.",
      "Leveraged regression and classification algorithms to improve decision-making accuracy.",
      "Achieved up to 40% reduction in default rates through targeted risk scoring.",
      "Performed rigorous validation with AUC-ROC analysis, confusion matrices, and statistical tests.",
      "Automated the scoring pipeline for seamless integration into underwriting workflows.",
    ],
    tags: [
      { name: "MachineLearning", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "RiskManagement", color: "pink-text-gradient" },
      { name: "DataScience", color: "orange-text-gradient" },

    ],
    image: credit,
  },
  {
    name: "Capacitated Simultaneous Production & Transportation System",
    description: "MILP-based optimization platform for on-demand manufacturing scheduling and routing, balancing tardiness and trip time to boost efficiency and reduce costs.",
    points: [
      "Formulated a mixed-integer linear program (MILP) to jointly optimize production schedules and delivery routes.",
      "Balanced total tardiness vs. trip time to minimize inventory levels and operational costs.",
      "Integrated on-demand manufacturing constraints for dynamic order fulfillment.",
      "Reduced lead times and improved service efficiency through optimized dispatching.",
      "Enabled scenario analysis for trade-off visualization between cost, time, and capacity.",
    ],
    tags: [
      { name: "MILP", color: "green-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "Optimization", color: "pink-text-gradient" },
      { name: "DecisionScience", color: "orange-text-gradient" },
      { name: "Scheduling", color: "pink-text-gradient" },

    ],
    image: optimization,
  },
];

export { services, technologies, experiences, projects };








