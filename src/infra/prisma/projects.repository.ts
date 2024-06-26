import PrismaRepository from "./prisma.repository";

export default class ProjectsRepository extends PrismaRepository {
    constructor() {
        super("Project");
      }
}