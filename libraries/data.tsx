
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
      "I worked as a back-end(Fullstack) developer for 2 years .",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "ShopZetu VMS",
    description:
      "ShopZetu Vendor Management System, a cutting-edge solution designed to streamline the way small brands and vendors manage their operations, access crucial metrics and data about their business perfomance on shopify in terms of sales/Purchases .",
    tags: ["React", "Python(flask)", "MongoDB", "Tailwind", ],
    imageUrl: shop,
  },
  {
    title: "Real-Estate WebApp",
    description:
      "A real estate web app centralizes and simplifies the property buying, selling, and renting processes by providing comprehensive information, enhancing accessibility, and improving efficiency for all stakeholders involved.",
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
      "Airbnb clone is a comprehensive web application with functionalities for property listing, searching, booking, user authentication, reviews, and more. Problem solved:  This project solves problems related to the availability, variety, and affordability of accommodations for travelers while providing a platform for property owners to generate income from their spaces. ",
    tags: ["HTML", "Flask", "MongoDB", "Tailwind", "CSS"],
    imageUrl: "", 
  },
  {
    title: "Virtal Health Portal ",
    description:
      "This  project provides a RESTful interface for managing patients and their diagnoses in a medical clinic. It includes endpoints for user registration, login, CRUD operations on patients, and CRUD operations on diagnoses. The API is built using Flask and implements JWT-based authentication to protect sensitive data. ",
    tags: ["ReactJs", "Node js", "PostgreSQL", "Tailwind", "Python"],
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
