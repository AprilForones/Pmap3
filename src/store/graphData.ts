export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
  r: number;

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
{ id: "v1", objectName: null, cx: 18.5, cy: 261.5 ,r:3.5},//Front Entrance
//PTC BUILDING
{ id: "v2", objectName: null, cx: 57.5, cy: 261.5 ,r:3.5},//
{ id: "v3", objectName: null, cx: 30.5, cy: 261.5 ,r:3.5},
{ id: "v4", objectName: "null", cx: 30.5, cy: 238.5 ,r:4.5},
{ id: "v5", objectName: null, cx: 31.5, cy: 212.5 ,r:3.5},
{ id: "v6", objectName: null, cx: 57.5, cy: 212.5 ,r:3.5},
{ id: "v7", objectName: "null", cx: 57.5, cy: 290.5 ,r:4.5},
{ id: "v8", objectName: null, cx: 57.5, cy: 318.5 ,r:3.5},
{ id: "v9", objectName: "null", cx: 29.5, cy: 290.5 ,r:4.5},
{ id: "v10", objectName: null, cx: 31.5, cy: 318.5 ,r:3.5},
{ id: "v11", objectName: "null", cx: 57.5, cy: 239.5 ,r:4.5},
//mcdo
{ id: "v12", objectName: null, cx: 63.5, cy: 188.5 ,r:3.5},
//cdsl/ITS
{ id: "v13", objectName: null, cx: 89.5, cy: 188.5 ,r:3.5},//ITS
{ id: "v14", objectName: null, cx: 89.5, cy: 210.5 ,r:3.5},
{ id: "v15", objectName: null, cx: 90.5, cy: 242.5 ,r:3.5},
{ id: "v16", objectName: null, cx: 90.5, cy: 261.5 ,r:3.5},//CSDL
//op
{ id: "v17", objectName: null, cx: 113.5, cy: 273.5 ,r:3.5},//
{ id: "v18", objectName: null, cx: 128.5, cy: 273.5 ,r:3.5},
//fvr
{ id: "v19", objectName: null, cx: 144.5, cy: 262.5 ,r:3.5},//lib
{ id: "v20", objectName: null, cx: 161.5, cy: 262.5 ,r:3.5},//registrar offce
{ id: "v252", objectName: null, cx: 157.5, cy: 283.5 ,r:3.5},//registrar offce
{ id: "v222", objectName: null, cx: 166.5, cy: 283.5 ,r:3.5},//
{ id: "v243", objectName: "null", cx: 157.5, cy: 290.5 ,r:4.5},//registrar offce
{ id: "v242", objectName: "null", cx: 166.5, cy: 290.5 ,r:4.5},//
{ id: "v244", objectName: "null", cx: 144.5, cy: 290.5 ,r:4.5},//
{ id: "v21", objectName: null, cx: 144.5, cy: 220.5 ,r:3.5},//fvr
{ id: "v22", objectName: null, cx: 186.5, cy: 244.5 ,r:3.5},
{ id: "v23", objectName:   null, cx: 186.5, cy: 220.5 ,r:3.5},//finance
{ id: "v24", objectName: null, cx: 186.5, cy: 262.5 ,r:3.5},
{ id: "v25", objectName: null, cx: 186.5, cy: 289.5 ,r:3.5},//teller
{ id: "v26", objectName: null, cx: 144.5, cy: 239.5 ,r:3.5},
{ id: "v27", objectName: null, cx: 135.5, cy: 254.5 ,r:3.5},
//basic ed
{ id: "v28", objectName: null,  cx: 158.5, cy: 54.5 ,r:4.5},
{ id: "v29", objectName: "BASIC ED's Comfort Room", cx: 158.5, cy: 54.5 ,r:4.5},//cr 
{ id: "v30", objectName: null, cx: 130.5, cy: 54.5 ,r:3.5},
{ id: "v31", objectName: null, cx: 130.5, cy: 85.5 ,r:3.5},
{ id: "v32", objectName: null, cx: 158.5, cy: 85.5 ,r:3.5},
{ id: "v33", objectName: null, cx: 130.5, cy: 104.5 ,r:3.5},
{ id: "v34", objectName: null, cx: 158.5, cy: 104.5 ,r:3.5},
{ id: "v35", objectName: null, cx: 130.5, cy: 133.5 ,r:3.5},
{ id: "v36", objectName: null, cx: 158.5, cy: 133.5 ,r:3.5},
{ id: "v37", objectName: null, cx: 144.5, cy: 143.5 ,r:3.5},//
//CCJE
{ id: "v38", objectName: null, cx: 192.5, cy: 143.5 ,r:3.5},// 
{ id: "v39", objectName: null, cx: 192.5, cy: 126.5 ,r:3.5},
{ id: "v401", objectName: null, cx: 192.5, cy: 89.5 ,r:4.5},
{ id: "v40", objectName: "CCJE's Comfort Room", cx: 192.5, cy: 89.5 ,r:4.5},
{ id: "v41", objectName: null, cx: 192.5, cy: 69.5 ,r:3.5},
{ id: "v42", objectName: null, cx: 192.5, cy: 46.5 ,r:3.5},
//gym
{ id: "v43", objectName: null, cx: 256.5, cy: 143.5 ,r:3.5},//
{ id: "v44", objectName: null, cx: 238.5, cy: 134.5,r:3.5},
{ id: "v45", objectName: null, cx: 238.5, cy: 51.5 ,r:3.5},
{ id: "v46", objectName: null, cx: 337.5, cy: 51.5,r:3.5},
{ id: "v47", objectName: null, cx: 337.5, cy: 134.5 ,r:3.5},
//sp
{ id: "v48", objectName: null, cx: 218.5, cy: 264.5 ,r:3.5},//LEFT
{ id: "v49", objectName: null, cx: 280.5, cy: 269.5 ,r:3.5},//R
//PForest
{ id: "v50", objectName: null, cx: 270.5, cy: 295.5,r:3.5},//LEFT
{ id: "v51", objectName: null, cx: 218.5, cy: 344.5,r:3.5},//R
{ id: "52", objectName: null, cx: 352.5, cy: 315.5,r:3.5},//LEFT
//NH
{ id: "v53", objectName: null, cx: 269.5, cy: 462.5,r:3.5},//R
{ id: "v54", objectName: null, cx: 202.5, cy: 462.5,r:3.5},//LEFT
{ id: "v55", objectName: null, cx: 185.5, cy: 471.5,r:3.5},//R
{ id: "v56", objectName: null, cx: 185.5, cy: 500.5,r:3.5},//LEFT
{ id: "v57", objectName: null, cx: 203.5, cy: 500.5,r:3.5},//R
{ id: "v58", objectName: null, cx: 269.5, cy: 500.5,r:3.5},//LEFT
{ id: "v59", objectName: null, cx: 318.5, cy: 500.5,r:3.5},//R
{ id: "v60", objectName: null, cx: 318.5, cy: 471.5,r:3.5},//LEFT
{ id: "v61", objectName: null, cx:365.5, cy: 471.5,r:3.5},//R
{ id: "v62", objectName: null, cx: 365.5, cy: 500.5,r:3.5},//LEFT
//old
{ id: "v63", objectName: null, cx: 354.5, cy: 435.5,r:3.5},//old
//TechVoc
{ id: "v64", objectName: null, cx: 150.5, cy: 462.5,r:33.5},
//CMA Building
{ id: "v65", objectName: null, cx: 160.5, cy: 302.5,r:3.5},//
{ id: "v232", objectName: "CMA's Comfort Room", cx: 160.5, cy: 328.5,r:4.5},
{ id: "v67", objectName: null, cx: 185.5, cy: 328.5,r:3.5},
{ id: "v68", objectName: null, cx: 140.5, cy: 328.5,r:3.5},
{ id: "v69", objectName: "null", cx: 140.5, cy: 353.5,r:4.5},
{ id: "v70", objectName: null, cx: 140.5, cy: 373.5,r:3.5},
{ id: "v71", objectName: "null", cx: 140.5, cy: 398.5,r:4.5},
{ id: "v72", objectName: "null", cx: 140.5, cy: 411.5,r:4.5},
{ id: "v73", objectName: null, cx: 140.5, cy: 436.5,r:3.5},
{ id: "v75", objectName: null, cx: 185.5, cy: 436.5,r:3.5},
{ id: "v76", objectName: null, cx: 185.5, cy: 3436.5,r:3.5},
{ id: "v77", objectName: "null", cx: 185.5, cy: 398.5,r:4.5},
{ id: "v78", objectName: null, cx: 196.5, cy: 373.5,r:3.5},//
{ id: "v79", objectName: "null", cx: 185.5, cy: 353.5,r:4.5},
//river
{ id: "v80", objectName: null, cx: 421.5, cy: 181.5,r:3.5},
{ id: "v81", objectName: null, cx: 459.5, cy: 130.5,r:3.5},//cr
{ id: "v82", objectName: null, cx: 499.5, cy: 130.5,r:3.5},
{ id: "v83", objectName: null, cx: 421.5, cy: 181.5,r:3.5},
{ id: "v84", objectName: null, cx: 520.5, cy: 130.5,r:3.5},
{ id: "v85", objectName: null, cx: 520.5, cy: 93.5,r:3.5},
{ id: "v86", objectName: null, cx: 499.5, cy: 93.5,r:3.5},
{ id: "v87", objectName: null, cx: 520.5, cy: 61.5,r:3.5},
{ id: "v88", objectName: null, cx: 493.5, cy: 34.5,r:3.5},//cr2
{ id: "v89", objectName: null, cx: 471.5, cy: 39.5,r:3.5},
{ id: "v90", objectName: null, cx: 415.5, cy: 39.5,r:3.5},
{ id: "v91", objectName: null, cx: 415.5, cy: 53.5,r:3.5},
{ id: "v92", objectName: null, cx: 421.5, cy: 130.5,r:3.5},
{ id: "v93", objectName: null, cx: 413.5, cy: 74.5,r:3.5},
{ id: "v94", objectName: null, cx: 413.5, cy: 107.5,r:3.5},
{ id: "v253", objectName: null, cx: 464.5, cy: 87.5,r:3.5},
{ id: "v254", objectName: null, cx: 464.5, cy: 97.5,r:3.5},
{ id: "v255", objectName: "null", cx: 464.5, cy: 130.5,r:3.5},
//Pedistrian 
{ id: "v95", objectName: null, cx: 514.5, cy: 176.5,r:3.5},
//motor park 5
{ id: "v96", objectName: null, cx: 352.5, cy: 269.5,r:3.5},
//p. ave
{ id: "v97", objectName: null, cx: 352.5, cy: 183.5,r:3.5},
//atrium
{ id: "v98", objectName: null, cx: 71.5, cy: 261.5,r:3.5},
{ id: "v99", objectName: null, cx: 106.5, cy: 301.5,r:3.5},
{ id: "v100", objectName: null, cx: 120.5, cy: 310.5,r:3.5},
//MBA eng
{ id: "v101", objectName: null, cx: 352.5, cy: 74.5,r:3.5},//
{ id: "v102", objectName: null, cx: 354.5, cy: 29.5,r:3.5},
{ id: "v103", objectName: null, cx: 391.5, cy: 29.5,r:3.5},
{ id: "v104", objectName: null, cx: 391.5, cy: 61.5,r:3.5},

