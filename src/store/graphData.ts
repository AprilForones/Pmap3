export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;

}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}
export interface GraphData {
  vertices: VertexData[];
  edges: EdgeData[];
}
export const graphData: GraphData = {
  vertices: [
    //visible for change position, Yellow color base on map sample
    { id: "v1", objectName: null, cx: 113, cy: 164},//Its dept


    //Objects, Green Circles

    //Gray circles (not to be showned or "null")
 
    
  ],

  edges: [
    // positions to objects
    { id: "v85_to_v33", from: "v1", to: "v33" },//mcdo

  ],
};
