import { title } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/card";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title({ color: "blue" })}>Introduction</h1>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm">
        <CardBody>
          After several years as a baker, I decided to carry on my passion for IT.<br />
          Last year, i started a  training to become Fullstack Developer with a professional title Bac +2.<br />
          Now, i'm currently engaged with a training course with CA-TS and the school EPSI.<br />
          I will work on Android with CA-TS, and DevOps with specialization on AI with EPSI.
        </CardBody>
      </Card>
    </div>
  );
}
