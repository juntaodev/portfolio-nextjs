import Image from "next/image";
import React from "react";
import stockImg from "../public/assets/projects/stock101.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const stock101 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="scale-down"
          src={stockImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1280px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Stock 101</h2>
          <h3>React / Tailwind / Alpha Vantage</h3>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          
          <h2>Overview</h2>
          <p>
            Most existing stock related websites or applications are either trading platforms or information providers. One of their common grounds is that they are all loaded with intimidating jargons which baffle non-professional investors. Stock 101 is a project that meant to help amatuer stock investors set foot in stock investments. The most important feature of Stock 101 is that we add beginner-friendly yet comprehensive explanations to every term that users may encounter in our app. We name it "Educational Clickable". We also add a metric system to evaluate the business of a company by introducing four tables reflecting business growth, profitability, management efficiency and financial health respectively. Five years of historical financial statements of the business are also provided for easy access and easy analysis.
          </p>
          <p className="py-2 font-semibold">
            What I accomplished from this project:
          </p>
          <p className="py-2">
            - Advanced React folder and file structure, hooks, and refs <br />
            - Overall wireframe build and UX design from user story  <br />
            - Data fetch and utilization powered by Alpha Vantage API and TwelveData API <br />
            - Responsive design with Daisy UI integrated with Tailwind CSS <br />
            
          </p>
          <a
            href="https://github.com/juntaodev/stock_101"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          {/* <a
            href="https://gear-ecommerce-app-juntaodev.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> React
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Tailwind
              </p>

              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Daisy UI
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Alpha Vantage API
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Twelve Data API
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> axios
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

export default stock101;
