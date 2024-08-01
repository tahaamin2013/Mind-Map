"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

const Page = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const diagramDefinition = `
graph LR
    A[Sender] -->|sends| B[Message]
    B -->|travels through| C[Medium]
    C -->|received by| D[Receiver]
    E[Protocol] -->|governs| A
    E -->|governs| B
    E -->|governs| C
    E -->|governs| D

    subgraph "Sender Examples"
    F[Computer]
    G[Workstation]
    H[Cell phone]
    I[Camera]
    end

    subgraph "Message Types"
    J[Text]
    K[Audio]
    L[Video]
    end

    subgraph "Medium Types"
    M[Wired]
    N[Wireless]
    end

    subgraph "Wired Examples"
    O[Telephone cable]
    P[Coaxial cable]
    Q[Fiber optics]
    end

    subgraph "Wireless Examples"
    R[Bluetooth]
    S[Wi-Fi]
    T[Microwave]
    U[Radio wave]
    V[Satellite]
    end

    subgraph "Receiver Examples"
    W[Computer]
    X[Workstation]
    Y[Telephone handset]
    Z[Television set]
    end

    A --- F & G & H & I
    B --- J & K & L
    C --- M & N
    M --- O & P & Q
    N --- R & S & T & U & V
    D --- W & X & Y & Z
    `;

    const diagramDefinition2 = `
graph TD
    A[Modes of Network Communication]
    A --> B[Simplex]
    A --> C[Half-Duplex]
    A --> D[Full-Duplex]
    A --> E[Asynchronous Transmission]
    A --> F[Synchronous Transmission]

    B --> G[One-way]
    C --> H[Two-way, alternating]
    D --> I[Two-way, simultaneous]
    E --> J[Variable intervals]
    F --> K[Fixed intervals]

    style A fill:#f9f,stroke:#333,stroke-width:4px
    style B fill:#bbf,stroke:#f66,stroke-width:2px
    style C fill:#bbf,stroke:#f66,stroke-width:2px
    style D fill:#bbf,stroke:#f66,stroke-width:2px
    style E fill:#bfb,stroke:#f66,stroke-width:2px
    style F fill:#bfb,stroke:#f66,stroke-width:2px
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
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">Component</th>
                            <th className="py-2 px-4 border-b">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Sender</td>
                            <td className="py-2 px-4 border-b">Device that sends the message (e.g., computer, cell phone)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Message</td>
                            <td className="py-2 px-4 border-b">Data or information to be transmitted (text, audio, video)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Medium</td>
                            <td className="py-2 px-4 border-b">Path through which the message travels (wired or wireless)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Receiver</td>
                            <td className="py-2 px-4 border-b">Device that receives the transmitted message</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Protocol</td>
                            <td className="py-2 px-4 border-b">Set of rules governing data communications</td>
                        </tr>
                    </tbody>
                </table>
                <div className="relative p-6 pt-2 my-3 h-[500px] overflow-scroll flex flex-col  border border-gray-300 rounded-lg shadow-md bg-white">
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
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">Mode</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Simplex</td>
                            <td className="py-2 px-4 border-b">One-way communication; Receiver cannot send data back	</td>
                            <td className="py-2 px-4 border-b">Electronic notice boards, radio, television broadcasting</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Half-Duplex</td>
                            <td className="py-2 px-4 border-b">Two-way communication, but not simultaneous; Parties take turns sending and receiving	</td>
                            <td className="py-2 px-4 border-b">Walkie-talkies
</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Full-Duplex	</td>
                            <td className="py-2 px-4 border-b">Two-way communication simultaneously; Both parties can send and receive at the same time	</td>
                            <td className="py-2 px-4 border-b">Telephone networks
</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Asynchronous Transmission</td>
                            <td className="py-2 px-4 border-b">Variable time intervals between characters; Uses start and stop bits for synchronization; Ideal for slow-speed communication	</td>
                            <td className="py-2 px-4 border-b">Keyboard data transmission</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Synchronous Transmission	</td>
                            <td className="py-2 px-4 border-b">Fixed time intervals between characters; Sender and receiver are synchronized; Faster than asynchronous transmission	</td>
                            <td className="py-2 px-4 border-b">Network communication links</td>
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
                        style={{ transform: `scale(${zoomLevel2})`, transformOrigin: 'top left' }}
                    >
                        <div className="mermaid">
                            {diagramDefinition2}
                        </div>
                    </div>
                </div>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">Layer</th>
                            <th className="py-2 px-4 border-b">Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Application</td>
                            <td className="py-2 px-4 border-b">Provides network services to applications</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Presentation</td>
                            <td className="py-2 px-4 border-b">Translates, encrypts, and compresses data</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Session</td>
                            <td className="py-2 px-4 border-b">Manages sessions between applications</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Transport</td>
                            <td className="py-2 px-4 border-b">Ensures end-to-end communication and data integrity</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Network</td>
                            <td className="py-2 px-4 border-b">Handles logical addressing and routing</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Data Link</td>
                            <td className="py-2 px-4 border-b">Ensures reliable node-to-node data transfer</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Physical</td>
                            <td className="py-2 px-4 border-b">Transmits raw bit stream over physical medium</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Page;
