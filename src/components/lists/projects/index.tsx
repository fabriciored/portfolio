import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectsListProps {
  projects: Project[];
}

function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="flex flex-col gap-2">
      {projects.map((project) => (
        <div
          key={project.name + ` ` + Math.random()}
          className="flex flex-row w-full items-center bg-zinc-900 p-5 w-96"
        >
          <Image
            className="m-2"
            width={80}
            height={60}
            src={project.image}
            alt={project.name}
          />
          <div className="flex flex-col items-start">
            <p className="text-xl font-bold">{project.name}</p>
            <p className="">{project.description}</p>
            <p className="">{project.url}</p>
          </div>

          <div className="flex flex-row">
            {project.tags.map((tag) => (
              <p className="bg-green-800 p-1 rounded m-1" key={tag}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
