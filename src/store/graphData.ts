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
    { id: "v2", objectName: null, cx: 169, cy: 122},//basic ed
    { id: "v3", objectName: null, cx: 228, cy: 122},//ccje
    { id: "v4", objectName: null, cx: 310, cy: 122},//gym
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
    { id: "v15", objectName: null, cx: 38, cy: 234},//Entrance Bldg
    { id: "v16", objectName: null, cx: 94, cy: 233},//PTC 1
    { id: "v17", objectName: "ITS Department Building", cx: 113, cy: 171},//ITS Dept
    { id: "v18", objectName: null, cx: 115, cy: 241},//its
    { id: "v19", objectName: null, cx: 132, cy: 241},//op left
    { id: "v20", objectName: null, cx: 179, cy: 240},//Lib
    { id: "v21", objectName: "null", cx: 154, cy: 265},//OP 2
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
    { id: "v33", objectName: "Mc Donald's", cx: 86, cy: 164},//mcdo
    { id: "v34", objectName: "BASIC ED Building", cx: 169, cy: 113},//basic ed
    { id: "v35", objectName: "CCJE Department", cx: 228, cy: 113},//ccje
    { id: "v36", objectName: "Gymnasium", cx: 310, cy: 113},//gym
    { id: "v37", objectName: "Engineering Building", cx: 383, cy: 80},//eng bldg
    { id: "v38", objectName: "MBA Hall Entrance 1", cx: 395, cy: 164},//MBA HALL 1
    { id: "v39", objectName: "MBA Hall Entrance 2", cx: 396, cy: 220},//MBA HALL 2
    { id: "v40", objectName: "MBA Hall Entrance 3", cx: 394, cy: 294},//MBA HALL 3
    { id: "v41", objectName: "MBA Hall Entrance 4", cx: 394, cy: 392},//MBA Hall 4
    { id: "v42", objectName: "Riverside Building", cx: 464, cy: 144},//Riverside Bldg
    { id: "v43", objectName: "Pedistrian Entrance/Exit", cx: 532, cy: 164},//Pedestrian Entrance/Exit
    { id: "v44", objectName:  "FVR Building", cx: 175, cy: 198},//FVR
    { id: "v45", objectName: "Finance Purchasing Department", cx: 228, cy: 198},//Finance
    { id: "v46", objectName: "School Front Entrance", cx: 29, cy: 234},//Front Entrance
    { id: "v47", objectName: "CSDL/ITS Building", cx: 115, cy: 233},//ITS
    { id: "v48", objectName: "OP/Marketing Department", cx: 139, cy: 241},//OP L
    { id: "v49", objectName: "University Library Building", cx: 179, cy: 230},//lib
    { id: "v50", objectName: "PTC Building Entrance", cx: 84, cy: 233},//PTC Bldg
    { id: "v51", objectName: "null", cx: 94, cy: 241},//PTC-Artium
    { id: "v52", objectName: "Atrium", cx: 115, cy: 273},//Artium
    { id: "v53", objectName: "Student Plaza Entrance 01", cx: 277, cy: 221},//sp 01
    { id: "v54", objectName: "Registrar Office", cx: 201, cy: 261},//Registrar
    { id: "v55", objectName: "Teller", cx: 228, cy: 261},//Teller
    { id: "v56", objectName: "CMA Building Entrance 1", cx: 201, cy: 287},//CMA upper
    { id: "v57", objectName: "CMA Building Entrance 2", cx: 234, cy: 311},//CMA right
    { id: "v58", objectName: "PHINMA Forest", cx: 308, cy: 294},//PHINMA Forest center
    { id: "v59", objectName: "Old Stage", cx: 382, cy: 374},//old stage
    { id: "v60", objectName: "North Hall Entrance 1", cx: 251, cy: 400},//NH Left
    { id: "v61", objectName: "North  Hall Entrance 2", cx: 308, cy: 400},//NH Right
    { id: "v62", objectName: "Technical Vocational Building", cx: 197, cy: 397},//TechVoc
    { id: "v83", objectName: "Student Plaza Entrance 02", cx: 321, cy: 220},//SP 02

    //Gray circles (not to be showned or "null")
    { id: "v63", objectName: "null", cx: 132, cy: 122},//VE-BE
    { id: "v64", objectName: "null", cx: 251, cy: 122},//ccje-gym
    { id: "v65", objectName: "null", cx: 383, cy: 122},//gym mba
    { id: "v66", objectName: "null", cx: 132, cy: 191},//its fvr
    { id: "v67", objectName: "null", cx: 251, cy: 191},//finance-cma hall
    { id: "v68", objectName: "null", cx: 383, cy: 179},//sp-mba1
    { id: "v69", objectName: "null", cx: 382, cy: 220},//sp-mba2
    { id: "v70", objectName: "null", cx: 464, cy: 163},//mba1 -riverside
    { id: "v71", objectName: "null", cx: 251, cy: 220},//SP-cma HALL
    { id: "v72", objectName: "null", cx: 38, cy: 241},//entrance-ptc
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
    { id: "v85", objectName: null, cx: 94, cy: 164}, //mcdo
    { id: "v86", objectName: "null", cx: 132, cy: 164},
    { id: "v87", objectName: "null", cx: 464, cy: 179},
    { id: "v88", objectName: "null", cx: 524, cy: 179},
    { id: "v89", objectName: "null", cx: 371, cy: 220},
    
  ],

  edges: [
    // positions to objects
    { id: "v85_to_v33", from: "v1", to: "v33" },//mcdo
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
    { id: "v1_to_v17", from: "v1", to: "v17" },//ITS Dept
    { id: "v18_to_v47", from: "v18", to: "v47" },//ITS
    { id: "v19_to_v48", from: "v19", to: "v48" },//op left
    { id: "v20_to_v49", from: "v20", to: "v49" },//Lib
    //{ id: "v21_to_v53", from: "v21", to: "v53" },//OP 2
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

//v64 CCJE-GYM
{ id: "v63_to_v86", from: "v63", to: "v86" }, //basic V.E - null its

 //basic
 { id: "v2_to_v3", from: "v2", to: "v3" }, //basic-ccje
 { id: "v2_to_v64", from: "v2", to: "v64" }, //basic-ccje gym
 { id: "v2_to_v4", from: "v2", to: "v4" },//basic-gym
 { id: "v2_to_v65", from: "v2", to: "v65" },//basic-gym mba
 { id: "v2_to_v63", from: "v2", to: "v63" },//basic-V.E

 //CCJE
   { id: "v3_to_v64", from: "v3", to: "v64" }, //ccje-ccje gym
   { id: "v3_to_v4", from: "v3", to: "v4" }, //ccje- gym
   { id: "v3_to_v65", from: "v3", to: "v65" }, //ccje - gym mba

  //v64 CCJE-GYM
  { id: "v64_to_v4", from: "v64", to: "v4" }, //ccje gym - gym 
  { id: "v64_to_v65", from: "v64", to: "v65" }, //ccje gym - gym mba
  { id: "v64_to_v67", from: "v64", to: "v67" }, //ccje gym - cma hall fvr 
  { id: "v64_to_v60", from: "v64", to: "v60" }, //ccje gym - north hall L
    //ccje gym - cma hall
    { id: "v64_to_v71", from: "v64", to: "v71" }, 
    { id: "v64_to_v78", from: "v64", to: "v78" }, 
    { id: "v64_to_v81", from: "v64", to: "v81" },  
  
  //GYM
   { id: "v4_to_v65", from: "v4", to: "v65" }, //gym - gym mba
  
  //v65 GYM-MBA HALL NULL
  { id: "v65_to_v5", from: "v65", to: "v5" }, //gym MBA - ENG. 
  { id: "v65_to_v6", from: "v65", to: "v6" }, //gym MBA - MBA HALL 1
  { id: "v65_to_v68", from: "v65", to: "v68" }, //gym MBA - MBA HALL 1 NULL
  { id: "v65_to_v69", from: "v65", to: "v69" }, //gym MBA - MBA HALL 2 NULL
  { id: "v65_to_v8", from: "v65", to: "v8" }, //gym MBA - MBA HALL 3 
  { id: "v65_to_v59", from: "v65", to: "v59" }, //gym MBA - OLD STAGE 

  //MBA HALL 01
  { id: "v6_to_v70", from: "v6", to: "v70" }, // MBA HALL 1- RIVERSIDE NULL
  { id: "v6_to_v69", from: "v6", to: "v69" }, // MBA HALL 1- MBA HALL 2 NULL
  { id: "v6_to_v8", from: "v6", to: "v8" }, // MBA HALL 1- MBA HALL 3
  { id: "v6_to_v59", from: "v6", to: "v59" }, //MBA HALL 1 - OLD STAGE 
  
  //V70 RIVERSIDE NULL
  { id: "v70_to_v10", from: "v70", to: "v10" }, // RIVERSIDE NULL -RIVERSIDE
  { id: "v70_to_v11", from: "v70", to: "v11" }, // RIVERSIDE NULL - PEDISTRIAN

  //V68 MBA HALL 1 NULL
  { id: "v68_to_v87", from: "v68", to: "v87" }, //  MBA HALL 1 NULL RIVERSIDE NULL 
  { id: "v68_to_v11", from: "v68", to: "v88" }, // MBA HALL 1 NULL RIVERSIDE NULL 
  { id: "v68_to_v69", from: "v68", to: "v69" }, // MBA HALL 1 NULL- MBA HALL 2 NULL
  { id: "v68_to_v8", from: "v68", to: "v8" }, // MBA HALL 1 NULL- MBA HALL 3
  { id: "v68_to_v59", from: "v68", to: "v59" }, //MBA HALL 1 NULL - OLD STAGE   

  //V87-88 RIVERSIDE NULL
  { id: "v87_to_v10", from: "v87", to: "v10" }, // RIVERSIDE NULL -RIVERSIDE
  { id: "v88_to_v11", from: "v88", to: "v11" }, // RIVERSIDE NULL - PEDISTRIAN
 
  // V69 MBA HALL 02 NULL
  { id: "v69_to_v7", from: "v69", to: "v7" }, // MBA HALL 2
  { id: "v69_to_v83", from: "v69", to: "v83" }, // MBA HALL 2 - SP
  { id: "v69_to_v8", from: "v69", to: "v8" }, // MBA HALL 2 - MBA HALL 3
  { id: "v69_to_v59", from: "v69", to: "v59" }, // MBA HALL 2 - OLD STAGE

  // MBA HALL 03 
  { id: "v8_to_v58", from: "v8", to: "v58" }, // MBA HALL 3 
  { id: "v8_to_v59", from: "v8", to: "v59" }, // MBA HALL 3 - OLD STAGE

  //V80 NULL TO OLD STAGE
  { id: "v80_to_v28", from: "v80", to: "v28" }, // OLD STAGE
  { id: "v80_to_v58", from: "v80", to: "v58" }, // OLD STAGE -PF NULL
  { id: "v80_to_v27", from: "v80", to: "v27" }, // OLD STAGE - PF

  //SP
  { id: "v71_to_v53", from: "v71", to: "v53" }, // SP 01-CMA HALL NULL
  { id: "v14_to_v79", from: "v14", to: "v79" }, // SP-PF NULL

  //PF
  
  { id: "v58_to_v79", from: "v58", to: "v79" }, //SP NULL
  { id: "v27_to_v32", from: "v27", to: "v32" }, 
  //{ id: "v27_to_v58", from: "v27", to: "v58" }, 
  { id: "v27_to_v81", from: "v27", to: "v81" }, // CMA NULL

  //CMA HALL NULL
  { id: "v67_to_v71", from: "v67", to: "v71" }, 
  { id: "v67_to_v78", from: "v67", to: "v78" },
  { id: "v67_to_v81", from: "v67", to: "v81" }, 
  { id: "v67_to_v31", from: "v67", to: "v31" },

  { id: "v71_to_v78", from: "v71", to: "v78" },
  { id: "v71_to_v81", from: "v67", to: "v81" },

  { id: "v78_to_v81", from: "v78", to: "v81" },
  { id: "v78_to_v31", from: "v78", to: "v31" },

  { id: "v81_to_v31", from: "v81", to: "v31" },
  { id: "v81_to_v26", from: "v81", to: "v26" },//CMA RIGHT

    //V86 AND V66 ITS NULL
    { id: "v86_to_v85", from: "v86", to: "v85" }, 
    { id: "v86_to_v1", from: "v86", to: "v1" }, 
    { id: "v85_to_v1", from: "v85", to: "v1" }, 
    { id: "v86_to_v66", from: "v86", to: "v66" }, 
    { id: "v86_to_v73", from: "v86", to: "v73" }, 
    { id: "v86_to_v74", from: "v86", to: "v74" }, 

    { id: "v66_to_v12", from: "v66", to: "v12" }, //FVR
    { id: "v66_to_v13", from: "v66", to: "v13" }, //FINANCE
    { id: "v66_to_v67", from: "v66", to: "v67" }, // CMA NULL

    { id: "v73_to_v74", from: "v73", to: "v74" }, 
    { id: "v73_to_v66", from: "v73", to: "v66" }, 
    { id: "v73_to_v19", from: "v73", to: "v19" },
    //{ id: "v73_to_v47", from: "v73", to: "v47" }, // ITS

    //FVR
    { id: "v12_to_v13", from: "v12", to: "v13" }, 
    { id: "v12_to_v67", from: "v12", to: "v67" }, // CMA NULL

    //FINANCE
    { id: "v13_to_v67", from: "v12", to: "v67" }, // CMA NULL
    { id: "v67_to_v13", from: "v67", to: "v13" }, // CMA NULL
    //MAIN ENTRANCE
    { id: "v15_to_v16", from: "v15", to: "v16" }, // PTC

    //PTC
    { id: "v16_to_v85", from: "v16", to: "v85" }, 
    //{ id: "v16_to_v47", from: "v16", to: "v47" }, //ITS
    //{ id: "v16_to_v73", from: "v16", to: "v73" }, 
    { id: "v16_to_v22", from: "v16", to: "v22" }, 

    //ITS
    { id: "v18_to_v19", from: "v18", to: "v19" }, 
    { id: "v19_to_v74", from: "v19", to: "v74" },
    //{ id: "v18_to_v52", from: "v18", to: "v52" }, 
    { id: "v18_to_v51", from: "v18", to: "v51" }, 
    { id: "v51_to_v16", from: "v51", to: "v16" }, 
    { id: "v51_to_v22", from: "v51", to: "v22" }, 
    { id: "v19_to_v73", from: "v19", to: "v73" }, 

   // Atrium
   { id: "v52_to_v74", from: "v52", to: "v74" }, 
   { id: "v74_to_v75", from: "v74", to: "v75" }, 
   //{ id: "v75_to_v21", from: "v75", to: "v21" }, //op
   { id: "v75_to_v84", from: "v75", to: "v84" },
   { id: "v84_to_v20", from: "v84", to: "v20" },//lib
   { id: "v84_to_v76", from: "v84", to: "v76" },
   { id: "v76_to_v23", from: "v76", to: "v23" },//reg
   { id: "v76_to_v25", from: "v76", to: "v25" },//cma
   { id: "v76_to_v77", from: "v76", to: "v77" },
   { id: "v77_to_v24", from: "v77", to: "v24" },//teller
   { id: "v77_to_v78", from: "v77", to: "v78" },

   //techhvoc - nh
   { id: "v29_to_v31", from: "v29", to: "v31" },
   { id: "v31_to_v32", from: "v31", to: "v32" },
   { id: "v32_to_v9", from: "v32", to: "v9" },
   { id: "v32_to_v80", from: "v32", to: "v80" },
  ],
};
