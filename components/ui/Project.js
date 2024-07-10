/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import marketing from "/public/img/digital-marketing.png";
import brandIdentity from "/public/img/brand-indentity.png";
import Link from "next/link";

const Project = () => {
  const projects = [
    { id: 1, title: "Digital", title2: "marketing", hoverImg: marketing },
    { id: 2, title: "Brand", title2: "identity", hoverImg: brandIdentity },
    { id: 3, title: "Web", title2: "development", hoverImg: marketing },
    { id: 4, title: "Product", title2: "designing", hoverImg: brandIdentity },
  ];
  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      {projects.map((project) => {
        return (
          <Link key={project.id} href={`/serveice-details/${project.id}`}>
            <div class="flex gap-4  md:flex-row items-center justify-between group transition-all relative  xl:px-10 px-3 py-[50px] hover:bg-white group-hover:shadow-sm duration-500  ">
              <div className="group md:flex  ">
                <h6 className="w-[270px] text-[26px] font-bold group-hover:text-[#7ebbf2] duration-500">
                  {project.title} <br />
                  {project.title2}
                </h6>
                <p className="text-[#767676] ">
                  Once the concept is established, I move on to the design
                  phase. Here, create <br /> a visual representation of the
                  website that reflects the client's brand and <br /> messaging
                  eventually management
                </p>
              </div>
              <Image
                src={project.hoverImg}
                alt={project.title}
                class="absolute scale-0  duration-500 transition-all w-[320px]   xl:right-0 lg:right-32 md:right-1/4 sm:right-[35%] xs:right-[46%] object-cover  group-hover:scale-[1] group-hover:rotate-40"
              ></Image>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Project;
