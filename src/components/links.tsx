import React from "react";
import Link from "next/link";
import { urls } from "@/data/data";
const Links = () => {
  return (
    <div>
      <h3 className="section-heading">
        <span className=" text-light-green">{"* "}</span>links
      </h3>
      <div className="flex gap-x-4">
        {urls.map((linkItem, id) => (
          <Link
            href={linkItem.url}
            key={id}
            className="hover-link"
          >
            {linkItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