{ id: "v105", objectName: null, cx: 375.5, cy: 74.5,r:3.5},//cr
{ id: "v106", objectName: null, cx: 375.5, cy: 87.5,r:3.5},
{ id: "v107", objectName: null, cx: 375.5, cy: 99.5,r:3.5},
{ id: "v108", objectName: "null", cx: 375.5, cy: 109.5,r:4.5},
{ id: "v109", objectName: null, cx: 375.5, cy: 119.5,r:3.5},
{ id: "v110", objectName: "null", cx: 375.5, cy:128.5,r:4.5},
{ id: "v111", objectName: null, cx: 375.5, cy: 140.5,r:3.5},

{ id: "v112", objectName: null, cx: 375.5, cy: 160.5,r:3.5},
{ id: "v113", objectName: "null", cx: 375.5, cy: 172.5,r:4.5},
{ id: "v114", objectName: null, cx: 375.5, cy: 183.5,r:3.5},
{ id: "v115", objectName: null, cx: 375.5, cy: 200.5,r:3.5},
{ id: "v116", objectName: "null", cx: 375.5, cy: 212.5,r:4.5},

{ id: "v117", objectName: "null", cx: 375.5, cy: 224.5,r:4.5},
{ id: "v118", objectName: null, cx: 375.5, cy: 237.5,r:3.5},

