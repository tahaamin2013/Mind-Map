"use client"
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

const Page = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

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
    const diagramDefinition = `
graph TD
    A[Von Neumann Architecture]
    A --> B[CPU]
    A --> C[Memory Unit]
    A --> D[I/O Controller]
    A --> E[Buses]

    B --> B1[ALU]
    B --> B2[Control Unit]
    B --> B3[Registers]
    B3 --> B3a[MAR]
    B3 --> B3b[MDR]
    B3 --> B3c[AC]
    B3 --> B3d[PC]
    B3 --> B3e[CIR]
    B --> B4[L1 Cache]
    B --> B5[L2 Cache]

    C --> C1[RAM]
    C --> C2[Cache Memory]

    E --> E1[Address Bus]
    E --> E2[Data Bus]
    E --> E3[Control Bus]

    D --> D1[External Devices]
    `;
    return (
        <div className="p-6 bg-white text-gray-900">
            <h1 className="text-3xl font-bold mb-6">1.4 Von Neumann Architecture</h1>

            <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Component</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Subcomponents/Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Central Processing Unit (CPU)</td>
                            <td className="py-2 px-4 border-b">Core component executing instructions</td>
                            <td className="py-2 px-4 border-b">ALU, Control Unit, Registers (MAR, MDR, AC, PC, CIR), L1 Cache, L2 Cache</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Arithmetic and Logic Unit (ALU)</td>
                            <td className="py-2 px-4 border-b">Performs arithmetic and logical operations</td>
                            <td className="py-2 px-4 border-b">Addition, subtraction, multiplication, division, comparisons, bitwise operations</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Control Unit (CU)</td>
                            <td className="py-2 px-4 border-b">Orchestrates overall operation</td>
                            <td className="py-2 px-4 border-b">Controls ALU, manages memory operations, coordinates I/O operations, provides timing and control signals</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Buses</td>
                            <td className="py-2 px-4 border-b">Communication pathways</td>
                            <td className="py-2 px-4 border-b">Address Bus, Data Bus, Control Bus</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Memory Unit</td>
                            <td className="py-2 px-4 border-b">Stores data and instructions</td>
                            <td className="py-2 px-4 border-b">RAM, Cache Memory</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Input/Output (I/O) Controller</td>
                            <td className="py-2 px-4 border-b">Manages data flow between CPU and external devices</td>
                            <td className="py-2 px-4 border-b">Handles data transfers and command executions for peripherals</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="relative p-6 pt-2 my-3 h-[300px] overflow-scroll flex flex-col  border border-gray-300 rounded-lg shadow-md bg-white">
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
    )
}

export default Page