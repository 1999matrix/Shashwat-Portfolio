import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Ajay Kumar Garg Engineering College</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              B.Tech in Computer Science & Engineering
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2020 - July 2024
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Datence Technologies</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Location - Remote{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• May 2023 - Sept 2023</code>
            <br />
            <code className="text-sm">
              <br />• Acquired extensive expertise as a Full Stack Engineer, honing technical acumen and problem-solving abilities.
              <br />• Played a pivotal role in real-world projects leveraging React, demonstrating adaptability and mastery.
              <br />• Aliquam et nisi eu risus ultrices suscipit nec nec quam.
              <br />• Utilized a diverse technology stack including SASS, React.js, Ant Design, TypeScript, Next.js, TypeORM, and SQLite.
              
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Abekus</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Location - Remote{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Nov 2022 - Feb 2023</code>
            <br />
            <code className="text-sm">
              <br />• Collaboratively developed a library to streamline intricate operations such as API registration, authentication, rate limiting, and caching.
              <br />• Enhanced middleware administration, service mesh communication, and logging, resulting in a 15% improvement in overall application performance.
              <br />• Implemented authentication and authorization systems using Keycloak to ensure efficient management of source identity and resource access control.
              </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">

              <br />• Good knowledge of React, Node.js, Express.js.
              <br />• Clear understanding of JavaScript and Typescript.
              <br />• Sound understanding of MVC and design patterns.
              <br />• Experience in using Git and VSCode.
              <br />• Strong ability to coordinate with external or internal clients
              <br />• Solid understanding of software development lifecycles
              <br />• Excellent brainstorming abilities
              <br />• Ability to meet strict deadlines
              <br />• Strong analytical skills

            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
