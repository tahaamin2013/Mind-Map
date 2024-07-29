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
        title: "1S.1 Central Processing Unit (CPU)",
        links: [
            { href: "central-processing-unit/notes", text: "Notes" },
            { href: "central-processing-unit/mind-map", text: "Mind Map" },
            { href: "central-processing-unit/quiz", text: "MCQs" },
            { href: "central-processing-unit/brief-questions", text: "Brief Questions" },
            { href: "nfdsotes", text: "Detailed Questions" },
        ],
    },
    {
        id: "2",
        title: "1S.2 Primary/Main memory (RAM, ROM) Secondary memory",
        links: [
            { href: "memory/notes", text: "Notes" },
            { href: "notfdses", text: "Mind Map" },
            { href: "memory/quiz", text: "MCQs" },
            { href: "memory/brief-questions", text: "Brief Questions" },
            { href: "notesfdsfds", text: "Detailed Questions" },
        ],
    },
    {
        id: "3",
        title: "Input/output devices",
        links: [
            { href: "input-output-devices/notes", text: "Notes" },
            { href: "nfdsfdsafotes", text: "Mind Map" },
            { href: "input-output-devices/quiz", text: "MCQs" },
            { href: "input-output-devices/brief-questions", text: "Brief Questions" },
            { href: "nofdasfdstes", text: "Detailed Questions" },
        ],
    },
    {
        id: "4",
        title: "Ports: serial and parallel ports",
        links: [
            { href: "ports/notes", text: "Notes" },
            { href: "nfdsfdsafotes", text: "Mind Map" },
            { href: "ports/quiz", text: "MCQs" },
            { href: "ports/brief-questions", text: "Brief Questions" },
            { href: "nofdasfdstes", text: "Detailed Questions" },
        ],
    },
    {
        id: "5",
        title: "Motherboard",
        links: [
            { href: "motherboard/notes", text: "Notes" },
            { href: "nfdsfdsafotes", text: "Mind Map" },
            { href: "motherboard/quiz", text: "MCQs" },
            { href: "motherboard/brief-questions", text: "Brief Questions" },
            { href: "nofdasfdstes", text: "Detailed Questions" },
        ],
    },
];

export default function page() {
    return (
         <div className="p-3">
            <h1 className="font-bold text-3xl">Unit 2S: Computer Components</h1>
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
                <div className="rounded-md flex flex-col gap-3 bg-white w-[400px] py-3 px-3 border shadow-xl">
                    <h1 className="font-bold text-lg">Computer Compoennts</h1>
                    <div className="flex flex-row gap-4 flex-wrap">
                        <Link href='/mind-map-of-computer-components' className="bg-violet-900 w-fit q py-2 text-center px-4 text-white rounded-xl">
                            Mind Map
                        </Link>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
