import React from 'react';

const page: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Chapter 2: Central Processing Unit (CPU)</h1>

            <h2 className="text-2xl font-bold mb-2">2.1 Overview of CPU</h2>
            <p className="mb-4">
                The Central Processing Unit, commonly known as the CPU, is often referred to as the "brain" of the computer.
                It's the primary component responsible for executing instructions of a computer program. These instructions
                involve performing basic arithmetic, logical, control, and input/output (I/O) operations specified by the instructions.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>It's typically a small silicon chip encased in a ceramic or plastic package.</li>
                <li>Modern CPUs can perform billions of calculations per second.</li>
                <li>CPUs are produced by manufacturers like Intel, AMD, and ARM.</li>
                <li>The speed of a CPU is measured in Hertz (Hz), with modern CPUs operating in the Gigahertz (GHz) range.</li>
                <li>The CPU consists of several key components, primarily the Control Unit (CU) and the Arithmetic Logic Unit (ALU), which we'll explore in more detail in the following sections.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">2.2 Control Unit (CU)</h2>
            <p className="mb-4">
                The Control Unit is the component of the CPU that directs the operation of the processor. It tells the computer's memory,
                arithmetic and logic unit, and input and output devices how to respond to the instructions that have been sent to the processor.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Fetches instructions from memory</li>
                <li>Decodes these instructions</li>
                <li>Executes these instructions by directing the coordinated operations of the ALU, registers, and other components</li>
                <li>The CU uses electrical signals to direct the entire computer system to carry out stored program instructions.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">2.3 Arithmetic and Logic Unit (ALU)</h2>
            <p className="mb-4">
                The Arithmetic Logic Unit is the part of the CPU that carries out arithmetic and logical operations. It's essentially the mathematical brain of the computer.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Arithmetic operations: Addition, subtraction, multiplication, and division</li>
                <li>Logical operations: AND, OR, NOT, XOR</li>
                <li>Comparison operations: Greater than, less than, equal to</li>
                <li>The ALU takes data from the processor registers, performs the required operation, and returns the result to an appropriate register.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">2.4 Buses</h2>
            <p className="mb-4">
                Buses are communication systems that transfer data between components inside a computer or between computers. There are three main types of buses in a typical computer system:
            </p>
            <h3 className="text-xl font-bold mb-2">2.4.1 Data Bus</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Carries data between the CPU and other components</li>
                <li>Bidirectional, allowing data to travel both to and from the CPU</li>
                <li>Width of the data bus (e.g., 32-bit, 64-bit) affects how much data can be transferred at once</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">2.4.2 Address Bus</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Carries memory addresses from the CPU to other components</li>
                <li>Unidirectional, only carrying addresses from the CPU to memory</li>
                <li>Width determines the maximum amount of memory that can be addressed</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">2.4.3 Control Bus</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Carries control signals from the CPU to other components</li>
                <li>Controls when devices can access the bus and when data should be read or written</li>
                <li>Includes signals like read/write, interrupt request, clock signals, etc.</li>
            </ul>

            <p className="mb-4">
                The bus system is crucial for the efficient operation of the computer, allowing different components to communicate and work together seamlessly.
            </p>
        </div>
    );
};

export default page;
