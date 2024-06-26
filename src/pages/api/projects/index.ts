import type { NextApiRequest, NextApiResponse } from "next";
import { ProjectResponse } from "@/types";
import ProjectsService from "@/services/projects.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Partial<ProjectResponse>>,
  projects = new ProjectsService(),
) {
  const page = parseInt(req.query.page as string)
  const limit = parseInt(req.query.limit as string)
  res.status(200).json(await projects.getPaginate(page, limit));
}
