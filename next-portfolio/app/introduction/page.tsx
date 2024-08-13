import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import { title } from "@/components/primitives";
import {
  SkillIconsAndroidstudioDark,
  SkillIconsCss,
  SkillIconsDocker,
  SkillIconsIdeaDark,
  SkillIconsKotlinDark,
  SkillIconsLinuxDark,
  SkillIconsRaspberrypiDark,
  SkillIconsReactDark,
  SkillIconsSass,
  SkillIconsSpringDark,
  SkillIconsTailwindcssDark,
  SkillIconsTypescript,
} from "@/components/skillsIcons";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title({ color: "blue" })}>Introduction</h1>
      <div className="grid grid-cols-2 gap-4 grid-rows-2 justify-center items-center py-6">
        <div className="row-span-2 h-full">
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] h-full p-4 flex items-center"
            shadow="sm"
          >
            <CardHeader className={title({ size: "sm" })}>Story</CardHeader>
            <Image
              isBlurred
              isZoomed
              alt="office background"
              className="object-cover"
              src="https://t3.ftcdn.net/jpg/05/79/48/52/240_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg"
            />
            <CardBody>
              After several years as a baker, I decided to carry on my passion
              for IT.
              <br />
              Last year, i started a training to become Fullstack Developer with
              a professional title &quot;Développeur Web & Web Mobile&quot;
              Bac+2.
              <br />
              Now, i&apos;m currently engaged with a training course with CA-TS
              and the school EPSI.
              <br />I will work on Android with CA-TS, and DevOps with
              specialization on AI with EPSI.
            </CardBody>
          </Card>
        </div>
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] h-full "
          shadow="sm"
        >
          <CardHeader className={title({ size: "sm" })}>Technology</CardHeader>
          <div
            className={"flex flex-wrap justify-evenly items-stretch gap-5 p-10"}
          >
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsDocker />
              Docker
            </div>
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsLinuxDark />
              Linux
            </div>
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsRaspberrypiDark />
              Raspberry
            </div>
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsAndroidstudioDark />
              Androidstudio
            </div>
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsSpringDark />
              SpringBoot
            </div>
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsKotlinDark />
              Kotlin
            </div>
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsIdeaDark />
              Intellij
            </div>
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsReactDark />
              ReactJS
            </div>
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsTypescript />
              TypeScript
            </div>
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsCss />
              CSS3
            </div>
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsTailwindcssDark />
              TailwindCSS
            </div>
            <div className={"text-center flex items-center flex-col flex-1"}>
              <SkillIconsSass />
              Sass
            </div>
          </div>
        </Card>
        <Card
          isBlurred
          className="border-none grid bg-background/60 dark:bg-default-100/50 max-w-[610px] h-full"
          shadow="sm"
        >
          <div className={"flex flex-col"}>
            <CardHeader className={title({ size: "sm" })}>Who I am</CardHeader>
            Curiosity Team spirit Good teaching skills Conscientious
          </div>
          <div className={"flex flex-col"}>
            <CardHeader className={title({ size: "sm" })}>
              Hobbies and interests
            </CardHeader>
            Weightlifting Mountains New technologies Sciences
          </div>
        </Card>
      </div>
    </div>
  );
}
