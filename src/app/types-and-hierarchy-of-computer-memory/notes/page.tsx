import React from 'react'

const page = () => {
    return (
        <main className="min-h-screen bg-white p-8">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-4xl font-bold mb-6">Definition of Computer Memory</h1>
                <p className="text-lg mb-4">Physical devices that store programs and data. Can be temporary or permanent storage. Used in computers and other digital devices.</p>

                <h2 className="text-3xl font-semibold mt-8 mb-4">Types of Computer Memory</h2>
                <ul className="list-disc list-inside mb-6">
                    <li><strong>Main Memory</strong> (RAM)</li>
                    <li><strong>Secondary Memory</strong> [Hard Disk Drives (HDDs), Solid State Drives (SSDs), Optical Discs, USB Flash Drives]</li>
                    <li><strong>Internal Processor Memory</strong> (Cache)</li>
                </ul>

                <h2 className="text-3xl font-semibold mt-8 mb-4">Memory Terminology</h2>
                <ul className="list-disc list-inside mb-6">
                    <li><strong>Bit:</strong> Smallest unit (0 or 1)</li>
                    <li><strong>Byte:</strong> 8 bits, stores one character</li>
                    <li><strong>Memory units:</strong> Byte, KB, MB, GB, TB, PB, EB</li>
                    <li><strong>Memory Word:</strong> Smallest amount of data a computer can process</li>
                    <li><strong>Word Size:</strong> Number of bits a CPU can process at once (e.g., 32-bit, 64-bit)</li>
                </ul>

                <h2 className="text-3xl font-semibold mt-8 mb-4">Memory Build-up</h2>
                <ul className="list-disc list-inside mb-6">
                    <li><strong>Chip Memory:</strong> Made of semiconductors (usually silicon). Fast due to no moving parts. Examples: RAM, ROM, Cache, Flash drives, SSDs</li>
                    <li><strong>Magnetic Memory:</strong> Uses magnetized medium for storage. Examples: Hard disks, magnetic tapes. Cheap and large capacity, but slower access</li>
                    <li><strong>Optical Memory:</strong> Uses laser to read/write data on disks. Examples: CDs, DVDs, Blu-ray disks. Cheaper and larger capacity than magnetic storage</li>
                </ul>

                <h2 className="text-3xl font-semibold mt-8 mb-4">Memory Retention</h2>
                <ul className="list-disc list-inside mb-6">
                    <li><strong>Volatile Memory:</strong> Loses data when power is off</li>
                    <li><strong>Non-Volatile Memory:</strong> Retains data without power</li>
                </ul>
            </div>
        </main>
    )
}

export default page