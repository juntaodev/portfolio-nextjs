import React from "react";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import cryptoImg from "../public/assets/projects/crypto.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#618A6A]">
          Projects
        </p>
        <h2 className="py-4">What i've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={cryptoImg}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={cryptoImg}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={cryptoImg}
            projectUrl="/property"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
