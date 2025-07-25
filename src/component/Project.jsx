import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Payment Transfer Web App",
    icon: "/GitHubLogo.png",
    description: `Developed a full-stack Paytm clone simulating real-world payment workflows using modern web technologies. Implemented secure authentication with NextAuth.js supporting multiple providers, and designed a mock banking webhook system to simulate real-time fund transfers and asynchronous payment updates. The backend was built using Prisma ORM and PostgreSQL for robust data modeling and transaction history. The UI was styled with TailwindCSS to ensure a responsive, clean interface. A monorepo architecture with Turborepo was adopted to enhance modularity and developer experience. The app was deployed on a GCP e2 instance using Docker, with a complete CI/CD pipeline for automated build, test, and deployment.`,
    live: "https://app1.yuvrajsingh.life",
    code: "https://github.com/Yuv1810/Paytm-V2",
  },
  {
    title: "Studybot Web-App",
    icon: "/GitHubLogo.png",
    description: `Built a study assistant web application with a responsive frontend using Next.js, TypeScript, and TailwindCSS, backed by a robust Express.js and Prisma-powered backend. Integrated the LLaMA3 AI model (8B parameters) to enable natural language Q&A and contextual guidance for learners. Developed RESTful APIs to facilitate smooth client-server communication and real-time updates. Additionally, implemented a quiz module that allows users to take practice tests and track their performance.`,
    code: "https://github.com/Yuv1810/Humanize_ai_project",
  },
];

export default function ProjectPage() {
  return (
    <div className="bg-[#f0f4f8] w-full h-auto flex flex-col font-sans rounded-xl border-2 shadow-md p-6 gap-6">
      <h2 className="text-xl font-bold text-[#002970] mb-2">Projects</h2>

      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          {/* Image */}
          <div className="w-full md:w-1/3 h-auto flex justify-center p-4">
            <Image
              src={project.icon}
              alt={`${project.title} Icon`}
              width={140}
              height={120}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3">
            <h3 className="text-[#002970] font-semibold mb-1 text-md">
              {project.title}
            </h3>
            <p className="text-sm text-[#002970] leading-6 whitespace-pre-line">
              {project.description}
            </p>
            {/* Links */}
            <div className="mt-2 flex flex-wrap gap-4 text-sm">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Live Demo
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
