"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaLaravel,
  FaVuejs,
  FaPhp,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiCodeigniter,
  SiTypescript,
  SiDocker,
  SiJquery,
} from "react-icons/si";
//about me
const about = {
  title: "about me",
  description:
    "I’m a Full Stack Developer skilled in Laravel, Vue.js, Next.js,and MySQL. I build fast and scalable web apps, focusing on performance and user experience.",
  info: [
    { fieldName: "name", fieldValue: "Yassine Benhamzah" },
    { fieldName: "email", fieldValue: "yassine.benhamzah00@gmail.com" }, // Replace with your actual email
    { fieldName: "phone", fieldValue: "+212 624953291" }, // Replace with your actual phone number
    { fieldName: "years of experience", fieldValue: "3 years" },
    { fieldName: "location", fieldValue: "Casablanca" },
    {
      fieldName: "languages",
      fieldValue:
        "Arabic , French , English ",
    },
  ],
};
//experience
const experience = {
  icon: "",
  title: "my experience",
  description:
    "  Lorem, ipsum dolor sit amet consectetur aur quisquam, placeat expedita quasi. Expedita adipisci ",
  items: [
    {
      company: "batisync",
      position: "full stack developer",
      duration: "2025  - present ",
    },
    {
      company: "Freelance",
      position: "full stack developer",
      duration: "October 2023  - July 2024 ",
    },
    {
      company: "IS-Tech",
      position: "Full Stack Web Developer Intern",
      duration: "January 2023 - May 2023",
    },
    {
      company: "Smart-Snake",
      position: "Full Stack Developer",
      duration: "September 2022 - December 2022"
    },
    {
      company: "EasyApp24",
      position: "Full Stack Developer Freelance",
      duration: "2022",
    },
    {
      company: "Ed-trust SARL",
      position: "Full Stack Web Developer Intern",
      duration: "May 2022 - August 2022",
    },
  ],
};
//education
const education = {
  icon: "",
  title: "my education",
  description:
    "  Lorem, ipsum dolor sit amet consectetur aur quisquam, placeat expedita quasi. Expedita adipisci ",
  items: [
    {
      school: "Megasup FST Settat",
      degree: "Professional License in Full-Stack Web Development & DevOps",
      duration: "2023",
    },
    {
      school: "ISTA",
      degree:
        "Technicien Spécialisé in Software Development ",
      duration: "2021",
    },
    {
      school: "LinkedIn Learning",
      course: "Vue.js Certification",
      duration: "2024",
    },
    {
      school: "LinkedIn Learning",
      course: "PHP Certification",
      duration: "2024",
    },
    {
      school: "LinkedIn Learning",
      course: "Laravel 9.0",
      duration: "2024",
    },
  ],
};
//skills
const skills = {
  icon: "", // You can replace this with an appropriate icon from React Icons
  title: "My Skills",
  description:
    "A comprehensive set of technical skills gained from years of hands-on experience in web development, including front-end and back-end technologies.",
  skillsList: [
    {
      skill: "HTML",
      level: "Expert",
      icon: <FaHtml5 />,
    },
    {
      skill: "CSS",
      level: "Expert",
      icon: <FaCss3 />,
    },
    {
      skill: "JavaScript",
      level: "Advanced",
      icon: <FaJs />,
    },
    {
      skill: "PHP",
      level: "Advanced",
      icon: <FaPhp />,
    },
    {
      skill: "Laravel",
      level: "Advanced",
      icon: <FaLaravel />,
    },
    {
      skill: "Vue.js",
      level: "Advanced",
      icon: <FaVuejs />,
    },
    {
      skill: "MySQL",
      level: "Advanced",
      icon: <SiMysql />,
    },
    {
      skill: "Bootstrap",
      level: "Advanced",
      icon: <FaBootstrap />,
    },
    {
      skill: "Tailwind CSS",
      level: "Intermediate",
      icon: <SiTailwindcss />,
    },
    {
      skill: "Git",
      level: "Intermediate",
      icon: <FaGitAlt />,
    },
    {
      skill: "GitHub",
      level: "Intermediate",
      icon: <FaGithub />,
    },
    {
      skill: "Docker",
      level: "Intermediate",
      icon: <SiDocker />,
    },
    {
      skill: "Figma",
      level: "Intermediate",
      icon: <FaFigma />,
    },
    {
      skill: "jQuery",
      level: "Intermediate",
      icon: <SiJquery />,
    },
    {
      skill: "PostgreSQL",
      level: "Intermediate",
      icon: <SiPostgresql />,
    },
    {
      skill: "CodeIgniter",
      level: "Intermediate",
      icon: <SiCodeigniter />,
    },
    {
      skill: "TypeScript",
      level: "Beginner",
      icon: <SiTypescript />,
    },
  ],
};
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

// About, Experience, Education, and Skills data as you defined

const Resume = () => {
  const [selectedTab, setSelectedTab] = useState("experience");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs
          className="flex flex-col xl:flex-row gap-[68px]"
          value={selectedTab}
          onValueChange={setSelectedTab}
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger
              value="experience"
              className={`transition-all duration-300 ease-in-out border ${
                selectedTab === "experience" ? "border-accent" : "border-transparent"
              } hover:border-blue-500`}
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className={`transition-all duration-300 ease-in-out border ${
                selectedTab === "education" ? "border-accent" : "border-transparent"
              } hover:border-blue-500`}
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className={`transition-all duration-300 ease-in-out border ${
                selectedTab === "skills" ? "border-accent" : "border-transparent"
              } hover:border-blue-500`}
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className={`transition-all duration-300 ease-in-out border ${
                selectedTab === "about" ? "border-accent" : "border-transparent"
              } hover:border-blue-500`}
            >
              About
            </TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-|70vh] w-full">
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-8">{experience.description}</p>
                    <ScrollArea className="h-[488px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[38px]">
                        {experience.items.map((item , index) => {
                          return (
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[268px] min-h-[68px] text-center lg:text-left">{item.position}</h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.company}</p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-8">{education.description}</p>
                    <ScrollArea className="h-[488px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[38px]">
                        {education.items.map((item , index) => {
                          return (
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[268px] min-h-[68px] text-center lg:text-left">{item.degree}{item.course}</h3>
                              <div className="flex items-center gap-3 mt-5">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60 ">{item.school}</p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="skills" className="w-full h-full">
                  <div className="flex flex-col gap-[30px] ">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                      {skills.skillsList.map((skill , index) => {
                        return <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                                <div className="text-6xl hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.skill}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      })}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-8">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item , index) => {
                        return(
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                            <span className="text-white/48">{item.fieldName}</span>
                            <span className="text-xl">{item.fieldValue}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
