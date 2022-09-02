import Image from "next/image";
import React from "react";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const twitch = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Twitch UI</h2>
          <h3>Next JS / Tailwind / NextAuth</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I recreate Twitch in Next.JS styled with Tailwind CSS and as a bonus
            we will even add NextAuth.js for authentication using Github &
            Google! Learn the Next.JS basics of next.js routing and the Image
            component as we take advantage of lazy loading images! We will be
            creating everything from scratch and even using some mock data from
            https://mockaroo.com and utilizing Headless UI!
          </p>
          <p className="py-2 font-semibold">
            What I accomplished from this project:
          </p>
          <p>
            - Create a fully responsive web app in Next.JS styled with Tailwind
            CSS <br /> - Github and Google account authentication done by
            NextAuth.js <br />- Lazy loading images with the Image component
            <br />- Headless UI integrated with Tailwind CSS
          </p>

          <a
            href="https://github.com/fireclint/crypto-react-firebase"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://twitch-app-juntaodev.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextAuth
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Headless UI
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitch;
