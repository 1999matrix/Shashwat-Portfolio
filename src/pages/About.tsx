import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");
const ExpressLogo = require("../assets/logos/3310-express-js_64x64.ico");
const Redislogo = require("../assets/logos/redis1.png");
const c = require("../assets/logos/c.ico");
const aws = require("../assets/logos/aws.png");


const skills = [
  { name: "C++", logo: c },
  { name: "JavaScript (ES6+)", logo: JsLogo },
  { name: "Nodejs", logo: NodeJSLogo },
  { name: "Next.js", logo: NextLogo },
  { name: "Express", logo: ExpressLogo },
  { name: "React", logo: ReactLogo },
  { name: "TypeScript", logo: TypescriptLogo },
  { name: "Redux", logo: ReduxLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "Python", logo: PythonLogo },
  { name: "SQL", logo: SqlLogo },
  { name: "Redis", logo: Redislogo },
  { name: "MongoDB", logo: MongoDBLogo },
  { name: "Firebase", logo: FirebaseLogo },
  { name: "AWS", logo: aws },
  { name: "Docker", logo: DockerLogo },
];

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
         
          <br />Hi, I am Shashwat, born and raised in Kanpur, currently residing in Ghaziabad. I am a final-year computer science and engineering student at AKGEC. I am a full-stack software developer with expertise in front-end and back-end development. I have experience working with cross-functional teams and am proficient in collaborative software development.

          <br />
          <code>Here are few technologies I’ve been working with recently:</code>
          <List list={skills} />
        </div>
      </div>
    </div>
  );
};

export default About;
