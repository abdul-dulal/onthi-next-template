import Image from "next/image";
import Link from "next/link";
import React from "react";
import blog1 from "/public/img/blog-post.png";
import blog2 from "/public/img/blog-post2.png";
const Blog = () => {
  const blogs = [
    { id: 1, title: "A Fresh beginging of website", img: blog1 },
    { id: 2, title: "Mobil billing for digital goods", img: blog2 },
  ];
  return (
    <div className="grid xs:grid-cols-2 gap-7  ">
      {blogs.map((blog) => {
        return (
          <Link
            key={blog.id}
            href={`/blog-details/${blog.id}`}
            className="group"
          >
            <div className="">
              <Image
                src={blog.img}
                className=" group-hover:scale-95 duration-500 group-hover:rounded"
                alt={blog.title}
              />
            </div>
            <p>April 6. 2023 _ Website development</p>
            <h3 className="md:text-[28px] sm:text-2xl xs:text-xl ">
              {blog.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
