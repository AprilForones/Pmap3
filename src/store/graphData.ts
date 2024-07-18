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
    { id: "v1", objectName: null, cx: 101, cy: 128},//Entrance Vehicle
    { id: "v2", objectName: null, cx: 169, cy: 128},//basic ed
    { id: "v3", objectName: null, cx: 228, cy: 128},//ccje
    { id: "v4", objectName: null, cx: 310, cy: 128},//gym
    { id: "v5", objectName: null, cx: 383, cy: 90},//Eng Bldg
    { id: "v6", objectName: null, cx: 383, cy: 164},//mba hall 1
    { id: "v7", objectName: null, cx: 389, cy: 220},//mba hall 2
    { id: "v8", objectName: null, cx: 382, cy: 294},//mba hall 3
    { id: "v9", objectName: null, cx: 383, cy: 392},//mba hall 4
    { id: "v10", objectName: null, cx: 464, cy: 154},//riverside
    { id: "v11", objectName: null, cx: 524, cy: 164},//pedistrian entrance
    { id: "v12", objectName: null, cx: 175, cy: 191},//fvr
    { id: "v13", objectName: null, cx: 228, cy: 191},//finance
    { id: "v14", objectName: null, cx: 308, cy: 220},//SP
    { id: "v15", objectName: null, cx: 41, cy: 233},//Entrance Bldg
    { id: "v16", objectName: null, cx: 94, cy: 233},//PTC 1
    { id: "v17", objectName: null, cx: 85, cy: 241},//ptc 2
    { id: "v18", objectName: null, cx: 115, cy: 241},//its
    { id: "v19", objectName: null, cx: 132, cy: 241},//op left
    { id: "v20", objectName: null, cx: 179, cy: 240},//Lib
    { id: "v21", objectName: null, cx: 154, cy: 265},//OP 2
    { id: "v22", objectName: null, cx: 94, cy: 273},//atrium
    { id: "v23", objectName: null, cx: 201, cy: 267},//registrar
    { id: "v24", objectName: null, cx: 228, cy: 267},//teller
    { id: "v25", objectName: null, cx: 201, cy: 281},//cma upper
    { id: "v26", objectName: null, cx: 241, cy: 311},//cma right
    { id: "v27", objectName: null, cx: 308, cy: 311},//PF
    { id: "v28", objectName: null, cx: 382, cy: 366},//old stage
    { id: "v29", objectName: null, cx: 197, cy: 392},//techvoc
    //{ id: "v30", objectName: null, cx: 382, cy: 392},//nh mba oldstage
    { id: "v31", objectName: null, cx: 251, cy: 392},//NH L
    { id: "v32", objectName: null, cx: 308, cy: 392},//NH R

    //Objects, Green Circles
    { id: "v33", objectName: "School Vehicle Entrance", cx: 94, cy: 128},//v entrance
    { id: "v34", objectName: "BASIC ED Building", cx: 169, cy: 113},//basic ed
    { id: "v35", objectName: "CCJE Department", cx: 228, cy: 113},//ccje
    { id: "v36", objectName: "Gymnasium", cx: 310, cy: 113},//gym
    { id: "v37", objectName: "Engineering Building", cx: 383, cy: 80},//eng bldg
    { id: "v38", objectName: "MBA Hall Entrance 1", cx: 395, cy: 164},//MBA HALL 1
    { id: "v39", objectName: "MBA Hall Entrance 2", cx: 396, cy: 220},//MBA HALL 2
    { id: "v40", objectName: "MBA Hall Entrance 3", cx: 394, cy: 294},//MBA HALL 3
    { id: "v41", objectName: "MBA Hall Entrance 4", cx: 394, cy: 392},//MBA Hall 4
    { id: "v42", objectName: "Riverside Building", cx: 464, cy: 44},//Riverside Bldg
    { id: "v43", objectName: "Pedistrian Entrance/Exit", cx: 532, cy: 164},//Pedestrian Entrance/Exit
    { id: "v44", objectName:  "FVR Building", cx: 175, cy: 198},//FVR
    { id: "v45", objectName: "Finance Purchasing Department", cx: 228, cy: 198},//Finance
    { id: "v46", objectName: "School Front Entrance", cx: 33, cy: 233},//Front Entrance
    { id: "v47", objectName: "CSDL/ITS Building", cx: 115, cy: 221},//ITS
    { id: "v48", objectName: "OP/Marketing Department Entrance 1", cx: 139, cy: 241},//OP L
    { id: "v49", objectName: "University Library Building", cx: 179, cy: 240},//lib
    { id: "v50", objectName: "PTC Building Entrance 1", cx: 84, cy: 233},//PTC Bldg
    { id: "v51", objectName: "PTC Building Entrance 2", cx: 94, cy: 241},//PTC-Artium
    { id: "v52", objectName: "Atrium", cx: 115, cy: 273},//Artium
    { id: "v53", objectName: "OP/Marketing Department Entrance 2", cx: 154, cy: 258},//OP
    { id: "v54", objectName: "Registrar Office", cx: 201, cy: 261},//Registrar
    { id: "v55", objectName: "Teller", cx: 228, cy: 261},//Teller
    { id: "v56", objectName: "CMA Building Entrance 1", cx: 201, cy: 287},//CMA upper
    { id: "v57", objectName: "CMA Building Entrance 2", cx: 234, cy: 311},//CMA right
    { id: "v58", objectName: "PHINMA Forest", cx: 308, cy: 294},//PHINMA Forest center
    { id: "v59", objectName: "Old Stage", cx: 382, cy: 374},//old stage
    { id: "v60", objectName: "North Hall Entrance 1", cx: 251, cy: 400},//NH Left
    { id: "v61", objectName: "North  Hall Entrance 2", cx: 308, cy: 400},//NH Right
    { id: "v62", objectName: "Technical Vocational Building", cx: 197, cy: 397},//TechVoc
    { id: "v83", objectName: "Student Plaza", cx: 263, cy: 311},//SP

    //Gray circles (not to be showned or "null")
    { id: "v63", objectName: "null", cx: 136, cy: 128},//VE-BE
    { id: "v64", objectName: "null", cx: 251, cy: 128},//ccje-gym
    { id: "v65", objectName: "null", cx: 383, cy: 128},//gym mba
    { id: "v66", objectName: "null", cx: 132, cy: 191},//its fvr
    { id: "v67", objectName: "null", cx: 251, cy: 191},//finance-cma hall
    { id: "v68", objectName: "null", cx: 383, cy: 191},//sp-mba1
    { id: "v69", objectName: "null", cx: 382, cy: 220},//sp-mba2
    { id: "v70", objectName: "null", cx: 464, cy: 163},//mba1 -riverside
    { id: "v71", objectName: "null", cx: 251, cy: 220},//SP-cma HALL
    { id: "v72", objectName: "null", cx: 41, cy: 241},//entrance-ptc
    { id: "v73", objectName: "null", cx: 132, cy: 233},//its-op
    { id: "v74", objectName: "Null", cx: 136, cy: 273},//atrium
    { id: "v75", objectName: "Null", cx: 154, cy: 273},//atrium-op
    { id: "v76", objectName: "Null", cx: 201, cy: 273},//atrium-registrar-cma u
    { id: "v77", objectName: "Null", cx: 228, cy: 273},//teller
    { id: "v78", objectName: "Null", cx: 251, cy: 273},//teller-cma
    { id: "v79", objectName: "Null", cx: 308, cy: 263},//PF-sp
    { id: "v80", objectName: "Null", cx: 308, cy: 366},//PF-old stage
    { id: "v81", objectName: "Null", cx: 251, cy: 311},//cma-pf-cma
    { id: "v82", objectName: "null", cx: 263, cy: 311},//PF-cma
    { id: "v84", objectName: "null", cx: 179, cy: 273},//LIB
    
  ],

  edges: [
    // positions to objects
    { id: "v1_to_v33", from: "v1", to: "v33" },//Vehicle Entrance
    { id: "v2_to_v34", from: "v2", to: "v34" },//BASIC ED BLDG
    { id: "v3_to_v35", from: "v3", to: "v35" },//CCJE DEPARTMENT
    { id: "v4_to_v36", from: "v4", to: "v36" },//GYMNASIUM
    { id: "v5_to_v37", from: "v5", to: "v37" },//Engineering Bldg.
    { id: "v6_to_v38", from: "v6", to: "v38" },//mba hall 1
    { id: "v7_to_v39", from: "v7", to: "v39" },//mba hall 2
    { id: "v8_to_v40", from: "v8", to: "v40" },//mba hall 3
    { id: "v9_to_v41", from: "v9", to: "v41" },//mba hall 4
    { id: "v10_to_v42", from: "v10", to: "v42" },//riverside
    { id: "v11_to_v43", from: "v11", to: "v43" },//pedistrian entrance
    { id: "v12_to_v44", from: "v12", to: "v44" },//fvr
    { id: "v13_to_v45", from: "v13", to: "v45" },//finance
    { id: "v14_to_v83", from: "v14", to: "v83" },//sp 
    { id: "v15_to_v46", from: "v15", to: "v46" },//Entrance Bldg
    { id: "v16_to_v50", from: "v16", to: "v50" },//PTC 1
    { id: "v17_to_v51", from: "v17", to: "v51" },//ptc 2
    { id: "v18_to_v47", from: "v18", to: "v47" },//ITS
    { id: "v19_to_v48", from: "v19", to: "v48" },//op left
    { id: "v20_to_v49", from: "v20", to: "v49" },//Lib
    { id: "v21_to_v53", from: "v21", to: "v53" },//OP 2
    { id: "v22_to_v52", from: "v22", to: "v52" },//atrium
    { id: "v23_to_v54", from: "v23", to: "v54" },//registrar
    { id: "v24_to_v55", from: "v24", to: "v55" },//teller
    { id: "v25_to_v56", from: "v25", to: "v56" },//cma upper
    { id: "v26_to_v57", from: "v26", to: "v57" },//cma right
    { id: "v27_to_v58", from: "v27", to: "v58" },//PF
    { id: "v28_to_v59", from: "v28", to: "v59" },//old stage
    { id: "v29_to_v62", from: "v29", to: "v62" },//techvoc
    { id: "v31_to_v60", from: "v31", to: "v60" },//NH L
    { id: "v32_to_v61", from: "v32", to: "v61" },//NH R

  // positions path
    //v.entrance
    { id: "v1_to_v63", from: "v1", to: "v63" },
    { id: "v1_to_v2", from: "v1", to: "v2" },
    { id: "v1_to_v3", from: "v1", to: "v3" },
    { id: "v1_to_v64", from: "v1", to: "v64" },
    { id: "v1_to_v4", from: "v1", to: "v4" },
    { id: "v1_to_v65", from: "v1", to: "v65" },

    //basic
    { id: "v2_to_v1", from: "v2", to: "v1" },
    { id: "v2_to_v3", from: "v2", to: "v3" },
    { id: "v2_to_v64", from: "v2", to: "v64" },
    { id: "v2_to_v4", from: "v2", to: "v4" },
    { id: "v2_to_v65", from: "v2", to: "v65" },

    //cCJE
    { id: "v3_to_v64", from: "v3", to: "v64" },
    { id: "v3_to_v65", from: "v3", to: "v65" },
    { id: "v3_to_v4", from: "v3", to: "v4" },

    //gym
    { id: "v4_to_v64", from: "v4", to: "v64" },
    { id: "v4_to_v65", from: "v4", to: "v65" },

    //eng
    { id: "v5_to_v65", from: "v5", to: "v65" },

    //mba
    { id: "v6_to_v65", from: "v6", to: "v65" },
    { id: "v6_to_v68", from: "v6", to: "v68" },
    { id: "v7_to_v69", from: "v7", to: "v69" },
    { id: "v8_to_v69", from: "v8", to: "v69" },

    { id: "v9_to_v31", from: "v9", to: "v31" },
    { id: "v9_to_v32", from: "v9", to: "v32" },
    { id: "v9_to_v29", from: "v9", to: "v29" },

    //fvr
    { id: "v12_to_v66", from: "v12", to: "v66" },
    { id: "v12_to_v13", from: "v12", to: "v13" },
    { id: "v12_to_v67", from: "v12", to: "v67" },
    { id: "v12_to_v68", from: "v9", to: "v68" },

    //finance
    { id: "v13_to_v66", from: "v13", to: "v66" },
    { id: "v13_to_v12", from: "v13", to: "v12" },
    { id: "v13_to_v67", from: "v13", to: "v67" },
    { id: "v13_to_v68", from: "v13", to: "v68" },

    //cma upper
    { id: "v11_to_v95", from: "v11", to: "v95" },
    { id: "v11_to_v73", from: "v11", to: "v73" },
    { id: "v11_to_v93", from: "v11", to: "v93" },
    { id: "v11_to_v79", from: "v11", to: "v79" },
    { id: "v11_to_v28", from: "v11", to: "v28" },
    { id: "v11_to_v12", from: "v11", to: "v12" },
    { id: "v11_to_v94", from: "v11", to: "v94" },
    { id: "v11_to_v92", from: "v11", to: "v92" },

    //sp 
    { id: "v14_to_v71", from: "v14", to: "v71" },
    { id: "v14_to_v79", from: "v14", to: "v79" },
    { id: "v14_to_v69", from: "v14", to: "v69" },

    //CMA Center
    { id: "v14_to_v95", from: "v14", to: "v95" },
    { id: "v14_to_v73", from: "v14", to: "v73" },
    { id: "v14_to_v93", from: "v14", to: "v93" },
    { id: "v14_to_v79", from: "v14", to: "v79" },
    { id: "v14_to_v28", from: "v14", to: "v28" },
    { id: "v14_to_v11", from: "v14", to: "v11" },

    //LIB
    { id: "v20_to_v83", from: "v20", to: "v83" },

    //mba middle
     { id: "v16_to_v75", from: "v16", to: "v75" },

    //PTC
    { id: "v16_to_v73", from: "v16", to: "v73" },
    { id: "v51_to_v21", from: "v51", to: "v21" },
    

    //OP LEFT
    { id: "v19_to_v73", from: "v19", to: "v73" },
    { id: "v19_to_v74", from: "v19", to: "v74" },

    //ITS
    { id: "v18_to_v18", from: "v18", to: "v19" },
    { id: "v18_to_v51", from: "v18", to: "v51" },
    { id: "v18_to_v52", from: "v18", to: "v52" },
  

    //registrar
    { id: "v21_to_v99", from: "v21", to: "v99" },

    //Teller
    { id: "v22_to_v91", from: "v22", to: "v91" },

    //CMA Upper
    { id: "v23_to_v99", from: "v23", to: "v99" },

    //ENTRANCE
    { id: "v15_to_v72", from: "v15", to: "v72" },
    { id: "v15_to_v50", from: "v15", to: "v50" },

    //PF and MBA Hall
    { id: "v25_to_v78", from: "v25", to: "v78" },
    { id: "v25_to_v75", from: "v25", to: "v75" },
    { id: "v25_to_v6", from: "v25", to: "v6" },
    { id: "v25_to_v74", from: "v25", to: "v74" },
    { id: "v24_to_v34", from: "v25", to: "v34" },

    //CMA -CMA HALL
    { id: "v26_to_v79", from: "v26", to: "v79" },

    // PF Left Side
    { id: "v27_to_v79", from: "v27", to: "v79" },
    { id: "v27_to_v80", from: "v27", to: "v80" },

    // NH Left
    { id: "v28_to_v79", from: "v28", to: "v79" },
    { id: "v28_to_v93", from: "v28", to: "v93" },
    { id: "v28_to_v11", from: "v28", to: "v11" },
    { id: "v28_to_v95", from: "v28", to: "v95" },
    { id: "v28_to_v73", from: "v28", to: "v73" },
    { id: "v28_to_v31", from: "v28", to: "v31" },
    { id: "v28_to_v30", from: "v28", to: "v30" },
    { id: "v28_to_v29", from: "v28", to: "v29" },
    //{ id: "v28_to_v95", from: "v28", to: "v95" },

    //techvoc
    { id: "v29_to_v31", from: "v29", to: "v31" },
    { id: "v29_to_v30", from: "v29", to: "v30" },
    { id: "v29_to_v28", from: "v29", to: "v28" },

     //NH-MB-OLD Stage
     { id: "v30_to_v28", from: "v30", to: "v28" },
     { id: "v30_to_v29", from: "v30", to: "v29" },
     { id: "v30_to_v31", from: "v30", to: "v31" },
     //{ id: "v30_to_v45", from: "v30", to: "v45" },

    //NH Right
    { id: "v31_to_v28", from: "v31", to: "v28" },
    { id: "v31_to_v29", from: "v31", to: "v29" },
    { id: "v31_to_v80", from: "v31", to: "v80" },
    { id: "v31_to_v78", from: "v31", to: "v78" },
    { id: "v31_to_v24", from: "v31", to: "v24" },
    { id: "v31_to_v76", from: "v31", to: "v76" },
    { id: "v31_to_v12", from: "v31", to: "v12" },
    { id: "v31_to_v7", from: "v31", to: "v7" },
    { id: "v31_to_v4", from: "v31", to: "v4" },

    //Riverside
    { id: "v10_to_v70", from: "v10", to: "v70" },
    { id: "v11_to_v70", from: "v11", to: "v70" },

    //oldstage
    { id: "v34_to_v75", from: "v34", to: "v75" },
    { id: "v34_to_v6", from: "v34", to: "v6" },
    { id: "v34_to_v74", from: "v34", to: "v74" },
    { id: "v34_to_v81", from: "v34", to: "v81" },
    { id: "v34_to_v25", from: "v34", to: "v25" },
    { id: "v34_to_v94", from: "v34", to: "v94" },

    //OP 2
    { id: "v21_to_v75", from: "v21", to: "v75" },

    //atrium
    { id: "v86_to_v98", from: "v86", to: "v98" },
    //{ id: "v86_to_v101", from: "v86", to: "v101" },
    { id: "v86_to_v91", from: "v86", to: "v91" },
    { id: "v86_to_v92", from: "v86", to: "v92" },
    { id: "v86_to_v84", from: "v86", to: "v84" },
    { id: "v86_to_v83", from: "v86", to: "v83" },
    { id: "v86_to_v72", from: "v86", to: "v72" },
    { id: "v86_to_v99", from: "v86", to: "v99" },
    { id: "v60_to_v88", from: "v60", to: "v88" },

    //nulls or gray ones
   
  ],
};
