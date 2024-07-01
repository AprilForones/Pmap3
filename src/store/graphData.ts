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
    { id: "v1", objectName: null, cx: 101, cy: 116},//Entrance Vehicle
    { id: "v2", objectName: null, cx: 175, cy: 116},//basic ed
    { id: "v3", objectName: null, cx: 228, cy: 116},//cela
    { id: "v4", objectName: null, cx: 306, cy: 116},//gym
    { id: "v5", objectName: null, cx: 382, cy: 77},//Eng Bldg
    { id: "v6", objectName: null, cx: 382, cy: 144},//mba hall
    { id: "v7", objectName: null, cx: 306, cy: 144},//p ave
    { id: "v8", objectName: null, cx: 175, cy: 144},//v parking
    { id: "v9", objectName: null, cx: 175, cy: 180},//fvr
    { id: "v10", objectName: null, cx: 228, cy: 180},//finance
    { id: "v11", objectName: null, cx: 251, cy: 180},//cma
    { id: "v12", objectName: null, cx: 307, cy: 180},//sp upper
    { id: "v13", objectName: null, cx: 257, cy: 205},//sp left
   // { id: "v14", objectName: null, cx: 251, cy: 180},//cma
    { id: "v15", objectName: null, cx: 377, cy: 205},//sp right
    { id: "v16", objectName: null, cx: 389, cy: 205},//mba-sp
    { id: "v17", objectName: null, cx: 49, cy: 218},//ptc
    { id: "v18", objectName: null, cx: 136, cy: 225},//op left
    { id: "v19", objectName: null, cx: 113, cy: 225},//its
    { id: "v20", objectName: "null", cx: 113, cy: 261},//op-atrium
    { id: "v21", objectName: null, cx: 201, cy: 261},//registrar-atrium
    { id: "v22", objectName: null, cx: 228, cy: 256},//teller
    { id: "v23", objectName: null, cx: 228, cy: 265},//cma
    { id: "v24", objectName: null, cx: 307, cy: 258},//sp-forest
    { id: "v25", objectName: null, cx: 382, cy: 282},//mba-pf
    { id: "v26", objectName: null, cx: 245, cy: 299},//cma-cmahall
    { id: "v27", objectName: null, cx: 257, cy: 299},//cma-pf
    { id: "v28", objectName: null, cx: 251, cy: 373},//cmanh
    { id: "v29", objectName: null, cx: 204, cy: 380},//techvoc
    { id: "v30", objectName: null, cx: 383, cy: 380},//nh mba oldstage
    { id: "v31", objectName: null, cx: 307, cy: 372},//cmanh
    { id: "v32", objectName: null, cx: 473, cy: 144},//riverside
    { id: "v33", objectName: null, cx: 508, cy: 144},//Pedistrian
    { id: "v34", objectName: null, cx: 382, cy: 282},//old stage
    { id: "v96", objectName: null, cx: 154, cy: 261},//OP
    { id: "v86", objectName: null, cx: 136, cy: 261},//Atruim


    //Objects, Green Circles
    { id: "v35", objectName: "Vehicle Entrance", cx: 94, cy: 116},//Entrance Vehicle
    { id: "v36", objectName: "BASIC ED BLDG", cx: 175, cy: 107},//Basic Ed
    { id: "v37", objectName: "CELA DEPARTMENT", cx: 228, cy: 106},//CELA
    { id: "v38", objectName: "GYMNASIUM", cx: 306, cy: 105},//GYM
    { id: "v39", objectName: "Engineering Bldg.", cx: 382, cy: 68},//ENG BLDG
    { id: "v40", objectName: "MBA Hall", cx: 382, cy: 151},//MBA HALL
    { id: "v41", objectName: "Pedistrian Entrance/Exit", cx: 498, cy: 144},//Pedestrian Entrance/Exit
    { id: "v42", objectName: "Riverside Bldg", cx: 473, cy: 134},//Riverside Bldg
    { id: "v43", objectName: "MBA Hall", cx: 391, cy: 282},//MBA Hall-PForest
    { id: "v44", objectName: "MBA Hall", cx: 391, cy: 380},//MBA HALL-oldstage
    { id: "v45", objectName: "Old Stage", cx: 382, cy: 362},//Old stage
    { id: "v46", objectName: "PHINMA AVE", cx: 306, cy: 151},//Phinma Ave
    { id: "v47", objectName: "VEHICLE PARKING", cx: 175, cy: 151},//Vehicle Parking
    { id: "v48", objectName: "Front Entrance", cx: 33, cy: 218},//PTC Bldg
    { id: "v49", objectName: "CSDL/ITS BLDG", cx: 113, cy: 218},//ITS
    { id: "v50", objectName: "FVR BLDG", cx: 175, cy: 186},//FVR
    { id: "v51", objectName: "Finance Purchasing Department", cx: 228, cy: 186},//Finance
    { id: "v52", objectName: "OP", cx: 154, cy: 249},//OP
    { id: "v53", objectName: "OP", cx: 136, cy: 235},//OP
    { id: "v54", objectName: "Registrar Office", cx: 201, cy: 249},//Registrar
    { id: "v55", objectName: "CMA HALL", cx: 251, cy: 186},//CMA HALL
    { id: "v56", objectName: "STUDENT PLAZA", cx: 263, cy: 205},//SP Left
    { id: "v57", objectName: "STUDENT PLAZA", cx: 307, cy: 188},//SP Upper
    { id: "v58", objectName: "CMA HALL", cx: 240, cy: 299},//CMA Left
    { id: "v59", objectName: "CMA HALL", cx: 228, cy: 270},//CMA upper
    { id: "v60", objectName: "null", cx: 94, cy: 229},//PTC-Artium
    { id: "v61", objectName: "Atrium", cx: 113, cy: 261},//Artium
    { id: "v62", objectName: "PHINMA FOREST", cx: 262, cy: 299},//PGarden  Left
    { id: "v63", objectName: "PHINMA FOREST", cx: 307, cy: 252},//PGarden  upper
    { id: "v64", objectName: "PHINMA FOREST", cx: 307, cy: 252},//PGarden  upper
    { id: "v65", objectName: "NORTH HALL", cx: 307, cy: 379},//NH Right
    { id: "v66", objectName: "NORTH HALL", cx: 251, cy: 380},//NH Left
    { id: "v67", objectName: "Technical Vocational Bldg.", cx: 197, cy: 380},//TechVoc
    { id: "v68", objectName: "STUDENT PLAZA", cx: 371, cy: 205},//SP Right
    { id: "v69", objectName: "STUDENT PLAZA", cx: 395, cy: 205},//SP Right-MB HALL
    { id: "v70", objectName: "CMA HALL", cx: 251, cy: 261},//CMA HALL
    { id: "v71", objectName: "Teller", cx: 228, cy: 250},//Teller
    
    //Gray circles (not to be showned or "null")
    { id: "v72", objectName: "Null", cx: 136, cy: 116},//Basic ed
    { id: "v73", objectName: "Null", cx: 251, cy: 116},//cela-gym
    { id: "v74", objectName: "Null", cx: 382, cy: 116},//gym-mba
    { id: "v75", objectName: "Null", cx: 383, cy: 205},//SP-MBA
    { id: "v76", objectName: "Null", cx: 306, cy: 204},//SP inside
    { id: "v77", objectName: "Null", cx: 307, cy: 363},//PF-nh-old stage
    { id: "v78", objectName: "Null", cx: 307, cy: 282},//PF-nh-old stage
    { id: "v79", objectName: "Null", cx: 251, cy: 299},//cma-pf-cma
    { id: "v80", objectName: "Null", cx: 307, cy: 298},//PF
    { id: "v81", objectName: "Null", cx: 307, cy: 354},//PF
    { id: "v82", objectName: "Null", cx: 94, cy: 152},//Ptc upper
    { id: "v83", objectName: "Null", cx: 135, cy: 151},//ITS upper
    { id: "v84", objectName: "Null", cx: 136, cy: 186},//ITS -fvr
    { id: "v85", objectName: "Null", cx: 136, cy: 218},//ITS -fvr
    { id: "v87", objectName: "Null", cx: 154, cy: 261},//Atruim-OP
    { id: "v88", objectName: "Null", cx: 94, cy: 261},//Atruim-ptc
    { id: "v90", objectName: "Null", cx: 94, cy: 218},//Atruim-ptc-Its
    { id: "v91", objectName: "Null", cx: 288, cy: 261},//Atruim-teller-cma
    { id: "v92", objectName: "Null", cx: 251, cy: 261},//teller-cma
    { id: "v93", objectName: "Null", cx: 251, cy: 205},//cma-sp
    { id: "v94", objectName: "Null", cx: 383, cy: 188},//mba sp
    { id: "v95", objectName: "Null", cx: 251, cy: 144},//parking - ave
  ],
  edges: [
    { id: "v1_to_v72", from: "v1", to: "v72" },//ev-null
    { id: "v72_to_v83", from: "v72", to: "v83" },//null-null
    { id: "v72_to_v84", from: "v72", to: "v84" },//null-null
    { id: "v72_to_v53", from: "v72", to: "v53" },//null-obj op left
    { id: "v72_to_v2", from: "v72", to: "v2" },//null-basic ed
    { id: "v72_to_v35", from: "v72", to: "v35" },//null-obj.ev
    { id: "v1_to_v2", from: "v1", to: "v2" },//ev-basic
    { id: "v1_to_v3", from: "v1", to: "v3" },//ev-cela
    { id: "v1_to_v73", from: "v1", to: "v2" },//ev-null
    { id: "v1_to_v4", from: "v1", to: "v2" },//ev-gym
    { id: "v1_to_v74", from: "v1", to: "v2" },//ev-null
    
    { id: "v2_to_v36", from: "v2", to: "v36" },//basic-obj.ed
    { id: "v2_to_v47", from: "v2", to: "v47" },//basic-obj.parking
    { id: "v2_to_v72", from: "v2", to: "v72" },//basic-null
    { id: "v2_to_v35", from: "v2", to: "v35" },//basic-obj.ev
    { id: "v2_to_v50", from: "v2", to: "v50" },//basic-obj.fvr
    { id: "v2_to_v3", from: "v2", to: "v3" },//basic-cela
    { id: "v2_to_v73", from: "v2", to: "v73" },//basic-null
    { id: "v2_to_v4", from: "v2", to: "v4" },//basic-gym
    { id: "v2_to_v74", from: "v2", to: "v74" },//basic-null
  
    { id: "v3_to_v37", from: "v3", to: "v37" },//cela-obj.cela
    { id: "v3_to_v2", from: "v3", to: "v2" },//cela-basic
    { id: "v3_to_v72", from: "v3", to: "v72" },//cela-null
    { id: "v3_to_v35", from: "v23", to: "v35" },//cela-ev
    { id: "v3_to_v73", from: "v3", to: "v73" },//cela-null
    { id: "v3_to_v4", from: "v3", to: "v4" },//cela-gym
    { id: "v3_to_v74", from: "v3", to: "v74" },//cela-null
    { id: "v3_to_v51", from: "v3", to: "v51" },//cela-finance
   
    { id: "v4_to_v38", from: "v4", to: "v38" },//gym-obj.gym
    { id: "v4_to_v74", from: "v4", to: "v74" },//gym-null
    { id: "v4_to_v72", from: "v4", to: "v72" },//gym-null
    { id: "v4_to_v3", from: "v4", to: "v3" },//gym-cela
    { id: "v4_to_v2", from: "v4", to: "v2" },//gym-basic
    { id: "v4_to_v73", from: "v4", to: "v73" },//gym-null
    { id: "v4_to_v35", from: "v4", to: "v35" },//gym-ev
    { id: "v4_to_v46", from: "v4", to: "v46" },//gym-obj.ave
    //{ id: "v4_to_v12", from: "v4", to: "v12" },//gym-sp upper // not function
    { id: "v4_to_v63", from: "v4", to: "v63" },//gym-obj.pf //not function
    { id: "v4_to_v65", from: "v4", to: "v65" },//gym-obj.nh
    { id: "v4_to_v12", from: "v4", to: "v57" },//gym-obj.sp
    //{ id: "v4_to_v7", from: "v4", to: "v7" },//gym-obj.nh
   
    { id: "v74_to_v39", from: "v74", to: "v39" },//null-obj.eng
    { id: "v74_to_v4", from: "v74", to: "v4" },//null-gym
    { id: "v74_to_v37", from: "v74", to: "v3" },//null-cela
    { id: "v74_to_v36", from: "v74", to: "v2" },//null-basic
    { id: "v74_to_v35", from: "v74", to: "v35" },//null-obj.ev
    { id: "v74_to_v73", from: "v74", to: "v73" },//null-null
    { id: "v74_to_v72", from: "v74", to: "v72" },//null-null
    { id: "v74_to_v40", from: "v74", to: "v40" },//null-obj.mbahall
    { id: "v74_to_v94", from: "v74", to: "v94" },//null-null
    { id: "v74_to_v75", from: "v74", to: "v75" },//null-null
    { id: "v74_to_v25", from: "v74", to: "v25" },//null-mbapf
    { id: "v74_to_v45", from: "v74", to: "v45" },//null-obj.oldstage
   
    { id: "v5_to_v74", from: "v5", to: "v74" },//eng-null
    { id: "v5_to_v39", from: "v5", to: "v39" },//eng-obj.eng
    { id: "v5_to_v40", from: "v5", to: "v40" },//eng-obj.mba
    { id: "v5_to_v94", from: "v5", to: "v40" },//eng-null
    { id: "v5_to_v75", from: "v5", to: "v75" },//eng-null
    { id: "v5_to_v25", from: "v5", to: "v25" },//eng-mbapf
    { id: "v5_to_v45", from: "v5", to: "v45" },//eng-obj.oldstage
   
    { id: "v6_to_v40", from: "v6", to: "v40" },//mba hall-obj.mba
    { id: "v6_to_v32", from: "v6", to: "v32" },//mba hall-riverside
    { id: "v6_to_v7", from: "v6", to: "v7" },//mba hall-p ave
    { id: "v6_to_v8", from: "v6", to: "v8" },//mba hall-p parking
    { id: "v6_to_v94", from: "v6", to: "v94" },//mba hall-mbasp
    { id: "v6_to_v75", from: "v6", to: "v75" },//mba hall-spmba
    { id: "v6_to_v25", from: "v6", to: "v25" },//mba hall-mbapf
     { id: "v6_to_v74", from: "v6", to: "v74" },//-mba hall- null

    { id: "v7_to_v46", from: "v7", to: "v46" },//p ave-obj.p ave
    { id: "v7_to_v12", from: "v7", to: "v12" },//p ave-sp upper
    { id: "v7_to_v57", from: "v7", to: "v57" },//gym-obj.nh
    { id: "v7_to_v6", from: "v7", to: "v6" },//p ave-obj.mba hall
    { id: "v7_to_v95", from: "v7", to: "v95" },//p ave-null
   
    { id: "v8_to_v47", from: "v8", to: "v47" },//p ave-obj p ave
    { id: "v8_to_v6", from: "v8", to: "v6" },//p ave-mbha hall   
    { id: "v95_to_v8", from: "v95", to: "v8" },//null-vparking
    { id: "v8_to_v2", from: "v8", to: "v2" },//parking-basic
    //{ id: "v8_to_v83", from: "v8", to: "v83" },//parking-null
    { id: "v83_to_v84", from: "v83", to: "v84" },//null-null
    { id: "v84_to_v50", from: "v84", to: "v50" },//null-obj fvr
    { id: "v8_to_v50", from: "v8", to: "v50" },//parking-obj fvr
    { id: "v8_to_v95", from: "v8", to: "v95" },//parking-null
    { id: "v8_to_v7", from: "v8", to: "v7" },//parking-mba hall
    //{ id: "v8_to_v4", from: "v8", to: "v4" },//parking-mba hall
    
    { id: "v9_to_v50", from: "v9", to: "v50" },//fvr-obj fvr
    { id: "v50_to_v2", from: "v50", to: "v2" },//fvr-obj fvr
    { id: "v9_to_v8", from: "v9", to: "v8" },//fvr-parking
    { id: "v9_to_v2", from: "v9", to: "v2" },//fvr-basic ed
    { id: "v9_to_v10", from: "v9", to: "v10" },//fvr-finance
    { id: "v9_to_v11", from: "v9", to: "v11" },//fvr-cma hall
    { id: "v9_to_v12", from: "v9", to: "v12" },//fvr-sp upper
    { id: "v9_to_v94", from: "v9", to: "v94" },//fvr-spmba
    { id: "v9_to_v84", from: "v9", to: "v84" },//fvr-null
   
    { id: "v10_to_v51", from: "v10", to: "v51" },//finance-obj finance
    { id: "v10_to_v9", from: "v10", to: "v9" },//finance-fvr
    { id: "v10_to_v11", from: "v10", to: "v11" },//finance-cma hall
    { id: "v10_to_v12", from: "v10", to: "v12" },//finance-SP
    { id: "v10_to_v94", from: "v10", to: "v94" },//finance-spmba
    { id: "v10_to_v84", from: "v10", to: "v84" },//finance null
    { id: "v10_to_v3", from: "v10", to: "v3" },//finance-obj finance
    
    { id: "v11_to_v55", from: "v11", to: "v55" },//cma hall - obj cma hall
    { id: "v11_to_v10", from: "v11", to: "v10" },//cma hall - finance
    { id: "v11_to_v9", from: "v11", to: "v9" },//cma hall - fvr
    { id: "v11_to_84", from: "v11", to: "v84" },//cma hall - null
    { id: "v11_to_v12", from: "v11", to: "v12" },//cma hall - sp
    { id: "v11_to_v94", from: "v11", to: "v94" },//cma hall - spmba
    { id: "v11_to_v95", from: "v11", to: "v95" },//cma hall - null
    { id: "v11_to_v73", from: "v11", to: "v73" },//cma hall - null

    { id: "v12_to_v57", from: "v12", to: "v57" },//SP - obj sp
    { id: "v12_to_v46", from: "v12", to: "v46" },//SP - obj Ave
    //{ id: "v12_to_v57", from: "v12", to: "v57" },//SP - obj sp
    { id: "v12_to_v4", from: "v12", to: "v4" },//SP - obj gym
    { id: "v12_to_v94", from: "v12", to: "v94" },//SP - spmba
    { id: "v12_to_v11", from: "v12", to: "v11" },//SP - finance
    { id: "v12_to_v9", from: "v12", to: "v9" },//SP - fvr
    { id: "v12_to_v84", from: "v12", to: "v84" },//SP - null
    { id: "v12_to_v65", from: "v12", to: "v65" },//SP - nh

    { id: "v13_to_v56", from: "v13", to: "v56" },//SP - obj sp left
    { id: "v13_to_v93", from: "v13", to: "v93" },//SP - null
    { id: "v13_to_v76", from: "v13", to: "v76" },//SP - sp inside null
    { id: "v76_to_v78", from: "v76", to: "v78" },//SP - null
    { id: "v78_to_v65", from: "v78", to: "v65" },//null - nh
    { id: "v13_to_v75", from: "v13", to: "v75" },//SPmba null - null
    { id: "v93_to_v55", from: "v93", to: "v55" },//SPLeft null - cma hall
    { id: "v93_to_v92", from: "v93", to: "v92" },//cma null - null
    { id: "v93_to_v31", from: "v93", to: "v31" },//cma null -NH null

    { id: "v15_to_v68", from: "v15", to: "v68" },//SP right - obj sp right
    { id: "v15_to_v75", from: "v15", to: "v75" },//SP right - null
    { id: "v15_to_v76", from: "v15", to: "v76" },//SP right - obj sp right
    { id: "v75_to_v45", from: "v75", to: "v45" },//SP right - obj sp right

    { id: "v16_to_v69", from: "v16", to: "v69" },//mbasp - obj mba
    { id: "v16_to_v75", from: "v16", to: "v75" },//mbasp - obj mba
    //{ id: "v16_to_v45", from: "v16", to: "v45" },//mbasp - null

    { id: "v17_to_v48", from: "v17", to: "v48" },//ptc - obj ptc
    { id: "v17_to_v90", from: "v17", to: "v90" },//ptc - null
    { id: "v17_to_v85", from: "v17", to: "v85" },//ptc - null
    //to be checked
    { id: "v18_to_v53", from: "v18", to: "v53" },//op left - obj op left
    { id: "v18_to_v85", from: "v18", to: "v85" },//op left - null
    { id: "v85_to_v53", from: "v85", to: "v53" },//op left - null
    { id: "v18_to_v86", from: "v18", to: "v86" },//op left - atruim null
    { id: "v90_to_v18", from: "v90", to: "v18" },//null -  p left
    { id: "v18_to_v19", from: "v19", to: "v18" },//its - op left

    { id: "v19_to_v49", from: "v19", to: "v49" },//its - obj its
    { id: "v19_to_v18", from: "v19", to: "v18" },//its - op left  
    { id: "v19_to_v61", from: "v19", to: "v61" },//its - atruim

    { id: "v21_to_v54", from: "v21", to: "v54" },//registrar - obj registrar
    { id: "v21_to_v91", from: "v21", to: "v91" },//registrar - obj registrar
    { id: "v21_to_v92", from: "v21", to: "v92" },//registrar - obj registrar

    { id: "v22_to_v71", from: "v22", to: "v71" },//teller - obj teller
    { id: "v22_to_v91", from: "v22", to: "v91" },//registrar - null
    { id: "v22_to_v92", from: "v22", to: "v92" },//registrar - null

    { id: "v23_to_v59", from: "v23", to: "v59" },//cma up- obj cma
    { id: "v23_to_v91", from: "v23", to: "v91" },//cma up- null
    { id: "v23_to_v92", from: "v23", to: "v92" },//cma up- null

    { id: "v91_to_v90", from: "v91", to: "v90" },//null - null
    { id: "v91_to_v92", from: "v91", to: "v92" },//null - null
    { id: "v91_to_v87", from: "v91", to: "v87" },//null - null
    { id: "v91_to_v61", from: "v91", to: "v61" },//null - null
    { id: "v91_to_v88", from: "v91", to: "v88" },//null - null

    { id: "v92_to_v90", from: "v92", to: "v90" },//null - null
    { id: "v92_to_v93", from: "v92", to: "v93" },//null - null
    { id: "v92_to_v87", from: "v92", to: "v87" },//null - null
    { id: "v92_to_v61", from: "v92", to: "v61" },//null - null
    { id: "v92_to_v88", from: "v92", to: "v88" },//null - null
    { id: "v92_to_v95", from: "v92", to: "v95" },//null - null
    { id: "v92_to_v73", from: "v92", to: "v73" },//null - null
    { id: "v92_to_v79", from: "v92", to: "v79" },//null - null
    { id: "v92_to_v66", from: "v92", to: "v66" },//null - null

    { id: "v61_to_v86", from: "v61", to: "v86" },//atrum-atruim null
    { id: "v61_to_v88", from: "v61", to: "v88" },//its - atruim

    //{ id: "v90_to_v61", from: "v90", to: "v61" },//null - null 
    { id: "v90_to_v49", from: "v90", to: "v49" },//null - null
    { id: "v90_to_v82", from: "v90", to: "v82" },//null - null
    { id: "v90_to_v88", from: "v90", to: "v88" },//null - null

    { id: "v82_to_v83", from: "v82", to: "v83" },//null - null
    { id: "v83_to_v72", from: "v83", to: "v72" },//null - null
    { id: "v90_to_v85", from: "v90", to: "v85" },//null - null
    { id: "v85_to_v84", from: "v85", to: "v84" },//null - null
    { id: "v82_to_v40", from: "v82", to: "v40" },//null - obj mba hall


    { id: "v83_to_v53", from: "v83", to: "v53" },//null-obj op left
    { id: "v84_to_v83", from: "v84", to: "v83" },//null - null
    { id: "v84_to_v85", from: "v84", to: "v85" },//null - null
    { id: "v84_to_v86", from: "v84", to: "v86" },//null - obj op
    { id: "v84_to_v51", from: "v84", to: "v51" },//null - obj finance
    { id: "v84_to_v55", from: "v84", to: "v55" },//null - obj cma hall
    { id: "v84_to_v57", from: "v84", to: "v57" },//null - obj sp upper
    { id: "v84_to_v12", from: "v84", to: "v12" },//null- obj sp upper

    { id: "v86_to_v61", from: "v86", to: "v61" },//null atruim - atrium
    { id: "v86_to_v83", from: "v88", to: "v83" },//null atruim - null
    { id: "v86_to_v84", from: "v88", to: "v84" },//null atruim - null
    { id: "v86_to_v85", from: "v88", to: "v85" },//null atruim - null
    { id: "v86_to_v87", from: "v88", to: "v87" },//null atruim - null
    { id: "v86_to_v72", from: "v88", to: "v72" },//null atruim - null
    { id: "v86_to_v88", from: "v88", to: "v88" },//null atruim - null
    
    { id: "v88_to_v61", from: "v88", to: "v61" },//null atruim - atrium
  //  { id: "v88_to_v60", from: "v88", to: "v60" },//null atruim - atrium
    { id: "v88_to_v90", from: "v88", to: "v90" },//null atruim - null
    { id: "v88_to_v82", from: "v88", to: "v82" },//null atruim - null
  //  { id: "v88_to_v60", from: "v88", to: "v60" },//null atruim - atrium
    { id: "v88_to_v86", from: "v88", to: "v86" },//null atruim - null atrium
    { id: "v88_to_v87", from: "v88", to: "v87" },//null atruim - null atrium
    { id: "v88_to_v21", from: "v88", to: "v21" },//null atruim - null atrium
  //  { id: "v88_to_v91", from: "v88", to: "v91" },//null atruim -  null atrium
    { id: "v88_to_v92", from: "v88", to: "v92" },//null atruim -  null atrium
    { id: "v88_to_v91", from: "v88", to: "v91" },//null atruim -  null atrium

    { id: "v87_to_v52", from: "v87", to: "v52" },//op-obj op
    { id: "v87_to_v86", from: "v87", to: "v86" },//op-  null atrium
    { id: "v87_to_v88", from: "v87", to: "v88" },//op -  null atrium
    { id: "v87_to_v21", from: "v87", to: "v21" },//op -  registrar
    { id: "v87_to_v91", from: "v87", to: "v91" },//op-  null atrium
    { id: "v87_to_v92", from: "v87", to: "v92" },//op-  null 

    { id: "v95_to_v73", from: "v95", to: "v73" },//null-null
    { id: "v95_to_v55", from: "v95", to: "v55" },//null-obj cma hall



    //{ id: "v12_to_v57", from: "v12", to: "v57" },//sp-objsp upper
    { id: "v32_to_v42", from: "v32", to: "v42" },//riverside-obj.riverside


  ],
};
