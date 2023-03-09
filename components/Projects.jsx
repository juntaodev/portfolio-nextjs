import React from "react";

import ProjectItem from "./ProjectItem";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import gearstoreImg from "../public/assets/projects/gearstore.png";
import stockImg from "../public/assets/projects/stock101.png";
import fruitcartImg from "../public/assets/projects/fruitcart.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-screen">
      <div className="max-w-[1240px] mx-auto px-4 py-32">
        <h2 className="tracking-widest uppercase text-[#618A6A] py-4">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Stock App"
            backgroundImg={stockImg}
            projectUrl="/stock101"
            tech="React"
          />
          <ProjectItem
            title="Buy/Sale Listing App"
            backgroundImg={fruitcartImg}
            projectUrl="/fruitcart"
            tech="JavaScript/EJS"
          />
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
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