{ id: "v119", objectName: null, cx: 384.5, cy: 257.5,r:3.5},
{ id: "v120", objectName: "null", cx: 384.5, cy: 270.5,r:4.5},
{ id: "v121", objectName: null, cx: 384.5, cy: 285.5,r:3.5},
{ id: "v122", objectName: null, cx: 384.5, cy: 298.5,r:3.5},//chapel
{ id: "v123", objectName: null, cx: 384.5, cy: 310.5,r:3.5},//clinic

{ id: "v124", objectName: null, cx: 380.5, cy: 334.5,r:3.5},
{ id: "v125", objectName: "null", cx: 380.5, cy: 351.5,r:4.5},
{ id: "v126", objectName: null, cx: 380.5, cy: 368.5,r:3.5},
{ id: "v127", objectName: "null", cx: 380.5, cy: 381.5,r:4.5},
{ id: "v128", objectName: "null", cx: 380.5, cy: 394.5,r:4.5},
{ id: "v129", objectName: null, cx: 380.5, cy: 407.5,r:3.5},
{ id: "v130", objectName: "null", cx: 380.5, cy: 419.5,r:4.5},
{ id: "v131", objectName: null, cx: 380.5, cy: 432.5,r:3.5},

//Objects, yellow Circles
{ id: "v132", objectName: "Main Entrance Gate", cx: 11.5, cy: 261.5,r:4.5},//front entrance
{ id: "v133", objectName: "PTC Building", cx: 51.5, cy: 261.5,r:4.5},//ptc
{ id: "v134", objectName: "Mc Donald's", cx: 57.5, cy: 188.5,r:4.5},//mcdo
{ id: "v135", objectName: "ITS Department Building", cx: 89.5, cy: 200.5,r:4.5},//ITS Department Building        
{ id: "v136", objectName: "CSDL/ITS Building", cx: 90.5, cy: 249.5,r:4.5},//CSDL/ITS
{ id: "v137", objectName: "OP/Marketing Department", cx: 120.5, cy: 273.5,r:4.5},//OP/Marketing Department
{ id: "v138", objectName: "University Library Building", cx: 145.5, cy: 254.5,r:4.5},//University Library Building
{ id: "v139", objectName: "FVR Building", cx: 144.5, cy: 228.5,r:4.5},//FVR Building
{ id: "v140", objectName: "Finance Purchasing Department", cx: 186.5, cy: 238.5,r:4.5},//Finance Purchasing Department
{ id: "v141", objectName: "Teller", cx: 186.5, cy: 269.5,r:4.5},//Teller
{ id: "v142", objectName: "Atrium", cx: 82.5, cy: 298.5,r:4.5},//Atrium
{ id: "v143", objectName: "Registrar Office", cx: 161.5, cy: 252.5,r:4.5},//Registrar Office
{ id: "v144", objectName: "BASIC ED Building", cx: 144.5, cy: 134.5,r:4.5},//BASIC ED Building
{ id: "v145", objectName: "CCJE Department", cx: 192.5, cy: 134.5,r:4.5},//CCJE Department
{ id: "v146", objectName: "Gymnasium", cx: 256.5, cy: 134.5,r:4.5},//Gymnasium
{ id: "v147", objectName: "Motorcycle parking area 01", cx: 144.5, cy: 152.5,r:4.5},//Motorcycle parking area 01
{ id: "v148", objectName: "Motorcycle parking area 02", cx: 170.5, cy: 106.5,r:4.5},//Motorcycle parking area 02
{ id: "v149", objectName: "Motorcycle parking area 03", cx: 212.5, cy: 106.5,r:4.5},//Motorcycle parking area 03
{ id: "v150", objectName: "Motorcycle parking area 04", cx: 352.5, cy: 109.5,r:4.5},//Motorcycle parking area 04
{ id: "v151", objectName: "Motorcycle parking area 05", cx: 352.5, cy: 252.5,r:4.5},//Motorcycle parking area 05
{ id: "v152", objectName: "4 wheels parking area 01", cx: 144.5, cy: 182.5,r:4.5},//4 wheels parking area 01
{ id: "v153", objectName: "4 wheels parking area 02", cx: 144.5, cy: 208.5,r:4.5},//4 wheels parking area 02
{ id: "v154", objectName: "Student Plaza Entrance 01", cx: 218.5, cy: 264.5,r:4.5},//Student Plaza Entrance 01
{ id: "v155", objectName: "Student Plaza Entrance 02", cx: 270.5, cy: 269.5,r:4.5},//Student Plaza Entrance 02
{ id: "v156", objectName: "CMA Building Entrance 1", cx: 160.5, cy: 315.5,r:4.5},//CMA Building Entrance  01
{ id: "v157", objectName: "CMA Building Entrance 2", cx: 185.5, cy: 373.5,r:4.5},//CMA Building Entrance  02
{ id: "v158", objectName: "Technical Vocational Building", cx:150.5, cy: 2461.5,r:4.5},//Technical Vocational Building
{ id: "v159", objectName: "North Hall Entrance 1", cx: 202.5, cy: 471.5,r:4.5},//North Hall Entrance 1
{ id: "v160", objectName: "North Hall Entrance 2", cx: 269.5, cy: 471.5,r:4.5},//North Hall Entrance 2
{ id: "v161", objectName: "Old Stage", cx: 355.5, cy: 443.5,r:4.5},//Old Stage
{ id: "v162", objectName: "MBA Hall Entrance 4", cx: 367.5, cy: 451.5,r:4.5},//MBA Hall Entrance 4
{ id: "v163", objectName: "MBA Hall Entrance 3", cx: 367.5, cy: 315.5,r:4.5},//MBA Hall Entrance 3
{ id: "v164", objectName: "MBA Hall Entrance 2", cx: 367.5, cy: 269.5,r:4.5},//MBA Hall Entrance 2
{ id: "v165", objectName: "MBA Hall Entrance 1", cx: 366.5, cy: 183.5,r:4.5},//MBA Hall Entrance 1
{ id: "v166", objectName: "MBA Engineering Building", cx: 352.5, cy: 61.5,r:4.5},//Engineering Building
{ id: "v167", objectName: "PHINMA Forest", cx: 270.5, cy: 344.5,r:4.5},//PHINMA Forest
{ id: "v168", objectName: "PEDRO Hub Office", cx: 106.5, cy: 309.5,r:4.5},//PEDRO Hub Office
{ id: "v169", objectName: "Office of  Graduate and Professionals", cx: 106.5, cy: 319.5,r:4.5},//Office of  Graduate and Professionals
{ id: "v170", objectName: "College of Law Office", cx: 120.5, cy: 31.5,r:4.5},//College of Law Office
{ id: "v171", objectName: "Riverside Building", cx: 421.5, cy: 171.5,r:4.5},//Riverside Building
{ id: "v172", objectName: "Riverside Building's Parking Lot Area", cx: 520.5, cy: 93.5,r:4.5},//Riverside Building
{ id: "v173", objectName: "Pedistrian Entrance/Exit", cx:526.5, cy:176.5,r:4.5},//Pedistrian Entrance/Exit
{ id: "v174", objectName: "Riverside Building's Comfort Room 2", cx: 421.5, cy: 130.5,r:4.5},//Riverside Building
{ id: "v175", objectName: "Riverside Building's Comfort Room 1", cx: 499.5, cy: 39.5,r:4.5},//Riverside Building
{ id: "v176", objectName: "Riverside Building's Food Hub Area", cx: 499.5, cy: 93.5,r:4.5},//Riverside Building
{ id: "v233", objectName: "Gymnasium's Comfort Room", cx: 238.5, cy: 32.5,r:4.5},//Riverside Building

