export type Project = {
    name: string;
    description: string;
    image: string;
    url: string;
    type: string;
    tags: string[];
  };

export type ProjectResponse = {
  totalItems: number;
  data: Project[];
}
  