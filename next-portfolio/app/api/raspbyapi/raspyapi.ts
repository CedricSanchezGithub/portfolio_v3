// lib/fetchContainers.ts

export interface Container {
  name: string;
  id: string;
  image: string[];
  status: string;
  icon_url: string;
  dockerhub_url: string;
}

export const fetchContainers = async (): Promise<Container[]> => {
  const response = await fetch("http://192.168.1.50:8765/containers");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Container[] = await response.json();

  console.log(data);
  console.log(data[0].icon_url);

  return data;
};
