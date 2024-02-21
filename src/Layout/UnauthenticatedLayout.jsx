import React, { useEffect, useState } from "react";
import UnauthPic2 from "../Assets/UnAuth-Pic5.png";
import UnAuthVid from "../Vid/UnAuthBg-VID.mp4";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function UnauthenticatedLayout() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isClicked, setIsClicked] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div
      className="h-full w-full flex justify-between"
      style={{ position: "relative" }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.99), rgba(0,0,0,0.99))",
        }}
      >
        <source src={UnAuthVid} type="video/mp4" />
      </video>

      <div className="w-[50%] h-full flex justify-center items-center">
        <img
          src={UnauthPic2}
          alt=""
          className="w-[60%] h-[60%] object-cover sm"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        />
      </div>
      <div
        className="w-[50%] h-full flex flex-col items-center gap-6"
        style={{ opacity: 0.9 }}
      >
        <div
          className="h-[75%] w-[50%] mt-7 shadow-inner border-slate shadow-slate-500 rounded-[10px]"
          style={{ background: "rgba(0, 0, 0, 0.85)" }}
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="h-[8%] w-[100%] gap-5 text-[20px] flex justify-center items-center rounded-xl">
            <h3>
              <Link
                to="/auth/signup"
                className={`${
                  pathname === "/auth/signup"
                    ? "underline text-blue-400 font-[700]"
                    : "text-white"
                } `}
                onClick={handleClick}
              >
                Sign Up
              </Link>
            </h3>

            <h3>
              <Link
                to="/auth/"
                className={`${
                  pathname === "/auth/"
                    ? "underline text-blue-400 font-[700]"
                    : "text-white"
                } `}
                onClick={handleClick}
              >
                Sign In
              </Link>
            </h3>
          </div>
          <div className="h-[92%] w-[100%]">
            <Outlet />
          </div>
        </div>
        <div
          className="h-[15%] w-[65%] flex flex-col shadow-md shadow-stone-700 rounded-md"
          style={{ background: "rgba(0, 0, 0, 0.85)" }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="h-[50%] w-full flex justify-evenly items-center text-[22px]">
            <span className="text-blue-400 bg-slate-300 h-[70%] w-[9%] text-[30px] flex justify-center items-center rounded-2xl hover:text-blue-800 transition duration-300 transform hover:scale-110">
              <FaLinkedin />
            </span>
            <span className="text-red-400 bg-slate-300 h-[70%] w-[9%] text-[30px] flex justify-center items-center rounded-2xl hover:text-red-800 transition duration-300 transform hover:scale-110">
              <FaInstagram />
            </span>
            <span className="text-blue-400 bg-slate-300 h-[70%] w-[9%] text-[30px] flex justify-center items-center rounded-2xl hover:text-blue-800 transition duration-300 transform hover:scale-110">
              <FaFacebook />
            </span>
            <span className="text-blue-400 bg-slate-300 h-[70%] w-[9%] text-[30px] flex justify-center items-center rounded-2xl hover:text-blue-800 transition duration-300 transform hover:scale-110">
              <FaTwitter />
            </span>
            <span className="text-red-400 bg-slate-300 h-[70%] w-[9%] text-[30px] flex justify-center items-center rounded-2xl hover:text-red-800 transition duration-300 transform hover:scale-110">
              <FaPinterest />
            </span>
            <span className="text-slate-600 bg-slate-300 h-[70%] w-[9%] text-[30px] flex justify-center items-center rounded-2xl hover:text-gray-800 transition duration-300 transform hover:scale-110">
              <FaGithub />
            </span>
          </div>
          <div className="h-[50%] w-full flex justify-between px-3">
            <div className="flex items-center gap-4">
              <FaPhone className="text-slate-300 hover:text-blue-600 transition duration-300 transform hover:scale-110" />
              <p className="text-blue-400 font-[600] hover:text-blue-600 transition duration-300 cursor-pointer">
                (+234) 906-896-4699
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-slate-300 hover:text-blue-600 transition duration-300 transform hover:scale-110" />
              <p className="text-blue-400 font-[600] hover:text-blue-600 transition duration-300 cursor-pointer">
                adamsgodwin993@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnauthenticatedLayout;
