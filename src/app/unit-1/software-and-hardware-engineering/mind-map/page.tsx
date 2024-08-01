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
    A[Engineering in Computing]
    A --> B[Software Engineering]
    A --> C[Hardware Engineering]

    B --> B1[Application Software Engineering]
    B --> B2[System Software Engineering]
    B --> B3[Embedded Software Engineering]
    B --> B4[Enterprise Software Engineering]
    B --> B5[Game Development]

    B1 --> B1a[Web applications]
    B1 --> B1b[Mobile apps]
    B1 --> B1c[Desktop software]

    B2 --> B2a[Operating systems]
    B2 --> B2b[Compilers]
    B2 --> B2c[Device drivers]

    B3 --> B3a[Automotive Embedded Systems]
    B3 --> B3b[Digital home appliances]
    B3 --> B3c[Industrial control systems]

    C --> C1[Digital Hardware Engineering]
    C --> C2[Integrated Circuit Design]
    C --> C3[Computer Architecture]
    C --> C4[Embedded Systems Design]

    C1 --> C1a[Processors]
    C1 --> C1b[Memory units]

    C2 --> C2a[CPUs]
    C2 --> C2b[GPUs]

    C3 --> C3a[CPU architecture]
    C3 --> C3b[Memory hierarchy]

    C4 --> C4a[Microcontrollers]
    C4 --> C4b[Sensors]
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
                            <th className="py-2 px-4 border-b">Engineering Field</th>
                            <th className="py-2 px-4 border-b">Type</th>
                            <th className="py-2 px-4 border-b">Focus</th>
                            <th className="py-2 px-4 border-b">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={5}>Software Engineering</td>
                            <td className="py-2 px-4 border-b">Application Software Engineering</td>
                            <td className="py-2 px-4 border-b">Developing software applications that fulfill specific user requirements</td>
                            <td className="py-2 px-4 border-b">Web applications, mobile apps, desktop software</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">System Software Engineering</td>
                            <td className="py-2 px-4 border-b">Designing and developing software that provides a platform for other software to run on</td>
                            <td className="py-2 px-4 border-b">Operating systems, compilers, device drivers</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Embedded Software Engineering</td>
                            <td className="py-2 px-4 border-b">Developing and testing software embedded within hardware devices or systems</td>
                            <td className="py-2 px-4 border-b">Automotive Embedded Systems, digital home appliances, industrial control systems</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Enterprise Software Engineering</td>
                            <td className="py-2 px-4 border-b">Developing software solutions for large-scale enterprises to automate processes, manage data, and facilitate communication</td>
                            <td className="py-2 px-4 border-b">Enterprise resource planning (ERP) systems, customer relationship management (CRM) software</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Game Development</td>
                            <td className="py-2 px-4 border-b">Creating video games, including game engines, graphics, audio, and animation</td>
                            <td className="py-2 px-4 border-b">Video games, game engines</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={4}>Hardware Engineering</td>
                            <td className="py-2 px-4 border-b">Digital Hardware Engineering</td>
                            <td className="py-2 px-4 border-b">Designing and developing digital circuits and components</td>
                            <td className="py-2 px-4 border-b">Processors, memory units</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Integrated Circuit (IC) Design</td>
                            <td className="py-2 px-4 border-b">Designing integrated circuits</td>
                            <td className="py-2 px-4 border-b">CPUs (Central Processing Units), GPUs (Graphics Processing Units)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Computer Architecture</td>
                            <td className="py-2 px-4 border-b">Designing the structure and organization of computer systems</td>
                            <td className="py-2 px-4 border-b">CPU architecture, memory hierarchy</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Embedded Systems Design</td>
                            <td className="py-2 px-4 border-b">Designing hardware systems that are integrated into larger systems or devices</td>
                            <td className="py-2 px-4 border-b">Microcontrollers, sensors</td>
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
