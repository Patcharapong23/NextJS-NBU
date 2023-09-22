"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaHome, FaBed } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [menuIcon, setIcon] = useState(false);
  const handleSmallerScreensNavigation = () => {
    setIcon(!menuIcon);
  };
  return (
    <header
      className="bg-[#FAFAFA] text-[#0000} w-full ease-in duration-300 fixed top-0 left-0 z-10 border-b-4 border-b-[#000]
        "
    >
      <nav className="max-w-{1366px} mx-auto h-{100px} flex justify-between items-center p-4">
        <div>
          <Link href="/" onClick={handleSmallerScreensNavigation}>
            <span className="flex items-center">
              <Image alt="logo" src={Logo} layout="responsive" sizes="40px" />
              <span className="  min-w-full	 font-bold text-3xl md:text-2xl xl:text-2xl ml-2 justify-between">
                NBU DMS
              </span>
            </span>
          </Link>
        </div>
        <ul className="hidden md:flex font-sembold text-1xl lg-text-[20px] text-[#707070]">
          <li className="mr-4 lg:mr-8 hover:text-[#E4965D] bg-clip-text border-b-2 border-transparent hover:border-[#E4965D] ">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-[#E4965D] bg-clip-text border-b-2 border-transparent hover:border-[#E4965D]">
            <Link href="/room_reservation">Room Reservation</Link>
          </li>
        </ul>
        <div
          onClick={handleSmallerScreensNavigation}
          className="flex md:hidden"
        >
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-{#E4965D}" />
          ) : (
            <AiOutlineMenu size={25} className="text-{##E4965D}" />
          )}
        </div>
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen  bg-[#E4965D] text-white text-center ease-in-out duration-700"
              : "md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#E4965D] text-white text-center ease-in-out duration-700"
          }
        >
          <div className="w-full">
            <ul className=" uppercase font-bold text-2xl">
              <li
                onClick={handleSmallerScreensNavigation}
                className=" py-5 hover:text-[#E4965D] cursor-pointer"
              >
                <Link href="/">home</Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className=" py-5 hover:text-[#E4965D] cursor-pointer"
              >
                <Link href="/room_reservation">Room Reservation</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
