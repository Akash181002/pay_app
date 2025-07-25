import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-[#f0f4f8] w-full h-1/3 flex flex-col justify-center items-center font-sans rounded-xl border-2 shadow-md p-6 text-center">
      <h2 className="text-xl font-bold text-[#002970] mb-16">Contact Me</h2>
      <div className="flex gap-6 text-[#002970] text-2xl">
      <a
  href="mailto:engyuvrajsingh@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="mx-2 md:mx-12"
>
  <FaEnvelope className="text-2xl mb-1" />
</a>


        <a href="https://www.linkedin.com/in/yuvrajsingh-btech/" target="_blank" rel="noopener noreferrer" className="mx-2 md:mx-12">
          <FaLinkedin className="hover:text-blue-600 transition" />
        </a>
        <a href="https://twitter.com/YuvrajS18286" target="_blank" rel="noopener noreferrer" className="mx-2 md:mx-12">
          <FaTwitter className="hover:text-blue-400 transition" />
        </a>
        <a href="https://www.instagram.com/yuvsingh319/" target="_blank" rel="noopener noreferrer" className="mx-2 md:mx-12">
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
      </div>
    </div>
  );
}
