export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
  r: number;
  categoryName?: string;

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
    { id: "v1", objectName: null, cx: 798.5, cy: 1134.49 ,r:15,categoryName: "null"},//Front Entrance
    //PTC BUILDING
    { id: "v2", objectName: null, cx: 797.5, cy: 1041.5 ,r:15,categoryName: "null"},//
    { id: "v3", objectName: null, cx: 691.5, cy: 1041.5 ,r:15,categoryName: "null"},
    { id: "v4", objectName: null, cx: 690.5, cy: 1091.5 ,r:15,categoryName: "null"},
    { id: "v5", objectName: "null",  cx: 798.5, cy: 1097.49 ,r:15,categoryName: "null"},
    { id: "v6", objectName: null, cx: 905.5, cy: 1092.49 ,r:15,categoryName: "null"},
    { id: "v7", objectName: null, cx: 905.5, cy: 1041.49 ,r:15,categoryName: "null"},

    //mcdo
    { id: "v8", objectName: null, cx: 638.5, cy: 1028.5 ,r:15,categoryName: "null"},

    //cdsl/ITS
    { id: "v9", objectName: null, cx: 636.5, cy: 974.5 ,r:15,categoryName: "null"},//ITS
    //{ id: "v10", objectName: "null", cx: 89.5, cy: 210.5 ,r:15,categoryName: "null"},
    //{ id: "v11", objectName: "null", cx: 90.5, cy: 242.5 ,r:15,categoryName: "null"},
    { id: "v12", objectName: null, cx: 799.5, cy: 973.5 ,r:15,categoryName: "null"},//CSDL

    //op
    { id: "v13", objectName: null, cx: 824.5, cy: 928.5 ,r:15,categoryName: "null"},//
    //{ id: "v14", objectName: "null", cx: 128.5, cy: 273.5 ,r:15,categoryName: "null"},

    //fvr
    { id: "v19", objectName: null, cx: 783.5, cy: 866.5 ,r:15,categoryName: "null"},//lib
    { id: "v20", objectName: null, cx: 806.5, cy: 829.5 ,r:15,categoryName: "null"},//registrar offce
    { id: "v21", objectName: null, cx: 846.5, cy: 835.5 ,r:15,categoryName: "null"},
    { id: "v22", objectName: "null",  cx: 845.5, cy: 814.5,r:15,categoryName: "null"},//
    { id: "v23", objectName: null, cx:707.5, cy: 862.5 ,r:15,categoryName: "null"},//fvr
    { id: "v24", objectName: "null", cx: 735.5, cy:862.5 ,r:15,categoryName: "null"},
    { id: "v25", objectName:  null,  cx: 709.5, cy: 773.5 ,r:15,categoryName: "null"},//finance
    { id: "v26", objectName: "null", cx: 729.5, cy: 773.5 ,r:15,categoryName: "null"},
    { id: "v27", objectName: null, cx: 859.5, cy:772.5 ,r:15,categoryName: "null"},//teller
    { id: "v28", objectName: "null", cx: 837.5, cy: 771.5 ,r:15,categoryName: "null"},

    //basic ed
    { id: "v29", objectName: null,  cx: 366.5, cy: 831.5 ,r:15,categoryName: "null"},//cr 
    { id: "v30", objectName: null, cx: 416.5, cy: 829.5 ,r:15,categoryName: "null"},
    //{ id: "v31", objectName: "null", cx: 130.5, cy: 54.5 ,r:3.5,categoryName: "null"},
    { id: "v32", objectName: null, cx: 428.5, cy: 889.5,r:15,categoryName: "null"},
      //{ id: "v33", objectName: "null", cx: 130.5, cy: 104.5 ,r:3.5,categoryName: "null"},
      //{ id: "v34", objectName: "null", cx: 158.5, cy: 104.5 ,r:3.5,categoryName: "null"},
      { id: "v35", objectName: null, cx: 516.5, cy:890.5 ,r:15,categoryName: "null"},
      { id: "v36", objectName: null, cx: 516.5, cy: 831.5,r:3.5,categoryName: "null"},
      { id: "v37", objectName: null, cx: 538.5, cy: 861.5 ,r:3.5,categoryName: "null"},//
      //CCJE
      { id: "v38", objectName: null, cx: 539.5, cy: 762.5 ,r:15,categoryName: "null"},// 
      { id: "v39", objectName: null, cx: 502.5, cy: 762.5 ,r:15,categoryName: "null"},
      { id: "v40", objectName: null, cx: 443.5, cy: 763.5 ,r:15,categoryName: "null"},
      //{ id: "v41", objectName: "null", cx: 192.5, cy: 69.5 ,r:3.5,categoryName: "null"},
      //{ id: "v42", objectName: "null", cx: 192.5, cy: 46.5 ,r:3.5,categoryName: "null"},
      //gym
      { id: "v43", objectName: null, cx: 539.5, cy: 627.5 ,r:15,categoryName: "null"},//
      { id: "v44", objectName: "null", cx: 516.5, cy: 666.5,r:15,categoryName: "null"},
      { id: "v45", objectName: "null", cx: 335.5, cy: 668.5 ,r:15,categoryName: "null"},
      { id: "v46", objectName: "null", cx: 336.5, cy: 461.5,r:15,categoryName: "null"},
      { id: "v47", objectName: "null", cx: 518.5, cy: 460.5 ,r:15,categoryName: "null"},
      { id: "v48", objectName: null, cx: 315.5, cy: 668.5 ,r:15,categoryName: "null"},//cr
      //sp
      { id: "v49", objectName: null, cx: 799.5, cy: 705.5 ,r:15,categoryName: "null"},//LEFT
      { id: "v50", objectName: null, cx: 818.5, cy: 576.5 ,r:15,categoryName: "null"},//R
      //PForest
    { id: "v51", objectName: null, cx: 875.5, cy: 598.5,r:15,categoryName: "null"},//LEFT
    { id: "v52", objectName: null, cx:980.5, cy: 705.5,r:15,categoryName: "null"},//u
    { id: "v53", objectName: null, cx: 921.5, cy: 428.5,r:15,categoryName: "null"},//r
    //NH
    { id: "v54", objectName: null, cx: 1243.5, cy: 599.5,r:15,categoryName: "null"},//R
    { id: "v55", objectName: null, cx: 1241.5, cy: 734.5,r:15,categoryName: "null"},//LEFT
    { id: "v56", objectName: null, cx: 1263.5, cy: 774.5,r:15,categoryName: "null"},
    { id: "v57", objectName: null, cx: 1311.5, cy: 775.5,r:15,categoryName: "null"},
    { id: "v58", objectName: null, cx: 1311.5, cy: 734.5,r:15,categoryName: "null"},
    { id: "v59", objectName: null, cx: 1309.5, cy: 599.5,r:15,categoryName: "null"},
    { id: "v60", objectName: null, cx: 1309.5, cy: 509.5,r:15,categoryName: "null"},//cR
    { id: "v61", objectName: null, cx: 1262.5, cy:507.5,r:15,categoryName: "null"},
    { id: "v62", objectName: null, cx:1261.5, cy: 397.5,r:15,categoryName: "null"},
    { id: "v63", objectName: null, cx: 1310.5, cy: 396.5,r:15,categoryName: "null"},
    //old
    { id: "v64", objectName: null, cx: 1181.5, cy: 422.5,r:15,categoryName: "null"},//old
    //pond
    { id: "v65", objectName: null, cx: 1220.5, cy: 621.5,r:15,categoryName: "null"},
    //TechVoc
    { id: "v66", objectName: null, cx: 1244.5, cy: 848.5,r:15,categoryName: "null"},
    //CMA Building
    { id: "v67", objectName: null, cx: 889.5, cy: 827.5,r:15,categoryName: "null"},//
    { id: "v68", objectName: null, cx: 970.5, cy: 826.5,r:15,categoryName: "null"},//cr
    { id: "v69", objectName: null, cx: 969.5, cy: 775.5,r:15,categoryName: "null"},
    { id: "v70", objectName: null, cx: 968.5, cy: 868.5,r:15,categoryName: "null"},
    { id: "v71", objectName: null, cx: 1050.5, cy: 868.5,r:15,categoryName: "null"},
    { id: "v72", objectName: null, cx: 1186.5, cy: 870.5,r:15,categoryName: "null"},
    { id: "v73", objectName: null, cx: 1186.5, cy: 774.5,r:15,categoryName: "null"},
    { id: "v74", objectName: null, cx: 1046.5, cy: 751.5,r:15,categoryName: "null"},//
    //river
    { id: "v75", objectName: null, cx: 623.5, cy: 283.5,r:15,categoryName: "null"},
    { id: "v76", objectName: null, cx: 526.5, cy: 209.5,r:15,categoryName: "null"},
    { id: "v77", objectName: null, cx: 505.5, cy: 123.5,r:15,categoryName: "null"},
    { id: "v78", objectName: null,  cx: 623.5, cy: 283.5,r:3.5,categoryName: "null"},
    { id: "v79", objectName: null, cx: 505.5, cy: 87.5,r:15,categoryName: "null"},
    { id: "v80", objectName: null, cx: 527.5, cy: 283.5,r:15,categoryName: "null"},//cr
    //{ id: "v81", objectName: null, cx: 1083.5, cy: 214.5,r:15,categoryName: "null"},
    { id: "v82", objectName: null, cx: 436.5, cy: 123.5,r:15,categoryName: "null"},//food
    { id: "v83", objectName: null, cx: 355.5, cy: 78.5,r:15,categoryName: "null"},
    { id: "v84", objectName: null, cx: 332.5, cy: 120.5,r:3.5,categoryName: "null"},//cr2
    { id: "v85", objectName: null, cx: 355.5, cy: 78.5,r:3.5,categoryName: "null"},
    { id: "v86", objectName: null, cx: 335.5, cy: 303.5,r:15,categoryName: "null"},
    { id: "v87", objectName: null, cx: 388.5, cy: 307.5,r:15,categoryName: "null"},
    { id: "v88", objectName: null, cx: 460.5, cy: 307.5,r:15,categoryName: "null"},
    //{ id: "v181", objectName: null, cx: 992.5, cy: 192.5,r:15,categoryName: "null"},
    //{ id: "v182", objectName: null, cx: 992.5, cy: 214.5,r:15,categoryName: "null"},

      //Pedistrian 
      { id: "v89", objectName: null, cx: 610.5, cy: 89.5,r:15,categoryName: "null"},
      //motor park 5
      { id: "v90", objectName: null, cx: 816.5, cy: 428.5,r:15,categoryName: "null"},
      //p. ave
      { id: "v91", objectName: null, cx: 626.5, cy: 428.5,r:15,categoryName: "null"},
      //atrium
      { id: "v92", objectName: null, cx: 799.5, cy: 1011.5,r:15,categoryName: "null"},
      { id: "v93", objectName:"null", cx: 863.5, cy: 942.5,r:15,categoryName: "null"},
      { id: "v94", objectName: null, cx: 886.5, cy: 910.5,r:15,categoryName: "null"},
      //MBA eng
      { id: "v95", objectName: null, cx: 385.5, cy: 424.5,r:15,categoryName: "null"},//
      //{ id: "v96", objectName: "null", cx: 354.5, cy: 29.5,r:3.5,categoryName: "null"},
      //{ id: "v97", objectName: "null", cx: 391.5, cy: 29.5,r:3.5,categoryName: "null"},
      //{ id: "v98", objectName: "null", cx: 391.5, cy: 61.5,r:3.5,categoryName: "null"},
      { id: "v99", objectName: null, cx: 357.5, cy: 398.5,r:15,categoryName: "null"},
    
      { id: "v100", objectName: "null", cx: 387.5, cy: 378.5,r:15,categoryName: "null"},//cr
      { id: "v101", objectName: "College of Education And Liberal Arts (CELA) Office", cx: 411.5, cy: 378.5,r:15,categoryName: "null"},
      { id: "v102", objectName: "College of Engineering And Achitecture (CEA) Office", cx: 433.5, cy: 378.5,r:15,categoryName: "null"},
      { id: "v103", objectName: "General Services Department(GSD) Office", cx: 519.5, cy: 556.5,r:15,categoryName: "Student Service Building"},//11
      { id: "v104", objectName: null, cx: 519.5, cy: 556.5,r:15,categoryName: "null"},//11
    
      { id: "v105", objectName: null, cx: 575.5, cy: 380.5,r:15,categoryName: "null"},
      { id: "v106", objectName: null, cx: 627.5, cy: 380.5,r:15,categoryName: "null"},
      { id: "v107", objectName: "null", cx: 664.5, cy: 380.5,r:15,categoryName: "null"},
      { id: "v108", objectName: null, cx: 731.5, cy: 380.5,r:15,categoryName: "null"},
    
      { id: "v109", objectName: null, cx: 786.5, cy: 360.5,r:15,categoryName: "null"},
      // { id: "v110", objectName: null, cx: 384.5, cy: 285.5,r:3.5},
      { id: "v111", objectName: "null", cx: 379.5, cy: 360.5,r:15,categoryName: "null"},//chapel --stop
      { id: "v112", objectName: "null", cx: 907.5, cy: 360.5,r:15,categoryName: "null"},//clinic
    
      { id: "v113", objectName: null, cx: 959.5, cy: 367.5,r:15,categoryName: "null"},
      { id: "v114", objectName: "null", cx: 1037.5, cy: 367.5,r:15,categoryName: "null"},//cr
      { id: "v115", objectName: null, cx: 1122.5, cy: 369.5,r:15,categoryName: "null"},
      { id: "v116", objectName: "null", cx: 539.5, cy: 552.5,r:15,categoryName: "null"},
      { id: "v117", objectName: null, cx: 1201, cy: 398.5,r:15,categoryName: "null"},
      { id: "v118", objectName: null, cx: 456, cy: 805,r:15,categoryName: "null"},
      { id: "v119", objectName: null, cx: 472.5, cy: 718.5,r:15,categoryName: "null"},
    
      //Objects, yellow Circles
      { id: "v120", objectName: "Main Entrance Gate", cx: 798.5, cy: 1123.49,r:15,categoryName: "Entry/Exit Point"},//front entrance
      { id: "v121", objectName: "PTC Building", cx: 798.5, cy: 1056.5,r:15,categoryName: "Academic/Instructional Building"},//ptc
      { id: "v122", objectName: "Mc Donald's", cx: 638.5, cy: 1042.5,r:15,categoryName: "Amenities"},//mcdo
      { id: "v123", objectName: "ITS Department Building", cx: 663.5, cy: 974.5,r:15,categoryName: "Student Service Building"},//ITS Department Building        
      { id: "v124", objectName: "CSDL Department", cx: 773.5, cy: 974.5,r:15,categoryName: "Student Service Building"},//CSDL/ITS
      { id: "v125", objectName: "OP/Marketing Department", cx: 825.5, cy: 910.5,r:15,categoryName: "Administrative Building"},//OP/Marketing Department
      { id: "v126", objectName: "University Library Building", cx: 783.5, cy: 866.5,r:15,categoryName: "Student Service Building"},//University Library Building
      { id: "v127", objectName: "FVR Building", cx: 735.5, cy: 862.5 ,r:15,categoryName: "Student Service Building"},//FVR Building
      { id: "v128", objectName: "Finance Purchasing Department", cx: 729.5, cy: 773.5,r:15,categoryName: "Administrative Building"},//Finance Purchasing Department
      { id: "v129", objectName: "Teller", cx: 837.5, cy: 771.5,r:15,categoryName: "Student Service Building"},//Teller
      { id: "v130", objectName: "Atrium",cx:880.5, cy: 1013.5,r:15,categoryName: "Infrastructure"},//Atrium
      { id: "v131", objectName: "Registrar Office", cx: 806.5, cy: 813.5,r:15,categoryName: "Administrative Building"},//Registrar Office
      { id: "v132", objectName: "BASIC ED Building", cx: 516.5, cy: 861.5,r:15,categoryName: "Academic/Instructional Building"},//BASIC ED Building
      { id: "v133", objectName: "CCJE Department", cx: 519.5, cy: 762.5,r:15,categoryName: "Academic/Instructional Building"},//CCJE Department
      { id: "v134", objectName: "Gymnasium", cx: 518.5, cy: 626.5, r:15,categoryName: "Event Building"},//Gymnasium
      { id: "v135", objectName: "Motorcycle parking area in front of Basic ED Building", cx: 559.5, cy: 861.5,r:15,categoryName: "Amenities"},//Motorcycle parking area 01
      { id: "v136", objectName: "Motorcycle parking right side of Basic Ed.", cx: 456.5, cy: 805.5,r:15,categoryName: "Amenities"},//Motorcycle parking area 02
      { id: "v137", objectName: "Motorcycle parking right side of CCJE.", cx: 472.5 , cy: 718.5,r:15,categoryName: "Amenities"},//Motorcycle parking area 03
      { id: "v138", objectName: "Motorcycle parking right side of Gymnasium.", cx: 461.5, cy: 426.5,r:15,categoryName: "Amenities"},//Motorcycle parking area 04
      { id: "v139", objectName: "Motorcycle parking right side of SP", cx: 778.5, cy:426.5,r:15,categoryName: "Amenities"},//Motorcycle parking area 05
      { id: "v140", objectName: null, cx: 638.5, cy: 862.5,r:15,categoryName: "null"},//4 wheels parking area 01
      { id: "v141", objectName: "4 wheels parking area", cx: 679.5, cy: 862.5,r:15,categoryName: "Amenities"},//4 wheels parking area 02
      { id: "v142", objectName: "Student Plaza Entrance Near CMA Hall", cx: 798.5, cy: 674.5,r:15,categoryName: "Infrastructure"},//Student Plaza Entrance 01
      { id: "v143", objectName: "Student Plaza Entrance Near PHINMA Forest", cx: 819.5, cy: 599.5,r:15,categoryName: "Infrastructure"},//Student Plaza Entrance 02
      { id: "v144", objectName: "CMA Building Entrance near Registrar", cx: 920.5, cy: 828.5,r:15,categoryName: "Academic/Instructional Building"},//CMA Building Entrance  01
      { id: "v145", objectName: "CMA Building Entrance Near PHINMA Forest", cx: 1045.5, cy: 776.5,r:15,categoryName: "Academic/Instructional Building"},//CMA Building Entrance  02
      { id: "v146", objectName: "Technical Vocational Building", cx:1259.5, cy: 848.5,r:15,categoryName: "Academic/Instructional Building"},//Technical Vocational Building
      { id: "v147", objectName: "North Hall Entrance 1", cx: 1263.5, cy: 734.5,r:15,categoryName: "Academic/Instructional Building"},//North Hall Entrance 1
      { id: "v148", objectName: "North Hall Entrance 2", cx: 1264.5, cy:597.5,r:15,categoryName: "Academic/Instructional Building"},//North Hall Entrance 2
      { id: "v149", objectName: "Old Stage", cx: 1201.5, cy: 421.5,r:15,categoryName: "Event Building"},//Old Stage
      { id: "v150", objectName: "MBA Hall Entrance 4", cx:1217.5, cy: 398.5,r:15,categoryName: "Academic/Instructional Building"},//MBA Hall Entrance 4
      { id: "v151", objectName: "MBA Hall Entrance 3", cx: 921.5, cy: 398.5,r:15,categoryName: "Academic/Instructional Building"},//MBA Hall Entrance 3
      { id: "v152", objectName: "MBA Hall Entrance 2", cx: 836.5, cy: 397.5,r:15,categoryName: "Academic/Instructional Building"},//MBA Hall Entrance 2
      { id: "v153", objectName: "MBA Hall Entrance 1", cx: 626.5, cy: 397.5,r:15,categoryName: "Academic/Instructional Building"},//MBA Hall Entrance 1
      { id: "v154", objectName: "MBA Engineering Building", cx: 357.5, cy: 424.5,r:15,categoryName: "Academic/Instructional Building"},//Engineering Building
      { id: "v155", objectName: "PHINMA Forest", cx: 981.5, cy: 599.5,r:15,categoryName: "Infrastructure"},//PHINMA Forest
      { id: "v156", objectName: "PEDRO Hub Office", cx: 907.5, cy:959.5,r:15,categoryName: "Administrative Building"},//PEDRO Hub Office
      { id: "v157", objectName: "Office of Graduate and Professionals", cx:927.5, cy: 957.5,r:15,categoryName: "Administrative Building"},//Office of  Graduate and Professionals
      { id: "v158", objectName: "College of Law Office", cx:927.5, cy: 926.5,r:15,categoryName: "Administrative Building"},//College of Law Office
      { id: "v159", objectName: "Riverside Building", cx: 598.5, cy: 283.5,r:15,categoryName: "Academic/Instructional Building"},//Riverside Building
      { id: "v160", objectName: "Riverside Building's Parking Lot Area", cx: 436.5, cy: 78.5,r:15,categoryName: "Amenities"},//Riverside Building
      { id: "v161", objectName: "Pedestrian Entrance/Exit", cx:612.5, cy:66.5,r:15,categoryName: "Entry/Exit Point"},//Pedistrian Entrance/Exit
      { id: "v162", objectName: "Riverside Building's Comfort Room", cx: 509.5, cy: 283.5,r:15,categoryName: "Student Service Building"},//Riverside Building
      { id: "v163", objectName: "Riverside Building's Comfort Room near Parking Lot", cx: 312.5, cy: 121.5,r:15,categoryName: "Amenities"},//Riverside Building
      { id: "v164", objectName: "Riverside Building's Food Plaza", cx: 415.5, cy: 123.5,r:15,categoryName: "Student Service Building"},//Riverside Building
      { id: "v165", objectName: "Gymnasium's Comfort Room", cx: 296.5, cy: 668.5,r:15,categoryName: "Comfort Room"},//Riverside Building
    
      { id: "v166", objectName: "PTC's Comfort Room", cx: 928.5, cy:1091.49,r:15,categoryName: "Comfort Room"},
      { id: "v167", objectName: "CMA's Comfort Room", cx: 950.5, cy: 827.5,r:15,categoryName: "Comfort Room"},//cr
      //{ id: "v168", objectName: "CMA's Comfort Room", cx: 160.5, cy: 328.5,r:3.5},//cr
      { id: "v169", objectName: "Uniform Claiming Area", cx: 735.5, cy: 890.5,r:15,categoryName: "Student Service Building"},
      { id: "v170", objectName: "Module Claiming Area", cx: 410.5, cy: 889.5,r:15,categoryName: "Student Service Building"},
      { id: "v171", objectName: "North Hall's Comfort Room 1", cx: 1329.5, cy: 775.5,r:15,categoryName: "Comfort Room"},
      { id: "v172", objectName: "North Hall's Comfort Room 2", cx: 1331.5, cy: 508.5,r:15,categoryName: "Comfort Room"},//cR
      { id: "v173", objectName: "BASIC ED's Comfort Room",  cx: 345.5, cy: 831.5 ,r:15,categoryName: "Comfort Room"},//cr 
      { id: "v174", objectName: "CCJE's Comfort Room", cx: 424.5, cy: 763.5 ,r:15,categoryName: "Comfort Room"},
      { id: "v175", objectName: "University Chapel", cx: 879.5, cy: 360.5,r:15,categoryName: "Amenities"},//chapel
      { id: "v176", objectName: "University Clinic", cx: 907.5, cy: 360.5,r:15,categoryName: "Amenities"},//clinic
      { id: "v177", objectName: "MBA Hall's Comfort Room 1", cx: 387.5, cy: 378.5,r:15,categoryName: "Comfort Room"},//cr
      { id: "v178", objectName: "MBA Hall's Comfort Room 2", cx: 1037.5, cy: 367.5,r:15,categoryName: "Comfort Room"},//cr
      { id: "v179", objectName: "Phinma Forest Pond", cx: 1222.5, cy: 640.5,r:15,categoryName: "Infrastructure"},
      { id: "v180", objectName: "Student Plaza's Food Place", cx: 798.5, cy: 598.5,r:15,categoryName: "Student Service Building"},//cr
      { id: "v183", objectName: "College of Allied Health And Sciences (CAHS) Office", cx:477.5, cy: 209.5,r:15,categoryName: "Administrative Building"},
      { id: "v184", objectName: "College of Arts And Sciences (CAS) Office", cx: 476.5, cy: 230.5,r:15,categoryName: "Administrative Building"},
    
  //purple circles (not to be showned or "null")
  { id: "v185", objectName: "null", cx: 638.5, cy: 1011.5,r:15},
  { id: "v186", objectName: "null", cx: 639.5, cy: 928.5,r:4.5},
  { id: "v187", objectName: "null", cx: 707.5, cy: 928.5,r:4.5},
  { id: "v188", objectName: "null", cx: 799.5, cy: 928.5,r:4.5},
  { id: "v189", objectName: "null", cx: 863.5, cy: 942.5,r:4.5},
  { id: "v190", objectName: "null",cx: 863.5, cy: 927.5,r:4.5},
  { id: "v191", objectName: "null", cx: 863.5, cy: 973.5,r:4.5},
  { id: "v192", objectName: "null", cx: 889.5, cy: 868.5,r:4.5},
  { id: "v193", objectName: "null", cx: 861.5, cy: 834.5,r:4.5},
  { id: "v194", objectName: "null", cx: 862.5, cy: 814.5,r:4.5},
  { id: "v195", objectName: "null", cx: 858.5, cy: 732.5,r:4.5},
  { id: "v196", objectName: "null", cx: 708.5, cy: 735.5,r:4.5},
  { id: "v197", objectName: "null", cx: 981.5, cy: 733.5,r:4.5},
  { id: "v198", objectName: "null", cx: 1046.5, cy: 733.5,r:4.5},
  { id: "v199", objectName: "null", cx: 921.5, cy: 599.5,r:4.5},
  { id: "v200", objectName: "null", cx: 798.5, cy: 734.5,r:4.5},
  { id: "v201", objectName: "null", cx: 1222.5, cy:640.5,r:4.5 },
  { id: "v202", objectName: "null", cx: 1219.5, cy: 599.5,r:4.5 },
  //{ id: "v203", objectName: "null", cx: 318.5, cy: 939.5,r:4.5 },
  { id: "v204", objectName: "null", cx: 537.5, cy: 806.5,r:4.5},
  { id: "v205", objectName: "null", cx: 539.5, cy: 736.5,r:4.5},
  { id: "v206", objectName: "null", cx: 539.5, cy: 718.5,r:4.5},
  { id: "v207", objectName: "null", cx: 538.5, cy: 428.5,r:4.5},
  { id: "v208", objectName: "null", cx: 663.5, cy: 428.5,r:4.5},
  { id: "v209", objectName: "null", cx: 662.5, cy: 285.5,r:4.5},
  { id: "v210", objectName: "null", cx: 635.5, cy: 90.5,r:4.5},
  //{ id: "v211", objectName: "null", cx: 415.5, cy: 53.5,r:4.5},
  { id: "v212", objectName: "null", cx: 881.5, cy: 1041.49,r:4.5},
  { id: "v213", objectName: "null", cx: 332.5, cy:237.5,r:4.5},
  { id: "v214", objectName: "null", cx: 333.5, cy: 179.5,r:4.5},
  { id: "v215", objectName: "null", cx: 352.5, cy: 120.5,r:4.5},
  { id: "v216", objectName: "null", cx: 528.5, cy: 307.5,r:4.5},
  { id: "v217", objectName: "null", cx: 550.5, cy: 283.5,r:4.5},
  { id: "v218", objectName: "null", cx: 526.5, cy:209.5,r:4.5},
  //{ id: "v219", objectName: "null", cx: 992.5, cy: 307.5,r:4.5},
  { id: "v220", objectName: null, cx: 505.5, cy:208.5,r:4.5},
  { id: "v221", objectName: null, cx: 505.5, cy: 232.5,r:4.5},

  //MBA eng
  { id: "v222", objectName: null, cx: 385.5, cy: 398.5,r:4.5},
  { id: "v223", objectName: null, cx: 411.5, cy: 398.5,r:4.5},
  { id: "v224", objectName: null, cx: 443.5, cy: 398.5,r:4.5},
  //{ id: "v225", objectName: "null", cx: 367.5, cy: 119.5,r:4.5},
  //{ id: "v226", objectName: "null", cx: 367.5, cy:140.5,r:4.5},

  { id: "v227", objectName: "null", cx: 575.5, cy: 396.5,r:4.5},
  { id: "v228", objectName: "null", cx: 665.5, cy: 397.5,r:4.5},

  { id: "v229", objectName: "null", cx: 732.5, cy: 400.5,r:4.5},

  { id: "v230", objectName: "null", cx: 788.5, cy: 396.5,r:3.5},
  { id: "v231", objectName: null, cx: 880.5, cy: 397.5,r:4.5},

  { id: "v232", objectName: "null", cx: 960.5, cy: 396.5,r:3.5},
  //{ id: "v233", objectName: "null", cx: 765.5, cy: 351.5,r:3.5},
  { id: "v234", objectName: null, cx: 1035.5, cy: 396.5,r:3.5},
  { id: "v235", objectName: "null", cx: 1122.5, cy: 396.5,r:3.5},
  { id: "v236", objectName: "null", cx: 1175.5, cy:396.5,r:3.5},

  //additionals
  { id: "v237", objectName: null, cx: 906.5, cy: 940.5,r:4.5},//PEDRO Hub Office
  { id: "v238", objectName: null, cx: 926.5, cy: 942.5,r:4.5},//Office of  Graduate and Professionals
  { id: "v239", objectName: null, cx: 926.5, cy: 911.5,r:4.5},//College of Law Office
  { id: "v240", objectName: null, cx: 578.5, cy: 627.5,r:4.5},//ave
  { id: "v241", objectName: "Phinma Avenue", cx: 593.5, cy: 627.5, r:4.5,categoryName: "Infrastructure"},//
  { id: "v242", objectName: "null", cx: 1182.5, cy: 599.5,r:4.5},//
  { id: "v243", objectName: "null", cx: 799.5, cy: 949.5,r:4.5},//
  { id: "v250", objectName: "Senior High School (SHS) Office", cx: 416.5, cy: 829.5 ,r:15, categoryName: "null"},
  { id: "v251", objectName: "College of Information Technology Education (CITE) Office", cx: 905.5, cy: 1041.49 ,r:15, categoryName: "null"},
  { id: "v252", objectName: "University Canteen", cx: 415.5, cy: 123.5,r:15,categoryName: "Student Service Building"},//Riverside Building
  { id: "v255", objectName: "College of Management and Accounting (CMA) Office", cx: 969.5, cy: 775.5 ,r:15,categoryName: "null"},
  //{ id: "v244", objectName: "null", cx: 1039.5, cy: 307.5,r:4.5},//
],

  edges: [
    // positions to objects

    //main entrance
    { id: "v1_to_v120", from: "v1", to: "v120" },
    { id: "v1_to_v2", from: "v1", to: "v2" },
    //ptc
    { id: "v2_to_v121", from: "v2", to: "v121" },
    { id: "v3_to_v2", from: "v3", to: "v2" },
    { id: "v2_to_v5", from: "v2", to: "v5"},
    { id: "v3_to_v4", from: "v3", to: "v4"},
    { id: "v4_to_v5", from: "v4", to: "v5"},
    { id: "v6_to_v251", from: "v6", to: "v251"},
    { id: "v7_to_v251", from: "v7", to: "v251"},
    // { id: "v6_to_v7", from: "v6", to: "v7"},
    { id: "v166_to_v5", from: "v166", to: "v5"},
    { id: "v166_to_v6", from: "v166", to: "v6"},
    { id: "v2_to_v7", from: "v2", to: "v7" },
    { id: "v2_to_v92", from: "v2", to: "v92" },
    //mcdo
    { id: "v8_to_v122", from: "v8", to: "v122" },
    { id: "v8_to_v185", from: "v8", to: "v185" },
    { id: "v185_to_v92", from: "v185", to: "v92" },
    { id: "v185_to_v9", from: "v185", to: "v9" },
    //ITS dept
    { id: "v9_to_v123", from: "v9", to: "v123" },
    { id: "v9_to_v186", from: "v9", to: "v186" },
    //{ id: "v123_to_v10", from: "v123", to: "v10" },
    { id: "v187_to_v186", from: "v187", to: "v186" },
    { id: "v203_to_v186", from: "v203", to: "v186" },
    //CSDL
    { id: "v12_to_v124", from: "v12", to: "v124" },
    //{ id: "v11_to_v124", from: "v11", to: "v124" },
    { id: "v12_to_v92", from: "v12", to: "v92" },
    { id: "v12_to_v191", from: "v12", to: "v191" },
    { id: "v12_to_v243", from: "v12", to: "v243" },
    { id: "v188_to_v243", from: "v188", to: "v243" },
    { id: "v187_to_v188", from: "v187", to: "v188" },
    //op
    { id: "v13_to_v125", from: "v13", to: "v125" },
    //{ id: "v14_to_v125", from: "v14", to: "v125" },
    { id: "v13_to_v188", from: "v13", to: "v188" },
    { id: "v13_to_v189", from: "v13", to: "v189" },
    { id: "v190_to_v189", from: "v190", to: "v189" },
    { id: "v190_to_v191", from: "v190", to: "v191" },
    //Lib
    { id: "v19_to_v126", from: "v19", to: "v126" },
    { id: "v126_to_v192", from: "v126", to: "v192" },

    //fvr
    { id: "v23_to_v127", from: "v23", to: "v127" },
    { id: "v24_to_v127", from: "v24", to: "v127" },
    { id: "v24_to_v169", from: "v24", to: "v169" },
    { id: "v23_to_v187", from: "v23", to: "v187" },
    { id: "v23_to_v25", from: "v23", to: "v25" },

    //finance
    { id: "v25_to_v128", from: "v25", to: "v128" },
    { id: "v26_to_v128", from: "v26", to: "v128" },
    { id: "v25_to_v196", from: "v25", to: "v196" },
    { id: "v200_to_v196", from: "v200", to: "v196" },
    { id: "v205_to_v196", from: "v205", to: "v196" },

    //teller
    { id: "v27_to_v28", from: "v27", to: "v28"},
    { id: "v28_to_v129", from: "v27", to: "v129"},
    { id: "v27_to_v195", from: "v27", to: "v195"},
    { id: "v27_to_v194", from: "v27", to: "v194"},
    { id: "v193_to_v194", from: "v193", to: "v194"},
    { id: "v193_to_v189", from: "v193", to: "v189"},
    { id: "v200_to_v195", from: "v200", to: "v195"},
    { id: "v197_to_v195", from: "v197", to: "v195"},
    //Atrium
    { id: "v212_to_v7", from: "v212", to: "v7" },
    { id: "v212_to_v130", from: "v212", to: "v130" },

    { id: "v92_to_v130", from: "v92", to: "v130" },
    { id: "v130_to_v94", from: "v130", to: "v94" },
    //{ id: "v94_to_v93", from: "v94", to: "v93" },
    { id: "v192_to_v94", from: "v192", to: "v94" },
    { id: "v192_to_v67", from: "v192", to: "v67" },

    //registrar
    { id: "v193_to_v21", from: "v193", to: "v21" },
    { id: "v194_to_v22", from: "v194", to: "v22" },
    { id: "v131_to_v22", from: "v131", to: "v22" },
    //{ id: "v131_to_v22", from: "v131", to: "v22" },
    { id: "v20_to_v131", from: "v20", to: "v131" },

    //basic
    { id: "v37_to_v132", from: "v37", to: "v132" },
    { id: "v37_to_v203", from: "v37", to: "v203" },
    { id: "v37_to_v204", from: "v37", to: "v204" },
    { id: "v35_to_v132", from: "v35", to: "v132" },
    { id: "v36_to_v132", from: "v36", to: "v132" },
    { id: "v36_to_v30", from: "v36", to: "v30" },
    { id: "v35_to_v32", from: "v35", to: "v32" },
    //{ id: "v32_to_v33", from: "v32", to: "v33" },
    { id: "v170_to_v32", from: "v170", to: "v32" },
    //{ id: "v32_to_v31", from: "v32", to: "v31" },
    //{ id: "v170_to_v31", from: "v170", to: "v31" },
    { id: "v250_to_v30", from: "v250", to: "v30" },
    { id: "v29_to_v250", from: "v250", to: "v29" },
    { id: "v173_to_v250", from: "v173", to: "v250" },

    //ccje
    { id: "v38_to_v204", from: "v38", to: "v204" },
    { id: "v38_to_v205", from: "v38", to: "v205" },
    { id: "v38_to_v133", from: "v38", to: "v133" },
    { id: "v39_to_v133", from: "v39", to: "v133" },
    { id: "v39_to_v40", from: "v39", to: "v40" },
    { id: "v39_to_v174", from: "v39", to: "v174" },
    { id: "v41_to_v40", from: "v41", to: "v40" },
    { id: "v41_to_v174", from: "v41", to: "v174" },
    { id: "v41_to_v42", from: "v41", to: "v42" },
    { id: "v206_to_v205", from: "v206", to: "v205" },

    //gsd
    { id: "v104_to_v116", from: "v104", to: "v116" },
    { id: "v103_to_v116", from: "v103", to: "v116" },
    { id: "v43_to_v116", from: "v43", to: "v116" },
    { id: "v207_to_v116", from: "v207", to: "v116" },

    //gym
    { id: "v43_to_v206", from: "v43", to: "v206" },
    { id: "v43_to_v134", from: "v43", to: "v134" },
    { id: "v43_to_v207", from: "v43", to: "v207" },
    { id: "v44_to_v134", from: "v44", to: "v134" },
    { id: "v47_to_v134", from: "v47", to: "v134" },
    { id: "v44_to_v45", from: "v44", to: "v45" },
    { id: "v47_to_v46", from: "v47", to: "v46" },
    { id: "v45_to_v46", from: "v45", to: "v46" },
    { id: "v45_to_v165", from: "v45", to: "v165" },
    { id: "v45_to_v48", from: "v45", to: "v48" },

    //motor p1
    { id: "v37_to_v135", from: "v37", to: "v135" },

    //motorp2
    { id: "v204_to_v118", from: "v204", to: "v118" },
    { id: "v136_to_v118", from: "v136", to: "v118" },

    //motor p3
    { id: "v206_to_v119", from: "v206", to: "v119" },
    { id: "v137_to_v119", from: "v137", to: "v119" },

    //motor p4
    { id: "v207_to_v138", from: "v207", to: "v138" },
    //{ id: "v90_to_v138", from: "v90", to: "v138" },

    //motor p5
    { id: "v90_to_v139", from: "v90", to: "v139" },
    { id: "v90_to_v53", from: "v90", to: "v53" },
    { id: "v139_to_v208", from: "v139", to: "v208" },
    { id: "v228_to_v208", from: "v228", to: "v208" },
    //4 wheel p1
    { id: "v23_to_v140", from: "v23", to: "v140" },  
    { id: "v141_to_v140", from: "v141", to: "v140" }, 

    //sp 1
    { id: "v49_to_v200", from: "v49", to: "v200" },
    { id: "v49_to_v142", from: "v49", to: "v142"},
    { id: "v180_to_v142", from: "v180", to: "v142"},

    //sp2
    { id: "v143_to_v180", from: "v143", to: "v180" },
    { id: "v51_to_v143", from: "v51", to: "v143" },
    { id: "v50_to_v143", from: "v50", to: "v143"},
    { id: "v50_to_v90", from: "v50", to: "v90"},

    //cma 1
    { id: "v144_to_v67", from: "v144", to: "v67" },

    //Cma 2
    { id: "v198_to_v197", from: "v198", to: "v197" },
    { id: "v198_to_v74", from: "v198", to: "v74" },
    { id: "v145_to_v74", from: "v145", to: "v74" },
    { id: "v145_to_v69", from: "v145", to: "v69" },
    { id: "v145_to_255", from: "v145", to: "v255" },
    { id: "v167_to_v68", from: "v167", to: "v68" },
    { id: "v68_to_v69", from: "v68", to: "v69" },
    { id: "v68_to_v255", from: "v68", to: "v255" },
    //{ id: "v167_to_v70", from: "v167", to: "v69" },
    { id: "v68_to_v70", from: "v68", to: "v70" },
    { id: "v70_to_v71", from: "v70", to: "v71" },
    { id: "v71_to_v72", from: "v71", to: "v72" },
    { id: "v72_to_v73", from: "v72", to: "v73" },
    { id: "v73_to_v145", from: "v73", to: "v145" }, 

    //techvoc
    { id: "v66_to_v146", from: "v66", to: "v146" },
    { id: "v66_to_v55", from: "v66", to: "v55" },

    //nh 1
    { id: "v55_to_v198", from: "v55", to: "v198" },
    { id: "v55_to_v147", from: "v55", to: "v147" },
    { id: "v56_to_v147", from: "v56", to: "v147" },
    { id: "v56_to_v57", from: "v56", to: "v57" },
    //{ id: "v56_to_v171", from: "v56", to: "v171" },
    { id: "v57_to_v171", from: "v57", to: "v171" },
    { id: "v58_to_v147", from: "v58", to: "v147" },
    { id: "v58_to_v57", from: "v58", to: "v57" },
    { id: "v58_to_v59", from: "v58", to: "v59" },
    //nh 2
    { id: "v202_to_v54", from: "v202", to: "v54" },
    { id: "v148_to_v54", from: "v148", to: "v54" },
    { id: "v148_to_v59", from: "v148", to: "v59" },
    { id: "v148_to_v147", from: "v148", to: "v147" },
    { id: "v148_to_v61", from: "v148", to: "v61" },
    { id: "v60_to_v61", from: "v60", to: "v61" },
    { id: "v172_to_v60", from: "v172", to: "v60" },
    { id: "v60_to_v59", from: "v60", to: "v59" },
    //{ id: "v172_to_v59", from: "v172", to: "v59" },
    { id: "v60_to_v63", from: "v60", to: "v63" },
    //{ id: "v172_to_v63", from: "v172", to: "v63" },
    { id: "v62_to_v63", from: "v62", to: "v63" },
    { id: "v62_to_v61", from: "v62", to: "v61" },

    //old stage
    { id: "v64_to_v149", from: "v64", to: "v149" },
    { id: "v64_to_v242", from: "v64", to: "v242" },
    { id: "v53_to_v149", from: "v53", to: "v149" },
    { id: "v91_to_v149", from: "v91", to: "v149" },
    { id: "v155_to_v242", from: "v155", to: "v242" },
    { id: "v54_to_v242", from: "v54", to: "v242" },

    //Pond
    { id: "v202_to_v201", from: "v202", to: "v201" },
    { id: "v202_to_v65", from: "v202", to: "v65" },
    { id: "v179_to_v65", from: "v179", to: "v65" },
    { id: "v155_to_v202", from: "v155", to: "v202" },

    //mba 4

    { id: "v62_to_v117", from: "v62", to: "v117" },
    { id: "v62_to_v150", from: "v62", to: "v150" },

    { id: "v236_to_v117", from: "v296", to: "v117" },
    { id: "v236_to_v150", from: "v296", to: "v150" },

    //mba 3

    // { id: "v236_to_v116", from: "v296", to: "v116" },
    { id: "v236_to_v235", from: "v236", to: "v235" },
    { id: "v115_to_v235", from: "v115", to: "v235" },
    { id: "v234_to_v235", from: "v234", to: "v235" },

    { id: "v234_to_v114", from: "v234", to: "v114" },
    { id: "v234_to_v178", from: "v234", to: "v178" },

    { id: "v234_to_v232", from: "v234", to: "v232" },
    { id: "v232_to_v113", from: "v232", to: "v113" },

    { id: "v232_to_v151", from: "v232", to: "v151" },
    { id: "v53_to_v151", from: "v53", to: "v151" },
    { id: "v176_to_v151", from: "v176", to: "v151" },
    { id: "v231_to_v151", from: "v231", to: "v151" },

    //mba 2

    { id: "v231_to_v175", from: "v231", to: "v175" },
    { id: "v230_to_v111", from: "v230", to: "v111" },
    { id: "v230_to_v152", from: "v230", to: "v152" },
    { id: "v90_to_v152", from: "v90", to: "v152" },
    { id: "v229_to_v152", from: "v229", to: "v152" },
    { id: "v230_to_v109", from: "v230", to: "v109" },
    { id: "v229_to_v228", from: "v229", to: "v228" },
    { id: "v108_to_v229", from: "v108", to: "v229" },

    //mba 1

    { id: "v227_to_v228", from: "v227", to: "v228" },
    { id: "v227_to_v107", from: "v227", to: "v107" },
    { id: "v209_to_v107", from: "v209", to: "v107" },
    //{ id: "v227_to_v139", from: "v227", to: "v139" },
    { id: "v227_to_v153", from: "v227", to: "v153" },
    { id: "v106_to_v153", from: "v106", to: "v153" },
    { id: "v106_to_v75", from: "v106", to: "v75" },
    { id: "v153_to_v91", from: "v153", to: "v91" },
    { id: "v208_to_v91", from: "v208", to: "v91" },
    { id: "v207_to_v91", from: "v207", to: "v91" },
    { id: "v207_to_v154", from: "v207", to: "v154" },
    //{ id: "v227_to_v226", from: "v227", to: "v226" },
    { id: "v227_to_v105", from: "v227", to: "v105" },


    //{ id: "v225_to_v226", from: "v225", to: "v226" },

    { id: "v227_to_v224", from: "v227", to: "v224" },
    { id: "v223_to_v224", from: "v223", to: "v224" },
    { id: "v224_to_v102", from: "v224", to: "v102" },
    { id: "v223_to_v101", from: "v223", to: "v101" },
    { id: "v223_to_v222", from: "v223", to: "v222" },
    { id: "v222_to_v101", from: "v222", to: "v101" },
    { id: "v222_to_v99", from: "v222", to: "v99" },
    { id: "v100_to_v222", from: "v100", to: "v222" },
    { id: "v177_to_v222", from: "v177", to: "v222" },
    // { id: "v99_to_v221", from: "v99", to: "v221" },

    // mba eng
    { id: "v154_to_v99", from: "v154", to: "v99" },
    { id: "v154_to_v95", from: "v154", to: "v95" },
    { id: "v98_to_v99", from: "v98", to: "v99" },
    //{ id: "v154_to_v96", from: "v154", to: "v96" },
    //{ id: "v98_to_v97", from: "v98", to: "v97" },
    //{ id: "v97_to_v96", from: "v97", to: "v96" },

    //P Forest
    { id: "v52_to_v197", from: "v52", to: "v197" },
    { id: "v52_to_v155", from: "v52", to: "v155" },
    { id: "v199_to_v155", from: "v199", to: "v155" },
    { id: "v199_to_v53", from: "v199", to: "v53" },
    { id: "v199_to_v51", from: "v199", to: "v51" },

    //pedro
    { id: "v237_to_v156", from: "v237", to: "v156" },
    { id: "v189_to_v237", from: "v189", to: "v237" },
    { id: "v189_to_v243", from: "v189", to: "v243" },

    //grad and prof
    { id: "v239_to_v238", from: "v239", to: "v238" },
    { id: "v239_to_v157", from: "v239", to: "v157" },
    //{ id: "v239_to_v158", from: "v239", to: "v158" },

    //law
    { id: "v239_to_v94", from: "v239", to: "v94" },
    { id: "v239_to_v158", from: "v239", to: "v158" },

    //riverside
    { id: "v209_to_v75", from: "v209", to: "v75" },
    // { id: "v106_to_v75", from: "v106", to: "v75" },
    { id: "v159_to_v75", from: "v159", to: "v75" },
    { id: "v159_to_v217", from: "v159", to: "v217" },

    { id: "v162_to_v80", from: "v162", to: "v80" },
    { id: "v80_to_v217", from: "v80", to: "v217" },

    { id: "v218_to_v80", from: "v218", to: "v80" },
    { id: "v218_to_v76", from: "v218", to: "v76" },
    { id: "v77_to_v76", from: "v77", to: "v76" },
    { id: "v77_to_v79", from: "v77", to: "v79" },
    { id: "v81_to_v79", from: "v81", to: "v79" },
    { id: "v160_to_v79", from: "v160", to: "v79" },
    { id: "v77_to_v82", from: "v77", to: "v82" },
    { id: "v81_to_v82", from: "v81", to: "v82" },
    //{ id: "v160_to_v82", from: "v160", to: "v82" },
    { id: "v81_to_v83", from: "v81", to: "v83" },
    { id: "v160_to_v83", from: "v160", to: "v83" },
    { id: "v77_to_v164", from: "v77", to: "v164" },
    { id: "v77_to_v252", from: "v77", to: "v252" },

    //{ id: "v219_to_v244", from: "v219", to: "v244" },
    //{ id: "v76_to_v221", from: "v76", to: "v221" },
    //{ id: "v77_to_v244", from: "v77", to: "v244" },
    { id: "v76_to_v220", from: "v76", to: "v220" },
    { id: "v159_to_v78", from: "v159", to: "v78" },
    { id: "v161_to_v78", from: "v161", to: "v78" },
    //{ id: "v221_to_v219", from: "v221", to: "v219" },
    { id: "v221_to_v182", from: "v221", to: "v182" },
    { id: "v221_to_v184", from: "v221", to: "v184" },
    { id: "v221_to_v220", from: "v221", to: "v220" },
    { id: "v181_to_v220", from: "v181", to: "v220" },
    { id: "v183_to_v220", from: "v183", to: "v220" },

    { id: "v83_to_v215", from: "v83", to: "v215" },
    { id: "v163_to_v215", from: "v163", to: "v215" },
    { id: "v84_to_v215", from: "v84", to: "v215" },
    { id: "v85_to_v215", from: "v85", to: "v215" },
    { id: "v85_to_v160", from: "v85", to: "v160" },
    { id: "v214_to_v215", from: "v214", to: "v215" },
    { id: "v214_to_v213", from: "v214", to: "v213" },
    { id: "v211_to_v213", from: "v211", to: "v213" },
    { id: "v86_to_v87", from: "v86", to: "v87" },
    { id: "v86_to_v214", from: "v86", to: "v214" },
    { id: "v87_to_v88", from: "v87", to: "v88" },
    { id: "v216_to_v88", from: "v216", to: "v88" },
    { id: "v216_to_v80", from: "v216", to: "v80" },

    //Pedistrian
    { id: "v75_to_v89", from: "v75", to: "v89" },
    { id: "v161_to_v89", from: "v161", to: "v89" },
    { id: "v161_to_v209", from: "v161", to: "v209" },
    { id: "v161_to_v210", from: "v161", to: "v210" },

    //Ave
    { id: "v43_to_v240", from: "v43", to: "v240" },
    { id: "v240_to_v241", from: "v240", to: "v241" },

  ],
};
