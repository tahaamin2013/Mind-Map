"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

const Page = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const diagramDefinition = `
graph TD
    A[Computer Software]
    A --> B[System Software]
    A --> C[Application Software]
    A --> D[Programming Languages]

    B --> B1[Operating System OS]
    B --> B2[Device Drivers]
    B --> B3[Utilities]
    B --> B4[Compiler and Assembler]
    B --> B5[Linkers and Loaders]
    B --> B6[Firmware]

    B1 --> B1a[Windows]
    B1 --> B1b[macOS]
    B1 --> B1c[Linux]
    B1 --> B1d[Android]

    C --> C1[Productivity Software]
    C --> C2[Business Software]
    C --> C3[Entertainment Software]
    C --> C4[Educational Software]

    C1 --> C1a[Microsoft Office]
    C1 --> C1b[Google Workspace]
    C1 --> C1c[LibreOffice]

    C2 --> C2a[QuickBooks]
    C2 --> C2b[Salesforce]
    C2 --> C2c[Trello]

    C3 --> C3a[Minecraft]
    C3 --> C3b[Spotify]
    C3 --> C3c[Netflix]

    C4 --> C4a[LMS]
    C4 --> C4b[Kahoot!]
    C4 --> C4c[Duolingo]

    D --> D1[Low Level Languages]
    D --> D2[High Level Languages]

    D1 --> D1a[Machine Language]
    D1 --> D1b[Assembly Language]

    D2 --> D2a[Procedural and Structured]
    D2 --> D2b[Object-Oriented]

    D2a --> D2a1[FORTRAN]
    D2a --> D2a2[Pascal]
    D2a --> D2a3[C]
    D2a --> D2a4[ALGOL]

    D2b --> D2b1[C++]
    D2b --> D2b2[Java]
    D2b --> D2b3[Visual Basic]
    `;
    const [zoomLevel1, setZoomLevel1] = useState(1);
    const [zoomLevel2, setZoomLevel2] = useState(1);
    const mermaidContainerRef = useRef<HTMLDivElement>(null);

    const mermaidContainerRef1 = useRef<HTMLDivElement>(null);
    const mermaidContainerRef2 = useRef<HTMLDivElement>(null);
    const zoomOut1 = () => setZoomLevel1(prev => Math.max(prev - 0.1, 0.5));

    const zoomIn1 = () => setZoomLevel1(prev => Math.min(prev + 0.1, 2));
    useEffect(() => {
        if (mermaidContainerRef1.current) {
            mermaid.contentLoaded();
        }
    }, [zoomLevel1]);

    useEffect(() => {
        if (mermaidContainerRef2.current) {
            mermaid.contentLoaded();
        }
    }, [zoomLevel2]);
    return (
        <div>
            <div className="container mx-auto p-4">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Category</th>
                            <th className="py-2 px-4 border-b">Type</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={6}>System Software</td>
                            <td className="py-2 px-4 border-b">Operating System (OS)</td>
                            <td className="py-2 px-4 border-b">Manages hardware resources and provides services for computer programs</td>
                            <td className="py-2 px-4 border-b">Windows, macOS, Linux, Android</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Device Drivers</td>
                            <td className="py-2 px-4 border-b">Facilitate communication between OS and hardware devices</td>
                            <td className="py-2 px-4 border-b">Printer drivers, graphics card drivers</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Utilities</td>
                            <td className="py-2 px-4 border-b">Tools for managing and maintaining computer systems</td>
                            <td className="py-2 px-4 border-b">Disk defragmenters, antivirus software</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Compiler and Assembler</td>
                            <td className="py-2 px-4 border-b">Convert high-level languages to machine code</td>
                            <td className="py-2 px-4 border-b">GCC, MASM</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Linkers and Loaders</td>
                            <td className="py-2 px-4 border-b">Combine object files and load them into memory</td>
                            <td className="py-2 px-4 border-b">ld (Unix), link.exe (Windows)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Firmware</td>
                            <td className="py-2 px-4 border-b">Software permanently stored on hardware devices</td>
                            <td className="py-2 px-4 border-b">BIOS, router firmware</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={4}>Application Software</td>
                            <td className="py-2 px-4 border-b">Productivity Software</td>
                            <td className="py-2 px-4 border-b">Help users perform tasks efficiently and create content</td>
                            <td className="py-2 px-4 border-b">Microsoft Office, Google Workspace, LibreOffice</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Business Software</td>
                            <td className="py-2 px-4 border-b">Meet business needs and streamline operations</td>
                            <td className="py-2 px-4 border-b">QuickBooks, Salesforce, Trello</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Entertainment Software</td>
                            <td className="py-2 px-4 border-b">Designed for leisure and enjoyment</td>
                            <td className="py-2 px-4 border-b">Minecraft, Spotify, Netflix</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Educational Software</td>
                            <td className="py-2 px-4 border-b">Support learning and skill development</td>
                            <td className="py-2 px-4 border-b">LMS (ULearn, Virtual Academy), Kahoot!, Duolingo</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={2}>Programming Languages</td>
                            <td className="py-2 px-4 border-b">Low Level Languages</td>
                            <td className="py-2 px-4 border-b">Close to machine code, used for system-level programming</td>
                            <td className="py-2 px-4 border-b">Machine Language, Assembly Language</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">High Level Languages</td>
                            <td className="py-2 px-4 border-b">More abstract, easier for humans to read and write</td>
                            <td className="py-2 px-4 border-b">Procedural: FORTRAN, Pascal, C, ALGOL<br />Object-Oriented: C++, Java, Visual Basic</td>
                        </tr>
                    </tbody>
                </table>
                <div className="relative p-6 pt-2 my-3 h-[200px] overflow-scroll flex flex-col  border border-gray-300 rounded-lg shadow-md bg-white">
                    <div className="bg-white top-2 items-end justify-end right-2 flex space-x-2">
                        <button
                            onClick={zoomIn1}
                            className="px-3 py-1 text-white bg-gradient-to-r from-purple-600 to-indigo-600"
                        >
                            Zoom In
                        </button>
                        <button
                            onClick={zoomOut1}
                            className="px-3 py-1 text-white bg-gradient-to-r from-purple-600 to-indigo-600"
                        >
                            Zoom Out
                        </button>

                    </div>
                    <div
                        className="mermaid-container"
                        ref={mermaidContainerRef}
                        style={{ transform: `scale(${zoomLevel1})`, transformOrigin: 'top left' }}
                    >
                        <div className="mermaid">
                            {diagramDefinition}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page;
