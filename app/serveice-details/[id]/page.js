import Image from "next/image";
import React from "react";
import service from "/public/img/Service_Details.png";
import service1 from "/public/img/Service_Details-1.png";
import service2 from "/public/img/Service_Details2.png";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import ServiceCounter from "@/components/ui/ServiceCounter";

const ServiceDetails = () => {
  return (
    <div>
      <div className="max-w-[1360px] relative bg-['url('/public/img/Service_Details.png')'] -z-[9999]">
        <Image src={service} alt="Service-detail" />

        <h3 className="text-white absolute left-[84px]  bottom-20">
          Service Details
        </h3>
      </div>
      <div className="max-w-[1170px] mx-auto xl:px-0 px-3">
        <ServiceCounter />

        <h3 className=" my-6">We launched porte template this week</h3>
        <p className="mb-4">
          Minimalism combined with elements of french typography and brutalism
          helped us to realize the site exactly as we imagined with the client
          at the same beginning: visually restrained, but stylish. Informative
          and pleasant to use, with an elegant aftertaste of a serious financial
          institution. Combined with elements of french typography and visually
          restrained, but stylish. Informative and pleasant to use, with an
          elegant aftertaste of a serious financial institutional client, and
          close collaboration. We are design agency to create something new
          template.
        </p>
        <h6 className="text-lg font-bold mb-5">Web development</h6>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. emo enim ipsam voluptatem quia voluptas sit aspernatur
          aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt.
        </p>
        <p className="my-11">
          Ellentesque sit amet odio nisi. Phasellus quis lorem leo. s, libero
          diam finibus tellus, at sagittis tellus eros vitae nisi. Sed dignissim
          augue sit amet diam laoreet venenatis. Aliquam bibendum erat eu nisi
          faucibus dignissim. Phasellus dignissim est tempor eros pulvinar
          luctus. Nam vulputate, risus a efficitur cursus, felis dolor vulputate
          mi, ac eleifend libero velit sed nunc.
        </p>
        <div className="grid xs:grid-cols-2 gap-7 mb-20">
          <Image
            src={service1}
            className="rounded hover:scale-95 duration-500"
            alt="Service detail"
          />

          <Image
            src={service2}
            className="rounded  hover:scale-95 duration-500"
            alt="Service detail"
          />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
