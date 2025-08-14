"use client";
import React from 'react';
import HTMLFlipBook from "react-pageflip";
import Image from 'next/image';
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: "400" });

export default function Book() {
  const resumePages = [
    {
      title: "About Me",
      content: `Hi, I'm Akash Upadhyay — a Passionate Web Developer and Final-Year Electrical Engineering Student.
I'm deeply enthusiastic about building responsive, high-performance web applications and diving into the world of Web3. With a strong foundation in both engineering and programming, I love turning ideas into interactive digital experiences. Whether it's creating seamless UIs, working with modern frameworks, or exploring blockchain technologies, I enjoy being at the forefront of innovation and learning something new every day.`,
    },
    {
      title: "Skills",
      content: `- JavaScript, TypeScript, React, Next.js\n\n- Tailwind CSS, \n\n- Node.js, Express.js\n\n- MongoDB, PostgreSQL\n\n- Web3, Blockchain basics\n\n- Git, GitHub, REST APIs \n\n `,
    },
    {
      title: "Projects",
      content: `Payment Transfer Web Application: \n\nFull-stack clone built with Next.js, TypeScript, NextAuth.js, Prisma, TailwindCSS, and Docker. Features secure auth, webhook simulation for real-time fund transfer, PostgreSQL database, Turborepo monorepo setup, and CI/CD deployment to GCP.  


\n\nDecentralized Token Application:\n\n React.js + JavaScript + Node.js, decentralized app for creating, transferring, and tracking tokens on DFINITY’s Internet Computer. Built with TailwindCSS for responsive UI and Motoko canisters for secure, scalable backend logic.  
`,
    },
    
    {
      title: "Education",
      content: `B.E Mechanical Engineering (2022–2026)\nSant Longowal Institute Of Engineering and Technology\n\n- Cultural Fest Core Member: Madhuram 2024`,
    },
    {
      title: "Contact",
      content: `📧 akashupadhyay055@gmail.com\n\n🔗 https://github.com/Akash181002\n🔗 https://www.linkedin.com/in/iakashhh/\n`,
    },
  ];

  return (
    <div className={`${caveat.className} py-8 w-full flex justify-center`}>
      <div className="scale-[0.7] sm:scale-[0.8] md:scale-[0.9] lg:scale-[1] origin-top transition-transform duration-300">
        <HTMLFlipBook
          width={370}
          height={600}
          size="fixed"
          maxShadowOpacity={0.5}
          drawShadow={true}
          showCover={true}
          className="shadow-xl"
        >
          {/* Cover Page */}
          <div className="bg-[#f0f4f8] w-full h-full flex flex-col items-center justify-center text-[#002970] font-sans rounded-xl border-2 shadow-xl p-4">
            <Image
              src="/Akash_img.jpg"
              alt="Akash Upadhyay"
              width={100}
              height={100}
              className="rounded-full border-2 border-[#002970] shadow-md mb-4 object-cover"
            />
          
            <h1 className="text-3xl font-bold">Akash Upadhyay</h1>
            <p className="text-xl text-center opacity-90">
              Web Developer • Engineer • Tech Enthusiast
            </p>
            <Image
              src="/bgImage.png"
              alt="Computer Image"
              width={310}
              height={310}
              className="p-4 pt-12"
            />
            <p className="text-center text-[#002970]">Turn the pages →</p>

          </div>

          {/* Resume Pages */}
          {resumePages.map((page, index) => (
            <div
              key={index}
              className="bg-[#f0f4f8] w-full h-full p-6 flex flex-col font-sans rounded-xl border-2 shadow-md overflow-auto"
            >
              <h2 className="text-2xl font-bold text-[#002970] mb-3">
                {page.title}
              </h2>
              <p className="text-[#002970] whitespace-pre-line text-base leading-6">
                {page.content}
              </p>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}
