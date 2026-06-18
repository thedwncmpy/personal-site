import Header from "@/components/header";
import { projects } from "@/data/data";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Projects() {
  const visibleProjects = projects.filter((projectItem) => projectItem.visible);

  return (
    <div>
      <Header title="projects" />
      <div className="projects-blob">
        {
          "here are some of the projects i've worked on. i like developing personal projects and working with apis (like spotify) to build fun tools. some of these are also projects i have done for clients."
        }
      </div>
      <div>
        {visibleProjects.map((projectItem, id) => (
          <Link key={id} href={projectItem.url}>
            <div className="my-10 border border-light-grey p-8 hover:border-light-green group">
              <div className="text-3xl font-bold group-hover:text-light-green flex items-center justify-between">
                {projectItem.name}
                <span className="text-xl">
                  <HiArrowUpRight />
                </span>
              </div>
              <div className="text-light-grey my-2">{projectItem.role}</div>
              <div className="my-2">{projectItem.desc}</div>
              <div className="font-semibold my-2">achievements</div>
              {projectItem.points.map((pointItem, id) => (
                <div className="my-1" key={id}>
                  <span className="text-light-green">{"* "}</span>
                  {pointItem}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
