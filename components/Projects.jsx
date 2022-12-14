import React from "react";

import ProjectItem from "./ProjectItem";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import gearstoreImg from "../public/assets/projects/gearstore.png";
import bugtrackerImg from "../public/assets/projects/bugtracker.png";
import twitchImg from "../public/assets/projects/twitch.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-4 py-32">
        <h2 className="tracking-widest uppercase text-[#618A6A] py-4">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ecommerce App"
            backgroundImg={gearstoreImg}
            projectUrl="/ecommerce"
            tech="Next JS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          />
          <ProjectItem
            title="Bug Tracker"
            backgroundImg={bugtrackerImg}
            projectUrl="/bugtracker"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
