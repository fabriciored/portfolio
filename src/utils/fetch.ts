interface fetchDataProps {
  entity: Array<unknown>;
  route: string;
  page: number;
  limit: number;
  setData: Function;
  setMaxPages: Function;
}

const fetchData = async ({
  entity,
  route,
  page,
  limit,
  setData,
  setMaxPages,
}: fetchDataProps) => {
  const data = (await fetch(`/api/${route}?page=${page}&limit=${limit}`).then(
    (res) => res.json()
  )) as {
    totalItems: number;
    data: typeof entity;
  };
  setData(data.data);
  const totalItems = data.totalItems;
  const totalPages = Math.ceil(totalItems / limit);
  setMaxPages(totalPages);
};

export default fetchData;
