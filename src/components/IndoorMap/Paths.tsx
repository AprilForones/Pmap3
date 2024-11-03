import { graphData, rainGraphData } from "@/store/graphData";



function Paths() {

  return (
    <g id="Edges">
      {/* Render paths for regular graph data */}
      {graphData.edges.map((edge) => {
        const { id, from, to } = edge;
        const fromVertex = graphData.vertices.find(
          (vertex) => vertex.id === from
        );
        const toVertex = graphData.vertices.find((vertex) => vertex.id === to);
        if (fromVertex && toVertex) {
          const pathClassName = "path";
          const pathD = `M${fromVertex.cx} ${fromVertex.cy}L${toVertex.cx} ${toVertex.cy}`;
          return (
            <path
              key={id}
              id={id}
              className={pathClassName} // Standard path styling
              d={pathD}
            />
          );
        }
        return null;
      })}

      {/* Render paths for rain graph data */}
      {rainGraphData.edges.map((edge) => {
        const { id, from, to } = edge;
        const fromVertex = rainGraphData.vertices.find(
          (vertex) => vertex.id === from
        );
        const toVertex = rainGraphData.vertices.find((vertex) => vertex.id === to);
        if (fromVertex && toVertex) {
          const pathClassrain = "rain";
          const pathD = `M${fromVertex.cx} ${fromVertex.cy}L${toVertex.cx} ${toVertex.cy}`;
          return (
            <path
              key={`rain-${id}`}
              id={`rain-${id}`}
              className={pathClassrain} // Styling specifically for rain paths
              d={pathD}
            />
          );
        }
        return null;
      })}

      <path id="navigation-route" className="path" d="" fill="none" />
      {/* <path id="navigation-rainroute" className="rain" d="" fill="none" /> */}
    </g>
  );
}

export default Paths;
