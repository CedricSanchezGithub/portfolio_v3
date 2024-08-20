import React from "react";
import { User } from "@nextui-org/user";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title({ color: "blue" })}>About</h1>
      <Card className={"my-4 border-1 border-gray-800"}>
        <CardHeader />
        <CardBody>
          This portfolio showcases my journey, my projects, and my aspirations.
          It allows me to experiment with various ideas I have in mind. If you,
          a traveler who stumbles upon this site, have any feedback to offer,
          please don&#39;t hesitate to contact me!
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
  );
}
