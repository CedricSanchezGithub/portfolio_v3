"use client";
import React from "react";

import ContainersList from "./ContainersList";

import { title } from "@/components/primitives";

export default function RaspberryPage() {
  return (
    <div>
      <h1 className={title({ color: "green" })}>Raspberry PI</h1>
      <ContainersList />
    </div>
  );
}
