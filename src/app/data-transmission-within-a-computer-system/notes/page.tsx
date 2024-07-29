import React from 'react'

const Page = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Data Transmission in a Computer</h1>
            <p>It&apos;s how information moves between different parts of a computer. These parts include:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>The brain (CPU)</li>
                <li>Memory</li>
                <li>Storage</li>
                <li>Input/Output devices</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Bus Architecture: The Computer&apos;s Highway System</h2>
            <p>Buses are like roads that data travels on inside the computer. There are three main types of buses:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Data Bus: Carries the actual information</li>
                <li>Address Bus: Tells where the data should go</li>
                <li>Control Bus: Manages traffic and tells components what to do</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Data Paths: The CPU&apos;s Internal Roads</h2>
            <p>These are special routes inside the CPU for moving data. They connect different parts of the CPU, like:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>The math unit</li>
                <li>Temporary storage areas</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Registers: Quick Storage Spots</h2>
            <p>Small, fast storage spaces inside the CPU that hold data the CPU uses often.</p>

            <h2 className="text-2xl font-semibold mb-2">Memory Hierarchy: From Fast to Slow</h2>
            <p>Different types of memory, arranged from fastest to slowest:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Cache: Very fast but small</li>
                <li>RAM: Bigger but a bit slower</li>
                <li>Hard drives/SSDs: Much bigger but slowest</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Instruction Cycle: The CPU&apos;s To-Do List</h2>
            <p>A repeating process the CPU follows:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Fetch: Get the next instruction</li>
                <li>Decode: Figure out what the instruction means</li>
                <li>Execute: Do what the instruction says</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Pipeline Processing: Multi-tasking for CPUs</h2>
            <p>The CPU works on multiple instructions at once, like an assembly line for data.</p>

            <h2 className="text-2xl font-semibold mb-2">Interrupts and I/O: Handling Outside Input</h2>
            <p>How the CPU talks to things like keyboards and screens:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>When these devices need attention, they send an &quot;interrupt&quot; signal.</li>
            </  ul>

            <h2 className="text-2xl font-semibold mb-2">Parallelism: Teamwork for Faster Processing</h2>
            <p>Using multiple processors or computers to work on tasks together helps get work done faster.</p>
        </div>
    )
}

export default Page
