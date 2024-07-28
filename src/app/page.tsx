"use client";
import MyMindMap from "@/components/MyMindMap";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

type LinkData = {
  href: string;
  text: string;
};

type Section = {
  id: string;
  link: string;
  title: string;
};

const data: Section[] = [
  {
    id: "1",
    link: "/unit-1",
    title: "Unit 1: Computer Systems",
  },
  {
    id: "2",
    link: "/unit",
    title: "Unit 2: Computational Thinking & Algorithms",
  },
  {
    id: "3",
    link: "/unit",
    title: "Unit 3: Prgramming Fundamentals",
  },
  {
    id: "4",
    link: "/unit",
    title: "Unit 4: Data And Analysis",
  },
  {
    id: "5",
    link: "/unit",
    title: "Unit 5: Application of Computer Science",
  },
  {
    id: "6",
    link: "/unit",
    title: "Unit 6: Impacts of Computing",
  },
  {
    id: "7",
    link: "/unit",
    title: "Unit 7: Entrepreneurship",
  },
];

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl">Units</h1>
      <div className="flex gap-6 flex-wrap mt-3">
        {data.map((section) => (
          <Link href={section.link} key={section.id} className="rounded-md flex flex-col gap-3 bg-white w-[400px] py-3 px-3 border shadow-xl">
            <h1 className="font-bold text-lg">{section.title}</h1>
          </Link>
        ))}
        <Link href="/introduction-to-computers" className="rounded-md flex flex-col gap-3 bg-white w-[400px] py-3 px-3 border shadow-xl">
          <h1 className="font-bold text-lg">Unit 1S: Introduction to Computers</h1>

        </Link>
        <Link href="/computers-components" className="rounded-md flex flex-col gap-3 bg-white w-[400px] py-3 px-3 border shadow-xl">
          <h1 className="font-bold text-lg">Unit 2S: Computer Components</h1>

        </Link>
      </div>
    </div>
  );
}
