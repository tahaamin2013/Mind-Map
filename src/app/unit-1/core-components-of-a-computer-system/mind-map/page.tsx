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

    const mermaidContainerRef1 = useRef(null);
    const mermaidContainerRef2 = useRef(null);
    const zoomIn1 = () => setZoomLevel1(prev => Math.min(prev + 0.1, 2));
    const zoomOut1 = () => setZoomLevel1(prev => Math.max(prev - 0.1, 0.5));
    const zoomIn2 = () => setZoomLevel2(prev => Math.min(prev + 0.1, 2));
    const zoomOut2 = () => setZoomLevel2(prev => Math.max(prev - 0.1, 0.5));

    const diagramDefinition = `
 graph TD
    A[Core Components of a Computer System]
    A --> B[Input Devices]
    A --> C[System Unit]
    A --> D[Storage Devices]
    A --> E[Output Devices]
    A --> F[Ports, Expansion Slots, and Cards]

    B --> B1[Keyboard]
    B --> B2[Mouse]
    B --> B3[Microphone]
    B --> B4[Scanner]
    B --> B5[Barcode Reader]
    B --> B6[Digital Camera]
    B --> B7[Touch Screen]

    C --> C1[Motherboard]
    C --> C2[CPU]
    C2 --> C2a[Control Unit]
    C2 --> C2b[ALU]
    C2 --> C2c[Registers]
    C --> C3[Expansion Slots]
    C --> C4[RAM Slots]
    C --> C5[CPU Socket]
    C --> C6[Ports]

    D --> D1[Hard Disk]
    D --> D2[CD]
    D --> D3[DVD]
    D --> D4[Memory Card]
    D --> D5[USB Flash Drive]

    E --> E1[Monitor]
    E1 --> E1a[CRT]
    E1 --> E1b[LED]
    E --> E2[Printer]
    E2 --> E2a[Impact]
    E2 --> E2b[Non-Impact]
    E --> E3[Plotter]
    E --> E4[Speaker]

    F --> F1[Ports]
    F1 --> F1a[USB]
    F1 --> F1b[HDMI]
    F1 --> F1c[DVI]
    F1 --> F1d[Audio]
    F1 --> F1e[LAN]
    F --> F2[Expansion Cards]
    F2 --> F2a[Sound Card]
    F2 --> F2b[Graphics Card]
    F2 --> F2c[Modem Card]
    F2 --> F2d[Network Card] `
    return (
        <div className="p-6 bg-white text-gray-900">
            <h1 className="text-3xl font-bold mb-6">1.3 Core Components of a Computer System</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Component</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">1.3.1 Input Devices</td>
                            <td className="py-2 px-4 border-b">Provide data to the computer system</td>
                            <td className="py-2 px-4 border-b">Keyboard, Mouse, Microphone, Scanner, Barcode Reader, Digital Camera, Touch Screen</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">1.3.2 System Unit</td>
                            <td className="py-2 px-4 border-b">Central component housing essential hardware</td>
                            <td className="py-2 px-4 border-b">Motherboard, CPU (CU, ALU, Registers), Expansion Slots, RAM Slots, CPU Socket, Ports</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">1.3.3 Storage Devices</td>
                            <td className="py-2 px-4 border-b">Save data and programs for long-term use</td>
                            <td className="py-2 px-4 border-b">Hard Disk, CD, DVD, Memory Card, USB Flash Drive</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">1.3.4 Output Devices</td>
                            <td className="py-2 px-4 border-b">Display or produce information from the computer</td>
                            <td className="py-2 px-4 border-b">Monitor (CRT, LED), Printer (Impact, Non-Impact), Plotter, Speaker</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">1.3.5 Ports, Expansion Slots, and Cards</td>
                            <td className="py-2 px-4 border-b">Enhance functionality of the computer system</td>
                            <td className="py-2 px-4 border-b">Ports (USB, HDMI, DVI, Audio, LAN), Expansion Cards (Sound, Graphics, Modem, Network)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="relative p-6 pt-2 my-3 h-[150px] sm:h-[300px] overflow-scroll flex flex-col border border-gray-300 rounded-lg shadow-md bg-white">
                <div className="bg-white top-2 items-end justify-end right-2 flex space-x-2">
                    <button
                        onClick={zoomIn2}
                        className="px-3 py-1 text-white bg-gradient-to-r from-purple-600 to-indigo-600"
                    >
                        Zoom In
                    </button>
                    <button
                        onClick={zoomOut2}
                        className="px-3 py-1 text-white bg-gradient-to-r from-purple-600 to-indigo-600"
                    >
                        Zoom Out
                    </button>
                </div>
                <div
                    className="mermaid-container"
                    ref={mermaidContainerRef2}
                    style={{ transform: `scale(${zoomLevel2})`, transformOrigin: 'top left' }}
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