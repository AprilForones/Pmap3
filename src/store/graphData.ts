export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
  r: number,
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
    { id: "v1", objectName: null, cx: 186.5, cy: 906.5, r: 30 },//Entrance Vehicle
    { id: "v2", objectName: "null", cx: 697, cy: 905 , r: 30  },
    { id: "v3", objectName: null, cx: 1144, cy: 905 , r: 30  }, //basic ed
    { id: "v4", objectName: "BASIC ED BLDG", cx: 1145.5, cy: 763.5 , r: 30  },
    { id: "v5", objectName: null, cx: 1459, cy: 908 , r: 30  }, //cela dept
    { id: "v6", objectName: "CELA DEP", cx: 1457.5, cy: 751.5 , r: 30  },
    { id: "v7", objectName: "null", cx: 1663, cy: 903 , r: 30  },
    { id: "v8", objectName: null, cx: 2063, cy: 898 , r: 30  },//gym
    { id: "v9", objectName: "GYMNASIUM", cx: 2063.5, cy: 745.5 , r: 30  },
    { id: "v10", objectName: "null", cx: 2623, cy: 907 , r: 30  },
    { id: "v11", objectName: null, cx: 2623, cy: 605 , r: 30  },//engineering building
    { id: "v12", objectName: "Engineering Bldg.", cx: 2622.5, cy: 506.5  , r: 30 },
    { id: "v13", objectName: "null", cx: 545, cy: 1133  , r: 30 },
    { id: "v14", objectName: "null", cx: 697, cy: 1128  , r: 30 },
    { id: "v15", objectName: "null", cx: 828, cy: 1131 , r: 30 },
    { id: "v16", objectName: null, cx: 1148, cy: 1124, r: 30  },//v_parking
    { id: "v17", objectName: "VEHICLE PARKING", cx: 1145.5, cy: 1231.5 , r: 30  },
    { id: "v18", objectName: null, cx: 2059, cy: 1123 , r: 30  },//p_ave
    { id: "v19", objectName: "null", cx: 828, cy: 1240 , r: 30 },
    { id: "v20", objectName: "PHINMA AVE", cx: 2063.5, cy: 1231.5 , r: 30 },
    { id: "v21", objectName: null, cx: 2619, cy: 1230 , r: 30 }, //mbahall
    { id: "v22", objectName: "MBA Hall", cx: 2870.5, cy: 1240.5 , r: 30 },
    { id: "v23", objectName: "null", cx: 3268, cy: 1227 , r: 30 },
    { id: "v24", objectName: null , cx: 3263, cy: 1074 , r: 30  },//riverside
    { id: "v25", objectName: "Riverside Bldg", cx: 3256.5, cy: 928.5 , r: 30 },
    { id: "v26", objectName: null, cx: 3605.5, cy: 1240.5 , r: 30 },//v_entrsceexit
    //{ id: "v27", objectName: "null", cx: 3605.5, cy: 1240.5 , r: 30 },//v_entrsceexit
    { id: "v28", objectName: "null", cx: 833, cy: 1371 , r: 30 },
    { id: "v29", objectName: null, cx: 1149, cy: 1371 , r: 30 },//fvr
    { id: "v30", objectName: "FVR BLDG", cx:1146.5, cy: 1508.5 , r: 30 },
    { id: "v31", objectName: null, cx: 2066, cy: 1381 , r: 30 },//sp front
    { id: "v32", objectName: "FrontEntrance", cx: 480.5, cy: 1508.5 , r: 30 },
    { id: "v33", objectName: null, cx: 548, cy: 1507 , r: 30 }, //f_entrance
    { id: "v34", objectName: null, cx: 545, cy: 1711 , r: 30 }, //atrium
    { id: "v35", objectName: null, cx: 673, cy: 1706 , r: 30 },//its
    { id: "v36", objectName: "CSDL/ITS BLDG", cx: 675.5, cy: 1605.5 , r: 30 },
    { id: "v37", objectName: "null", cx: 811, cy: 1706 , r: 30 },
    { id: "v38", objectName: "OP", cx:1003.5, cy: 1824.5 , r: 30 },
    { id: "v39", objectName: "Registrar Office", cx: 1282.5, cy: 1834.5 , r: 30 },
    { id: "v40", objectName: "Finance Purchasing Dep/Teller", cx: 1512.5, cy: 1834.5 , r: 30 },
    { id: "v41", objectName: "CMA HALL", cx: 1665.5, cy: 1658.5 , r: 30 },
    { id: "v42", objectName: null, cx: 1760, cy: 1662 , r: 30 },//sp_left
    { id: "v43", objectName: "STUDENT PLAZA", cx: 2063.5, cy: 1658.5 , r: 30 },
    { id: "v44", objectName: null, cx: 2617, cy: 1662  , r: 30}, //sp_mba
    { id: "v45", objectName: null , cx: 548, cy: 1911 , r: 30},//atruimL
    { id: "v46", objectName: "Atrium", cx: 813.5, cy: 1915.5 , r: 30},
    { id: "v47", objectName: null, cx: 1004, cy: 1920 , r: 30},//op
    { id: "v48", objectName: null, cx: 1283, cy: 1920 , r: 30},//registrar
    { id: "v49", objectName: null, cx: 1515, cy: 1920 , r: 30},//teller-cma
    { id: "v50", objectName: null, cx: 1663, cy: 1920 , r: 30},//cma hall
    { id: "v51", objectName: null, cx: 2059, cy: 1860 , r: 30}, //sp-pf
    { id: "v52", objectName: "CMA BLDG", cx: 1512.5, cy: 2209.5 , r: 30},
    { id: "v53", objectName: null, cx: 1668, cy: 2205 , r: 30},//CMA_PF
    { id: "v54", objectName: "null", cx: 1760, cy: 2205 , r: 30},
    { id: "v55", objectName: null, cx: 2066, cy: 2210 , r: 30},//pf
    { id: "v56", objectName: "PHINMA FOREST", cx: 2063.5, cy: 2098.5 , r: 30},
    { id: "v57", objectName: null, cx: 2615, cy: 2089 , r: 30},//mbahall_pf
    { id: "v58", objectName: "MBA Hall", cx: 2870.5, cy: 2098.5  , r: 30},
    { id: "v59", objectName: null, cx: 2071, cy: 2796 , r: 30},//nh_pf
    { id: "v60", objectName: null, cx: 1668, cy: 2788, r: 30},//nh
    { id: "v61", objectName: null, cx: 1271, cy: 2791 , r: 30},//TVB
    { id: "v62", objectName:"Technical Vocational Bldg.", cx:1268.5, cy: 2850.5 , r: 30},//Technical Vocational Bldg
    { id: "v63", objectName: "NORTH HALL", cx: 1661.5, cy: 2848.5 , r: 30},//"NORTH HALL"
    { id: "v64", objectName: "NORTH HALL", cx: 2063.5 , cy: 2851.5  , r: 30},//"NORTH HALL"
    { id: "v65", objectName: "null", cx: 1664, cy: 1123 , r: 30},
    { id: "v66", objectName: "null", cx: 1669, cy: 1373 , r: 30},
  ],

  edges: [
    { id: "v1_to_v2", from: "v1", to: "v2" },
    { id: "v2_to_v1", from: "v2", to: "v1" },
    { id: "v2_to_v3", from: "v2", to: "v3" },
    { id: "v2_to_v14", from: "v2", to: "v14" },
    { id: "v3_to_v2", from: "v3", to: "v2" },
    { id: "v3_to_v16", from: "v3", to: "v16" },
    { id: "v3_to_v4", from: "v3", to: "v4" },
    //{ id: "v4_to_v3", from: "v4", to: "v3" },
    { id: "v3_to_v5", from: "v3", to: "v5" },
    { id: "v5_to_v6", from: "v5", to: "v6" },
    //{ id: "v6_to_v5", from: "v6", to: "v5" },
    { id: "v5_to_v7", from: "v5", to: "v7" },
    { id: "v7_to_v8", from: "v7", to: "v8" },
    { id: "v7_to_v50", from: "v7", to: "v50" },
    { id: "v8_to_v9", from: "v8", to: "v9" },
    { id: "v8_to_v20", from: "v8", to: "v20" },
    //{ id: "v9_to_v8", from: "v9", to: "v8" },
    { id: "v8_to_v10", from: "v8", to: "v10" },
    { id: "v8_to_v18", from: "v8", to: "v18" },
    { id: "v8_to_v31", from: "v8", to: "v31" },
    { id: "v10_to_v11", from: "v10", to: "v11" },
    { id: "v10_to_v21", from: "v10", to: "v21" },
    { id: "v11_to_v10", from: "v11", to: "v10" },
    { id: "v11_to_v12", from: "v11", to: "v12" },
    //{ id: "v12_to_v11", from: "v12", to: "v11" },
    { id: "v13_to_v14", from: "v13", to: "v14" },
    { id: "v13_to_v33", from: "v13", to: "v33" },
    { id: "v14_to_v13", from: "v14", to: "v13" },
    { id: "v14_to_v2", from: "v14", to: "v2" },
    { id: "v14_to_v15", from: "v14", to: "v15" },
    { id: "v15_to_v14", from: "v15", to: "v14" },
    { id: "v15_to_v16", from: "v15", to: "v16" },
    { id: "v16_to_v15", from: "v16", to: "v15" },
    { id: "v16_to_v17", from: "v16", to: "v17" },
    { id: "v16_to_v29", from: "v16", to: "v29" },
    { id: "v16_to_v30", from: "v16", to: "v30" },
    { id: "v16_to_v18", from: "v16", to: "v18" },
    //{ id: "v17_to_v16", from: "v17", to: "v16" },
    { id: "v18_to_v16", from: "v18", to: "v16" },
    { id: "v18_to_v31", from: "v18", to: "v31" },
    { id: "v18_to_v20", from: "v18", to: "v20" },
    { id: "v18_to_v65", from: "v18", to: "v65" },
    { id: "v19_to_v20", from: "v19", to: "v20" },
    { id: "v20_to_v21", from: "v20", to: "v21" },
    { id: "v20_to_v31", from: "v20", to: "v31" },
    { id: "v20_to_v22", from: "v20", to: "v22" },
    { id: "v20_to_v51", from: "v20", to: "v51" },
    { id: "v21_to_v22", from: "v21", to: "v22" },
    { id: "v21_to_v23", from: "v21", to: "v23" },
    { id: "v23_to_v26", from: "v23", to: "v26" },
    { id: "v23_to_v22", from: "v23", to: "v22" },
    { id: "v24_to_v23", from: "v24", to: "v23" },
    { id: "v24_to_v25", from: "v24", to: "v25" },
    { id: "v26_to_v23", from: "v26", to: "v23" },
    { id: "v28_to_v19", from: "v28", to: "v19" },
    { id: "v28_to_v29", from: "v28", to: "v29" },
    { id: "v28_to_v37", from: "v28", to: "v37" },
    { id: "v29_to_v31", from: "v29", to: "v31" },
    { id: "v29_to_v30", from: "v29", to: "v30" },
    { id: "v31_to_v43", from: "v31", to: "v43" },
    { id: "v31_to_v29", from: "v31", to: "v29" },
    { id: "v31_to_v20", from: "v31", to: "v20" },
    { id: "v31_to_v8", from: "v31", to: "v8" },
    { id: "v32_to_v33", from: "v32", to: "v33" },
    { id: "v33_to_v13", from: "v33", to: "v13" },
    { id: "v33_to_v34", from: "v33", to: "v34" },
    { id: "v33_to_v45", from: "v33", to: "v45" },
    { id: "v34_to_v13", from: "v34", to: "v13" },
    { id: "v34_to_v33", from: "v34", to: "v33" },
    { id: "v34_to_v35", from: "v34", to: "v35" },
    { id: "v34_to_v37", from: "v34", to: "v37" },
    { id: "v34_to_v45", from: "v34", to: "v45" },
    { id: "v45_to_v34", from: "v45", to: "v34" },
    { id: "v35_to_v36", from: "v35", to: "v36" },
    { id: "v37_to_v35", from: "v37", to: "v35" },
    { id: "v37_to_v28", from: "v37", to: "v28" },
    { id: "v37_to_v46", from: "v37", to: "v46" },
    { id: "v41_to_v42", from: "v41", to: "v42" },
    { id: "v41_to_v31", from: "v41", to: "v50" },
    { id: "v42_to_v43", from: "v42", to: "v43" },
    { id: "v43_to_v42", from: "v43", to: "v42" },
    { id: "v43_to_v31", from: "v43", to: "v31" },
    { id: "v43_to_v44", from: "v43", to: "v44" },
    { id: "v43_to_v51", from: "v43", to: "v51" },
    { id: "v44_to_v42", from: "v44", to: "v42" },
    { id: "v44_to_v57", from: "v44", to: "v57" },
    { id: "v44_to_v21", from: "v44", to: "v21" },
    { id: "v45_to_v47", from: "v45", to: "v47" },
    { id: "v45_to_v33", from: "v45", to: "v33" },
    { id: "v45_to_v48", from: "v45", to: "v48" },
    { id: "v45_to_v49", from: "v45", to: "v49" },
    { id: "v45_to_v45", from: "v45", to: "v50" },
    { id: "v46_to_v45", from: "v46", to: "v45" },
    { id: "v46_to_v47", from: "v46", to: "v47" },
    { id: "v46_to_v48", from: "v46", to: "v48" },
    { id: "v46_to_v49", from: "v46", to: "v49" },
    { id: "v46_to_v50", from: "v46", to: "v50" },
    { id: "v47_to_v46", from: "v47", to: "v46" },
    { id: "v47_to_v38", from: "v47", to: "v38" },
    { id: "v48_to_v39", from: "v48", to: "v39" },
    { id: "v48_to_v46", from: "v48", to: "v46" },
    { id: "v49_to_v40", from: "v49", to: "v40" },
    { id: "v49_to_v46", from: "v49", to: "v46" },
    { id: "v49_to_v52", from: "v49", to: "v52" },
    { id: "v50_to_v41", from: "v50", to: "v41" },
    { id: "v50_to_v49", from: "v50", to: "v49" },
    { id: "v50_to_v46", from: "v50", to: "v46" },
    { id: "v50_to_v53", from: "v53", to: "v53" },
    { id: "v51_to_v43", from: "v50", to: "v46" },
    { id: "v51_to_v56", from: "v51", to: "v56" },
   // { id: "v51_to_v57", from: "v51", to: "v57" },
    { id: "v51_to_v55", from: "v51", to: "v55" },
    { id: "v51_to_v20", from: "v51", to: "v20" },
    { id: "v53_to_v50", from: "v53", to: "v50" },
    { id: "v53_to_v44", from: "v53", to: "v44" },
    { id: "v53_to_v54", from: "v53", to: "v54" },
    { id: "v53_to_v60", from: "v53", to: "v60" },
    { id: "v54_to_v53", from: "v54", to: "v53" },
    { id: "v54_to_v55", from: "v54", to: "v55" },
    { id: "v55_to_v56", from: "v55", to: "v56" },
    { id: "v55_to_v64", from: "v55", to: "v64" },
    { id: "v55_to_v59", from: "v55", to: "v59" },
    { id: "v56_to_v51", from: "v56", to: "v51" },
    { id: "v56_to_v55", from: "v56", to: "v55" },
    { id: "v56_to_v64", from: "v56", to: "v64" },
    { id: "v57_to_v56", from: "v57", to: "v56" },
    { id: "v57_to_v58", from: "v57", to: "v58" },
    { id: "v57_to_v44", from: "v57", to: "v44" },
    { id: "v58_to_v56", from: "v58", to: "v56" },
    { id: "v58_to_v57", from: "v58", to: "v57" },
    { id: "v59_to_v55", from: "v59", to: "v55" },
    { id: "v59_to_v51", from: "v59", to: "v51" },
    { id: "v59_to_18", from: "v59", to: "v18" },
    { id: "v59_to_v20", from: "v59", to: "v20" },
    { id: "v59_to_v61", from: "v59", to: "v61" },
    { id: "v59_to_v64", from: "v59", to: "v64" },
    { id: "v59_to_v31", from: "v59", to: "v31" },
    { id: "v59_to_v8", from: "v59", to: "v8" },
    { id: "v60_to_v63", from: "v60", to: "v63" },
    { id: "v60_to_v53", from: "v60", to: "v53" },
    { id: "v60_to_v59", from: "v60", to: "v59" },
    { id: "v60_to_v50", from: "v60", to: "v50" },
    { id: "v60_to_v61", from: "v60", to: "v61" },
    { id: "v60_to_v7", from: "v60", to: "v7" },
    { id: "v61_to_v59", from: "v61", to: "v59" },
    { id: "v61_to_v60", from: "v61", to: "v60" },
    { id: "v61_to_v62", from: "v61", to: "v62" },
    //{ id: "v61_to_v60", from: "v61", to: "v60" },
    { id: "v65_to_v7", from: "v65", to: "v7" },
    { id: "v7_to_65", from: "v7", to: "v65" },
    { id: "v65_to_64", from: "v65", to: "v64" },
    { id: "v65_to_v16", from: "v65", to: "v16" },
    { id: "v65_to_v18", from: "v65", to: "v18" },
    { id: "v65_to_v50", from: "v65", to: "v50" },
    { id: "v65_to_53", from: "v65", to: "v53" },
    { id: "v65_to_v60", from: "v65", to: "v60" },
    { id: "v66_to_53", from: "v66", to: "v53" },
    { id: "v66_to_v60", from: "v66", to: "v60" },
    { id: "v66_to_v29", from: "v66", to: "v29" },
    { id: "v66_to_v31", from: "v66", to: "v31" },
    { id: "v66_to_v50", from: "v65", to: "v50" },

  ],
};
