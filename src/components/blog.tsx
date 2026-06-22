import React from "react";
import AnimatedLink from "./animated-link";
import { blogs as content } from "@/data/data";
import Link from "next/link";

const sortedBlogs = [...content].sort((a, b) => b.date.localeCompare(a.date));

const Blogs = () => {
  return (
    <div>
      <h3 className="section-heading">
        <span className=" text-light-green">{"* "}</span>blogs
      </h3>

      <div className="my-5">
        {sortedBlogs.slice(0, 2).map((blogItem, id) => (
          <Link href={blogItem.url} key={id}>
            <div className="hover-group flex items-center justify-between py-2">
              <div className="hover-group-text text-xl transition-colors duration-400 ease-in-out">
                {blogItem.name}
              </div>
              <div className="text-light-grey">{blogItem.displaydate}</div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <AnimatedLink href="/blogs" text="all blogs" />
      </div>
    </div>
  );
};

export default Blogs;
