import { graphData, rainGraphData } from "@/store/graphData";

// interface PathsProps {
//   showRainRoute: boolean;
// }

// function Paths() {
  function Paths({ showRainRoute }: { showRainRoute: boolean }) {
    // const originalPathColor = "orange";
    // const rainPathColor = "gray";

  // Find common start and end points between original and rain routes
  // const commonStartVertex = graphData.vertices.find((v) =>
  //   rainGraphData.vertices.some((rv) => rv.id === v.id)
  // );
  // const commonEndVertex = graphData.vertices.find((v) =>
  //   rainGraphData.vertices.some((rv) => rv.id === v.id)
  // );    

    return (
      <g id="Paths">
        {/* Render original path (orange) */}
        {graphData.edges.map((edge, index) => (
        <line
          key={`original-path-${index}`}
          x1={graphData.vertices.find((v) => v.id === edge.from)?.cx}
          y1={graphData.vertices.find((v) => v.id === edge.from)?.cy}
          x2={graphData.vertices.find((v) => v.id === edge.to)?.cx}
          y2={graphData.vertices.find((v) => v.id === edge.to)?.cy}
          // stroke={originalPathColor}
          // strokeWidth={5}
        />
      ))}
{/* Conditionally render rain route */}
      {showRainRoute &&
        rainGraphData.edges.map((edge, index) => (
          <line
            key={`rain-path-${index}`}
            x1={rainGraphData.vertices.find((v) => v.id === edge.from)?.cx}
            y1={rainGraphData.vertices.find((v) => v.id === edge.from)?.cy}
            x2={rainGraphData.vertices.find((v) => v.id === edge.to)?.cx}
            y2={rainGraphData.vertices.find((v) => v.id === edge.to)?.cy}
            // stroke={rainPathColor}
            // strokeWidth={5}
            // strokeDasharray="5,5"
          />
        ))}
  
        {/* Navigation route placeholder */}
        <path id="navigation-route" className="path" d="" fill="none" />
      </g>
    );
//original Code Function    
  // return (
  //   <g id="Edges">
  //     {graphData.edges.map((edge) => {
  //       const { id, from, to } = edge;
  //       const fromVertex = graphData.vertices.find(
  //         (vertex) => vertex.id === from
  //       );
  //       const toVertex = graphData.vertices.find((vertex) => vertex.id === to);
  //       if (fromVertex && toVertex) {
  //         const pathClassName = "path";
  //         const pathD = `M${fromVertex.cx} ${fromVertex.cy}L${toVertex.cx} ${toVertex.cy}`;
  //         return <path key={id} id={id} className={pathClassName} d={pathD} />;
  //       }
  //       return null;
  //     })}
  //     <path id="navigation-route" className="path" d="" fill="none" />
  //   </g>
    
  // );
}

export default Paths;