//purple circles (not to be showned or "null")
{ id: "v177", objectName: "null", cx: 71.5, cy: 188.5,r:4.5},
{ id: "v178", objectName: "null", cx: 111.5, cy: 181.5,r:4.5},
{ id: "v179", objectName: "null", cx: 111.5, cy: 220.5,r:4.5},
{ id: "v180", objectName: "null", cx: 111.5, cy: 261.5,r:4.5},
{ id: "v181", objectName: "null", cx: 111.5, cy: 290.5,r:4.5},
{ id: "v182", objectName: "null", cx: 106.5, cy: 290.5,r:4.5},
{ id: "v183", objectName: "null", cx: 90.5, cy: 290.5,r:4.5},
{ id: "v184", objectName: "null", cx: 144.5, cy: 303.5,r:4.5},
{ id: "v185", objectName: "null", cx: 160.5, cy: 290.5,r:4.5},
{ id: "v186", objectName: "null", cx: 205.5, cy: 289.5,r:4.5},
{ id: "v187", objectName: "null", cx: 205.5, cy: 220.5,r:4.5},
{ id: "v188", objectName: "null", cx: 205.5, cy: 344.5,r:4.5},
{ id: "v189", objectName: "null", cx: 205.5, cy: 373.5,r:4.5},
{ id: "v190", objectName: "null", cx: 270.5, cy: 315.5,r:4.5},
{ id: "v191", objectName: "null", cx: 270.5, cy: 435.5,r:4.5 },
{ id: "v192", objectName: "null", cx: 111.5, cy: 143.5,r:4.5 },
{ id: "v193", objectName: "null", cx: 170.5, cy: 143.5,r:4.5},
{ id: "v194", objectName: "null", cx: 205.5, cy: 143.5,r:4.5},
{ id: "v195", objectName: "null", cx: 212.5, cy: 143.5,r:4.5},
{ id: "v196", objectName: "null", cx: 352.5, cy: 142.5,r:4.5},
{ id: "v197", objectName: "null", cx: 352.5, cy: 200.5,r:4.5},
{ id: "v198", objectName: "null", cx: 421.5, cy: 200.5,r:4.5},
{ id: "v199", objectName: "null", cx: 514.5, cy: 187.5,r:4.5},
{ id: "v200", objectName: "null", cx: 413.5, cy: 130.5,r:4.5},
{ id: "v201", objectName: "null", cx: 352.5, cy: 374.5,r:4.5},
{ id: "v202", objectName: "null", cx: 443.731, cy: 53.7306,r:4.5},
{ id: "v203", objectName: "null", cx: 471.599, cy: 56.4455,r:4.5},
{ id: "v204", objectName: "null", cx: 499.467, cy: 59.1608,r:4.5},
{ id: "v234", objectName: "null", cx: 205.5, cy: 264.5,r:4.5},

