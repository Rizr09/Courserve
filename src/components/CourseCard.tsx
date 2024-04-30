import React from "react";
import Image from "next/image";

const CourseCard = () => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl w-96 items-center">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl">
        <Image 
            src={"/course-card.png"}
            width={336}
            height={180}
            alt="Course Image"
        />
      </div>
      <div className="flex flex-col p-6 gap-4 text-left w-full">
        <p className="block font-sans text-xs text-[#6C6C6C] antialiased font-normal leading-5">
          Organization
        </p>
        <h4 className="block mb-2 font-sans text-xl antialiased font-bold leading-5 tracking-normal">
          Course Name
        </h4>
        <p className="block font-sans text-xs text-[#6C6C6C] antialiased font-normal leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi aliquid quae placeat magnam et dolorum, consequuntur ex incidunt molestiae culpa necessitatibus quam aspernatur suscipit obcaecati laboriosam iure, sed quidem!
        </p>
      </div>
      <div className="flex p-6 pt-2 gap-2 w-full">
        <Image 
            src={"/database.svg"}
            width={22}
            height={25}
            alt="Database Icon"
        />
        <p className="block font-sans text-xs text-[#6C6C6C] antialiased font-normal leading-5">
          X Modul - Y Bulan
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
