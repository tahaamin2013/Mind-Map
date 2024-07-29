"use client"
import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const MermaidDiagram = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const diagramDefinition = `
    graph TD
        A[Definition of Computer] --> B[Programmable electronic device]
        A --> C[Performs arithmetic and logical operations]
        A --> D[Uses a set of instructions]
        E[Importance of Computer History] --> F[Understanding technological evolution]
        E --> G[Impact on current technology]

        subgraph EarlyComputingDevices[Early Computing Devices]
            H[Abacus] --> H1[One of the earliest counting devices]
            H --> H2[Uses beads or stones on rods or wires]
            H --> H3[Used for centuries in various cultures]
            H --> H4[Used for arithmetic calculations]

            I[Napier's Bone] --> I1[Developed by John Napier]
            I --> I2[Manually operated calculating device]
            I --> I3[Used for multiplication and division]
            I --> I4[Used 9 separate strips (bones) marked with numerals]
            I --> I5[First machine to calculate using decimal point system]

            J[Pascaline] --> J1[Invented in 1642 by Blaise Pascal]
            J --> J2[First mechanical and automated calculator]
            J --> J3[Consisted of a wooden box with gears and wheels]

            K[Stepped Reckoner (Leibniz wheel)] --> K1[Created in 1673 by Wilhelm Leibniz]
            K --> K2[Improved version of Pascal's invention]
            K --> K3[Used grooved wheels for calculations]

            L[Difference Engine] --> L1[Created by Charles Babbage in early 1820s]
            L --> L2[Steam-powered calculating machine]
            L --> L3[Used to solve numerical problems]

            M[Analytical Engine] --> M1[Created by Charles Babbage in 1830]
            M --> M2[Took input from punch cards]
            M --> M3[Capable of solving any mathematical problem and storing data]

            N[Tabulating Machine] --> N1[Invented by Herman Hollerith in 1890]
            N --> N2[Punch card-based mechanical calculator]
            N --> N3[Could compute statistics and record data]
            N --> N4[Led to the formation of IBM in 1924]

            O[Differential Analyzer] --> O1[Introduced by Vannevar Bush in 1930]
            O --> O2[First electrical computer]
            O --> O3[Used vacuum tubes as switches]
            O --> O4[Could perform 25 calculations per minute]

            P[Mark 1] --> P1[Invented by Howard Aiken in 1944]
            P --> P2[Digital computer]
            P --> P3[Could add three 8-digit numbers in one second]
            P --> P4[50 feet long, 8 feet high, weighed 5 tons]
            P --> P5[Used 3,000 electric switches]
        end

        subgraph ComputerGenerations[Computer Generations]
            Q[First Generation (1940-1956)] --> Q1[Used vacuum tubes]
            Q --> Q2[Slow processing speed]
            Q --> Q3[Limited memory capacity]
            Q --> Q4[Massive size]
            Q --> Q5[Costly and unreliable]
            Q --> Q6[High power consumption]
            Q --> Q7[Input: punched cards]
            Q --> Q8[Output: printouts via electric typewriters]
            Q --> Q9[Used machine language]
            Q --> Q10[Examples: ENIAC, UNIVAC I, IBM 604, Mark-1, EDSAC]

            R[Second Generation (1956-1963)] --> R1[Used transistors]
            R --> R2[Improved efficiency, speed, and memory]
            R --> R3[Reduced size]
            R --> R4[More reliable and cost-effective]
            R --> R5[Input/Output: punch card readers, magnetic tapes/disks, printers]
            R --> R6[Used assembly language]
            R --> R7[Introduced high-level languages (FORTRAN, COBOL)]
            R --> R8[Examples: UNIVAC II, IBM 7030, GE 635, CDC 1604]

            S[Third Generation (1963-1971)] --> S1[Used Integrated Circuits (ICs)]
            S --> S2[Enhanced speed and memory]
            S --> S3[Improved energy efficiency and reliability]
            S --> S4[Further reduced size and cost]
            S --> S5[Input/Output: keyboard and monitor]
            S --> S6[Could run multiple application programs]
            S --> S7[Examples: IBM System/360, CDC 3300 and 6600]

            T[Fourth Generation (1971-Present)] --> T1[Used LSI and VLSI chips]
            T --> T2[Introduced microprocessors]
            T --> T3[Exceptional speed and large storage capacity]
            T --> T4[Small size, high reliability, low power consumption]
            T --> T5[Wide variety of software available]
            T --> T6[Graphical User Interfaces (GUIs)]
            T --> T7[Support for multimedia and modern programming languages]
            T --> T8[Examples: Intel Pentium series, AMD Athlon, various laptop models]

            U[Fifth Generation (Ongoing)] --> U1[Focus on Artificial Intelligence (AI)]
            U --> U2[Advanced parallel processing]
            U --> U3[Natural Language Processing (NLP)]
            U --> U4[Expert Systems (ES)]
            U --> U5[More intuitive user interfaces]
            U --> U6[Voice recognition and gesture-based controls]
    `;

    return (
        <div className="mermaid-diagram">
            <div className="mermaid">
                {diagramDefinition}
            </div>
        </div>
    );
};

export default MermaidDiagram;
