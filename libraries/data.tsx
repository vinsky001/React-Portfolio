
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shop from "@/public/shop.webp";
// import rmtdevImg from "@/public/rmtdev.png";
import devkonnect from "@/public/devkonnect.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Nairobi, Kenya",
    description:
      "I graduated after 12 months of studying. I immediately found a job as a Backend developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Backend-End Developer",
    location: "Nairobi, Kenya",
    description:
      "I worked as a back-end(Fullstack) developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "ShopZetu VMS",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Python(flask)", "MongoDB", "Tailwind", ],
    imageUrl: shop,
  },
  {
    title: "Real-Estate WebApp",
    description:
      "I worked as a Full-stack developer on this Real Estate app.",
    tags: ["React", "Python", "Next.js", "Tailwind", "Redux", "PostgreSQL", "Docker", "Django","Nginx", "Celery", "Flower"],
    imageUrl: "", // Provide a value for imageUrl property
  },
  {
    title: "DevsKonnekt",
    description:
      "DevsKonnekt is a platform where software developers can connect, network, share ideas, and find new opportunities. DevsKonnekt aims to create a vibrant and supportive community of developers who can learn, grow, and have fun together",
    tags: ["React", "Node js", "MongoDB", "Tailwind", "Framer"],
    imageUrl: "", 
  },
  {
    title: "AirBnB clone ",
    description:
      "Airbnb clone is a comprehensive web application with functionalities for property listing, searching, booking, user authentication, reviews, and more",
    tags: ["HTML", "Flask", "MongoDB", "Tailwind", "CSS"],
    imageUrl: "", 
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Postman",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
