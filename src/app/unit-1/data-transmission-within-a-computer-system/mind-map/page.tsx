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
    A[Computer System]
    A --> B[Bus Architecture]
    A --> C[Data Paths]
    A --> D[Registers]
    A --> E[Memory Hierarchy]
    A --> F[Instruction Cycle]
    A --> G[Pipeline Processing]
    A --> H[Interrupts and I/O]
    A --> I[Parallelism]

    B --> B1[Data Bus]
    B --> B2[Address Bus]
    B --> B3[Control Bus]

    C --> C1[Internal Address Bus]
    C --> C2[Internal Data Bus]
    C --> C3[Internal Control Bus]

    D --> D1[Memory Address Register]
    D --> D2[Memory Data Register]
    D --> D3[Accumulator]
    D --> D4[Program Counter]
    D --> D5[Current Instruction Register]

    E --> E1[Cache Memory]
    E --> E2[RAM]
    E --> E3[Secondary Storage]

    F --> F1[Fetching]
    F --> F2[Decoding]
    F --> F3[Executing]
    F --> F4[Storing]

    I --> I1[Multi-core CPUs]
    I --> I2[Distributed Systems]
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
                            <th className="py-2 px-4 border-b">Component</th>
                            <th className="py-2 px-4 border-b">Subcomponents</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Bus Architecture</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Data Bus</li>
                                    <li>Address Bus</li>
                                    <li>Control Bus</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">System of communication pathways for data and control signals</td>
                            <td className="py-2 px-4 border-b">Transfers data and control signals between components</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold">Data Paths</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Internal Address Bus</li>
                                    <li>Internal Data Bus</li>
                                    <li>Internal Control Bus</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Internal routes for data movement within the CPU</td>
                            <td className="py-2 px-4 border-b">Enables data movement within the processor</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Registers</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Memory Address Register (MAR)</li>
                                    <li>Memory Data Register (MDR)</li>
                                    <li>Accumulator (AC)</li>
                                    <li>Program Counter (PC)</li>
                                    <li>Current Instruction Register (CIR)</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Small, high-speed storage units within the CPU</td>
                            <td className="py-2 px-4 border-b">Facilitates rapid data access and manipulation</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold">Memory Hierarchy</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Cache Memory</li>
                                    <li>RAM</li>
                                    <li>Secondary Storage</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Structured approach to balance speed and storage capacity</td>
                            <td className="py-2 px-4 border-b">Optimizes data access times and storage efficiency</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Instruction Cycle</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Fetching</li>
                                    <li>Decoding</li>
                                    <li>Executing</li>
                                    <li>Storing</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Process of executing a program&apos;s instructions</td>
                            <td className="py-2 px-4 border-b">Fetches, decodes, executes, and stores instructions</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold">Pipeline Processing</td>
                            <td className="py-2 px-4 border-b">-</td>
                            <td className="py-2 px-4 border-b">Technique to enhance efficiency by processing multiple instructions simultaneously</td>
                            <td className="py-2 px-4 border-b">Improves CPU utilization and speeds up execution</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Interrupts and I/O</td>
                            <td className="py-2 px-4 border-b">-</td>
                            <td className="py-2 px-4 border-b">Signals for managing urgent events and I/O operations</td>
                            <td className="py-2 px-4 border-b">Handles interactions with peripheral devices</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold">Parallelism</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Multi-core CPUs</li>
                                    <li>Distributed Systems</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Simultaneous execution of multiple tasks to improve processing speed</td>
                            <td className="py-2 px-4 border-b">Enhances data transmission speed and overall system performance</td>
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
