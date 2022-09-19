import React from "react";
import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-20 py-10 space-y-5 bg-gradient-to-r	from-gradient-100 to-gradient-200">
      <div className="w-full grid md:grid-cols-3 grid-cols-1 md:divide-x md:divide-white">
        <div className="flex flex-col w-full space-y-10 py-10">
          <div className="w-2/5">
            <Image
              src={"/logo-light.png"}
              width={228}
              height={136}
              layout="responsive"
              alt="logo"
            />
          </div>
          <p className="text-white">
            There are many variations of passages of Lorem available, majority
            have suffered alteration in some form, by injected humour.
          </p>
        </div>
        <div className="flex flex-col bg-chakraveer-footer bg-contain bg-no-repeat bg-center items-center w-full">
          <nav className="w-[88%] py-10 flex flex-col items-center justify-end space-y-8">
            <Link href="/">
              <a className="text-white font-semibold hover:scale-110 transition-all ease-in-out">
                Home
              </a>
            </Link>
            <Link href="/about-us">
              <a className="text-white font-semibold hover:scale-110 transition-all ease-in-out">
                About Us
              </a>
            </Link>
            <Link href="/party-constitution">
              <a className="text-white font-semibold hover:scale-110 transition-all ease-in-out">
                Party Constitution
              </a>
            </Link>
            <Link href="/about-national-president">
              <a className="text-white font-semibold hover:scale-110 transition-all ease-in-out">
                About National President
              </a>
            </Link>
            <Link href="/membership">
              <a className="text-white font-semibold hover:scale-110 transition-all ease-in-out">
                Membership
              </a>
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-center w-full">
          <nav className="w-[88%] py-10 flex flex-col items-center justify-end space-y-8">
            <Link href="/">
              <a className="text-white font-semibold hover:scale-110 transition-all ease-in-out">
                SUPPORTS
              </a>
            </Link>
            <Link href="/about-us">
              <a className="text-white font-semibold hover:scale-110 transition-all ease-in-out">
                Rural Support
              </a>
            </Link>
            <Link href="/party-constitution">
              <a className="text-white font-semibold hover:scale-110 transition-all ease-in-out">
                Education
              </a>
            </Link>
            <Link href="/about-national-president">
              <a className="text-white font-semibold hover:scale-110 transition-all ease-in-out">
                Political
              </a>
            </Link>
          </nav>
        </div>
      </div>
      <div className="w-full flex justify-end items-center space-x-5">
        <IoLogoFacebook className="text-white text-2xl" />
        <AiFillInstagram className="text-white text-2xl" />
        <IoLogoTwitter className="text-white text-2xl" />
        <IoLogoYoutube className="text-white text-2xl" />
        <IoLogoWhatsapp className="text-white text-2xl" />
      </div>
    </footer>
  );
};

export default Footer;
