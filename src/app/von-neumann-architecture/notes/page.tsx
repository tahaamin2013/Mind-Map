import React from 'react'

const Page = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Von Neumann Architecture</h1>
      <p className="mb-4">
        Von Neumann Architecture is an essential concept in computer science that explains how a computer&quot;s hardware and software work together to process information. It was first published by John von Neumann in 1945. His computer architecture design consists of a Control Unit, Arithmetic and Logic Unit (ALU), Memory Unit, Registers, and Inputs/Outputs.
        Von Neumann architecture is based on the stored-program computer concept, where instruction data and program data are stored in the same memory. This design is still used in most computers produced today.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Central Processing Unit (CPU)</h2>
      <p className="mb-4">
        The Central Processing Unit (CPU) is the main electronic circuit responsible for executing the instructions of a computer program. The CPU contains the ALU, CU, and a variety of registers.
      </p>

      <h3 className="text-xl font-semibold mb-2">Registers</h3>
      <p className="mb-4">Registers are high-speed storage areas in the CPU. All data must be stored in a register before it can be processed.</p>
      <table className="min-w-full divide-y divide-gray-200 mb-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Register</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">MAR</td>
            <td className="px-6 py-4 whitespace-nowrap">Memory Address Register</td>
            <td className="px-6 py-4 whitespace-nowrap">Holds the memory location of data that needs to be accessed</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">MDR</td>
            <td className="px-6 py-4 whitespace-nowrap">Memory Data Register</td>
            <td className="px-6 py-4 whitespace-nowrap">Holds data that is being transferred to or from memory</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">AC</td>
            <td className="px-6 py-4 whitespace-nowrap">Accumulator</td>
            <td className="px-6 py-4 whitespace-nowrap">Where intermediate arithmetic and logic results are stored</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">PC</td>
            <td className="px-6 py-4 whitespace-nowrap">Program Counter</td>
            <td className="px-6 py-4 whitespace-nowrap">Contains the memory address of the next instruction to be executed</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">CIR</td>
            <td className="px-6 py-4 whitespace-nowrap">Current Instruction Register</td>
            <td className="px-6 py-4 whitespace-nowrap">Contains the current instruction during processing</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mb-2">Arithmetic and Logic Unit (ALU)</h3>
      <p className="mb-4">
        The ALU allows arithmetical (add, subtract etc.) and logical (AND, OR, NOT etc.) operations to be carried out.
      </p>

      <h3 className="text-xl font-semibold mb-2">Control Unit (CU)</h3>
      <p className="mb-4">
        The control unit controls the operation of the computer&quot;s ALU, memory, and input/output devices, telling them how to respond to the program instructions interpreted from the memory unit. The control unit also provides the timing and control signals required by other components.
      </p>

      <h3 className="text-xl font-semibold mb-2">Buses</h3>
      <p className="mb-4">
        Buses are the pathways or lines by which data is transmitted from one part of a computer to another, connecting all major internal components to the CPU and memory. A standard CPU system bus is comprised of a control bus, data bus, and address bus.
      </p>
      <table className="min-w-full divide-y divide-gray-200 mb-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Address Bus</td>
            <td className="px-6 py-4 whitespace-nowrap">Carries the addresses of data (but not the data) between the processor and memory</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Data Bus</td>
            <td className="px-6 py-4 whitespace-nowrap">Carries data between the processor, the memory unit, and the input/output devices</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Control Bus</td>
            <td className="px-6 py-4 whitespace-nowrap">Carries control signals or commands from the CPU in order to control and coordinate all the activities within the computer</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mb-2">Memory Unit</h3>
      <p className="mb-4">
        In Von Neumann architecture, the memory unit consists of RAM and Cache memory, sometimes referred to as primary or main memory. This memory is fast and directly accessible by the CPU. RAM is split into partitions. Each partition consists of an address and its contents (both in binary form). The address uniquely identifies every location in the memory.
      </p>

      <h3 className="text-xl font-semibold mb-2">Input/Output (I/O) Controller</h3>
      <p className="mb-4">
        This component manages the flow of data between the CPU and external devices like hard drives, USB devices, and network interfaces.
      </p>
    </div>
  )
}

export default Page
