"use client";
import Book from "@/component/Book";
import ContactPage from "@/component/Contact";
import Education from "@/component/Education";

import ProjectPage from "@/component/Project";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f0f4f8] w-screen h-screen">

<div className="relative">
        <Book />

        {/* Scroll Arrow */}
        <div className="absolute bottom-6 left-10 transform -translate-x-1/2">
          <a href="#download-cv">
            <svg
              className="w-8 h-8 text-[#002970] animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* CV Download Section */}
      <section
        id="download-cv"
        className="w-full flex justify-center items-center pt-2 pb-10"
      >
        <a
          href="/Akash_upadhyay_resume.pdf"
          download
          className="bg-[#002970] text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
        >
          Download My CV
        </a>
      </section>
       
     
      <Education/>
      
      <ProjectPage></ProjectPage>
      <ContactPage></ContactPage>
    </div>
  );
}
