// import React from "react";
import ReactFlow, { Controls, Background} from "reactflow";

import "reactflow/dist/style.css";

const containerStyle = {
  width: '100vw',
  height: '100vh',
}

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 0, y: 0 },
  }
]

function MindNode() {
  return (
    <div id="flow-container" style={containerStyle}>
      <ReactFlow nodes={initialNodes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default MindNode;
