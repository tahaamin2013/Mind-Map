"use client"
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

const Page = () => {
    const [zoomLevel1, setZoomLevel1] = useState(1);
    const [zoomLevel2, setZoomLevel2] = useState(1);

    const mermaidContainerRef1 = useRef(null);
    const mermaidContainerRef2 = useRef(null);

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const zoomIn1 = () => setZoomLevel1(prev => Math.min(prev + 0.1, 2));
    const zoomOut1 = () => setZoomLevel1(prev => Math.max(prev - 0.1, 0.5));
    const zoomIn2 = () => setZoomLevel2(prev => Math.min(prev + 0.1, 2));
    const zoomOut2 = () => setZoomLevel2(prev => Math.max(prev - 0.1, 0.5));
    const diagramDefinition = `
graph TD
    B1[Forest Ecosystems] --> B
    B2[Aquatic Ecosystems] --> B
    B3[Grassland Ecosystems] --> B
    C1[Atmospheric interactions] --> C
    D1[Plate Tectonics] --> D
    D2[Mountain Systems] --> D
    B[Ecosystems] --> S
    C[Weather Systems] --> S
    D[Geological Systems] --> S
    S[Natural Systems]
    S --> E[Hydrological Systems]
    S --> F[Solar System]
    S --> G[Biological Systems]
    E --> E1[Water movement and distribution]
    F --> F1[Sun, planets, moons, asteroids, comets]
    G --> G1[Human Body]
    G --> G2[Coral Reef]
    G --> G3[Rainforest Canopy]

    %% Styling
    classDef top fill:#f9f,stroke:#333,stroke-width:2px;
    classDef bottom fill:#bbf,stroke:#333,stroke-width:2px;
    classDef main fill:#ffd,stroke:#333,stroke-width:4px;
    classDef sub fill:#efe,stroke:#333,stroke-width:1px;
    class B,C,D top;
    class E,F,G bottom;
    class S main;
    class B1,B2,B3,C1,D1,D2,E1,F1,G1,G2,G3 sub;

    %% Linkage styling
    linkStyle 0,1,2,3,4,5,6,7,8 stroke:#f9f,stroke-width:2px;
    linkStyle 9,10,11 stroke:#bbf,stroke-width:2px;

    `;
    const diagramDefinition2 = `
graph TD
    A[Artificial Systems]
    A --> B[Communication Systems]
    A --> C[Information Systems]
    A --> D[Transportation Systems]
    A --> E[Energy Systems]
    A --> F[Manufacturing Systems]
    A --> G[Healthcare Systems]

    B --> B1[Telephone Networks]
    B --> B2[Internet and Computer Networks]
    B --> B3[Satellite Communication Systems]

    C --> C1[Databases]
    C --> C2[Software Applications]

    D --> D1[Automobiles]
    D --> D2[Aircraft]
    D --> D3[Trains and Rail Systems]
    D --> D4[Subways and Mass Transit]

    E --> E1[Power Plants]
    E --> E2[Renewable Energy Systems]
    E --> E3[Electrical Grids]

    F --> F1[Factory Automation]
    F --> F2[Assembly Lines]

    G --> G1[Hospital Information Systems]
    G --> G2[Medical Devices]
    `;

    return (
        <div className="p-4">
            <table className="min-w-full border border-gray-300 mb-6">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">System Type</th>
                        <th className="border border-gray-300 p-2">Sub-Category</th>
                        <th className="border border-gray-300 p-2">Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top">Natural Systems</td>
                        <td className="border border-gray-300 p-2 align-top">Ecosystems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Forest Ecosystems: Tropical rainforests with diverse plant and animal species</li>
                                <li>Aquatic Ecosystems: Freshwater lakes, rivers, marine environments like coral reefs</li>
                                <li>Grassland Ecosystems: African savanna with grazing animals like zebras and wildebeests</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Weather Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Atmospheric interactions: Rainfall, wind patterns, temperature changes</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Geological Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Plate Tectonics: Movement of Earth&apos;s plates causing earthquakes and volcanic eruptions</li>
                                <li>Mountain Systems: Formed by tectonic plate collisions, e.g., Himalayas</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Hydrological Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Water movement and distribution: Rivers, lakes, water cycle</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Solar System</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Sun, planets, moons, asteroids, comets interacting under gravity</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Biological Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Human Body: Organs, tissues, cells, biochemical processes</li>
                                <li>Coral Reef: Ecosystem formed by coral colonies hosting various marine species</li>
                                <li>Rainforest Canopy: Upper layer of rainforest with specialized plants and animals</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top">Artificial Systems</td>
                        <td className="border border-gray-300 p-2 align-top">Communication Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Telephone Networks: Long-distance voice communication</li>
                                <li>Internet and Computer Networks: Global data sharing, digital communication</li>
                                <li>Satellite Communication Systems: Long-distance, wireless communication</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Information Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Databases: Efficient data storage and retrieval</li>
                                <li>Software Applications: Word processors, spreadsheets, video editing software</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Transportation Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Automobiles: Personal and mass transportation on roads</li>
                                <li>Aircraft: Air travel including airplanes, helicopters, drones</li>
                                <li>Trains and Rail Systems: Land transportation on tracks</li>
                                <li>Subways and Mass Transit: Urban area mass movement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Energy Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Power Plants: Electricity generation from coal, natural gas, nuclear, renewable resources</li>
                                <li>Renewable Energy Systems: Solar panels, wind turbines, hydroelectric plants</li>
                                <li>Electrical Grids: Power distribution infrastructure</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Manufacturing Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Factory Automation: Robotics, conveyor systems for automation</li>
                                <li>Assembly Lines: Mass production systems</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Healthcare Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Hospital Information Systems (HIS): Patient records, billing, healthcare data management</li>
                                <li>Medical Devices: MRI machines, X-ray equipment, artificial organs</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="p-4">
                {/* Table content remains the same */}

                <div className="relative p-6 pt-2 my-3 h-[150px] sm:h-[300px] overflow-scroll flex flex-col border border-gray-300 rounded-lg shadow-md bg-white">
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
                        ref={mermaidContainerRef1}
                        style={{ transform: `scale(${zoomLevel1})`, transformOrigin: 'top left' }}
                    >
                        <div className="mermaid">
                            {diagramDefinition}
                        </div>
                    </div>
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
                            {diagramDefinition2}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
