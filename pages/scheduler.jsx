import Image from "next/image";
import React from "react";
import schedulerImg from "../public/assets/projects/scheduler.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const scheduler = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="scale-down"
          src={schedulerImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1280px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Scheduler Project</h2>
          <h3>React / PostgreSQL / Jest tests</h3>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          
          <h2>Overview</h2>
          <p>
            Interview Scheduler is a single page application app used to schedule interviews. Features included: <br />

            - Appointment days (Monday to Friday) are displayed and colour-coordinated depending on availability <br />
            - The days show the number of slots available <br />
            - A user can switch between days and see detailed information <br />
            - Booked and available slots are clearly differentiated <br />
            - A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers <br />
            - A user can change the details of an existing interview by pressing the edit icon <br />
            - A user can cancel an existing interview, a pop-up message will ask to confirm the action before permanently deleting an interview <br />
            - Days display currently remaining spots and show updates after each modification <br />
          </p>
          <p className="py-2 font-semibold">
            What I accomplished from this project:
          </p>
          <p className="py-2">
            - Development focuses on a single page application, built using React<br />
            - Data is persisted by the API server using a PostgreSQL database <br />
            - The client application communicates with an API server over HTTP, using the JSON format <br />
            - Jest tests are used through the development of the project <br />
            
          </p>
          <a
            href="https://github.com/juntaodev/scheduler"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> React
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Sass
              </p>

              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> PostgreSQL
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Jest
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> cypress
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> storybook
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

export default scheduler;
