import Image from "next/image";
import React from "react";
import fruitcartImg from "../public/assets/projects/fruitcart.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const fruitcart = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="scale-down"
          src={fruitcartImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1280px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Fruit Cart</h2>
          <h3>Javascript / SASS / EJS / PostgreSQL</h3>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          
          <h2>Overview</h2>
          <p>
            Fruit Cart is a brightly designed buy/sell listing app. Features included: <br />
            <strong>Customers can</strong>  <br />
            - Browse fruit listings and view detailed information including price, description, and image <br />
            - Mark fruit listings as favourite that show up in their favourites page <br />
            - Add fruit to their shopping cart <br />
            - Click more info to view a popup that shows a second functional add to cart button and email seller button <br />
            - Contact the seller via an email form <br />
            - Filter fruit by price and date listed <br />
            <strong>Admin can</strong>  <br />
            - Post new listings of fruit <br />
            - Remove listings of fruit <br />
            - Mark fruit as sold two ways: the main page and the more information popup <br />
            - Receive emails sent by customers <br />

          </p>
          <p className="py-2 font-semibold">
            What I accomplished from this project:
          </p>
          <p className="py-2">
            - ERD design and database design using draw.io and PostgreSQL<br />
            - UI/UX design and Responsive web design using Sass and Tailwind <br />
            - Main function implementation using Javascript and EJS <br />
            - Collaborative version control using github <br />
            
          </p>
          <a
            href="https://github.com/juntaodev/fruit-cart"
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
                <RiRadioButtonFill className="pr-2" /> Javascript
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> EJS
              </p>

              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Sass
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Tailwind
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> PostgreSQL
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Express
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

export default fruitcart;
