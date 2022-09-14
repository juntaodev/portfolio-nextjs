import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.png";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/ecommerce" ||
      router.asPath === "/crypto" ||
      router.asPath === "/twitch" ||
      router.asPath === "/bugtracker"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 ease-in duration-150">
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="/"
              width={125}
              height={125}
              className="cursor-pointer hover:scale-125 ease-in-out duration-300"
            />
          </a>
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-lg font-medium uppercase hover:text-[#618A6A] hover:scale-110 ease-in-out duration-300">
                Home
              </li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 text-lg font-medium uppercase hover:text-[#618A6A] hover:scale-110 ease-in-out duration-300">
                Projects
              </li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className="ml-10 text-lg font-medium uppercase hover:text-[#618A6A] hover:scale-110 ease-in-out duration-300">
                About
              </li>
            </Link>

            <Link href="/#contact" scroll={false}>
              <li className="ml-10 text-lg font-medium uppercase hover:text-[#618A6A] hover:scale-110 ease-in-out duration-300">
                Contact
              </li>
            </Link>

            <a
              href="https://drive.google.com/file/d/10PQIuLv-ynemKI59N3aGCTZItu2EPCkz/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <li className="mx-10 text-lg font-medium uppercase hover:text-[#618A6A] hover:scale-110 ease-in-out duration-300">
                Resume
              </li>
            </a>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer hover:scale-125  ease-in-out duration-300"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* side menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] px-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 px-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <Image
                    src={logo}
                    alt="/"
                    width={125}
                    height={125}
                    className="cursor-pointer hover:scale-125 ease-in duration-300"
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-4000 p-3 cursor-pointer hover:bg-[#abc4b0] hover:rotate-90 ease-in duration-200"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something amazing together
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm hover:text-[#618A6A]"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm hover:text-[#618A6A]"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm hover:text-[#618A6A]"
                  >
                    About
                  </li>
                </Link>

                <Link href="/#contact">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm hover:text-[#618A6A]"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#618A6A] ">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <a
                    href="https://www.linkedin.com/in/juntao-liu-710528247/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:bg-[#abc4b0] ease-in duration-300">
                      <FaLinkedin />
                    </div>
                  </a>

                  <a
                    href="https://github.com/juntaodev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:bg-[#abc4b0] ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <Link href="/#contact">
                    <div
                      onClick={() => setNav(false)}
                      className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:bg-[#abc4b0] ease-in duration-300"
                    >
                      <AiOutlineMail />
                    </div>
                  </Link>

                  <Link href="/#resume">
                    <div
                      onClick={() => setNav(false)}
                      className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:bg-[#abc4b0] ease-in duration-300"
                    >
                      <BsFileText />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
