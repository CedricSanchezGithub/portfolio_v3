// components/ContainersList.tsx
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";

import { fetchContainers, Container } from "../api/raspbyapi/raspyapi";

const ContainersList: React.FC = () => {
  const [containers, setContainers] = useState<Container[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContainers()
      .then((data) => setContainers(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <p>Error fetching containers: {error}</p>;
  }

  return (
    <ul>
      {containers.map((container) => (
        <li key={container.id}>
          <Card
            className={
              "border-1 border-gray-800 p-4 m-4 bg-transparent backdrop-blur"
            }
          >
            <CardHeader className="flex gap-3">
              <Image height={50} src={container.icon_url} width={50} />
              {container.name}
            </CardHeader>
            <Divider />

            <CardBody>
              <p>
                Status:{" "}
                {container.status === "running" ? "🟢 Running" : "🔴 Exited"}
              </p>
              <p>Image: {container.image}</p>
            </CardBody>
            <Divider />

            <CardFooter>
              <Link isExternal showAnchorIcon href={container.dockerhub_url}>
                Visit source code on DockerHub.
              </Link>
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default ContainersList;
