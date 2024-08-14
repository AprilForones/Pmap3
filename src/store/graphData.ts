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
    //visible for change position, green color base on map sample
    { id: "v1", objectName: null, cx: 110.5, cy: 1407.5},//Front Entrance
    //PTC BUILDING
    { id: "v2", objectName: null, cx: 162.5, cy: 1406.5},
    { id: "v3", objectName: null, cx: 330.5, cy: 1409.5},
    { id: "v4", objectName: null, cx: 162.5, cy: 1187.5},
    { id: "v5", objectName: null, cx: 330.5, cy: 1187.5},
    { id: "v6", objectName: null, cx: 330.5, cy: 1187.5},
    //MCDO BUILDING
    { id: "v7", objectName: null, cx: 340.5, cy: 1057.5},
    //CSDL BUILDING
    { id: "v8", objectName: null, cx: 493.5, cy: 1300.5},
    { id: "v9", objectName: null, cx: 493.5, cy: 1410.5},
    { id: "v10", objectName: null, cx: 496.5, cy: 1110.5},
    { id: "v11", objectName: null, cx: 494.5, cy: 1002.5},
    //OP BUILDING
    { id: "v12", objectName: null, cx: 604.5, cy: 1539.5},
    { id: "v13", objectName: null, cx: 716.5, cy: 1539.5},
    //FVR BUILDING
    { id: "v14", objectName: null, cx: 703.5, cy: 1387.5},
    { id: "v15", objectName: null, cx: 703.5, cy: 1272.5},
    { id: "v16", objectName: null, cx: 761.5, cy: 1189.5},
    { id: "v17", objectName: null, cx: 1011.5, cy: 1184.5},
    { id: "v18", objectName: null, cx: 890.5, cy: 1267.5},
    { id: "v19", objectName: null, cx: 1015.5, cy: 1310.5},
    { id: "v20", objectName: null, cx: 886.5, cy: 1384.5},
    { id: "v21", objectName: null, cx: 1015.5, cy: 1461.5},
    { id: "v22", objectName: null, cx: 1016.5, cy: 1566.5},
    { id: "v23", objectName: null, cx: 807.5, cy: 1437.5},



    //Objects, yellow Circles

    //purple circles (not to be showned or "null")

    //othes(cr or food)
 
    
  ],

  edges: [
    // positions to objects
    { id: "v85_to_v33", from: "v1", to: "v33" },//mcdo

  ],
};
