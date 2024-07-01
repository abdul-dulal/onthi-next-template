import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = ({ img, title }) => {
  return (
    <Link class="relative group" href="/portfolio/2">
      <div class="image-container relative overflow-hidden">
        <Image src={img} alt={title} class="w-full rounded" />
        <div class="absolute  duration-500 opacity-0 group-hover:opacity-100 inset-0  bg-gradient-to-t from-white to-transparent p-8 ">
          <div class="hover-content absolute bottom-0 left-0 w-full p-8  ">
            <h6 class="mt-2 text-secondary">Branding</h6>
            <h6 class="text-[22px] font-bold text-primary">{title}</h6>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Service;
