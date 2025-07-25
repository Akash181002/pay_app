import React from "react";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <div className="bg-[#f0f4f8] w-full h-auto flex flex-col justify-around font-sans rounded-xl border-2 shadow-md p-6 gap-6">
      {/* Experience 1 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-4">
        <div className="w-full md:w-2/3">
          <h2 className="text-xl font-bold text-[#002970] mb-2">Experience</h2>
          <p className="text-[#002970] whitespace-pre-line text-sm leading-6">
            {`Frontend Intern @ Innovaciotech — Next.js, TypeScript, React (August 2024 – February 2025)
During this internship, I developed a dynamic PDF generation feature using the React-pdf package, 
integrating backend APIs to render customized, client-specific PDFs with precise formatting and performance 
optimization. I also contributed to ERP systems by enhancing frontend functionality 
for managing client and employee data, improving the overall user experience.`}
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="/innovacioImage.png"
            alt="Innovacio Icon"
            width={190}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Experience 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-4 pt-18">
        <div className="w-full md:w-2/3">
          <p className="text-[#002970] whitespace-pre-line text-sm leading-6">
            {`SDE Intern @ Mphasis — Angular, Express.js, MySQL (February 2025 – June 2025)
At Mphasis, I built a full-stack data management system that enabled institutions to 
securely manage MySQL records. I implemented an Express.js backend with dynamic database connections and robust 
CRUD operations, and developed a user-friendly Angular frontend that allowed seamless interaction with database 
records without requiring SQL knowledge. To ensure secure API communication, I integrated authentication, 
rate limiting, and SQL injection protection. The codebase was structured using turborepo to enhance development 
efficiency and deployment workflows.`}
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="/Mphasis_Logo.png"
            alt="Startup Icon"
            width={190}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
