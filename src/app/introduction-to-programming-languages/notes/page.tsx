import React from 'react';

const page: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Introduction to Programming Languages</h1>
            <p className="mb-4">
                Programming languages are used to create software and control computer operations. They can be classified into three levels:
            </p>

            <h2 className="text-2xl font-semibold mt-4">High-Level Languages</h2>
            <p className="mb-2">
                <strong>Description:</strong> Closer to human language and easier to learn. They provide more abstraction from hardware details.
            </p>
            <p className="mb-2">
                <strong>Examples:</strong> Python, Java, C++, JavaScript.
            </p>
            <p className="mb-4">
                <strong>Purpose:</strong> Used for general-purpose programming.
            </p>

            <h2 className="text-2xl font-semibold mt-4">Medium-Level Languages</h2>
            <p className="mb-2">
                <strong>Description:</strong> Blend features of high-level and low-level languages. They offer some abstraction while allowing hardware control.
            </p>
            <p className="mb-2">
                <strong>Example:</strong> C.
            </p>
            <p className="mb-4">
                <strong>Purpose:</strong> Provide good control over hardware while being easier to read than low-level languages.
            </p>

            <h2 className="text-2xl font-semibold mt-4">Low-Level Languages</h2>
            <p className="mb-2">
                <strong>Description:</strong> Closer to machine language, providing direct hardware control.
            </p>
            <p className="mb-2">
                <strong>Examples:</strong> Assembly language, Machine code.
            </p>
            <p className="mb-4">
                <strong>Purpose:</strong> Give the programmer precise control over the hardware.
            </p>

            <h2 className="text-2xl font-semibold mt-4">Key Concepts</h2>
            <h3 className="text-xl font-medium mt-2">Compiler</h3>
            <p className="mb-2">
                <strong>Function:</strong> A program that translates an entire high-level language code into machine code all at once before execution.
            </p>
            <p className="mb-4">
                <strong>Examples:</strong> GCC compiler for C and C++.
            </p>

            <h3 className="text-xl font-medium mt-2">Interpreter</h3>
            <p className="mb-2">
                <strong>Function:</strong> A program that translates and executes high-level language code line by line as the program runs.
            </p>
            <p className="mb-4">
                <strong>Examples:</strong> Python and JavaScript often use interpreters.
            </p>

            <h3 className="text-xl font-medium mt-2">Assembler</h3>
            <p className="mb-2">
                <strong>Function:</strong> A program that translates assembly language into machine code.
            </p>
            <p>
                <strong>Purpose:</strong> Assembly language is a low-level programming language specific to a computer's architecture.
            </p>
        </div>
    );
};

export default page;
