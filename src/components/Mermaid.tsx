import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const MermaidDiagram = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const diagramDefinition = `
    graph TD
      A[Input] --> B[Processing]
      B --> C[Storage]
      B --> D[Output]
      
      subgraph "Input Operation"
      A1[Keyboard] --> A
      A2[Mouse] --> A
      A3[Microphone] --> A
      end
      
      subgraph "Processing Operation"
      B1[CPU] --> B
      B2[RAM] --> B
      end
      
      subgraph "Storage Operation"
      C1[Hard Drive] --> C
      C2[SSD] --> C
      end
      
      subgraph "Output Operation"
      D1[Monitor] --> D
      D2[Speakers] --> D
      D3[Printer] --> D
      end
  `;

    return (
        <div className="mermaid-diagram">
            <div className="mermaid">
                {diagramDefinition}
            </div>
        </div>
    );
};

export default MermaidDiagram;