"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Chip } from "@nextui-org/chip";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo, LinkedinIcon } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useUser();

  return (
    <NextUINavbar
      isBlurred
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={() => {
        setIsMenuOpen(!isMenuOpen);
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">CED</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Linkedin"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />

          {!user && (
            <Chip
              avatar={
                <Avatar
                  getInitials={(name) => name.charAt(0)}
                  name="A"
                  size="sm"
                />
              }
              variant="flat"
            >
              {" "}
              <Link color="success" href={"/api/auth/login"}>
                Login
              </Link>
            </Chip>
          )}
          {user && (
            <>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Chip
                    as={"button"}
                    avatar={
                      <Avatar
                        name={user.nickname || "User"}
                        src={user.picture || ""}
                      />
                    }
                    variant="flat"
                  >
                    {user.nickname}
                  </Chip>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{user.name}</p>
                    <p>
                      <Link href={"/user"}>My Panel</Link>
                    </p>
                    <p>
                      <Link href={"/api/auth/logout"}>Logout</Link>
                    </p>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
