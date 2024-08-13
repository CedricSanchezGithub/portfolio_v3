import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Hello there!</h1>
        <br />
        <h1 className={title()}>I&apos;m</h1>
        <h1 className={title({ color: "blue" })}> Cédric Sanchez</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          I&apos;m at the beginning of a new journey,
          <br />
          to become a FullStack Developer.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          My Resume
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Currently engaged with{" "}
            <Code color="primary">
              <Link
                isExternal
                href={
                  "https://www.credit-agricole.com/marques-et-metiers/toutes-nos-marques/credit-agricole-technologies-et-services"
                }
              >
                CA-TS
              </Link>
            </Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
