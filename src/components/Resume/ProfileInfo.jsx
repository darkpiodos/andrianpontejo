import React from "react";
import {
  FaDownload,
  FaPaperPlane,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";
import SkillProgress from "./SkillProgress";

const ProfileInfo = () => {
  return (
    <>
      <div
        className="w-full md:w-[40%] flex flex-col items-center text-center bg-lightSecondary dark:bg-darkPrimary/50 rounded-md shadow-lg relative"
        data-aos="fade-right"
      >
        <img
          src="/assets/website.png"
          alt="Profile"
          className="w-full rounded-t-md h-auto object-cover mb-4"
        />
        <h2 className="text-3xl font-bold text-darkAccent dark:text-lightAccent mt-8">
          Andrian Pontejo
        </h2>
        <div className="text-sm text-darkPrimary dark:text-lightPrimary mb-4">
          {" "}
          <ReactTyped
            strings={[
              "Full-Stack Web Developer",
              "WordPress Expert",
              "Backend Developer",
              "Frontend Enthusiast",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mb-6">
          <a href="#" className="p-2 bg-purple-500 rounded-full text-white">
            <FaTwitter />
          </a>
          <a href="#" className="p-2 bg-purple-500 rounded-full text-white">
            <FaGithub />
          </a>
          <a href="#" className="p-2 bg-purple-500 rounded-full text-white">
            <FaLinkedin />
          </a>
          <a href="#" className="p-2 bg-purple-500 rounded-full text-white">
            <FaInstagram />
          </a>
        </div>

        <SkillProgress />

        {/* Buttons */}
        <div className="flex flex-row absolute w-full bottom-0 rounded-b-md overflow-hidden">
          <div className="w-full group">
            {" "}
            <button className="w-full flex items-center justify-center gap-2 px-4 py-4 text-darkPrimary hover:text-darkAccent transition bg-lightPrimary ">
              <FaDownload className="group-hover:animate-bounce" /> Download CV
            </button>
          </div>

          <div className="w-full group">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-4 text-lightAccent hover:text-lightPrimary transition  bg-darkAccent">
              <FaPaperPlane className="group-hover:animate-bounce" /> Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
