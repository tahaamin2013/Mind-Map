// "use client"
// import React, { useState, MouseEvent } from 'react';

// interface Node {
//     id: number;
//     text: string;
//     x: number;
//     y: number;
//     children: number[];
//     color: string;
//     borderStyle?: string;
// }

// interface DraggingState {
//     id: number;
//     offsetX: number;
//     offsetY: number;
// }

// const initialNodes: Node[] = [
//     { id: 1, text: 'Brief History of Computer Systems', x: 500, y: 300, children: [2, 6], color: 'bg-blue-500' },
//     { id: 2, text: 'Definition of Computer', x: 800, y: 300, children: [3, 4, 5], color: 'bg-gray-300' },
//     { id: 3, text: 'Programmable electronic device', x: 1050, y: 200, children: [], color: 'bg-gray-300' },
//     { id: 4, text: 'Performs arithmetic and logical operations', x: 1050, y: 300, children: [], color: 'bg-gray-300' },
//     { id: 5, text: 'Uses a set of instructions', x: 1050, y: 400, children: [], color: 'bg-gray-300', borderStyle: 'border-dashed' },
//     { id: 6, text: 'Importance of Computer History', x: 200, y: 300, children: [7, 8], color: 'bg-gray-300' },
//     { id: 7, text: 'Understanding technological evolution', x: -50, y: 250, children: [], color: 'bg-gray-300' },
//     { id: 8, text: 'Impact on current technology', x: -50, y: 350, children: [], color: 'bg-gray-300' },
// ];

// const MindMap: React.FC = () => {
//     const [nodes, setNodes] = useState<Node[]>(initialNodes);
//     const [dragging, setDragging] = useState<DraggingState | null>(null);

//     const handleMouseDown = (id: number) => (e: MouseEvent<SVGElement>) => {
//         const node = nodes.find(n => n.id === id);
//         if (node) {
//             setDragging({ id, offsetX: e.clientX - node.x, offsetY: e.clientY - node.y });
//         }
//     };

//     const handleMouseMove = (e: MouseEvent<SVGSVGElement>) => {
//         if (dragging) {
//             setNodes(nodes.map(node =>
//                 node.id === dragging.id
//                     ? { ...node, x: e.clientX - dragging.offsetX, y: e.clientY - dragging.offsetY }
//                     : node
//             ));
//         }
//     };

//     const handleMouseUp = () => {
//         setDragging(null);
//     };

//     return (
//         <div className="w-full h-screen bg-white" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
//             <svg className="w-full h-full">
//                 {nodes.map(node => (
//                     <React.Fragment key={node.id}>
//                         {node.children.map(childId => {
//                             const child = nodes.find(n => n.id === childId);
//                             return child && (
//                                 <path
//                                     key={`${node.id}-${childId}`}
//                                     d={`M ${node.x} ${node.y} Q ${(node.x + child.x) / 2} ${node.y}, ${child.x} ${child.y}`}
//                                     className="stroke-gray-400 stroke-2 fill-none"
//                                 />
//                             );
//                         })}
//                         <g transform={`translate(${node.x}, ${node.y})`} onMouseDown={handleMouseDown(node.id)}>
//                             <rect
//                                 x="-75"
//                                 y="-20"
//                                 width="150"
//                                 height="40"
//                                 rx="20"
//                                 className={`${node.color} cursor-move shadow-md ${node.borderStyle === 'border-dashed' ? 'stroke-blue-500 stroke-2 stroke-dashed' : 'stroke-gray-400 stroke-1'}`}
//                             />
//                             <text
//                                 textAnchor="middle"
//                                 dy=".3em"
//                                 className="fill-white text-xs font-medium pointer-events-none"
//                             >
//                                 {node.text}
//                             </text>
//                         </g>
//                     </React.Fragment>
//                 ))}
//             </svg>
//         </div>
//     );
// };

// export default MindMap;
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page