import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#618A6A]"> Juntao</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I specialize in building exceptional digital experience. Currently,
            I'm focused on building responsive web applications while
            learning new technologies, as well as web design.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/juntao-liu-710528247/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#abc4b0] ease-in duration-300 ">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/juntaodev"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#abc4b0] ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#abc4b0] ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <a
              href="https://docs.google.com/document/d/1E_a4Ik0Y6cugliD78x0Y5lFMtuXMb12pkfSnoPJZ7pU/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#abc4b0] hover:text-[Resume] ease-in duration-300">
                <BsFileText />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
