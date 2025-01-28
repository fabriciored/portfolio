import ListControls from "@/components/list-controls";
import ProjectsList from "@/components/lists/projects";
import CenteredPage from "@/layout/page/centered";
import { Project } from "@/types";
import fetchData from "@/utils/fetch";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [maxPages, setMaxPages] = useState<number | null>(null);


  useEffect(() => {
    fetchData({
      entity: projects as Project[],
      route: "projects",
      page,
      limit,
      setData: setProjects,
      setMaxPages,
    });
;
  }, [page, limit, maxPages]);

  return (
    <CenteredPage>
      <h2 className="text-3xl font-bold mb-5">Projects</h2>
      <ListControls maxPages={maxPages as number} setLimit={setLimit} setPage={setPage} limit={limit} page={page}  />
     <ProjectsList projects={projects}/>
    </CenteredPage>
  );
}
