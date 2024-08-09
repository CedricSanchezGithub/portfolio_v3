import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title({ color: "blue" })}>Introduction</h1>
      <div className="grid grid-cols-2 grid-rows-2 justify-center items-center">
        <div className="row-span-2">
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] p-4 m-4"
            shadow="sm">
            <CardHeader className={title({ size: "sm" })}>Story</CardHeader>
            <Image
              removeWrapper
              alt="office background"
              className="object-cover"
              src="https://t3.ftcdn.net/jpg/05/79/48/52/240_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg"
            />
            <CardBody>
              After several years as a baker, I decided to carry on my passion for IT.<br />
              Last year, i started a  training to become Fullstack Developer with a professional title Bac +2.<br />
              Now, i'm currently engaged with a training course with CA-TS and the school EPSI.<br />
              I will work on Android with CA-TS, and DevOps with specialization on AI with EPSI.
            </CardBody>
          </Card>
        </div>
        <div className="h-full ">
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] p-4 h-full m-4"
            shadow="sm">
            <CardHeader className={title({ size: "sm" })}>Technology</CardHeader>
            Android C33 Docker Figma Kotlin VSC Android studio Sass TailwindCSS Javascript SpringBoot Jetpack-Compose
          </Card>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] p-4 h-full m-4"
            shadow="sm">
            <CardHeader className={title({ size: "sm" })}>Who I am</CardHeader>

          </Card>
        </div>
      </div>
    </div>
  );
}
