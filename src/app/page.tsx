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
  title: string;
  links: LinkData[];
};

const data: Section[] = [
  {
    id: "1",
    title: "1.1 History of Computer Systems and Computer Generations",
    links: [
      { href: "history-of-computer-systems-and-computer-generations/notes", text: "Notes" },
      { href: "notefds", text: "Mind Map" },
      { href: "notfdses", text: "MCQs" },
      { href: "nofdstes", text: "Brief Questions" },
      { href: "nfdsotes", text: "Detailed Questions" },
    ],
  },
  {
    id: "2",
    title: "1.2 Understanding Systems and Their Types",
    links: [
      { href: "understanding-systems-and-their-types/notes", text: "Notes" },
      { href: "notfdses", text: "Mind Map" },
      { href: "ndsotes", text: "MCQs" },
      { href: "aaanotes", text: "Brief Questions" },
      { href: "notesfdsfds", text: "Detailed Questions" },
    ],
  },
  {
    id: "3",
    title: "1.3 Core Components of a Computer System",
    links: [
      { href: "core-components-of-a-computer-system/notes", text: "Notes" },
      { href: "nfdsfdsafotes", text: "Mind Map" },
      { href: "dsfsaadsafd", text: "MCQs" },
      { href: "nofadsfadsfates", text: "Brief Questions" },
      { href: "nofdasfdstes", text: "Detailed Questions" },
    ],
  },
  {
    id: "4",
    title: "1.4 Von Neumann Architecture",
    links: [
      { href: "von-neumann-architecture/notes", text: "Notes" },
      { href: "notes", text: "Mind Map" },
      { href: "notes", text: "MCQs" },
      { href: "notes", text: "Brief Questions" },
      { href: "notes", text: "Detailed Questions" },
    ],
  },
  {
    id: "5",
    title: "1.5 Data Transmission within a computer system",
    links: [
      { href: "data-transmission-within-a-computer-system/notes", text: "Notes" },
      { href: "notes", text: "Mind Map" },
      { href: "notes", text: "MCQs" },
      { href: "notes", text: "Brief Questions" },
      { href: "notes", text: "Detailed Questions" },
    ],
  },
  {
    id: "5",
    title: "1.6 Types and Hierarchy of Computer Memory",
    links: [
      { href: "types-and-hierarchy-of-computer-memory/notes", text: "Notes" },
      { href: "notes", text: "Mind Map" },
      { href: "notes", text: "MCQs" },
      { href: "notes", text: "Brief Questions" },
      { href: "notes", text: "Detailed Questions" },
    ],
  },
];

export default function Home() {
  return (
    <div className="p-3">
      <h1 className="font-bold text-3xl">Computer Systems</h1>
      <div className="flex gap-6 flex-wrap mt-3">
        {data.map((section) => (
          <div key={section.id} className="rounded-md flex flex-col gap-3 bg-white w-[400px] py-3 px-3 border shadow-xl">
            <h1 className="font-bold text-lg">{section.title}</h1>
            <div className="flex flex-row gap-4 flex-wrap">
              {section.links.map((link) => (
                <Link key={link.href} href={link.href} className="bg-violet-900 w-fit q py-2 text-center px-4 text-white rounded-xl">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