//MBA eng


{ id: "v205", objectName: "null", cx: 367.5, cy: 74.5,r:4.5},//cr
{ id: "v206", objectName: "null", cx: 367.5, cy: 87.5,r:4.5},
{ id: "v207", objectName: "null", cx: 367.5, cy: 99.5,r:4.5},
{ id: "v208", objectName: "null", cx: 367.5, cy: 109.5,r:4.5},
{ id: "v209", objectName: "null", cx: 367.5, cy: 119.5,r:4.5},
{ id: "v210", objectName: "null", cx: 367.5, cy:128.5,r:4.5},
{ id: "v211", objectName: "null", cx: 367.5, cy: 140.5,r:4.5},

{ id: "v212", objectName: "null", cx: 367.5, cy: 160.5,r:4.5},
{ id: "v213", objectName: "null", cx: 367.5, cy: 172.5,r:4.5},
//{ id: "v232", objectName: null, cx: 352.5, cy: 183.5},//MBA HALL ENTRANCE 1
{ id: "v214", objectName: "null", cx: 367.5, cy: 200.5,r:4.5},
{ id: "v215", objectName: "null", cx: 367.5, cy: 212.5,r:4.5},

{ id: "v216", objectName: "null", cx: 367.5, cy: 224.5,r:4.5},
{ id: "v217", objectName: "null", cx: 367.5, cy: 237.5,r:4.5},

{ id: "v218", objectName: null, cx: 367.5, cy: 256.5,r:3.5},
// { id: "v219", objectName: null, cx: 367.5, cy: 269.5},//ENTRANCE 2
{ id: "v220", objectName: "null", cx: 367.5, cy: 285.5,r:4.5},
{ id: "v221", objectName: "null", cx: 367.5, cy: 302.5,r:4.5},//chapel
//{ id: "v222", objectName: null, cx: 367.5, cy: 315.5},//ENTRANCE 3

{ id: "v223", objectName: "null", cx: 367.5, cy: 334.5,r:3.5},
{ id: "v224", objectName: "null", cx: 367.5, cy: 351.5,r:3.5},
{ id: "v225", objectName: "null", cx: 367.5, cy: 368.5,r:3.5},
{ id: "v226", objectName: "null", cx: 367.5, cy: 381.5,r:3.5},
{ id: "v227", objectName: "null", cx: 367.5, cy: 394.5,r:3.5},
{ id: "v228", objectName: "null", cx: 367.5, cy: 407.5,r:3.5},
{ id: "v229", objectName: "null", cx: 367.5, cy: 419.5,r:3.5},
{ id: "v230", objectName: "null", cx: 367.5, cy: 432.5,r:3.5},
{ id: "v231", objectName: null, cx:73.5, cy: 298.5,r:3.5},//atrium
{ id: "v235", objectName: null, cx:367.5, cy: 60.5,r:3.5},//mba
],

