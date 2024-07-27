import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, BackgroundVariant } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Web Development' },
        position: { x: 250, y: 0 },
    },
    {
        id: '2',
        data: { label: 'Frontend' },
        position: { x: 100, y: 100 },
    },
    {
        id: '3',
        data: { label: 'Backend' },
        position: { x: 250, y: 100 },
    },
    {
        id: '4',
        data: { label: 'DevOps' },
        position: { x: 400, y: 100 },
    },
    // Add more nodes as needed
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e1-4', source: '1', target: '4' },
    // Add more edges as needed
];

function MindMap() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div style={{ width: '100%', height: '500px' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
            >
                <Controls />
                <MiniMap />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
        </div>
    );
}

export default MindMap;
