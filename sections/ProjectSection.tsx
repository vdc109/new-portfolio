import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import finetunedRoberta from "public/projects/finetuned-roberta.png";
import hurricaneML from "public/projects/hurricaneml.jpg";
import messageApp from "public/projects/message-app.png";
import fill from "public/projects/fill.png";
import grocerytrak from "public/projects/grocerytrak.jpg";
import discord from "public/projects/discord.png";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">My Projects and Experience</h2>
        </RoughNotation>
      </div>
      <div className="experience-section mb-10 px-4 md:px-8 lg:px-16">
      <h3 className="text-xl font-semibold mb-4 text-marrsgreen dark:text-carrigreen">
        Working Experiences
      </h3>

      <div className="mb-6">
        <h4 className="text-lg font-medium">AI/ML Software Engineer Intern - Rikkeisoft</h4>
        <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300 ml-4">
          <li>Built a lightweight, streamable HTTP MCP architecture for OpenAI RAG model integration</li>
          <li>Optimized end-to-end vector pipeline with LangChain and ChromaDB</li>
          <li>Wrote automated unit testing pipeline using Pytest and DeepEval</li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium">Software Engineer/Research Assistant - Oakridge National Laboratory</h4>
        <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300 ml-4">
          <li>Built a C++ toolpath compiler with OpenVDB</li>
          <li>Optimized calculation processes with multi-threaded algorithms</li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium">Software Engineer Intern - FPT Software Corporation</h4>
        <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300 ml-4">
          <li>Developed scalable Spring Boot microservices, integrating MongoDB, Jitsi and Keycloak</li>
          <li>Developed various frontend modules using React, Material UI</li>
        </ul>
      </div>
    </div>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/vdc109"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "GroceryTrak",
    type: "Fullstack",
    image: (
      <Image
        src={grocerytrak}
        sizes="100vw"
        fill
        alt="GroceryTrak"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A fullstack, cross platform application using live images to recommend healthy dishes and recipes.",
    tags: ["Flutter", "Go", "Redis", "PostgreSQL", "Yolo"],
    liveUrl: "https://vdc109-grocerytrakwebapp.static.hf.space",
    codeUrl: "https://github.com/GroceryTrak/GroceryTrakService",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "",
  },
  {
    title: "My Portfolio",
    type: "Frontend",
    image: (
      <Image
        src={fill}
        sizes="100vw"
        fill
        alt="My Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "My portfolio website developed with React TypeScript, Tailwind and Next. ",
    tags: ["React", "Tailwind", "Next"],
    liveUrl: "",
    codeUrl: "https://github.com/vdc109/new-portfolio",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "",
  },
  {
    title: "Binance Notifier",
    type: "Script",
    image: (
      <Image
        src={discord}
        sizes="100vw"
        fill
        alt="Binance Notifier"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A product currently a discord bot to notify users about crypto symbols that show good signals.",
    tags: ["Python", "WebSockets", "Streamlit", "Swift"],
    liveUrl: "",
    codeUrl: "https://github.com/vdc109/streamlit-temp",
    bgColor: "bg-[#A6CECE]",
    githubApi: "",
  },
  {
    title: "Hurricane ML",
    type: "Fullstack + ML Model",
    image: (
      <Image
        src={hurricaneML}
        sizes="100vw"
        fill
        alt="Hurricane ML"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A simple Flask app developed using React that takes in a satellite image and classify whether there is hurricane damage or not.",
    tags: ["Flask", "Tensorflow", "React"],
    liveUrl: "",
    codeUrl: "https://github.com/vdc109/HurricaneML",
    bgColor: "bg-[#C5E4E7]",
    githubApi: "",
  },
  {
    title: "LLM Finetuning Roberta",
    type: "ML Model",
    image: (
      <Image
        src={finetunedRoberta}
        sizes="100vw"
        fill
        alt="Finetuned Roberta"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "My attempt to finetune an LLM model for Kaggle competition training classifying other LLM answers.",
    tags: ["Pytorch", "Hugging Face ", "Jupyter"],
    liveUrl: "",
    codeUrl: "https://github.com/vdc109/fine-tuning-roberta",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "",
  },
  {
    title: "MessageApp",
    type: "Fullstack",
    image: (
      <Image
        src={messageApp}
        sizes="100vw"
        fill
        alt="MessageApp"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Fullstack application of realtime messaging application developed using Angular, MongoDB and Node.",
    tags: ["Node.JS", "Angular", "MongoDB"],
    liveUrl: "",
    codeUrl: "https://github.com/vdc109/MessageApp",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "",
  },
];

export default ProjectSection;
