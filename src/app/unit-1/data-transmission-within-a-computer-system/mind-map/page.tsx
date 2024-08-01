"use client";
import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const Page = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const diagramDefinition = `
  graph TD;
        subgraph Bus Architecture
          A1[Data Bus]
          A2[Address Bus]
          A3[Control Bus]
        end
        subgraph Data Paths
          B1[Internal Address Bus]
          B2[Internal Data Bus]
          B3[Internal Control Bus]
        end
        subgraph Registers
          C1[Memory Address Register (MAR)]
          C2[Memory Data Register (MDR)]
          C3[Accumulator (AC)]
          C4[Program Counter (PC)]
          C5[Current Instruction Register (CIR)]
        end
        subgraph Memory Hierarchy
          D1[Cache Memory]
          D2[RAM]
          D3[Secondary Storage]
        end
        subgraph Instruction Cycle
          E1[Fetching]
          E2[Decoding]
          E3[Executing]
          E4[Storing]
        end
        subgraph Pipeline Processing
          F[Pipeline Stages]
        end
        subgraph Interrupts and I/O
          G[Interrupt Handling]
        end
        subgraph Parallelism
          H1[Multi-core CPUs]
          H2[Distributed Systems]
        end

        A1 --> B1
        A1 --> B2
        A1 --> B3
        A2 --> C1
        A2 --> C2
        A3 --> D1
        A3 --> D2
        A3 --> D3
        D1 --> E1
        D2 --> E2
        D3 --> E3
        E1 --> E2
        E2 --> E3
        E3 --> E4
        E4 --> F
        F --> G
        G --> H1
        G --> H2
    `;

    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="mermaid">
                    {diagramDefinition}
                </div>
                <table className="min-w-full bg-white border border-gray-300 mt-4">
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
                                <ul>
                                    <li>Data Bus</li>
                                    <li>Address Bus</li>
                                    <li>Control Bus</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">System of communication pathways for data and control signals</td>
                            <td className="py-2 px-4 border-b">Transfers data and control signals between components</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Data Paths</td>
                            <td className="py-2 px-4 border-b">
                                <ul>
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
                                <ul>
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
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Memory Hierarchy</td>
                            <td className="py-2 px-4 border-b">
                                <ul>
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
                                <ul>
                                    <li>Fetching</li>
                                    <li>Decoding</li>
                                    <li>Executing</li>
                                    <li>Storing</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Process of executing a program&apos;s instructions</td>
                            <td className="py-2 px-4 border-b">Fetches, decodes, executes, and stores instructions</td>
                        </tr>
                        <tr>
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
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Parallelism</td>
                            <td className="py-2 px-4 border-b">
                                <ul>
                                    <li>Multi-core CPUs</li>
                                    <li>Distributed Systems</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Simultaneous execution of multiple tasks to improve processing speed</td>
                            <td className="py-2 px-4 border-b">Enhances data transmission speed and overall system performance</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
