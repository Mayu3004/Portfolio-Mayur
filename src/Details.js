

import logogradient from "./assets/logo.svg";
import logo from "./assets/our-logo1.svg";

import profile from "./assets/Mayu.png";

import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";

import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import java from "./assets/techstack/java.png";
import cpp from "./assets/techstack/cpp.png";

import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";


export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mayur Limbhore",
  tagline: "Jack of all trades ! Master of self !! ",
  img: profile,
  about: `Hi Everyone, I am  Mayur Limbhore from Pune, India.
  Pursuing a Bachelor's degree in Computer Engineering from SAVITRIBAI PHULE PUNE UNIVERSITY. Proficient in JAVA, PYTHON, and WEB TECHNOLOGIES. Strong willingness to exhibit my proficiency in Analytical tools, Statistics and Computing Methodologies in the professional environment.`
 
  
};


export const socialMediaUrl = {
  linkdein: " https://www.linkedin.com/in/mayur-limbhore-9448b121a/",
  github: "https://github.com/Mayu3004",
  twitter: "https://twitter.com/",
  instagram: "shorturl.at/equY8",
};


export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `DevTown`,
    Location: "Bengaluru",
    Type: "Intern",
    Duration: "Sep 2022 - Nov 2022",
  },
  {
    Position: "Trainee",
    Company: `Zensar`,
    Location: "Pune",
    Type: "Internship",
    Duration: " Oct 2022 - Nov 2022",
  },

];


export const eduDetails = [
  {
    Position: "Bachelor's of Enginnering",
    Company: "JSPM Nahre Technical Campus,College of Engineering",
    Location: "Pune",
    Duration: "May 2020 - Present",
  },
  {
    Position: "XII",
    Company: `Dr.Cyrus Poonawalla I School and Jr.College `,
    Location: "Kolhapur",
    Duration: "April 2019 - April 2020",
  },
  {
    Position: "X",
    Company: `S.T Joseph's Engilsh Medium School `,
    Location: "Pune",
    Duration: "April 2017 - April 2018",
  },
];


export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  java: java,
  npm: npm,
  git: git,
  github: github,
  cpp: cpp,
};


export const projectDetails = [
  {
    title: "UpMenu-Easy to order.",
    image: projectImage1,
    description: `Here we made a project where you can order your food using scanning the  QR CODE and easily get your token number.`,
    techstack: "HTML/CSS, JavaScript ReactJS",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Jumping Dino game ",
    image: projectImage2,
    description: `Developed a mind refreshing game where user plays it from laptop and PC.Player needs to clear the obstacle and hence the score great increase.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Car Race registration form",
    image: projectImage3,
    description: `Made a registration form for entry in a car race.Made using Html And Css. It has a good interface so user can use it in a good way.`,
    techstack: "HTML/CSS",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },

];


export const contactDetails = {
  email: "limbhoremayu7@gmail.com",
  phone: "+91 9699291335",
};
