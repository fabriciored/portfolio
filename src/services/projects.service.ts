import ProjectsRepository from "@/infra/prisma/projects.repository"
import { Project } from "@/types";
export default class ProjectsService {
    private repository = new ProjectsRepository

    constructor() {
    }

    async getPaginate(page: number, limit: number): Promise<{ totalItems: number, data: Project[] }> {
        const data = await this.repository.findMany() as Project[];;
        const paginate = data.slice((page - 1) * limit, page * limit);
        return {
            totalItems: data.length,
            data: paginate
        }
    }
}