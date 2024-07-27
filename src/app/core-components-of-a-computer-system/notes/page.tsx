import React from 'react'

const Page = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Core Components of a Computer System</h1>
            <h1 className="text-3xl font-bold mb-4">1. Input Devices</h1>
            <p>Devices used to provide data into the computer system:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Keyboard</li>
                <li>Mouse</li>
                <li>Microphone</li>
                <li>Scanner</li>
                <li>Barcode Reader</li>
                <li>Digital Camera</li>
                <li>Touch Screen</li>
            </ul>

            <h1 className="text-3xl font-bold mt-6 mb-4">2. System Unit</h1>
            <p>Main part of the computer, including:</p>

            <h2 className="text-2xl font-semibold mb-2">2.1 Motherboard</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Main circuit board</li>
                <li>Contains microprocessor, memory, expansion cards, and other components</li>
                <li>Has buses for information transmission</li>
                <li>Connects all input/output devices</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">2.2 Microprocessor (CPU)</h2>
            <p>Main chip controlling all computer activities</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Control Unit (CU)</li>
                <li>Arithmetic Logic Unit (ALU)</li>
                <li>Registers</li>
            </ul>

            <h1 className="text-3xl font-bold mt-6 mb-4">3. Storage Devices</h1>
            <p>Used to store programs and data not currently in use:</p>

            <h2 className="text-2xl font-semibold mb-2">3.1 Internal Storage</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Hard Disk: Fixed inside the system unit, high capacity (hundreds of GB)</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">3.2 Portable Storage</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Compact Disk (CD): 700 MB capacity</li>
                <li>Digital Versatile Disk (DVD): 4-16 GB capacity</li>
                <li>Memory Card: Few GB capacity, used in laptops and portable devices</li>
                <li>USB Flash Drive: Up to 128 GB capacity, connects via USB port</li>
            </ul>

            <h1 className="text-3xl font-bold mt-6 mb-4">4. Output Devices</h1>
            <p>Used to display or print information:</p>

            <h2 className="text-2xl font-semibold mb-2">4.1 Monitor</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>CRT (Cathode Ray Tube) - obsolete</li>
                <li>LED (Light Emitting Diode) - modern, slim, energy-efficient</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">4.2 Printer</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Impact Printers
                    <ul className="list-disc pl-6">
                        <li>Dot Matrix Printer</li>
                    </ul>
                </li>
                <li>Non-Impact Printers
                    <ul className="list-disc pl-6">
                        <li>Inkjet Printer</li>
                        <li>Laser Printer</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">4.3 Plotter</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Used for large-scale printing (engineering drawings, maps, etc.)</li>
                <li>Types: Ink plotter, Pen plotter</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">4.4 Speaker</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Produces audio output</li>
                <li>Connected to sound card on motherboard</li>
            </ul>

            <h1 className="text-3xl font-bold mt-6 mb-4">5. Ports and Expansion Slots</h1>

            <h2 className="text-2xl font-semibold mb-2">5.1 Ports</h2>
            <p>Interfaces for connecting devices to the system unit:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>USB (Universal Serial Bus)</li>
                <li>HDMI (High Definition Multimedia Interface)</li>
                <li>DVI (Digital Visual Interface)</li>
                <li>Audio ports</li>
                <li>LAN (Local Area Network) port</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">5.2 Expansion Slots and Cards</h2>
            <p>Slots on motherboard for installing expansion cards</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Common expansion cards:
                    <ul className="list-disc pl-6">
                        <li>Sound card</li>
                        <li>Graphics card</li>
                        <li>Modem card</li>
                        <li>Network card</li>
                    </ul>
                </li>
                <li>Note: In modern computers, many expansion card functions are built into the motherboard.</li>
            </ul>

            <h1 className="text-3xl font-bold mt-6 mb-4">Von Neumann Architecture: The Blueprint of Modern Computers</h1>
            <h2 className="text-2xl font-semibold mb-2">What is Von Neumann Architecture?</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>A design for how computers work, created by John von Neumann in 1945</li>
                <li>It's like a recipe for building computers</li>
                <li>Most computers today still use this design</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Main Parts of Von Neumann Architecture:</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Central Processing Unit (CPU): The computer's brain</li>
                <li>Memory Unit: Where the computer stores information</li>
                <li>Input/Output: How the computer talks to the outside world</li>
                <li>Buses: Roads that connect all the parts</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">The CPU: The Computer's Brain</h2>
            <p>Does all the thinking and calculating. Has three important parts:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Arithmetic and Logic Unit (ALU): Does math and logical operations</li>
                <li>Control Unit (CU): Manages everything, like a boss</li>
                <li>Registers: Tiny, super-fast storage spaces</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Important Registers:</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>MAR (Memory Address Register): Remembers where to find data</li>
                <li>MDR (Memory Data Register): Holds data being moved around</li>
                <li>AC (Accumulator): Stores results from calculations</li>
                <li>PC (Program Counter): Keeps track of what to do next</li>
                <li>CIR (Current Instruction Register): Holds the current task</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Memory Unit: The Computer's Notebook</h2>
            <p>Stores both programs and data. Has two main types:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>RAM: Fast memory, but forgets when power is off</li>
                <li>Cache: Super fast, but very small amount</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Buses: The Computer's Highway System</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Address Bus: Tells where data should go</li>
                <li>Data Bus: Carries the actual information</li>
                <li>Control Bus: Manages traffic and gives instructions</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Input/Output (I/O) Controller: The Computer's Messenger</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Manages how the computer talks to things like keyboards, screens, and hard drives</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">How It All Works Together:</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Programs and data are stored in memory</li>
                <li>The CPU fetches instructions from memory</li>
                <li>The CPU processes these instructions</li>
                <li>Results are stored back in memory or sent to output devices</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Why It's Important:</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>This design allows for flexible programming</li>
                <li>The same hardware can run many different programs</li>
                <li>It's the foundation for most modern computers</li>
            </ul>
        </div>
    )
}

export default Page
