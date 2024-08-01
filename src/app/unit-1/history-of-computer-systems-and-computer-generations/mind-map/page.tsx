import React from "react";
import MermaidDiagram from "@/components/mermaiddiagram";

const HistoryTable = () => {
  const earlyComputingDevicesChart = `
  graph TD
    A[Abacus] --> B[Napier's Bones]
    B --> C[Pascaline]
    C --> D[Stepped Reckoner]
    D --> E[Difference Engine]
    E --> F[Analytical Engine]
    F --> G[Tabulating Machine]
    G --> H[Differential Analyzer]
    H --> I[Mark 1]

    A -->|Early computing device| B
    B -->|Decimal calculating| C
    C -->|Mechanical calculator| D
    D -->|Digital mechanical| E
    E -->|Basic computations| F
    F -->|Advanced computations| G
    G -->|Punch card-based| H
    H -->|Electrical computer| I
  `;

  const computerGenerationsChart = `
  classDiagram
    class FirstGeneration {
      +Technology: Vacuum tubes
      +ProcessingSpeed: Slow
      +MemoryCapacity: Limited
      +Size: Massive, occupying entire rooms
      +Cost: High
      +Reliability: Unreliable
      +PowerConsumption: High
      +InputOutputMethods: Punched cards, electric typewriters
      +ProgrammingLanguage: Machine language
      +Examples: ENIAC, UNIVAC I, IBM 604, Mark-1, EDSAC
      +UserInteraction: Via punched cards
      +SoftwareCapability: Very limited
    }

    class SecondGeneration {
      +Technology: Transistors
      +ProcessingSpeed: Improved
      +MemoryCapacity: Improved
      +Size: Smaller
      +Cost: Reduced
      +Reliability: Increased
      +PowerConsumption: Reduced
      +InputOutputMethods: Punch card readers, magnetic tapes, printers
      +ProgrammingLanguage: Assembly language, high-level languages (FORTRAN, COBOL)
      +Examples: UNIVAC II, IBM 7030, General Electric GE 635, CDC 1604
      +UserInteraction: Punch card readers, magnetic tapes, printers
      +SoftwareCapability: Improved, high-level programming
    }

    class ThirdGeneration {
      +Technology: Integrated Circuits (ICs)
      +ProcessingSpeed: Enhanced
      +MemoryCapacity: Enhanced
      +Size: Reduced
      +Cost: Reduced
      +Reliability: Improved
      +PowerConsumption: Improved energy efficiency
      +InputOutputMethods: Keyboards, monitors
      +ProgrammingLanguage: High-level languages
      +Examples: IBM System/360, Control Data Corporation 3300, 6600
      +UserInteraction: Keyboards, monitors
      +SoftwareCapability: Multiple applications concurrently
    }

    class FourthGeneration {
      +Technology: LSI and VLSI chips, microprocessors
      +ProcessingSpeed: Exceptional
      +MemoryCapacity: Large
      +Size: Small
      +Cost: Affordable
      +Reliability: High
      +PowerConsumption: Low
      +InputOutputMethods: Portable and wireless devices
      +ProgrammingLanguage: Modern programming languages
      +Examples: Intel Pentium series, IBM ThinkPad, HP Pavilion, Dell Inspiron, MacBook Pro, MacBook Air
      +UserInteraction: GUIs
      +SoftwareCapability: Diverse software, multimedia support
    }

    class FifthGeneration {
      +Technology: AI technologies, advanced parallel processing
      +ProcessingSpeed: Advanced
      +MemoryCapacity: Advanced
      +Size: Varies, generally compact
      +Cost: Varies, generally high due to advanced tech
      +Reliability: High
      +PowerConsumption: Varies
      +InputOutputMethods: Voice recognition, gesture-based controls
      +ProgrammingLanguage: Natural Language Processing
      +Examples: Advanced AI systems
      +UserInteraction: Voice, gesture-based controls
      +SoftwareCapability: Expert Systems, AI-based applications
    }

    FirstGeneration <|-- SecondGeneration
    SecondGeneration <|-- ThirdGeneration
    ThirdGeneration <|-- FourthGeneration
    FourthGeneration <|-- FifthGeneration
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          History of Computer Systems
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Early Computing Devices
          </h2>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="overflow-x-scroll">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Device", "Inventor/Origin", "Date", "Key Features", "Usage"].map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["Abacus", "Unknown, used in various cultures", "Ancient times", "Beads or stones on rods or wires; manually operated", "Arithmetic calculations by sliding beads to represent numerical values"],
                    ["Napier's Bones", "John Napier, Scotland", "17th century", "9 separate strips (bones) marked with numerals; first decimal-calculating device", "Multiplication and division"],
                    ["Pascaline", "Blaise Pascal, France", "1642", "Wooden box with gears and wheels; mechanical and automated calculator", "Arithmetic calculations; early mechanical device"],
                    ["Stepped Reckoner", "Wilhelm Leibniz, Germany", "1673", "Grooved wheels; digital mechanical calculator", "Improved on Pascal's invention; used for arithmetic calculations"],
                    ["Difference Engine", "Charles Babbage, England", "1820s", "Mechanical computer capable of basic computations; steam-powered", "Solving numerical problems"],
                    ["Analytical Engine", "Charles Babbage, England", "1830", "Mechanical computer; input from punch cards; capable of solving mathematical problems and storing data", "More advanced computations and data storage"],
                    ["Tabulating Machine", "Herman Hollerith, USA", "1890", "Punch card-based mechanical calculator", "Computing statistics and recording data; used in census calculations World Wide"],
                    ["Differential Analyzer", "Vannevar Bush, USA", "1930", "First electrical computer; made up of vacuum tubes used as switches", "Capable of performing complex calculations; used for scientific computations"],
                    ["Mark 1", "Howard Aiken, USA", "1944", "Digital computer; could add three numbers with eight digits in one second; printed results on punched cards or electric typewriter", "Early digital computing; performed arithmetic operations quickly; used for complex calculations"]
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Timeline of Early Computing Devices</h3>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <MermaidDiagram chart={earlyComputingDevicesChart} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Computer Generations
          </h2>
          <div className="bg-white shadow-xl w-full rounded-lg overflow-hidden">
            <div className="overflow-x-scroll">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Feature", "First Generation (1940-1956)", "Second Generation (1956-1963)", "Third Generation (1963-1971)", "Fourth Generation (1971-Present)", "Fifth Generation"].map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["Technology", "Vacuum tubes", "Transistors", "Integrated Circuits (ICs)", "LSI and VLSI chips, microprocessors", "AI technologies, advanced parallel processing"],
                    ["Processing Speed", "Slow", "Improved", "Enhanced", "Exceptional", "Advanced"],
                    ["Memory Capacity", "Limited", "Improved", "Enhanced", "Large", "Advanced"],
                    ["Size", "Massive, occupying entire rooms", "Smaller", "Reduced", "Small", "Varies, generally compact"],
                    ["Cost", "High", "Reduced", "Reduced", "Affordable", "Varies, generally high due to advanced tech"],
                    ["Reliability", "Unreliable", "Increased", "Improved", "High", "High"],
                    ["Power Consumption", "High, significant heat generation", "Reduced", "Improved energy efficiency", "Low", "Varies"],
                    ["Input/Output Methods", "Punched cards, electric typewriters", "Punch card readers, magnetic tapes, printers", "Keyboards, monitors", "Portable and wireless devices", "Voice recognition, gesture-based controls"],
                    ["Programming Language", "Machine language", "Assembly language, high-level languages (FORTRAN, COBOL)", "High-level languages", "Modern programming languages", "Natural Language Processing"],
                    ["Examples", "ENIAC, UNIVAC I, IBM 604, Mark-1, EDSAC", "UNIVAC II, IBM 7030, General Electric GE 635, CDC 1604", "IBM System/360, Control Data Corporation 3300, 6600", "Intel Pentium series, IBM ThinkPad, HP Pavilion, Dell Inspiron, MacBook Pro, MacBook Air", "Advanced AI systems"],
                    ["User Interaction", "Via punched cards", "Punch card readers, magnetic tapes, printers", "Keyboards, monitors", "GUIs", "Voice, gesture-based controls"],
                    ["Software Capability", "Very limited", "Improved, high-level programming", "Multiple applications concurrently", "Diverse software, multimedia support", "Expert Systems, AI-based applications"]
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Computer Generations Overview</h3>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <MermaidDiagram chart={computerGenerationsChart} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HistoryTable;