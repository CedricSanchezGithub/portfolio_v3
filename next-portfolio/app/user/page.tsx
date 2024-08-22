"use client";

import React from "react";
import { User } from "@nextui-org/user";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { useUser } from "@auth0/nextjs-auth0/client";

import { title } from "@/components/primitives";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <h1 className={title({ color: "green" })}>My Panel</h1>
        <Card className={"my-4 border-1 border-gray-800"}>
          <CardHeader />
          <CardBody>
            <div>
              <img
                alt={user.name || "User"}
                src={user.picture ?? "/path/to/default-image.jpg"}
              />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </CardBody>
          <CardFooter>
            <User
              avatarProps={{
                src: "./portrait.png",
              }}
              description="Software Engineer"
              name="Cédric Sanchez"
            />
          </CardFooter>
        </Card>
      </div>
    )
  );
}