edges: [
// positions to objects
//main entrance
{ id: "v1_to_v132", from: "v1", to: "v132" },
{ id: "v1_to_v3", from: "v1", to: "v3" },
//ptc
{ id: "v2_to_v133", from: "v2", to: "v133" },
{ id: "v3_to_v133", from: "v3", to: "v133" },
{ id: "v3_to_v4", from: "v3", to: "v4"},
{ id: "v3_to_v9", from: "v3", to: "v9"},
{ id: "v4_to_v5", from: "v4", to: "v5"},
{ id: "v4_to_v11", from: "v4", to: "v11"},
{ id: "v6_to_v5", from: "v6", to: "v5"},
{ id: "v11_to_v6", from: "v11", to: "v6"},
{ id: "v11_to_v2", from: "v11", to: "v2"},
{ id: "v2_to_v7", from: "v2", to: "v7" },
{ id: "v7_to_v9", from: "v7", to: "v9" },
{ id: "v9_to_v10", from: "v9", to: "v10" },
{ id: "v10_to_v8", from: "v10", to: "v8" },
{ id: "v8_to_v7", from: "v8", to: "v7" },
{ id: "v2_to_v98", from: "v2", to: "v98" },

//mcdo
{ id: "v12_to_v134", from: "v12", to: "v134" },
{ id: "v177_to_v12", from: "v177", to: "v12" },
{ id: "v177_to_v13", from: "v177", to: "v13" },
{ id: "v177_to_v98", from: "v177", to: "v98" },
//ITS dept
{ id: "v13_to_v135", from: "v13", to: "v135" },
{ id: "v13_to_v178", from: "v13", to: "v178" },
{ id: "v14_to_v135", from: "v14", to: "v135" },
//CSDL
{ id: "v16_to_v136", from: "v16", to: "v136" },
{ id: "v16_to_v98", from: "v16", to: "v98" },
{ id: "v15_to_v136", from: "v15", to: "v136" },
{ id: "v16_to_v180", from: "v16", to: "v180" },
{ id: "v16_to_v183", from: "v16", to: "v183" },

//op
{ id: "v17_to_v180", from: "v17", to: "v180" },
{ id: "v17_to_v137", from: "v17", to: "v137" },
{ id: "v17_to_v181", from: "v17", to: "v181" },
//{ id: "v181_to_v185", from: "v181", to: "v185" },
//Lib
{ id: "v19_to_v138", from: "v19", to: "v138" },
{ id: "v27_to_v138", from: "v27", to: "v138" },
{ id: "v184_to_v19", from: "v184", to: "19" },
{ id: "v184_to_v99", from: "v184", to: "99" },
{ id: "v184_to_v65", from: "v184", to: "65" },
//fvr
{ id: "v21_to_v179", from: "v21", to: "v179" },
{ id: "v21_to_v139", from: "v21", to: "v139" },
{ id: "v21_to_v23", from: "v21", to: "v23" },

//finance
{ id: "v23_to_v140", from: "v23", to: "v140" },
{ id: "v22_to_v140", from: "v22", to: "v140" },
{ id: "v23_to_v187", from: "v23", to: "v187" },
//teller
{ id: "v25_to_v141", from: "v25", to: "v141"},
{ id: "v25_to_v185", from: "v25", to: "v185"},
{ id: "v25_to_v186", from: "v25", to: "v186"},
{ id: "v24_to_v141", from: "v25", to: "v141"},

//Atrium
{ id: "v231_to_v142", from: "v231", to: "v142" },
{ id: "v231_to_v98", from: "v231", to: "v98" },
{ id: "v99_to_v142", from: "v99", to: "v142" },
{ id: "v99_to_v65", from: "v99", to: "v65" },
{ id: "v99_to_v100", from: "v99", to: "v100" },
//registrar
{ id: "v20_to_v143", from: "v20", to: "v143" },
{ id: "v20_to_v185", from: "v20", to: "v185" },
{ id: "v181_to_v185", from: "v181", to: "v185" },
//basic
{ id: "v37_to_v144", from: "v37", to: "v144" },
{ id: "v37_to_v192", from: "v37", to: "v192" },
{ id: "v144_to_v35", from: "v144", to: "v35" },
{ id: "v144_to_v36", from: "v144", to: "v36" },
{ id: "v36_to_v34", from: "v36", to: "v34" },
{ id: "v35_to_v33", from: "v35", to: "v33" },
{ id: "v31_to_v33", from: "v31", to: "v33" },
{ id: "v32_to_v34", from: "v32", to: "v34" },
{ id: "v31_to_v30", from: "v31", to: "v30" },
{ id: "v32_to_v29", from: "v32", to: "v29" },

{ id: "v37_to_v193", from: "v37", to: "v193" },
//ccje
{ id: "v38_to_v193", from: "v38", to: "v193" },
{ id: "v38_to_v195", from: "v38", to: "v195" },
{ id: "v39_to_v145", from: "v39", to: "v145" },
{ id: "v39_to_v40", from: "v39", to: "v40" },
{ id: "v40_to_v41", from: "v40", to: "v41" },
{ id: "v41_to_v42", from: "v41", to: "v40" },
{ id: "v39_to_v194", from: "v39", to: "v194" },

{ id: "v195_to_v194", from: "v195", to: "v194" },
{ id: "v195_to_v43", from: "v195", to: "v43" },
//gym
{ id: "v43_to_v146", from: "v43", to: "v146" },
{ id: "v43_to_v196", from: "v43", to: "v196" },
{ id: "v44_to_v146", from: "v44", to: "v146" },
{ id: "v47_to_v146", from: "v47", to: "v146" },
{ id: "v44_to_v45", from: "v44", to: "v45" },
{ id: "v47_to_v46", from: "v47", to: "v46" },
{ id: "v45_to_v46", from: "v45", to: "v46" },
{ id: "v45_to_v233", from: "v45", to: "v233" },
//motor p1
{ id: "v37_to_v147", from: "v137", to: "v147" },
//motorp2
{ id: "v193_to_v148", from: "v193", to: "v148" },
//motor p3
{ id: "v195_to_v149", from: "v195", to: "v149" },
//motor p4
{ id: "v196_to_v150", from: "v196", to: "v150" },
//motor p5
{ id: "v96_to_v151", from: "v94", to: "v151" },
//4 wheel p1
{ id: "v178_to_v152", from: "v178", to: "v152" },    
//4 wheel p2
{ id: "v21_to_v153", from: "v21", to: "v153" }, 
//sp 1
{ id: "v48_to_v154", from: "v48", to: "v154" },
{ id: "v234_to_v154", from: "v234", to: "v154"},
//sp2
{ id: "v49_to_v155", from: "v49", to: "v155" },
{ id: "v49_to_v96", from: "v49", to: "v96" },
{ id: "v50_to_v155", from: "v50", to: "v155"},

//cma 1
{ id: "v65_to_v156", from: "v65", to: "v156" },
{ id: "232_to_v156", from: "v232", to: "v156" },
//Cma 2
{ id: "v78_to_v157", from: "v78", to: "v157" },
{ id: "v77_to_v157", from: "v77", to: "v157" },
{ id: "v79_to_v157", from: "v79", to: "v157" },
{ id: "v77_to_v67", from: "v77", to: "v67" }, 
{ id: "v68_to_v69", from: "v68", to: "v69" },
{ id: "v70_to_v69", from: "v70", to: "v69" },  
{ id: "v70_to_v71", from: "v70", to: "v71" },
{ id: "v71_to_v72", from: "v71", to: "v72" },
{ id: "v72_to_v73", from: "v72", to: "v73" },
{ id: "v73_to_v75", from: "v73", to: "v75" },  
{ id: "v77_to_v75", from: "v77", to: "v75" },

//techvoc
{ id: "v64_to_v158", from: "614", to: "v158" },
{ id: "v64_to_v54", from: "v64", to: "v54" },
//nh 1
{ id: "v54_to_v159", from: "v54", to: "v159" },
{ id: "v54_to_v53", from: "v54", to: "v53" },
{ id: "v55_to_v159", from: "v55", to: "v159" },
{ id: "v57_to_v159", from: "v57", to: "v159" },
{ id: "v57_to_v58", from: "v57", to: "v58" },
{ id: "v160_to_v159", from: "v55", to: "v159" },
//nh 2
{ id: "v53_to_v160", from: "v53", to: "v160" },
{ id: "v53_to_v191", from: "v53", to: "v191" },
{ id: "v58_to_v160", from: "v58", to: "v160" },
{ id: "v58_to_v59", from: "v58", to: "v59" },
{ id: "v60_to_v59", from: "v60", to: "v59" },
{ id: "v60_to_v160", from: "v60", to: "v160" },
{ id: "v60_to_v61", from: "v60", to: "v61" },
{ id: "v59_to_v62", from: "v59", to: "v62" },
{ id: "v61_to_v62", from: "v61", to: "v62" },
//old stage
{ id: "v63_to_v161", from: "v63", to: "v161" },
{ id: "v63_to_v191", from: "v63", to: "v191" },
{ id: "v52_to_v161", from: "v52", to: "v161" },
{ id: "v96_to_v161", from: "v96", to: "v161" },
{ id: "v197_to_v161", from: "v197", to: "v161" },
{ id: "v196_to_v161", from: "v196", to: "v161" },
//mba 4
{ id: "v230_to_v162", from: "v230", to: "v162" },
{ id: "v61_to_v162", from: "v61", to: "v162" },
//mba 3
{ id: "v52_to_v163", from: "v52", to: "v163" },
{ id: "v52_to_v163", from: "v52", to: "v163" },
{ id: "v221_to_v163", from: "v221", to: "v163" },
{ id: "v223_to_v163", from: "v223", to: "v163" },
{ id: "v123_to_v163", from: "v123", to: "v163" },
{ id: "v221_to_v122", from: "v221", to: "v122" },
{ id: "v221_to_v220", from: "v221", to: "v220"},
{ id: "v221_to_v121", from: "v221", to: "v121"},
{ id: "v223_to_v124", from: "v223", to: "v124" },
{ id: "v223_to_v224", from: "v223", to: "v224" },
{ id: "v224_to_v125", from: "v224", to: "v125" },
{ id: "v224_to_v225", from: "v224", to: "v225" },
{ id: "v225_to_v126", from: "v225", to: "v126" }, 
{ id: "v225_to_v226", from: "v225", to: "v226" },   
{ id: "v226_to_v127", from: "v226", to: "v127" },   
{ id: "v226_to_v227", from: "v226", to: "v227" },  
{ id: "v227_to_v128", from: "v227", to: "v128" }, 
{ id: "v227_to_v228", from: "v227", to: "v228" },
{ id: "v228_to_v129", from: "v228", to: "v129" }, 
{ id: "v229_to_v230", from: "v229", to: "v230" },  
{ id: "v229_to_v130", from: "v229", to: "v130" },  
{ id: "v230_to_v131", from: "v230", to: "v131" }, 
//mba 2
{ id: "v96_to_v164", from: "v96", to: "v164" },
{ id: "v120_to_v164", from: "v120", to: "v164" },
{ id: "v218_to_v164", from: "v218", to: "v164" },
{ id: "v218_to_v119", from: "v218", to: "v119" },
{ id: "v218_to_v217", from: "v218", to: "v217" },
{ id: "v217_to_v118", from: "v217", to: "v118" },
{ id: "v217_to_v216", from: "v217", to: "v216" },
{ id: "v216_to_v215", from: "v216", to: "v215" },
{ id: "v215_to_v116", from: "v215", to: "v116" },
{ id: "v215_to_v214", from: "v215", to: "v214" },
{ id: "v214_to_v115", from: "v214", to: "v115" },


//mba 1
{ id: "v97_to_v165", from: "v97", to: "v165" },
{ id: "v97_to_v196", from: "v97", to: "v196" },
{ id: "v214_to_v165", from: "v214", to: "v165" },
{ id: "v165_to_v114", from: "v165", to: "v114" },
{ id: "v213_to_v165", from: "v213", to: "v165" },
{ id: "v213_to_v113", from: "v213", to: "v113" },
{ id: "v213_to_v212", from: "v213", to: "v212" },
{ id: "v212_to_v112", from: "v212", to: "v112" },
{ id: "v212_to_v211", from: "v212", to: "v211" },
{ id: "v211_to_v111", from: "v211", to: "v111" },
{ id: "v210_to_v110", from: "v210", to: "v110" },
{ id: "v210_to_v209", from: "v210", to: "v209" },
{ id: "v209_to_v109", from: "v209", to: "v109" },
{ id: "v209_to_v208", from: "v209", to: "v208" },
{ id: "v208_to_v108", from: "v208", to: "v108" },
{ id: "v208_to_v207", from: "v208", to: "v207" },
{ id: "v207_to_v107", from: "v207", to: "v107" },
{ id: "v207_to_v206", from: "v207", to: "v206" },
{ id: "v206_to_v106", from: "v106", to: "v106" },
{ id: "v205_to_v105", from: "v205", to: "v105" },
{ id: "v206_to_v205", from: "v206", to: "v205" },
// mba eng
{ id: "v101_to_v166", from: "v101", to: "v166" },
{ id: "v235_to_v166", from: "v235", to: "v166" },
{ id: "v235_to_v104", from: "v235", to: "v104" },
{ id: "v235_to_v102", from: "v235", to: "v102" },
{ id: "v103_to_v102", from: "v103", to: "v102" },
{ id: "v103_to_v104", from: "v104", to: "v102" },
//P Forest
{ id: "v51_to_v167", from: "v51", to: "v167" },
{ id: "v190_to_v167", from: "v190", to: "v167" },
{ id: "v191_to_v167", from: "v191", to: "v167" },
{ id: "v190_to_v52", from: "v190", to: "v52" },
{ id: "v190_to_v50", from: "v190", to: "v50" },
//pedro
{ id: "v182_to_v168", from: "v182", to: "v168" },
{ id: "v182_to_v181", from: "v182", to: "v181" },
//grad and prof
{ id: "v170_to_v169", from: "v170", to: "v169" },
//law
{ id: "v100_to_v170", from: "v100", to: "v170" },
{ id: "v100_to_v99", from: "v100", to: "v99" },
//riverside
{ id: "v83_to_v171", from: "v83", to: "v171" },
{ id: "v83_to_v114", from: "v83", to: "v114" },
{ id: "v83_to_v198", from: "v83", to: "v198" },
{ id: "v115_to_v198", from: "v115", to: "v198" },
{ id: "v82_to_v81", from: "v82", to: "v81" },
{ id: "v84_to_v82", from: "v84", to: "v82" },
//Riversde p
{ id: "v176_to_v172", from: "v176", to: "v172" },
{ id: "v84_to_v172", from: "v84", to: "v172" },
{ id: "v87_to_v172", from: "v87", to: "v172" },
//Pedistrian
{ id: "v95_to_v173", from: "v95", to: "v173" },
{ id: "v95_to_v199", from: "v95", to: "v199" },
{ id: "v95_to_v83", from: "v95", to: "v83" },
{ id: "v198_to_v199", from: "v198", to: "v199" },
//riverside cr2
{ id: "v204_to_v174", from: "v204", to: "v174" },
{ id: "v204_to_v203", from: "v204", to: "v203" },
{ id: "v202_to_v92", from: "v202", to: "v92" },
{ id: "v202_to_v203", from: "v202", to: "v203" },
{ id: "v203_to_v89", from: "v203", to: "v89" },
{ id: "v90_to_v92", from: "v90", to: "v92" },
{ id: "v93_to_v92", from: "v93", to: "v92" },
{ id: "v93_to_v94", from: "v93", to: "v94" },
{ id: "v200_to_v94", from: "v200", to: "v94" },
//riverside cr1
{ id: "v174_to_v171", from: "v174", to: "v171" },
{ id: "v174_to_v81", from: "v174", to: "v81" },
{ id: "v174_to_v200", from: "v174", to: "v200" },
//riverside food
{ id: "v82_to_v176" , from: "v82", to: "v176" },    
//cma hall
{ id: "v187_to_v194", from: "v187", to: "v194" },
{ id: "v187_to_v234", from: "v187", to: "v234" },
{ id: "v234_to_v186", from: "v234", to: "v186" },
{ id: "v188_to_v186", from: "v188", to: "v186" },
{ id: "v189_to_v188", from: "v189", to: "v188" },
{ id: "v51_to_v188", from: "v51", to: "v188" },
{ id: "v54_to_v186", from: "v54", to: "v186" },
//v178
{ id: "v179_to_v178", from: "v179", to: "v178" },
{ id: "v192_to_v178", from: "v192", to: "v178" },

  ],
};
