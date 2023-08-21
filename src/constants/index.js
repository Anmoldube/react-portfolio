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
    starbucks,
    tesla,
    shopify,
    carrent,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Experience",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: creator,
    },
    {
      title: "Cyber Security",
      icon: creator,
    },
  
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "C++",
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
      name: "Python",
      icon: figma,
    },
    {
      name: "JAVA",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Project",
      company_name: "Buger Bun",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Apr 02-Apr 30",
      points: [
        "Front end development(web-App)",
        " The Languages used: HTML, CSS,",
    " JavaScript, GitHub, Microsoft Azure",
       " The web-app website consists of theme changing option, With the help of CSS I try to make UI as good as I can and added a payment option to save time",
      ],
    },
    {
      title: "Cyber Security",
      company_name: "Key Logger",
      icon: tesla,
      iconBg: "#E6DEDD",
      points: [
        "The Languages used: Python,AI",
        "Key loggers, or keystroke loggers, are tools that record what a person types on a device. While there are legitimate and legal uses for keyloggers, many uses for keyloggers are malicious. In a keylogger attack, the keylogger software records every keystroke on the victim's device and sends it to the attacker.",
      ],
    },
    {
      title: "Text Analyzer",
      company_name: "React Web App ",
      icon: shopify,
      iconBg: "#383E56",
      points: [
        "The Languages used: React js, packages",
        "Text Analyzer is a tool used for analyzing and extracting information from written texts. It provides various functions to analyze the content, structure, and characteristics of a given text.",
      ],
    },
    {
      title: "Power BI",
      company_name: "Coursera",
      icon: meta,
      iconBg: "#E6DEDD",
      points: [
        "◦ Coursera Project Network",
       " ◦ Tidy data is a mirage in a real-world setting. Additionally, data need to be in a proper format before quality analysis",
       " can be done. This project-based course, Prepare, Clean, Transform, and Load Data using Power B.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };