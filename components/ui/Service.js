import Image from "next/image";
import Link from "next/link";
import React from "react";
import digitalMarketing from "/public/img/digitalMarketing.png";
import service2 from "/public/img/service2.png";
import webDevelopment from "/public/img/web-development.png";
import productDesign from "/public/img/product-design.png";

const Service = () => {
  const services = [
    { id: 1, img: digitalMarketing, title: "Digital marketing" },
    { id: 2, img: service2, title: "Brand identity" },
    { id: 3, img: webDevelopment, title: "Web development" },
    { id: 4, img: productDesign, title: "Brand identity" },
  ];
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-8 mb-24">
      {services.map((service) => {
        return (
          <Link
            key={service.id}
            class="relative group"
            href={`/portfolio-details/${service.id}`}
          >
            <div class="image-container relative overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                class="w-full rounded"
              ></Image>
              <div class="absolute  duration-500 opacity-0 group-hover:opacity-100 inset-0  bg-gradient-to-t from-white to-transparent p-8 ">
                <div class="hover-content absolute bottom-0 left-0 w-full p-8  ">
                  <h6 class="mt-2 text-secondary">Branding</h6>
                  <h6 class="text-[22px] font-bold text-primary">
                    {service.title}
                  </h6>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Service;
