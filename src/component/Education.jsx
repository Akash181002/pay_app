import React from "react";
import Image from "next/image";

export default function EducationPage() {
  return (
    <div className="bg-[#f0f4f8] w-full h-96 flex flex-col md:flex-row items-center justify-between font-sans rounded-xl border-2 shadow-md p-6">
    {/* Image Section */}
    <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
      <Image
        src="/sliet_logo.png"
        alt="Education Icon"
        width={100}
        height={100}
        className="rounded-lg shadow-md"
      />
    </div>
  
    {/* Text Section */}
    <div className="w-full md:w-2/3 md:pl-6 text-center md:text-center">
      <h2 className="text-xl font-bold text-[#002970] mb-2">Education</h2>
      <p className="text-[#002970] whitespace-pre-line text-sm leading-6">
        {`B.E Mechanical Engineering (2022–2026)
  Sant Longowal Institute Of Engineering and Technology
  
  - Cultural Fest Core Member: Madhuram 2024`}
      </p>
    </div>
  </div>
  
  );
}
