import { graphData} from "@/store/graphData";
import {  rainGraphData } from "@/store/rainGraphData";
import { NavigationContextType } from "@/utils/types";

interface PositionsProps {
  positionRadius: number;
  handlePositionClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className: string;
  navigation?: NavigationContextType["navigation"];
}
function Positions({
  positionRadius,
  handlePositionClick,
  className,
  navigation,
}: PositionsProps) {
  const positionBackgroundColor = "#0400ff34";
  const positionBackgroundRadius = positionRadius + 5;
  const positonBackgroundOpacity = 0.2;
  const startVertex = graphData.vertices.find(
    (v) => v.id === navigation?.start
  );
  // const endVertex = graphData.vertices.find(
  //   (v) => v.id === navigation?.end
  // );

  function isActivePosition(vertexId: string) {
    return navigation?.start === vertexId;
  }
  return (
    <g id="Vertexes">
      {/* Background circle for Google Maps like look */}
      <circle
        id="background-circle"
        cx={startVertex?.cx}
        cy={startVertex?.cy}
        fill={positionBackgroundColor}
        opacity={positonBackgroundOpacity}
        r={positionBackgroundRadius}
      />
      {graphData.vertices.map((vertex) => (
        <circle
          // only allow click on positions that are not referring to an object
          onClick={vertex.objectName ? () => {} : handlePositionClick}
          key={vertex.id}
          id={vertex.id}
          // show only positions that are not referring to an object (e.g. shops, restrooms, etc.)
          className={`position ${vertex.objectName ? "opacity-0" : className} ${isActivePosition(vertex.id) && "position-active opacity-100"}`}
          cx={vertex.cx}
          cy={vertex.cy}
          r={positionRadius}
        />
      ))}

     {/* Render rainGraphData vertices with different styling */}
     {rainGraphData.vertices.map((vertex) => (
        <circle
          onClick={vertex.objectName ? () => {} : handlePositionClick}
          key={`rain-${vertex.id}`} // Unique key for rainGraphData vertices
          id={vertex.id}
          className={`position-rain ${vertex.objectName ? "opacity-0" : className}${isActivePosition(vertex.id) && "position-active opacity-100"}`}
          cx={vertex.cx}
          cy={vertex.cy}
          //fill={rainPositionColor} // Different color for rainGraphData
          opacity={positonBackgroundOpacity}
          r={positionRadius}
        />
      ))}


      {/* Circle animation */}
      <circle
        id="circle-animation"
        cx={startVertex?.cx}
        cy={startVertex?.cy}
        fill="none"
        stroke="white"
        strokeWidth={25}
        r={positionRadius}
      >
        <animate
          attributeName="stroke-width"
          values="1;3;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      
    </g>
  );

}

export default Positions;
