"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <h1 className={title({ color: "blue" })}>My project</h1>
      <div className="embla">
        <div ref={emblaRef} className="embla__viewport">
          <div className="embla__container">
            <Card className={"p-4 m-4 embla__slide"}>
              <CardHeader className={"justify-evenly w-full"}>
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://wp-admin.hblunelmarsillargues.fr/wp-content/uploads/2024/07/logo-hblm.png"
                  width={40}
                />
                HBLM
              </CardHeader>
              <Divider />
              <CardBody className={"text-left "}>
                <p>Type: Website</p>
                <p>For: Sport Association</p>
                <p>Tech: HTML/SASS/JS</p>
                <p>offline (old)</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/CedricSanchezGithub/HBLM2"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>

            <Card className={"p-4 m-4 embla__slide"}>
              <CardHeader className={"justify-evenly w-full"}>
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="./bagueton.svg"
                  width={40}
                />
                Bagueton (App)
              </CardHeader>
              <Divider />
              <CardBody className={"text-left"}>
                <p>Type: Android App</p>
                <p>For: Training</p>
                <p>Tech: Kotlin / Jetpack Compose</p>
                <p>offline (old)</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/CedricSanchezGithub/Bagueton_Client/"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>

            <Card className={"p-4 m-4 embla__slide"}>
              <CardHeader className={"justify-evenly w-full"}>
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="./bagueton.svg"
                  width={40}
                />
                Bagueton (API)
              </CardHeader>
              <Divider />
              <CardBody className={"text-left"}>
                <p>Type: Backend, API, Database, CD/CI</p>
                <p>For: Training</p>
                <p>Tech: Kotlin / SpringBoot / Docker / k8s</p>
                <p>offline (old)</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/CedricSanchezGithub/Bagueton_Client/"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev...
      </button>
      <button className="embla__next" onClick={scrollNext}>
        ...Next
      </button>
    </div>
  );
}
