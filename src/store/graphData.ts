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
    { id: "v30", objectName: null, cx: 382, cy: 392},//nh mba oldstage
    { id: "v31", objectName: null, cx: 251, cy: 392},//NH L
    { id: "v32", objectName: null, cx: 308, cy: 392},//NH R

    //Objects, Green Circles
    { id: "v33", objectName: "School Vehicle Entrance", cx: 94, cy: 128},//v entrance
    { id: "v34", objectName: "BASIC ED Building", cx: 169, cy: 113},//basic ed
    { id: "v86", objectName: "CCJE Department", cx: 228, cy: 113},//ccje
    { id: "v103", objectName: "Gymnasium", cx: 310, cy: 113},//gym
    { id: "v35", objectName: "Engineering Building", cx: 383, cy: 80},//eng bldg
    { id: "v36", objectName: "MBA Hall Entrance 1", cx: 395, cy: 164},//MBA HALL 1
    { id: "v37", objectName: "MBA Hall Entrance 2", cx: 396, cy: 220},//MBA HALL 2
    { id: "v38", objectName: "MBA Hall Entrance 3", cx: 394, cy: 294},//MBA HALL 3
    { id: "v39", objectName: "MBA Hall Entrance 4", cx: 394, cy: 392},//MBA Hall 4
    { id: "v40", objectName: "Riverside Building", cx: 464, cy: 44},//Riverside Bldg
    { id: "v41", objectName: "Pedistrian Entrance/Exit", cx: 532, cy: 164},//Pedestrian Entrance/Exit
    { id: "v42", objectName:  "FVR Building", cx: 175, cy: 198},//FVR
    { id: "v43", objectName: "Finance Purchasing Department", cx: 228, cy: 198},//Finance
    { id: "v44", objectName: "School Front Entrance", cx: 33, cy: 233},//Front Entrance
    { id: "v45", objectName: "CSDL/ITS Building", cx: 115, cy: 221},//ITS
    { id: "v46", objectName: "OP/Marketing Department Entrance 1", cx: 139, cy: 241},//OP L
    { id: "v47", objectName: "University Library Building", cx: 179, cy: 240},//lib
    { id: "v48", objectName: "PTC Building Entrance 1", cx: 84, cy: 233},//PTC Bldg
    { id: "v49", objectName: "PTC Building Entrance 2", cx: 94, cy: 241},//PTC-Artium
    { id: "v50", objectName: "Atrium", cx: 115, cy: 273},//Artium
    { id: "v51", objectName: "OP/Marketing Department Entrance 2", cx: 154, cy: 258},//OP
    { id: "v52", objectName: "Registrar Office", cx: 201, cy: 261},//Registrar
    { id: "v53", objectName: "Teller", cx: 228, cy: 261},//Teller
    { id: "v54", objectName: "CMA Building Entrance 1", cx: 201, cy: 287},//CMA upper
    { id: "v55", objectName: "CMA Building Entrance 2", cx: 234, cy: 311},//CMA right
    { id: "v56", objectName: "PHINMA Forest", cx: 308, cy: 294},//PHINMA Forest center
    { id: "v57", objectName: "Old Stage", cx: 382, cy: 374},//old stage
    { id: "v58", objectName: "North Hall Entrance 1", cx: 251, cy: 400},//NH Left
    { id: "v59", objectName: "North  Hall Entrance 2", cx: 308, cy: 400},//NH Right
    { id: "v60", objectName: "Technical Vocational Building", cx: 197, cy: 397},//TechVoc

    //Gray circles (not to be showned or "null")
    { id: "v61", objectName: "null", cx: 136, cy: 128},//VE-BE
    { id: "v62", objectName: "null", cx: 251, cy: 128},//ccje-gym
    { id: "v63", objectName: "null", cx: 383, cy: 128},//gym mba
    { id: "v64", objectName: "null", cx: 132, cy: 191},//its fvr
    { id: "v65", objectName: "null", cx: 251, cy: 191},//finance-cma hall
    { id: "v66", objectName: "null", cx: 383, cy: 191},//sp-mba1
    { id: "v67", objectName: "null", cx: 382, cy: 220},//sp-mba2
    { id: "v68", objectName: "null", cx: 464, cy: 163},//mba1 -riverside
    { id: "v69", objectName: "null", cx: 251, cy: 220},//SP-cma HALL
    { id: "v70", objectName: "null", cx: 41, cy: 241},//entrance-ptc
    { id: "v71", objectName: "null", cx: 132, cy: 233},//its-op
    { id: "v72", objectName: "Null", cx: 136, cy: 273},//atrium
    { id: "v73", objectName: "Null", cx: 154, cy: 273},//atrium-op
    { id: "v74", objectName: "Null", cx: 201, cy: 273},//atrium-registrar-cma u
    { id: "v75", objectName: "Null", cx: 228, cy: 273},//teller
    { id: "v76", objectName: "Null", cx: 251, cy: 273},//teller-cma
    { id: "v77", objectName: "Null", cx: 308, cy: 263},//PF-sp
    { id: "v78", objectName: "Null", cx: 308, cy: 366},//PF-old stage
    { id: "v79", objectName: "Null", cx: 251, cy: 311},//cma-pf-cma
    { id: "v80", objectName: "null", cx: 263, cy: 311},//PF-cma
    
  ],

  edges: [
    // positions to objects
    { id: "v1_to_v35", from: "v1", to: "v35" },//Vehicle Entrance
    { id: "v2_to_v36", from: "v2", to: "v36" },//BASIC ED BLDG
    { id: "v3_to_v37", from: "v3", to: "v37" },//CELA DEPARTMENT
    { id: "v4_to_v38", from: "v4", to: "v38" },//GYMNASIUM
    { id: "v5_to_v39", from: "v5", to: "v39" },//Engineering Bldg.
    { id: "v6_to_v40", from: "v6", to: "v40" },//mba hall
    { id: "v7_to_v46", from: "v7", to: "v46" },//PHINMA AVE
    { id: "v8_to_v47", from: "v8", to: "v47" },//Vehicle Parking
    { id: "v9_to_v50", from: "v9", to: "v50" },//FVR
    { id: "v10_to_v51", from: "v10", to: "v51" },//Finance
    { id: "v14_to_v70", from: "v14", to: "v70" },//cma top
    { id: "v92_to_v70", from: "v92", to: "v70" },//cma top
    { id: "v12_to_v57", from: "v12", to: "v57" },//sp upper
    { id: "v13_to_v56", from: "v13", to: "v56" },//sp left
    { id: "v15_to_v68", from: "v15", to: "v68" },//sp right
    { id: "v16_to_v69", from: "v16", to: "v69" },//mba middle
    { id: "v17_to_v48", from: "v17", to: "v48" },//PTC
    { id: "v18_to_v53", from: "v18", to: "v53" },//op left
    { id: "v19_to_v49", from: "v19", to: "v49" },//ITS
    { id: "v21_to_v54", from: "v21", to: "v54" },//Registrar
    { id: "v22_to_v71", from: "v22", to: "v71" },//teller
    { id: "v23_to_v59", from: "v23", to: "v59" },//cma upper
    { id: "v24_to_v63", from: "v24", to: "v63" },//PF upper
    { id: "v24_to_v64", from: "v24", to: "v64" },//SP lower
    { id: "v25_to_v43", from: "v25", to: "v43" },//mba-PF
    { id: "v26_to_v58", from: "v26", to: "v58" },//cma-cma hall
    { id: "v27_to_v62", from: "v27", to: "v62" },//pf - cma hall
    { id: "v28_to_v66", from: "v28", to: "v66" },//nh-cma
    { id: "v29_to_v67", from: "v29", to: "v67" },//techvoc
    { id: "v30_to_v44", from: "v30", to: "v44" },//oldstage-nh-mba
    { id: "v31_to_v65", from: "v31", to: "v65" },//nh-pf
    { id: "v32_to_v42", from: "v32", to: "v42" },//riverside
    { id: "v33_to_v41", from: "v33", to: "v41" },//pedistrian
    { id: "v34_to_v45", from: "v34", to: "v45" },//old stage
    { id: "v87_to_v52", from: "v87", to: "v52" },//op-atruim
    { id: "v88_to_v61", from: "v88", to: "v61" },//atrium
    { id: "v78_to_v97", from: "v78", to: "v97" },//PF Center
    { id: "v80_to_v97", from: "v80", to: "v97" },//PF Center
    { id: "v100_to_v60", from: "v100", to: "v60" },//PTC-Atrium 2nd floor
    { id: "v103_to_v104", from: "v103", to: "v104" },//lib


    
  // positions path
    //v.entrance
    { id: "v1_to_v72", from: "v1", to: "v72" },
    { id: "v1_to_v2", from: "v1", to: "v2" },
    { id: "v1_to_v3", from: "v1", to: "v3" },
    { id: "v1_to_v73", from: "v1", to: "v73" },
    { id: "v1_to_v4", from: "v1", to: "v4" },
    { id: "v1_to_v74", from: "v1", to: "v74" },

    //basic
    { id: "v2_to_v8", from: "v2", to: "v8" },
    { id: "v2_to_v3", from: "v2", to: "v3" },
    { id: "v2_to_v73", from: "v2", to: "v73" },
    { id: "v2_to_v4", from: "v2", to: "v4" },
    { id: "v2_to_v74", from: "v2", to: "v74" },
    { id: "v2_to_v9", from: "v2", to: "v9" },

    //cela
    { id: "v3_to_v10", from: "v3", to: "v10" },
    { id: "v3_to_v73", from: "v3", to: "v73" },
    { id: "v3_to_v4", from: "v3", to: "v4" },
    { id: "v3_to_v74", from: "v3", to: "v74" },

    //gym
    { id: "v4_to_v7", from: "v4", to: "v7" },
    { id: "v4_to_v3", from: "v4", to: "v3" },
    { id: "v4_to_v73", from: "v4", to: "v73" },
    { id: "v4_to_v74", from: "v4", to: "v74" },
    { id: "v4_to_v12", from: "v4", to: "v12" },
    { id: "v4_to_v76", from: "v4", to: "v76" },
    { id: "v4_to_v24", from: "v4", to: "v24" },
    { id: "v4_to_v78", from: "v4", to: "v78" },
    { id: "v4_to_v80", from: "v4", to: "v80" },
    { id: "v4_to_v81", from: "v4", to: "v81" },
    //{ id: "v4_to_v31", from: "v4", to: "v31" },

    //eng
    { id: "v5_to_v74", from: "v5", to: "v74" },
    { id: "v5_to_v6", from: "v5", to: "v6" },
    { id: "v5_to_v75", from: "v5", to: "v75" },
    { id: "v5_to_v25", from: "v5", to: "v25" },
    { id: "v5_to_v34", from: "v5", to: "v34" },

    //mba
    { id: "v6_to_v74", from: "v6", to: "v74" },
    { id: "v6_to_v75", from: "v6", to: "v75" },
    { id: "v6_to_v32", from: "v6", to: "v32" },
    { id: "v6_to_v25", from: "v6", to: "v25" },
    { id: "v6_to_v34", from: "v6", to: "v34" },
    { id: "v6_to_v7", from: "v6", to: "v7" },
    { id: "v6_to_v95", from: "v6", to: "v95" },
    { id: "v6_to_v8", from: "v6", to: "v8" },
    { id: "v6_to_v83", from: "v6", to: "v83" },
    { id: "v6_to_v33", from: "v6", to: "v33" },

    //avenue
    { id: "v7_to_v12", from: "v7", to: "v12" },
    { id: "v7_to_v95", from: "v7", to: "v95" },
    { id: "v7_to_v8", from: "v7", to: "v8" },
    { id: "v7_to_v6", from: "v7", to: "v6" },
    { id: "v7_to_v83", from: "v7", to: "v83" },
    { id: "v7_to_v76", from: "v7", to: "v76" },
    { id: "v7_to_v24", from: "v7", to: "v24" },
    { id: "v7_to_v78", from: "v7", to: "v78" },
    { id: "v7_to_v80", from: "v7", to: "v80" },
    { id: "v7_to_v81", from: "v7", to: "v81" },
    //{ id: "v7_to_v31", from: "v7", to: "v31" },
    { id: "v7_to_v33", from: "v7", to: "v33" },

    //parking
    { id: "v8_to_v9", from: "v8", to: "v9" },
    { id: "v8_to_v83", from: "v8", to: "v83" },
    { id: "v8_to_v82", from: "v8", to: "v82" },
    { id: "v8_to_v33", from: "v8", to: "v33" },
    { id: "v8_to_v95", from: "v8", to: "v95" },
    { id: "v8_to_v7", from: "v8", to: "v7" },
    { id: "v8_to_v6", from: "v8", to: "v6" },
    {id: "v8_to_v32", from: "v8", to: "v32" },

    //fvr
    { id: "v9_to_v10", from: "v9", to: "v10" },
    { id: "v9_to_v11", from: "v9", to: "v11" },
    { id: "v9_to_v12", from: "v9", to: "v12" },
    { id: "v9_to_v94", from: "v9", to: "v94" },
    { id: "v9_to_v84", from: "v9", to: "v84" },

    //finance
    { id: "v10_to_v11", from: "v10", to: "v11" },
    { id: "v10_to_v12", from: "v10", to: "v12" },
    { id: "v10_to_v94", from: "v10", to: "v94" },

    //cma upper
    { id: "v11_to_v95", from: "v11", to: "v95" },
    { id: "v11_to_v73", from: "v11", to: "v73" },
    { id: "v11_to_v93", from: "v11", to: "v93" },
    { id: "v11_to_v79", from: "v11", to: "v79" },
    { id: "v11_to_v28", from: "v11", to: "v28" },
    { id: "v11_to_v12", from: "v11", to: "v12" },
    { id: "v11_to_v94", from: "v11", to: "v94" },
    { id: "v11_to_v92", from: "v11", to: "v92" },

    //sp upper
    { id: "v12_to_v76", from: "v12", to: "v76" },
    { id: "v12_to_v24", from: "v12", to: "v24" },
    { id: "v12_to_v78", from: "v12", to: "v78" },
    { id: "v12_to_v80", from: "v12", to: "v80" },
    { id: "v12_to_v81", from: "v12", to: "v81" },
    //{ id: "v12_to_v31", from: "v12", to: "v31" },
    { id: "v12_to_v94", from: "v12", to: "v94" },
    { id: "v12_to_v11", from: "v12", to: "v11" },

    //sp left
    { id: "v13_to_v93", from: "v13", to: "v93" },
    { id: "v13_to_v76", from: "v13", to: "v76" },
    
    //CMA Center
    { id: "v14_to_v95", from: "v14", to: "v95" },
    { id: "v14_to_v73", from: "v14", to: "v73" },
    { id: "v14_to_v93", from: "v14", to: "v93" },
    { id: "v14_to_v79", from: "v14", to: "v79" },
    { id: "v14_to_v28", from: "v14", to: "v28" },
    { id: "v14_to_v11", from: "v14", to: "v11" },
   // { id: "v14_to_v94", from: "v14", to: "v94" },
   // { id: "v14_to_v92", from: "v11", to: "v92" },

    //sp right
    { id: "v15_to_v75", from: "v15", to: "v75" },
    { id: "v15_to_v76", from: "v15", to: "v76" },

    //mba middle
     { id: "v16_to_v75", from: "v16", to: "v75" },

    //PTC
    { id: "v17_to_v90", from: "v17", to: "v90" },
    { id: "v17_to_v85", from: "v17", to: "v85" },
    { id: "v17_to_v49", from: "v17", to: "v49" },
    { id: "v17_to_v96", from: "v17", to: "v96" },
    { id: "v17_to_v100", from: "v17", to: "v100" },

    //OP LEFT
    { id: "v18_to_v86", from: "v18", to: "v86" },
    { id: "v18_to_v84", from: "v18", to: "v84" },
    { id: "v18_to_v83", from: "v18", to: "v83" },
    { id: "v18_to_v72", from: "v18", to: "v72" },
    { id: "v18_to_v19", from: "v18", to: "v19" },
    //{ id: "v18_to_v61", from: "v18", to: "v61" },

    //ITS
    { id: "v19_to_v18", from: "v19", to: "v18" },
    { id: "v49_to_v90", from: "v49", to: "v90" },
    { id: "v49_to_v85", from: "v49", to: "v85" },
    //{ id: "v19_to_v61", from: "v19", to: "v61" },

    //registrar
    { id: "v21_to_v99", from: "v21", to: "v99" },

    //Teller
    { id: "v22_to_v91", from: "v22", to: "v91" },

    //CMA Upper
    { id: "v23_to_v99", from: "v23", to: "v99" },

    //SP Lower or PF Upper
    { id: "v24_to_v78", from: "v24", to: "v78" },
    { id: "v24_to_v81", from: "v24", to: "v81" },
    { id: "v24_to_v80", from: "v24", to: "v80" },
    { id: "v24_to_v76", from: "v24", to: "v76" },
    { id: "v24_to_v12", from: "v24", to: "v12" },
    { id: "v24_to_v4", from: "v24", to: "v4" },
    { id: "v24_to_v7", from: "v24", to: "v7" },

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
    { id: "v32_to_v6", from: "v32", to: "v6" },
    { id: "v32_to_v33", from: "v32", to: "v33" },
    { id: "v32_to_v7", from: "v32", to: "v7" },
    { id: "v32_to_v8", from: "v32", to: "v8" },
    { id: "v32_to_v83", from: "v32", to: "v83" },

    //Pedistrian
    { id: "v33_to_v6", from: "v33", to: "v6" },
    { id: "v33_to_v32", from: "v33", to: "v32" },
    { id: "v33_to_v7", from: "v33", to: "v7" },
    { id: "v33_to_v8", from: "v33", to: "v8" },
    { id: "v33_to_v83", from: "v33", to: "v83" },

    //oldstage
    { id: "v34_to_v75", from: "v34", to: "v75" },
    { id: "v34_to_v6", from: "v34", to: "v6" },
    { id: "v34_to_v74", from: "v34", to: "v74" },
    { id: "v34_to_v81", from: "v34", to: "v81" },
    { id: "v34_to_v25", from: "v34", to: "v25" },
    { id: "v34_to_v94", from: "v34", to: "v94" },

    //OP
    { id: "v87_to_v98", from: "v87", to: "v98" },

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
    { id: "v72_to_v84", from: "v72", to: "v84" },
    { id: "v72_to_v83", from: "v72", to: "v83" },
    { id: "v72_to_v18", from: "v72", to: "v18" },
    { id: "v72_to_v86", from: "v72", to: "v86" },
    { id: "v72_to_v85", from: "v72", to: "v85" },
    { id: "v72_to_v3", from: "v72", to: "v3" },
    { id: "v72_to_v4", from: "v72", to: "v4" },
    { id: "v72_to_v74", from: "v72", to: "v74" },

    { id: "v73_to_v95", from: "v73", to: "v95" },
    { id: "v73_to_v11", from: "v73", to: "v11" },
    { id: "v73_to_v93", from: "v73", to: "v93" },
    { id: "v73_to_v79", from: "v73", to: "v79" },
    { id: "v73_to_v66", from: "v73", to: "v66" },
    { id: "v73_to_v2", from: "v73", to: "v2" },
    { id: "v73_to_v3", from: "v73", to: "v3" },
    { id: "v73_to_v4", from: "v73", to: "v4" },
    { id: "v73_to_v74", from: "v73", to: "v74" },

    { id: "v74_to_v2", from: "v74", to: "v2" },
    { id: "v74_to_v3", from: "v74", to: "v3" },
    { id: "v74_to_v4", from: "v74", to: "v4" },
    { id: "v74_to_v73", from: "v74", to: "v73" },
    { id: "v74_to_v6", from: "v74", to: "v6" },
    { id: "v74_to_v25", from: "v74", to: "v25" },
    { id: "v74_to_v75", from: "v74", to: "v75" },
    { id: "v74_to_v34", from: "v74", to: "v34" },
    { id: "v74_to_v94", from: "v74", to: "v94" },

    { id: "v75_to_v74", from: "v75", to: "v74" },
    { id: "v75_to_v6", from: "v75", to: "v6" },
    { id: "v75_to_v15", from: "v75", to: "v15" },
    { id: "v75_to_v16", from: "v75", to: "v16" },
    { id: "v75_to_v25", from: "v75", to: "v25" },
    { id: "v75_to_v34", from: "v75", to: "v34" },
    { id: "v75_to_v76", from: "v75", to: "v76" },
    { id: "v75_to_v94", from: "v75", to: "v94" },

    { id: "v76_to_v13", from: "v76", to: "v13" },
    { id: "v76_to_v24", from: "v76", to: "v24" },
    { id: "v76_to_v12", from: "v76", to: "v12" },
    { id: "v76_to_v15", from: "v76", to: "v15" },
    { id: "v76_to_v7", from: "v76", to: "v7" },
    { id: "v76_to_v4", from: "v76", to: "v4" },
    { id: "v76_to_v78", from: "v76", to: "v78" },
    { id: "v76_to_v80", from: "v76", to: "v80" },
    //{ id: "v76_to_v65", from: "v76", to: "v65" },

    { id: "v78_to_v24", from: "v78", to: "v24" },
    { id: "v78_to_v25", from: "v78", to: "v25" },
    { id: "v78_to_v80", from: "v78", to: "v80" },
    { id: "v78_to_v81", from: "v78", to: "v81" },
    //{ id: "v78_to_v65", from: "v78", to: "v65" },
    { id: "v78_to_v12", from: "v78", to: "v12" },
    { id: "v78_to_v57", from: "v78", to: "v57" },
    { id: "v78_to_v4", from: "v78", to: "v4" },

    { id: "v79_to_v26", from: "v79", to: "v26" },
    { id: "v79_to_v27", from: "v79", to: "v27" },
    { id: "v79_to_v80", from: "v79", to: "v80" },
    { id: "v79_to_v66", from: "v79", to: "v66" },
    { id: "v79_to_v92", from: "v79", to: "v92" },
    { id: "v79_to_v93", from: "v79", to: "v93" },
    { id: "v79_to_v11", from: "v79", to: "v11" },
    { id: "v79_to_v95", from: "v79", to: "v95" },
    { id: "v79_to_v73", from: "v79", to: "v73" },

    { id: "v80_to_v27", from: "v80", to: "v27" },
    { id: "v80_to_v78", from: "v80", to: "v78" },
    { id: "v80_to_v24", from: "v80", to: "v24" },
    { id: "v80_to_v76", from: "v80", to: "v76" },
    { id: "v80_to_v12", from: "v80", to: "v12" },
    { id: "v80_to_v7", from: "v80", to: "v7" },
    { id: "v80_to_v4", from: "v80", to: "v4" },
    { id: "v80_to_v81", from: "v80", to: "v81" },
    //{ id: "v80_to_v65", from: "v80", to: "v65" },

    { id: "v81_to_v34", from: "v81", to: "v34" },
    //{ id: "v81_to_v65", from: "v81", to: "v65" },
    { id: "v81_to_v80", from: "v81", to: "v80" },
    { id: "v81_to_v78", from: "v81", to: "v78" },
    { id: "v81_to_v24", from: "v81", to: "v24" },
    { id: "v81_to_v76", from: "v81", to: "v76" },
    { id: "v81_to_v12", from: "v81", to: "v12" },
    { id: "v81_to_v4", from: "v81", to: "v4" },
    { id: "v81_to_v7", from: "v81", to: "v7" },

    { id: "v82_to_v83", from: "v82", to: "v83" },
    { id: "v82_to_v90", from: "v82", to: "v90" },
    //{ id: "v82_to_v60", from: "v82", to: "v60" },

    { id: "v83_to_v72", from: "v83", to: "v72" },
    { id: "v83_to_v84", from: "v83", to: "v84" },
    { id: "v83_to_v18", from: "v83", to: "v18" },
    { id: "v83_to_v86", from: "v83", to: "v86" },
    { id: "v83_to_v8", from: "v83", to: "v8" },
    { id: "v83_to_v95", from: "v83", to: "v95" },
    { id: "v83_to_v7", from: "v83", to: "v7" },
    { id: "v83_to_v6", from: "v83", to: "v6" },
    { id: "v83_to_v82", from: "v83", to: "v82" },

    { id: "v84_to_v72", from: "v84", to: "v72" },
    { id: "v84_to_v83", from: "v84", to: "v83" },
    { id: "v84_to_v18", from: "v84", to: "v18" },
    { id: "v84_to_v86", from: "v84", to: "v86" },
    { id: "v84_to_v9", from: "v84", to: "v9" },
    { id: "v84_to_v10", from: "v84", to: "v10" },
    { id: "v84_to_v11", from: "v84", to: "v11" },
    { id: "v84_to_v12", from: "v84", to: "v12" },
    { id: "v84_to_v94", from: "v84", to: "v94" },

    { id: "v85_to_v72", from: "v85", to: "v72" },
    { id: "v85_to_v83", from: "v85", to: "v83" },
    { id: "v85_to_v84", from: "v85", to: "v84" },
    { id: "v85_to_v90", from: "v85", to: "v90" },
    { id: "v85_to_v86", from: "v85", to: "v86" },
    
    { id: "v88_to_v60", from: "v88", to: "v60" },
    { id: "v88_to_v102", from: "v88", to: "v102" },
    { id: "v98_to_v105", from: "v98", to: "v105" },
    // { id: "v88_to_v86", from: "v88", to: "v86" },
    // { id: "v88_to_v98", from: "v88", to: "v98" },
    // { id: "v88_to_v91", from: "v88", to: "v91" },
    // { id: "v88_to_v92", from: "v88", to: "v92" },
    // { id: "v88_to_v90", from: "v88", to: "v90" },
    // { id: "v88_to_v82", from: "v88", to: "v82" },
    // { id: "v88_to_v99", from: "v88", to: "v99" },

    //{ id: "v101_to_v86", from: "v88", to: "v86" },
    { id: "v101_to_v98", from: "v101", to: "v98" },
    { id: "v101_to_v91", from: "v101", to: "v91" },
    { id: "v101_to_v92", from: "v101", to: "v92" },
    { id: "v101_to_v90", from: "v101", to: "v90" },
    { id: "v101_to_v82", from: "v101", to: "v82" },
    { id: "v101_to_v99", from: "v101", to: "v99" },


    //{ id: "v90_to_v60", from: "v90", to: "v60" },
    { id: "v90_to_v17", from: "v90", to: "v17" },
    { id: "v90_to_v101", from: "v90", to: "v101" },
    { id: "v90_to_v82", from: "v90", to: "v82" },
    { id: "v90_to_v49", from: "v90", to: "v49" },
    { id: "v90_to_v85", from: "v90", to: "v85" },
    { id: "v90_to_v96", from: "v90", to: "v96" },

    { id: "v91_to_v92", from: "v91", to: "v92" },
    { id: "v91_to_v98", from: "v91", to: "v98" },
    //{ id: "v91_to_v101", from: "v91", to: "v101" },
    { id: "v91_to_v99", from: "v91", to: "v99" },
    { id: "v91_to_v86", from: "v91", to: "v86" },

    { id: "v92_to_v91", from: "v92", to: "v91" },
    { id: "v92_to_v98", from: "v92", to: "v98" },
    //{ id: "v92_to_v101", from: "v92", to: "v101" },
    { id: "v92_to_v99", from: "v92", to: "v99" },
    { id: "v92_to_v86", from: "v92", to: "v86" },
    { id: "v92_to_v93", from: "v92", to: "v93" },
    { id: "v92_to_v11", from: "v92", to: "v11" },
    { id: "v92_to_v95", from: "v92", to: "v95" },
    { id: "v92_to_v73", from: "v92", to: "v73" },
    { id: "v92_to_v79", from: "v92", to: "v79" },
    { id: "v92_to_v66", from: "v92", to: "v66" },

    { id: "v93_to_v92", from: "v93", to: "v92" },
    { id: "v93_to_v11", from: "v93", to: "v11" },
    { id: "v93_to_v95", from: "v93", to: "v95" },
    { id: "v93_to_v73", from: "v93", to: "v73" },
    { id: "v93_to_v79", from: "v93", to: "v79" },
    { id: "v93_to_v66", from: "v93", to: "v66" },
    { id: "v93_to_v76", from: "v93", to: "v76" },
    { id: "v93_to_v15", from: "v93", to: "v15" },
    { id: "v93_to_v75", from: "v93", to: "v75" },

    { id: "v94_to_v75", from: "v94", to: "v75" },
    { id: "v94_to_v12", from: "v94", to: "v12" },
    { id: "v94_to_v11", from: "v94", to: "v11" },
    { id: "v94_to_v10", from: "v94", to: "v10" },
    { id: "v94_to_v9", from: "v94", to: "v9" },
    { id: "v94_to_v84", from: "v94", to: "v84" },
    { id: "v94_to_v6", from: "v94", to: "v6" },
    { id: "v94_to_v74", from: "v94", to: "v74" },
    { id: "v94_to_v5", from: "v94", to: "v5" },
    { id: "v94_to_v34", from: "v94", to: "v34" },
    { id: "v94_to_v25", from: "v94", to: "v25" },

    { id: "v95_to_v93", from: "v95", to: "v93" },
    { id: "v95_to_v11", from: "v95", to: "v11" },
    { id: "v95_to_v92", from: "v95", to: "v92" },
    { id: "v95_to_v73", from: "v95", to: "v73" },
    { id: "v95_to_v79", from: "v95", to: "v79" },
    { id: "v95_to_v66", from: "v95", to: "v66" },
    { id: "v95_to_v8", from: "v95", to: "v8" },
    { id: "v95_to_v7", from: "v95", to: "v7" },
    { id: "v95_to_v83", from: "v95", to: "v83" },

    { id: "v98_to_v92", from: "v98", to: "v92" },
    { id: "v98_to_v91", from: "v98", to: "v91" },
    //{ id: "v98_to_v101", from: "v101", to: "v101" },
    { id: "v98_to_v99", from: "v98", to: "v99" },
    { id: "v98_to_v86", from: "v98", to: "v86" },
    { id: "v98_to_v87", from: "v98", to: "v87" },

    { id: "v96_to_v100", from: "v96", to: "v100" },
    { id: "v60_to_v101", from: "v60", to: "v101" },
    { id: "v60_to_v100", from: "v60", to: "v100" },

    // { id: "v99_to_v92", from: "v98", to: "v92" },
    // { id: "v99_to_v91", from: "v98", to: "v98" },
    // //{ id: "v99_to_v102", from: "v98", to: "v102" },
    // { id: "v99_to_v98", from: "v98", to: "v99" },
    // { id: "v99_to_v86", from: "v98", to: "v86" },
    // { id: "v99_to_v21", from: "v99", to: "v21" },
    // { id: "v99_to_v23", from: "v99", to: "v23" },
     { id: "v99_to_v105", from: "v99", to: "v105" }, 

    { id: "v102_to_v103", from: "v102", to: "v103" },//lib
    { id: "v102_to_v98", from: "v102", to: "v98" },//lib
    { id: "v102_to_v99", from: "v102", to: "v99" },//lib
    { id: "v103_to_v102", from: "v103", to: "v102" },//lib

  ],
};
