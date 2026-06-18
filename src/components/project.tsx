import React from "react";
import { projects } from "@/data/data";
import Link from "next/link";
import AnimatedLink from "./animated-link";

const Project = () => {
  const visibleProjects = projects.filter((projectItem) => projectItem.visible);

  return (
    <div>
      <h3 className="section-heading">
        <span className=" text-light-green">{"* "}</span>projects
      </h3>
      <div>
        {visibleProjects.map((projectItem, id) => (
          <Link href={projectItem.url} className="group" key={id}>
            <h4 className="project-heading group-hover:text-light-green">
              {projectItem.name}
            </h4>
            <div className="project-details text-light-grey">
              {projectItem.role}
            </div>
            <div className="mb-5">{projectItem.desc}</div>
          </Link>
        ))}
        <AnimatedLink href="/projects" text="all projects" />
      </div>
    </div>
  );
};

export default Project;
