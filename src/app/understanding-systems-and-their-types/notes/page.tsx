import React from 'react'

const Page = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">1.2 Understanding Systems and Their Types</h1>
      <h1 className="text-3xl font-bold mb-4">Definition of a System</h1>
      <p>A collection of interconnected or interrelated components working together for a specific purpose or function.</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Accepts input and produces output.</li>
        <li>Found in various aspects of life (natural and artificial).</li>
      </ul>

      <h1 className="text-3xl font-bold mt-6 mb-4">Importance of Understanding Systems</h1>
      <ul className="list-disc pl-6 mb-4">
        <li>Relevant to fields like engineering, biology, sociology, and management.</li>
        <li>Allows for better analysis, design, and optimization.</li>
        <li>Different types of systems require different approaches for study and management.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Natural and Artificial Systems</h2>

      <h3 className="text-xl font-semibold mb-2">Natural Systems</h3>
      <p><strong>Definition:</strong> Interconnected elements or components existing in nature.</p>
      <p><strong>Characteristics:</strong></p>
      <ul className="list-disc pl-6 mb-2">
        <li>Self-regulating</li>
        <li>Adaptive</li>
        <li>Maintain stability</li>
      </ul>
      <p><strong>Examples:</strong></p>
      <ul className="list-disc pl-6 mb-4">
        <li>Ecosystems
          <ul className="list-disc pl-6">
            <li>Forest ecosystems (e.g., tropical rainforest)</li>
            <li>Aquatic ecosystems (e.g., freshwater lakes, coral reefs)</li>
            <li>Grassland ecosystems (e.g., African savanna)</li>
          </ul>
        </li>
        <li>Weather Systems</li>
        <li>Geological Systems
          <ul className="list-disc pl-6">
            <li>Plate tectonics</li>
            <li>Mountain systems</li>
          </ul>
        </li>
        <li>Hydrological Systems</li>
        <li>Solar System</li>
        <li>Biological Systems
          <ul className="list-disc pl-6">
            <li>Human body</li>
            <li>Coral reef</li>
            <li>Rainforest canopy</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Artificial Systems</h3>
      <p><strong>Definition:</strong> Man-made or human-made systems created for specific purposes.</p>
      <ul className="list-disc pl-6 mb-2">
        <li>Intentionally constructed</li>
        <li>Serve specific purposes or solve problems</li>
        <li>Require planning, engineering, and maintenance</li>
      </ul>
      <p><strong>Examples:</strong></p>
      <ul className="list-disc pl-6 mb-4">
        <li>Communication Systems
          <ul className="list-disc pl-6">
            <li>Telephone networks</li>
            <li>Internet and computer networks</li>
            <li>Satellite communication systems</li>
          </ul>
        </li>
        <li>Information Systems
          <ul className="list-disc pl-6">
            <li>Databases</li>
            <li>Software applications</li>
          </ul>
        </li>
        <li>Transportation Systems
          <ul className="list-disc pl-6">
            <li>Automobiles</li>
            <li>Aircraft</li>
            <li>Trains and rail systems</li>
            <li>Subways and mass transit</li>
          </ul>
        </li>
        <li>Energy Systems
          <ul className="list-disc pl-6">
            <li>Power plants</li>
            <li>Renewable energy systems</li>
            <li>Electrical grids</li>
          </ul>
        </li>
        <li>Manufacturing Systems
          <ul className="list-disc pl-6">
            <li>Factory automation</li>
            <li>Assembly lines</li>
          </ul>
        </li>
        <li>Healthcare Systems
          <ul className="list-disc pl-6">
            <li>Hospital Information Systems (HIS)</li>
            <li>Medical devices</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Key Differences</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Natural systems occur organically; artificial systems are designed by humans.</li>
        <li>Natural systems are self-sustaining; artificial systems often require human intervention and maintenance.</li>
        <li>Natural systems are typically more complex and adaptable; artificial systems are purpose-built for specific functions.</li>
      </ul>
    </div>
  )
}

export default Page
