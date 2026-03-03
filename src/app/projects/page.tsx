import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <a href={live} target="_new" rel="noopener">
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </a>
      {repo && (
        <a href={repo} target="_new" rel="noopener">
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  chakra: { title: "Chakra UI", bg: "black", fg: "white", icon: <SiChakraui /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  prisma: { title: "Prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  reactQuery: { title: "React Query", bg: "black", fg: "white", icon: <SiReactquery /> },
  shadcn: { title: "ShadCN UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
  aceternity: { title: "Aceternity", bg: "black", fg: "white", icon: <AceTernityLogo /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  firebase: { title: "Firebase", bg: "black", fg: "white", icon: <SiFirebase /> },
  sockerio: { title: "Socket.io", bg: "black", fg: "white", icon: <SiSocketdotio /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  vue: { title: "Vue.js", bg: "black", fg: "white", icon: <SiVuedotjs /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
  spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: `${BASE_PATH}/portfolio/landing.png`,
    screenshots: ["landing.png", "navbar.png", "project.png", "skills.png", "landing.png"],
    live: "https://your-portfolio-link.com",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            My personal 3D interactive developer portfolio showcasing
            projects, skills, and creative UI experiences.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[`${BASE_PATH}/portfolio/1.png`]} />
        </div>
      );
    },
  },
  {
    id: "tic-tac-toe",
    category: "Game",
    title: "TIC TAC TOE",
    src: `${BASE_PATH}/tic-tac-toe/1.png`,
    screenshots: ["1.png", "2.png", "3.png", "4.png", "2.png"],
    live: "https://prasunsrivastav123-lang.github.io/TIC-TAC-TOE/",
    skills: { frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react], backend: [] },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            My first project of the journey built using JavaScript fundamentals.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              `${BASE_PATH}/tic-tac-toe/1.png`,
              `${BASE_PATH}/tic-tac-toe/2.png`,
              `${BASE_PATH}/tic-tac-toe/3.png`,
              `${BASE_PATH}/tic-tac-toe/4.png`,
              `${BASE_PATH}/tic-tac-toe/5.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "myntra-clone",
    category: "E-Commerce",
    title: "Myntra Clone",
    src: `${BASE_PATH}/myntra/1.png`,
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://prasunsrivastav123-lang.github.io/myntra-clone/",
    skills: { frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind], backend: [] },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A responsive Myntra UI clone featuring filtering and cart system.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              `${BASE_PATH}/myntra/1.png`,
              `${BASE_PATH}/myntra/2.png`,
              `${BASE_PATH}/myntra/3.png`,
              `${BASE_PATH}/myntra/4.png`,
              `${BASE_PATH}/myntra/5.png`,
            ]}
          />
        </div>
      );
    },
  },
{
  id: "sos-hackathon",
  category: "Security",
  title: "SOS Hackathon",
  src: "/assets/projects-screenshots/Sos/1.png",
  screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
  live: "#",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
    backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          Hackathon project built using MERN stack with real-time
          communication using Socket.io.
        </TypographyP>
        <SlideShow
          images={[
            "/assets/projects-screenshots/Sos/1.png",
            "/assets/projects-screenshots/Sos/2.png",
            "/assets/projects-screenshots/Sos/3.png",
            "/assets/projects-screenshots/Sos/4.png",
            "/assets/projects-screenshots/Sos/5.png",
          ]}
        />
      </div>
    );
  },
},
];

export default projects;