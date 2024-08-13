import React from "react";
import { User } from "@nextui-org/user";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <Card>
        <CardHeader />
        <CardBody>
          This portfolio showcases my journey, my projects, and my aspirations.
          It allows me to experiment with various ideas I have in mind. If you,
          a traveler who stumbles upon this site, have any feedback to offer,
          please don't hesitate to contact me!
        </CardBody>
        <CardFooter>
          <User
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            description="Software Engineer"
            name="Cédric Sanchez"
          />
        </CardFooter>
      </Card>
    </div>
  );
}
