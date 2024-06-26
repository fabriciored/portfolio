import { PrismaClient } from "@prisma/client";

class PrismaRepository {
    protected readonly prisma: PrismaClient;

    constructor(private readonly modelName: string) {
        this.prisma = new PrismaClient();
    }
    async findMany(): Promise<any> {
        const data = await ((this.prisma as any)[this.modelName]).findMany();
        this.prisma.$disconnect();
        return data;
    }
}

export default PrismaRepository;