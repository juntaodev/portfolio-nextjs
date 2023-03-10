import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Typescript from "../public/assets/skills/typescript.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import Nodejs from "../public/assets/skills/nodejs.png";
import Mongodb from "../public/assets/skills/mongodb.png";
import NextJS from "../public/assets/skills/nextjs.png";
import RubyOnRails from "../public/assets/skills/rubyonrails.svg";
import PostgreSQL from "../public/assets/skills/postgres.svg";
import Jest from "../public/assets/skills/jest.svg";
import Storybook from "../public/assets/skills/storybook.svg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen"
    >
      
      {/* about */}
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-4 pt-32">
        <div className="col-span-2">
          <h2 className="tracking-widest uppercase text-[#618A6A] py-4">
            About
          </h2>

          <p className="py-2 text-gray-600">
            / / I am not your average developer.
          </p>
          <p className="py-2 text-gray-600">
            I have spent the last 8 years working as an English teacher, specializeing in 
            scholastic tests such as SAT, ACT, GMAT and GRE. 
            Although far from tech world, I have always had a knack for
            technology and working with computers. In 2018, I built my personal
            blog using WordPress. I still remember the excitement when I finally
            set up the website by myself .
          </p>
          <p className="py-2 text-gray-600">
            What I thought was just a side hustle turned into a longing for
            further exploration into web development. I started learning html,
            css and javascript and was even more enthused with responsive web
            design. I then delved into the field of full stack development. 
            I took my time to attend the bootcamp and successfully graduated from Lighthouse Labs.
            I am now spending my time building projects with React JS and Next JS and
            constantly getting exposed to new technologies.
          </p>


        </div>


        {/* <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div> */}
      </div>

      {/* skills */}
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center py-8 px-4">
        <h2 className="tracking-widest uppercase text-[#618A6A] py-4">
          skill set
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="HtmlLogo" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="CssLogo" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Javascript}
                  width="64px"
                  height="64px"
                  alt="JavascriptLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={ReactImg}
                  width="64px"
                  height="64px"
                  alt="ReactLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={NextJS}
                  width="64px"
                  height="64px"
                  alt="NextjsLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Tailwind}
                  width="64px"
                  height="64px"
                  alt="TailwindLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Typescript}
                  width="64px"
                  height="64px"
                  alt="TypescriptLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Firebase}
                  width="64px"
                  height="64px"
                  alt="FirebaseLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Nodejs}
                  width="64px"
                  height="64px"
                  alt="NodejsLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Mongodb}
                  width="64px"
                  height="64px"
                  alt="MongodbLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={RubyOnRails}
                  width="64px"
                  height="64px"
                  alt="RubyOnRailsLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>RubyOnRails</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={PostgreSQL}
                  width="64px"
                  height="64px"
                  alt="PostgresLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Github}
                  width="64px"
                  height="64px"
                  alt="GithubLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Jest}
                  width="64px"
                  height="64px"
                  alt="JestLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Jest</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Storybook}
                  width="64px"
                  height="64px"
                  alt="StorybookLogo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Storybook</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  );
};

export default About;
