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
        title: "Chapter6547546 1: Input Devices",
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
        title: "Chapter654654654 2: Output Devices",
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
        title: "Chapte5435434356543r 3: How Input and Output Devices Work Together",
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
        title: "Chapter 4654654654436354543: Choosing the Right Devices for Your Tasks",
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
        title: "Chapter 5: The876876876 Future of876876768 Input and Output Devices",
        links: [
            { href: "ports/notes", text: "Notes" },
            { href: "nfdsfdsafotes", text: "Mind Map" },
            { href: "ports/quiz", text: "MCQs" },
            { href: "ports/brief-questions", text: "Brief Questions" },
            { href: "nofdasfdstes", text: "Detailed Questions" },
        ],
    },

];

export default function page() {
    return (
        <div className="p-3">
            <h1 className="font-bold text-3xl">Unit 4S: Storage devices</h1>
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
