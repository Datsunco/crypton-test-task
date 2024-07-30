import React from "react";
import Image from "next/image";
import { CarouselDemo } from "@/components/Carousel/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:w-[400px] lg:w-[1200px] w-full">
      <CarouselDemo />
    </main>
  );
}
