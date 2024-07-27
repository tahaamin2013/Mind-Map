import React from 'react'

const Page = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto"> 
            <h1 className="text-4xl font-bold mb-6">Types and Hierarchy of Computer Memory</h1>
            <h1 className="text-3xl font-bold mb-4">Definition of Computer Memory</h1>
            <ul className="list-disc pl-6 mb-4">
                <li>Physical devices that store programs and data</li>
                <li>Can be temporary or permanent storage</li>
                <li>Used in computers and other digital devices</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Types of Computer Memory:</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Main Memory</li>
                <li>Secondary Memory</li>
                <li>Internal Processor Memory</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Memory Terminology:</h2>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Bit:</strong> Smallest unit (0 or 1)</li>
                <li><strong>Byte:</strong> 8 bits, stores one character</li>
                <li><strong>Memory units:</strong> Byte, KB, MB, GB, TB, PB, EB</li>
                <li><strong>Memory Word:</strong> Smallest amount of data a computer can process</li>
                <li><strong>Word Size:</strong> Number of bits a CPU can process at once (e.g., 32-bit, 64-bit)</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Memory Build-up:</h2>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Chip Memory:</strong>
                    <ul className="list-disc pl-6">
                        <li>Made of semiconductors (usually silicon)</li>
                        <li>Fast due to no moving parts</li>
                        <li>Examples: RAM, ROM, Cache, Flash drives, SSDs</li>
                    </ul>
                </li>
                <li><strong>Magnetic Memory:</strong>
                    <ul className="list-disc pl-6">
                        <li>Uses magnetized medium for storage</li>
                        <li>Examples: Hard disks, magnetic tapes</li>
                        <li>Cheap and large capacity, but slower access</li>
                    </ul>
                </li>
                <li><strong>Optical Memory:</strong>
                    <ul className="list-disc pl-6">
                        <li>Uses laser to read/write data on disks</li>
                        <li>Examples: CDs, DVDs, Blu-ray disks</li>
                        <li>Cheaper and larger capacity than magnetic storage</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Memory Retention:</h2>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Volatile Memory:</strong> Loses data when power is off</li>
                <li><strong>Non-Volatile Memory:</strong> Retains data without power</li>
            </ul>
        </div>
    )
}

export default Page
