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
        title: "Chapter 1: Main Memory",
        links: [
            { href: "main-memory/notes", text: "Notes" },
            { href: "main-memory/mind-map", text: "Mind Map" },
            { href: "main-memory/quiz", text: "MCQs" },
            { href: "main-memory/brief-questions", text: "Brief Questions" },
            { href: "nfdsotes", text: "Detailed Questions" },
        ],
    },
    {
        id: "2",
        title: "Chapter 2: Memory Units",
        links: [
            { href: "memory-units/notes", text: "Notes" },
            { href: "notfdses", text: "Mind Map" },
            { href: "memory-units/quiz", text: "MCQs" },
            { href: "memory-units/brief-questions", text: "Brief Questions" },
            { href: "notesfdsfds", text: "Detailed Questions" },
        ],
    },
    {
        id: "3",
        title: "Chapter 3: Secondary Memory",
        links: [
            { href: "secondary-memory/notes", text: "Notes" },
            { href: "nfdsfdsafotes", text: "Mind Map" },
            { href: "secondary-memory/quiz", text: "MCQs" },
            { href: "secondary-memory/brief-questions", text: "Brief Questions" },
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
