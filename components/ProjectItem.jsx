import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#618A6A] to-[#abc4b0]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] tranlate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{tech}</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text0lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
      ;
    </div>
  );
};

export default ProjectItem;