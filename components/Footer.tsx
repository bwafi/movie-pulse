import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FiInstagram, FiGithub, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between text-soft-black px-3 w-full bg-teal py-5">
      <div className="flex items-center ">
        &copy; 2023 Created with <AiFillHeart className="text-xl mx-1 text-red-700" /> by{" "}
        <a
          href="https://github.com/bwafi"
          className="ml-1 text-black hover:text-soft-black hover:border-b hover:border-b-soft-black">
          Syahroni Bawafi
        </a>
      </div>

      <div>
        <ul className="flex items-center gap-3">
          <li className="text-2xl hover:text-soft-black/80">
            <a href="https://www.instagram.com/itssyahroni" target="_blank">
              <FiInstagram />
            </a>
          </li>
          <li className="text-2xl hover:text-soft-black/80">
            <a href="https://github.com/bwafi" target="_blank">
              <FiGithub />
            </a>
          </li>
          <li className="text-2xl hover:text-soft-black/80">
            <a href="https://web.facebook.com/profile.php?id=100016577130120" target="_blank">
              <FiFacebook />
            </a>
          </li>
          <li className="text-2xl hover:text-soft-black/80">
            <a href="https://twitter.com/itssyahroni" target="_blank">
              <FiTwitter />
            </a>
          </li>
          <li className="text-2xl hover:text-soft-black/80">
            <a href="https://www.linkedin.com/in/syahroni-bawafi-93b422265/" target="_blank">
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
