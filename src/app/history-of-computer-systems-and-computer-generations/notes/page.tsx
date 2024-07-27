import React from 'react'

const page = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">1.1 History of Computer Systems and Computer Generations
            </h1>
            <h1 className="text-3xl font-bold mb-4">Early Computing Devices</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Abacus</h2>
                <p>One of the earliest counting devices, using beads or stones on rods or wires.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Napier&apos;s Bone (John Napier)</h2>
                <ul className="list-disc pl-6">
                    <li>Manually operated calculating device</li>
                    <li>Used 9 separate strips (bones) for multiplication and division</li>
                    <li>First machine to calculate using the decimal point system</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Pascaline (Blaise Pascal, 1642)</h2>
                <p>Thought to be the first mechanical and automated calculator.</p>
                <ul className="list-disc pl-6">
                    <li>Consisted of a wooden box with gears and wheels</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Stepped Reckoner (Wilhelm Leibniz, 1673)</h2>
                <p>Improved on Pascal&apos;s invention.</p>
                <ul className="list-disc pl-6">
                    <li>Digital mechanical calculator using grooved wheels</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Difference Engine (Charles Babbage, early 1820s)</h2>
                <ul className="list-disc pl-6">
                    <li>Mechanical computer for basic computations</li>
                    <li>Steam-powered calculating machine for numerical problems</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Analytical Engine (Charles Babbage, 1830)</h2>
                <ul className="list-disc pl-6">
                    <li>Mechanical computer taking input from punch cards</li>
                    <li>Capable of solving any mathematical problem and storing data in memory</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Tabulating Machine (Herman Hollerith, 1890)</h2>
                <ul className="list-disc pl-6">
                    <li>Punch card-based mechanical calculator</li>
                    <li>Could compute statistics and record data</li>
                    <li>Led to the formation of IBM in 1924</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Differential Analyzer (Vannevar Bush, 1930)</h2>
                <ul className="list-disc pl-6">
                    <li>First electrical computer</li>
                    <li>Used vacuum tubes as switches</li>
                    <li>Capable of performing 25 calculations per minute</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Mark 1 (Howard Aiken, 1944)</h2>
                <ul className="list-disc pl-6">
                    <li>Digital computer</li>
                    <li>Could add three 8-digit numbers in one second</li>
                    <li>50 feet long, 8 feet high, weighed about 5 tons</li>
                    <li>Used 3,000 electric switches</li>
                </ul>
            </section>

            <h1 className="text-3xl font-bold mb-4">Computer Generations</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">First Generation (1940-1956)</h2>
                <p className="mb-2"><strong>Key Technology:</strong> Vacuum tubes</p>
                <p className="mb-2">Characteristics:</p>
                <ul className="list-disc pl-6 mb-2">
                    <li>Slow processing speed</li>
                    <li>Limited memory capacity</li>
                    <li>Massive size (occupying entire rooms)</li>
                    <li>Costly and unreliable</li>
                    <li>High power consumption and heat generation</li>
                </ul>
                <p className="mb-2"><strong>Input:</strong> Punched cards</p>
                <p className="mb-2"><strong>Output:</strong> Printouts via electric typewriters</p>
                <p className="mb-2"><strong>Programming:</strong> Machine language only</p>
                <p className="mb-2"><strong>Examples:</strong> ENIAC, UNIVAC I, IBM 604, Mark-1, EDSAC</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Second Generation (1956-1963)</h2>
                <p className="mb-2"><strong>Key Technology:</strong> Transistors</p>
                <p className="mb-2">Characteristics:</p>
                <ul className="list-disc pl-6 mb-2">
                    <li>Improved efficiency over vacuum tubes</li>
                    <li>Reduced size, improved speed and memory capacity</li>
                    <li>Increased reliability and cost-effectiveness</li>
                </ul>
                <p className="mb-2"><strong>Input/Output:</strong> Punch card readers, magnetic tapes, magnetic disks, printers</p>
                <p className="mb-2"><strong>Programming:</strong> Assembly language and high-level languages (FORTRAN, COBOL)</p>
                <p className="mb-2"><strong>Examples:</strong> UNIVAC II, IBM 7030, General Electric GE 635, CDC 1604</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Third Generation (1963-1971)</h2>
                <p className="mb-2"><strong>Key Technology:</strong> Integrated Circuits (ICs)</p>
                <p className="mb-2">Characteristics:</p>
                <ul className="list-disc pl-6 mb-2">
                    <li>Enhanced speed and memory</li>
                    <li>Improved energy efficiency, size reduction, cost-effectiveness, and reliability</li>
                    <li>Interaction via keyboard and monitor</li>
                    <li>Capability to run multiple application programs concurrently</li>
                </ul>
                <p className="mb-2"><strong>Examples:</strong> IBM System/360, CDC 3300 and 6600</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Fourth Generation (1971-Present)</h2>
                <p className="mb-2"><strong>Key Technology:</strong> Large Scale Integration (LSI), Very Large Scale Integration (VLSI), Microprocessors</p>
                <p className="mb-2">Characteristics:</p>
                <ul className="list-disc pl-6 mb-2">
                    <li>Exceptional speed and large storage capacity</li>
                    <li>Advanced input/output devices</li>
                    <li>Small size, high reliability, low power consumption, affordability</li>
                    <li>Wide variety of software available</li>
                    <li>Graphical User Interfaces (GUIs)</li>
                    <li>Support for multimedia software</li>
                    <li>Compatibility with modern programming languages (Visual Basic, C++, Java, Python)</li>
                    <li>Support for portable and wireless input/output devices</li>
                </ul>
                <p className="mb-2"><strong>Examples:</strong> Intel Pentium series, Dual Core, Core2 Duo, Core i3/i5/i7, AMD Athlon</p>
                <p className="mb-2"><strong>Computer Models:</strong> IBM ThinkPad series, HP Pavilion series, Dell Inspiron series, Apple MacBook Pro and Air</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Fifth Generation (Ongoing)</h2>
                <p className="mb-2"><strong>Key Focus:</strong> Artificial Intelligence (AI) and advanced computing concepts</p>
                <p className="mb-2">Characteristics:</p>
                <ul className="list-disc pl-6 mb-2">
                    <li>Development of machines (robots) with learning, thinking, and problem-solving capabilities</li>
                    <li>Advanced parallel processing</li>
                    <li>Natural Language Processing (NLP)</li>
                    <li>Expert Systems (ES)</li>
                    <li>More intuitive user interfaces (voice recognition, gesture-based controls)</li>
                </ul>
            </section>
        </div>
    )
}

export default page
