import Image from "next/image";
import Link from "next/link";
import React from "react";
import bloghero from "/public/img/blog-hero.png";

import BlogQuote from "@/components/ui/BlogQuote";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

const BlogDetails = () => {
  return (
    <div>
      <div className="max-w-[1370px]  mx-auto">
        <div className=" bg-[url('/img/blog-bg-cover.png')] w-full min-h-[500px] bg-no-repeat bg-center bg-cover">
          <div className="flex flex-col justify-center items-center  min-h-[500px] max-w-[1170px] mx-auto xl:px-0 px-3">
            <h3 className="">New design trends for the next year</h3>
            <div className="flex">
              <Link href={"/"} className="text-secondary text-[24px] font-bold">
                Home/
              </Link>
              <h6 className="text-[24px] font-bold text-white">Blog details</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1170px] mx-auto xl:px-0 px-3">
        <h3 className="mt-24 mb-10">
          Had a great time with you, you did a great job and designed the tattoo
          in the way I wanted
        </h3>
        <h6 className="text-lg font-bold mb-6">April 20. 2023</h6>
        <Image src={bloghero} alt="Blog hero"></Image>
        <h3 className="lg:text-3xl my-10">
          How long to wait before working out after getting a website
        </h3>
        <p className="mb-8">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. emo enim ipsam voluptatem quia voluptas sit aspernatur
          aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt.
        </p>
        <p className="mb-16">
          Ellentesque sit amet odio nisi. Phasellus quis lorem leo. s, libero
          diam finibus tellus, at sagittis tellus eros vitae nisi. Sed dignissim
          augue sit amet diam laoreet venenatis. Aliquam bibendum erat eu nisi
          faucibus dignissim. Phasellus dignissim est tempor eros pulvinar
          luctus. Nam vulputate, risus a efficitur cursus, felis dolor vulputate
          mi, ac eleifend libero velit sed nunc.
        </p>
        <h3 className="lg:text-3xl">Look for ideas in unusual places</h3>
        <p className="my-10">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. emo enim ipsam voluptatem quia voluptas sit aspernatur
          aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Ellentesque sit amet odio nisi.
          Phasellus quis lorem leo. s, libero diam finibus tellus, at sagittis
          tellus eros vitae nisi. Sed dignissim augue sit amet diam laoreet
          venenatis. Aliquam bibendum erat eu nisi faucibus dignissim. Phasellus
          dignissim est tempor eros pulvinar luctus. Nam vulputate, risus a
          efficitur cursus, felis dolor vulputate mi, ac eleifend libero velit
          sed nunc.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. emo enim ipsam voluptatem quia voluptas sit aspernatur
          aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Ellentesque sit amet odio nisi.
          Phasellus quis lorem leo. s, libero diam finibus tellus, at sagittis
          tellus eros vitae nisi. Sed dignissim augue sit amet diam laoreet
          venenatis. Aliquam bibendum erat eu nisi faucibus dignissim. Phasellus
          dignissim est tempor eros pulvinar luctus. Nam vulputate, risus a
          efficitur cursus, felis dolor vulputate mi, ac eleifend libero velit
          sed nunc.
        </p>

        <BlogQuote />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default BlogDetails;
