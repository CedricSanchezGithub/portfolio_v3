"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { title } from "@/components/primitives";
import {
  LineMdChevronSmallLeft,
  LineMdChevronSmallRight,
} from "@/components/icons";

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
      <h1 className={title({ color: "blue" })}>My projects</h1>
      <div className="hidden lg:block mt-8">
        <div className={"flex items-center"}>
          <div>
            <LineMdChevronSmallLeft
              className="hidden xl:block embla__prev cursor-pointer"
              onClick={scrollPrev}
            />
          </div>
          <div className="embla">
            <div ref={emblaRef} className="embla__viewport">
              <div className="embla__container">
                <Card
                  className={
                    " border-1 border-gray-800 p-4 m-4 embla__slide justify-between"
                  }
                >
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
                    <p>
                      <span className={title({ size: "xs", color: "blue" })}>
                        Type:
                      </span>{" "}
                      Website
                    </p>
                    <p>
                      <span className={title({ size: "xs", color: "blue" })}>
                        For:
                      </span>{" "}
                      Sport Association
                    </p>
                    <p>
                      <span className={title({ size: "xs", color: "blue" })}>
                        Tech:
                      </span>{" "}
                      HTML/SASS/JS
                    </p>
                    <p>
                      <span className={title({ size: "xs", color: "pink" })}>
                        offline
                      </span>
                    </p>
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

                <Card
                  className={
                    "border-1 border-gray-800 p-4 m-4 embla__slide justify-between"
                  }
                >
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
                    <p>
                      {" "}
                      <span className={title({ size: "xs", color: "blue" })}>
                        Type:
                      </span>{" "}
                      Android App
                    </p>
                    <p>
                      {" "}
                      <span className={title({ size: "xs", color: "blue" })}>
                        For:
                      </span>{" "}
                      Training
                    </p>
                    <p>
                      {" "}
                      <span className={title({ size: "xs", color: "blue" })}>
                        Tech:
                      </span>{" "}
                      Kotlin / Jetpack Compose
                    </p>
                    <p />
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

                <Card
                  className={
                    "border-1 border-gray-800 p-4 m-4 embla__slide justify-between"
                  }
                >
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
                    <p>
                      {" "}
                      <span className={title({ size: "xs", color: "blue" })}>
                        Type:
                      </span>{" "}
                      Backend, API, CD/CI
                    </p>
                    <p>
                      {" "}
                      <span className={title({ size: "xs", color: "blue" })}>
                        For:
                      </span>{" "}
                      Training
                    </p>
                    <p>
                      {" "}
                      <span className={title({ size: "xs", color: "blue" })}>
                        Tech:
                      </span>{" "}
                      Kotlin / SpringBoot / Docker
                    </p>
                    <p>
                      {" "}
                      <span className={title({ size: "xs", color: "pink" })}>
                        offline
                      </span>
                    </p>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://github.com/CedricSanchezGithub/emf-customs"
                    >
                      Visit source code on GitHub.
                    </Link>
                  </CardFooter>
                </Card>

                <Card
                  className={
                    "border-1 border-gray-800 p-4 m-4 embla__slide justify-between"
                  }
                >
                  <CardHeader className={"justify-evenly w-full"}>
                    <Image
                      alt="nextui logo"
                      height={40}
                      radius="sm"
                      src="./EMFlogo.webp"
                      width={40}
                    />
                    Emf Calendar
                  </CardHeader>
                  <Divider />
                  <CardBody className={"text-left"}>
                    <p>
                      {" "}
                      <span className={title({ size: "xs", color: "blue" })}>
                        Type:
                      </span>{" "}
                      Dates, Calendar
                    </p>
                    <p>
                      {" "}
                      <span className={title({ size: "xs", color: "blue" })}>
                        For:
                      </span>{" "}
                      EMF / Training
                    </p>
                    <p>
                      {" "}
                      <span className={title({ size: "xs", color: "blue" })}>
                        Tech:
                      </span>{" "}
                      ReactJS, fullcalendar.io, MUI
                    </p>
                    <p>
                      {" "}
                      <Link
                        className={title({ size: "xs", color: "green" })}
                        href={"https://emf.fr/calendrier-des-evenements/"}
                        isExternal={true}
                      >
                        online
                      </Link>
                    </p>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://github.com/CedricSanchezGithub/emf-customs"
                    >
                      Visit source code on GitHub.
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
          <div>
            <LineMdChevronSmallRight
              className="hidden xl:block embla__next cursor-pointer"
              onClick={scrollNext}
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <Card
          className={
            " border-1 border-gray-800 p-4 m-4 embla__slide justify-between"
          }
        >
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
            <p>
              <span className={title({ size: "xs", color: "blue" })}>
                Type:
              </span>{" "}
              Website
            </p>
            <p>
              <span className={title({ size: "xs", color: "blue" })}>For:</span>{" "}
              Sport Association
            </p>
            <p>
              <span className={title({ size: "xs", color: "blue" })}>
                Tech:
              </span>{" "}
              HTML/SASS/JS
            </p>
            <p>
              <span className={title({ size: "xs", color: "pink" })}>
                offline
              </span>
            </p>
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

        <Card
          className={
            "border-1 border-gray-800 p-4 m-4 embla__slide justify-between"
          }
        >
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
            <p>
              {" "}
              <span className={title({ size: "xs", color: "blue" })}>
                Type:
              </span>{" "}
              Android App
            </p>
            <p>
              {" "}
              <span className={title({ size: "xs", color: "blue" })}>
                For:
              </span>{" "}
              Training
            </p>
            <p>
              {" "}
              <span className={title({ size: "xs", color: "blue" })}>
                Tech:
              </span>{" "}
              Kotlin / Jetpack Compose
            </p>
            <p />
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

        <Card
          className={
            "border-1 border-gray-800 p-4 m-4 embla__slide justify-between"
          }
        >
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
            <p>
              {" "}
              <span className={title({ size: "xs", color: "blue" })}>
                Type:
              </span>{" "}
              Backend, API, CD/CI
            </p>
            <p>
              {" "}
              <span className={title({ size: "xs", color: "blue" })}>
                For:
              </span>{" "}
              Training
            </p>
            <p>
              {" "}
              <span className={title({ size: "xs", color: "blue" })}>
                Tech:
              </span>{" "}
              Kotlin / SpringBoot / Docker
            </p>
            <p>
              {" "}
              <span className={title({ size: "xs", color: "pink" })}>
                offline
              </span>
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/CedricSanchezGithub/emf-customs"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>

        <Card
          className={
            "border-1 border-gray-800 p-4 m-4 embla__slide justify-between"
          }
        >
          <CardHeader className={"justify-evenly w-full"}>
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="./EMFlogo.webp"
              width={40}
            />
            Emf Calendar
          </CardHeader>
          <Divider />
          <CardBody className={"text-left"}>
            <p>
              {" "}
              <span className={title({ size: "xs", color: "blue" })}>
                Type:
              </span>{" "}
              Dates, Calendar
            </p>
            <p>
              {" "}
              <span className={title({ size: "xs", color: "blue" })}>
                For:
              </span>{" "}
              EMF / Training
            </p>
            <p>
              {" "}
              <span className={title({ size: "xs", color: "blue" })}>
                Tech:
              </span>{" "}
              ReactJS, fullcalendar.io, MUI
            </p>
            <p>
              {" "}
              <Link
                className={title({ size: "xs", color: "green" })}
                href={"https://emf.fr/calendrier-des-evenements/"}
                isExternal={true}
              >
                online
              </Link>
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/CedricSanchezGithub/emf-customs"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
