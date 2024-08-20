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
    { id: "v1", objectName: null, cx: 18.5, cy: 261.5},//Front Entrance
    //PTC BUILDING
    { id: "v2", objectName: null, cx: 57.5, cy: 261.5},//
    { id: "v3", objectName: null, cx: 30.5, cy: 261.5},
    { id: "v4", objectName: null, cx: 30.5, cy: 238.5},
    { id: "v5", objectName: null, cx: 31.5, cy: 212.5},
    { id: "v6", objectName: null, cx: 57.5, cy: 212.5},
    { id: "v7", objectName: null, cx: 57.5, cy: 290.5},
    { id: "v8", objectName: null, cx: 57.5, cy: 318.5},
    { id: "v9", objectName: null, cx: 29.5, cy: 290.5},
    { id: "v10", objectName: null, cx: 31.5, cy: 318.5},
    { id: "v11", objectName: null, cx: 57.5, cy: 239.5},
    //mcdo
    { id: "v12", objectName: null, cx: 63.5, cy: 188.5},
    //cdsl/ITS
    { id: "v13", objectName: null, cx: 89.5, cy: 188.5},//ITS
    { id: "v14", objectName: null, cx: 89.5, cy: 210.5},
    { id: "v15", objectName: null, cx: 90.5, cy: 242.5},
    { id: "v16", objectName: null, cx: 90.5, cy: 261.5},//CSDL

    





    //Objects, yellow Circles
    { id: "v111", objectName: "Main Entrance Gate", cx: 71.5, cy: 1407.5},//front entrance
    { id: "v112", objectName: "PTC Building", cx: 275.5, cy: 1407.5},//ptc
    { id: "v113", objectName: "Mc Donald's", cx: 291.5, cy: 1057.5},//mcdo
    { id: "v114", objectName: "ITS Department Building", cx: 496.5, cy: 1046.5},//ITS Department Building        
    { id: "v115", objectName: "CSDL/ITS Building", cx: 496.5, cy: 1343.5},//CSDL/ITS
    { id: "v116", objectName: "OP/Marketing Department", cx: 651.5, cy: 1538.5},//OP/Marketing Department
    { id: "v117", objectName: "University Library Building", cx: 807.5, cy: 1386.5},//University Library Building
    { id: "v118", objectName: "FVR Building", cx: 761.5, cy: 1265.5},//FVR Building
    { id: "v119", objectName: "Finance Purchasing Department", cx: 1011.5, cy: 1242.5},//Finance Purchasing Department
    { id: "v120", objectName: "Teller", cx: 1015.5, cy: 1516.5},//Teller
    { id: "v121", objectName: "Atrium", cx: 792.5, cy: 1665.5},//Atrium
    { id: "v122", objectName: "Registrar Office", cx: 869.5, cy: 1611.5},//Registrar Office
    { id: "v123", objectName: "BASIC ED Building", cx: 869.5, cy: 752.5},//BASIC ED Building
    { id: "v124", objectName: "CCJE Department", cx: 1066.5, cy: 773.5},//CCJE Department
    { id: "v125", objectName: "Gymnasium", cx: 1318.5, cy: 773.5},//Gymnasium
    { id: "v126", objectName: "Motorcycle parking area 01", cx: 893.5, cy: 829.5},//Motorcycle parking area 01
    { id: "v127", objectName: "Motorcycle parking area 02", cx: 974.5, cy: 588.5},//Motorcycle parking area 02
    { id: "v128", objectName: "Motorcycle parking area 03", cx: 1163.5, cy: 592.5},//Motorcycle parking area 03
    { id: "v129", objectName: "Motorcycle parking area 04", cx: 1768.5, cy: 555.5},//Motorcycle parking area 04
    { id: "v130", objectName: "Motorcycle parking area 05", cx: 1759.5, cy: 1293.5},//Motorcycle parking area 05
    { id: "v131", objectName: "4 wheels parking area 01", cx: 829.5, cy: 961.5},//4 wheels parking area 01
    { id: "v132", objectName: "4 wheels parking area 02", cx: 829.5, cy: 1144.5},//4 wheels parking area 02
    { id: "v133", objectName: "Student Plaza Entrance 01", cx: 1289.5, cy: 1384.5},//Student Plaza Entrance 01
    { id: "v134", objectName: "Student Plaza Entrance 02", cx: 1405.5, cy: 1387.5},//Student Plaza Entrance 02
    { id: "v135", objectName: "CMA Building Entrance 1", cx: 870.5, cy: 1768.5},//CMA Building Entrance  01
    { id: "v136", objectName: "CMA Building Entrance 2", cx: 986.5, cy: 2023.5},//CMA Building Entrance  02
    { id: "v137", objectName: "Technical Vocational Building", cx: 833.5, cy: 2461.5},//Technical Vocational Building
    { id: "v138", objectName: "North Hall Entrance 1", cx: 1096.5, cy: 2458.5},//North Hall Entrance 1
    { id: "v139", objectName: "North Hall Entrance 2", cx: 1406.5, cy: 2458.5},//North Hall Entrance 2
    { id: "v140", objectName: "Old Stage", cx: 1761.5, cy: 2275.5},//Old Stage
    { id: "v141", objectName: "MBA Hall Entrance 4", cx: 1800.5, cy: 2425.5},//MBA Hall Entrance 4
    { id: "v142", objectName: "MBA Hall Entrance 3", cx: 1828.5, cy: 1719.5},//MBA Hall Entrance 3
    { id: "v143", objectName: "MBA Hall Entrance 2", cx: 1828.5, cy: 1387.5},//MBA Hall Entrance 2
    { id: "v144", objectName: "MBA Hall Entrance 1", cx: 1814.5, cy: 984.5},//MBA Hall Entrance 1
    { id: "v145", objectName: "Engineering Building", cx: 1764.5, cy: 316.5},//Engineering Building
    { id: "v146", objectName: "PHINMA Forest", cx: 1401.5, cy: 1804.5},//PHINMA Forest
    { id: "v147", objectName: "PEDRO Hub Office", cx: 618.5, cy: 1714.5},//PEDRO Hub Office
    { id: "v148", objectName: "Office of  Graduate and Professionals", cx: 621.5, cy: 1760.5},//Office of  Graduate and Professionals
    { id: "v149", objectName: "College of Law Office", cx: 685.5, cy: 1760.5},//College of Law Office
    { id: "v150", objectName: "Riverside Building", cx: 2248.5, cy: 914.5},//Riverside Building
    { id: "v151", objectName: "Riverside Building's Parking Lot Area", cx: 2654.5, cy: 530.5},//Riverside Building
    { id: "v152", objectName: "Pedistrian Entrance/Exit", cx: 2677.5, cy: 968.5},//Pedistrian Entrance/Exit

    //purple circles (not to be showned or "null")
   
    //othes(cr or food)

  ],

  edges: [
  // positions to objects
    //main entrance
    { id: "v1_to_v111", from: "v1", to: "v111" },
    { id: "v1_to_v2", from: "v1", to: "v2" },
    { id: "v1_to_v112", from: "v1", to: "v112" },
    //PTC
    { id: "v2_to_v4", from: "v2", to: "v4" },
    { id: "v2_to_v153", from: "v2", to: "v153" },
    { id: "v153_to_v220", from: "v153", to: "v220" },
    { id: "v153_to_v154", from: "v153", to: "v154" },
    { id: "v2_to_v112", from: "v2", to: "v112" },
    { id: "v2_to_v3", from: "v2", to: "v3" },
    { id: "v4_to_v5", from: "v4", to: "v5" },
    { id: "v5_to_v3", from: "v5", to: "v3" },
    { id: "v3_to_v112", from: "v3", to: "v112" },
    { id: "v3_to_v155", from: "v3", to: "v155" },
    { id: "v3_to_v6", from: "v3", to: "v6" },
    { id: "v6_to_v154", from: "v6", to: "v154" },
    //v155
    { id: "v155_to_v156", from: "v155", to: "v156" },
    { id: "v155_to_v84", from: "v155", to: "v84" },
    { id: "v155_to_v9", from: "v155", to: "v9" },
    //v156
    { id: "v156_to_v157", from: "v156", to: "v157" },
    //v157
    { id: "v156_to_v11", from: "v156", to: "v11" },
    //csdl
    { id: "v9_to_v115", from: "v9", to: "v115" },
    { id: "v9_to_v158", from: "v9", to: "v158" },
    { id: "v9_to_v161", from: "v9", to: "v161" },
    { id: "v8_to_v115", from: "v8", to: "v115" },
    //its
    { id: "v11_to_v114", from: "v11", to: "v114" },
    //{ id: "v11_to_v114", from: "v11", to: "v114" },
    { id: "v11_to_v163", from: "v11", to: "v163" },
    //v163
    { id: "v163_to_v164", from: "v163", to: "v164" },
    { id: "v163_to_v162", from: "v163", to: "v162" },
    //v162
    { id: "v162_to_v161", from: "v162", to: "v161" },
    { id: "v162_to_v16", from: "v162", to: "v16" },
    //v161
    { id: "v161_to_v12", from: "v161", to: "v12" },
    //OP
    { id: "v12_to_v116", from: "v12", to: "v116" },
    { id: "v116_to_v13", from: "v116", to: "v113" },
    { id: "v12_to_v159", from: "v12", to: "v159" },
    //v159
    { id: "v159_to_v158", from: "v159", to: "v158" },
    { id: "v159_to_v160", from: "v159", to: "v160" },
    //{ id: "v159_to_v158", from: "v159", to: "v158" },
    { id: "v159_to_v147", from: "v159", to: "v147" },
    //fvr
    { id: "v16_to_v118", from: "v16", to: "v118" },
    //{ id: "v16_to_v163", from: "v16", to: "v163" },
    { id: "v16_to_v17", from: "v16", to: "v17" },
    { id: "v15_to_v118", from: "v15", to: "v118" },
    { id: "v18_to_v118", from: "v18", to: "v118" },
    //v163
    // { id: "v163_to_v132", from: "v163", to: "v132" },
    // { id: "v163_to_v17", from: "v163", to: "v17" },
    //finance
    { id: "v17_to_v119", from: "v17", to: "v119" },
    { id: "v19_to_v119", from: "v19", to: "v119" },
    { id: "v19_to_v166", from: "v19", to: "v166" },
    //v166
    { id: "v166_to_v167", from: "v166", to: "v167" },
    { id: "v166_to_v17", from: "v166", to: "v17" },
    { id: "v166_to_v179", from: "v166", to: "v179" },
    { id: "v166_to_v64", from: "v166", to: "v64" },
    //v164
    { id: "v164_to_v234", from: "v164", to: "v234" },
    //v234
    { id: "v234_to_v173", from: "v164", to: "v173" },
    //v173
    { id: "v173_to_v131", from: "v173", to: "v131" },
    { id: "v173_to_v126", from: "v173", to: "v126" },
    { id: "v173_to_v34", from: "v173", to: "v34" },
    //v34
    { id: "v34_to_v123", from: "v34", to: "v123" },
    //basic ed
    { id: "v123_to_v33", from: "v123", to: "v33" },
    { id: "v123_to_v29", from: "v123", to: "v29" },
    { id: "v123_to_v30", from: "v123", to: "v30" },
    //v29
    { id: "v29_to_v28", from: "v29", to: "v28" },
    //v33
    { id: "v33_to_v32", from: "v33", to: "v32" },
    //v30
    { id: "v30_to_v28", from: "v30", to: "v28" },
    { id: "v30_to_v32", from: "v30", to: "v32" },
    { id: "v30_to_v174", from: "v30", to: "v174" },
    //v28
    { id: "v28_to_v27", from: "v28", to: "v27" },
    //v32
    { id: "v32_to_v31", from: "v32", to: "v31" }, 
    //v174
    { id: "v174_to_v27", from: "v174", to: "v27" },  
    { id: "v174_to_v31", from: "v174", to: "v31" },
    { id: "v174_to_v175", from: "v174", to: "v175" },
    //v27
    { id: "v27_to_v26", from: "v27", to: "v26" }, 
    //v31
    { id: "v31_to_v230", from: "v31", to: "v230" }, 
    //v175
    { id: "v175_to_v26", from: "v175", to: "v26" },  
    { id: "v175_to_v230", from: "v175", to: "v230" },
    { id: "v175_to_v25", from: "v175", to: "v25" },
    //v26
    { id: "v26_to_v176", from: "v26", to: "v176" },
    //v230
    { id: "v230_to_v177", from: "v230", to: "v177" },
    //v25
    { id: "v25_to_v176", from: "v25", to: "v176" },  
    { id: "v25_to_v177", from: "v25", to: "v177" },
    //v126
    { id: "v126_to_v178", from: "v126", to: "v178" }, 
    //v178
    { id: "v178_to_v127", from: "v178", to: "v127" },
    { id: "v178_to_v35", from: "v178", to: "v35" },
    //v35
    { id: "v35_to_v179", from: "v35", to: "v179" },
    { id: "v35_to_v124", from: "v35", to: "v124" }, 
    //ccje
    { id: "v124_to_v36", from: "v124", to: "v36" },
    { id: "v36_to_v37", from: "v36", to: "v37" }, 
    { id: "v229_to_v37", from: "v229", to: "v37" }, 
    { id: "v229_to_v38", from: "v229", to: "v38" }, 
    { id: "v39_to_v38", from: "v39", to: "v38" },
    //v179
    { id: "v179_to_v180", from: "v179", to: "v180" },
    { id: "v179_to_v64", from: "v179", to: "v64" },
    //v180
    { id: "v180_to_v128", from: "v180", to: "v128" },
    { id: "v180_to_v40", from: "v180", to: "v40" },
    { id: "v128_to_v181", from: "v128", to: "v181" },
    { id: "v181_to_v45", from: "v181", to: "v45" },
    { id: "v45_to_v228", from: "v45", to: "v228" },
    //gym
    { id: "v40_to_v125", from: "v40", to: "v125" },
    { id: "v40_to_v184", from: "v40", to: "v184" },
    { id: "v125_to_v182", from: "v125", to: "v182" },
    { id: "v182_to_v41", from: "v182", to: "v41" },
    { id: "v182_to_v42", from: "v182", to: "v42" }, 
    { id: "v183_to_v43", from: "v183", to: "v43" },
    { id: "v183_to_v44", from: "v183", to: "v44" },
    { id: "v183_to_v182", from: "v183", to: "v182" },
    { id: "v41_to_v44", from: "v41", to: "v44" }, 
    { id: "v42_to_v44", from: "v42", to: "v44" }, 
    //v184
    { id: "v184_to_v235", from: "v184", to: "v235" },
    { id: "v184_to_v185", from: "v184", to: "v185" },
    { id: "v184_to_v129", from: "v184", to: "v129" },
    { id: "v184_to_v130", from: "v184", to: "v130" },
    { id: "v184_to_v219", from: "v184", to: "v219" },
    { id: "v184_to_v62", from: "v184", to: "v62" },
    { id: "v184_to_v140", from: "v184", to: "v140" },//old stage
    //v129
    { id: "v129_to_v89", from: "v129", to: "v89" },
    //mba eng
    { id: "v89_to_v145", from: "v89", to: "v145" }, 
    { id: "v145_to_v204", from: "v145", to: "v204" },
    { id: "v145_to_v90", from: "v145", to: "v90" },
    { id: "v90_to_v205", from: "v90", to: "v205" }, 
    { id: "v204_to_v205", from: "v204", to: "v205" },
    { id: "v204_to_v45", from: "v204", to: "v45" },
    { id: "v205_to_v92", from: "v205", to: "v92" },
    //{ id: "v205_to_v205", from: "v205", to: "v91" },
    
    { id: "v204_to_v203", from: "v204", to: "v203" },
    { id: "v203_to_v227", from: "v203", to: "v227" },
    { id: "v203_to_v93", from: "v203", to: "v93" },
    { id: "v202_to_v94", from: "v202", to: "v94" },
    { id: "v202_to_v203", from: "v202", to: "v203" },
    { id: "v202_to_v201", from: "v202", to: "v201" },
    { id: "v201_to_v95", from: "v201", to: "v95" },
    { id: "v200_to_v96", from: "v200", to: "v96" },
    { id: "v237_to_v97", from: "v237", to: "v97" },
    { id: "v236_to_v98", from: "v236", to: "v98" },
    { id: "v236_to_v237", from: "v236", to: "v237" },
    { id: "v236_to_v144", from: "v236", to: "v144" },
    { id: "v144_to_v235", from: "v144", to: "v235" },
    { id: "v144_to_v207", from: "v144", to: "v207" },
    { id: "v144_to_v199", from: "v144", to: "v199" },

    { id: "v199_to_v99", from: "v199", to: "v99" },
    { id: "v99_to_v206", from: "v99", to: "v206" },
    { id: "v199_to_v198", from: "v199", to: "v198" },
    { id: "v198_to_v100", from: "v198", to: "v100" },

    { id: "v198_to_v197", from: "v198", to: "v197" },
    { id: "v197_to_v101", from: "v197", to: "v101" },
    { id: "v197_to_v196", from: "v197", to: "v196" },
    { id: "v196_to_v102", from: "v196", to: "v102" },

    { id: "v196_to_v143", from: "v196", to: "v143" },
    { id: "v143_to_v103", from: "v143", to: "v103" },
    { id: "v143_to_v219", from: "v143", to: "v219" },
    { id: "v143_to_v195", from: "v143", to: "v195" },

    { id: "v195_to_v104", from: "v195", to: "v104" },
    { id: "v194_to_v226", from: "v194", to: "v226" },
    { id: "v194_to_v193", from: "v194", to: "v193" },
    { id: "v193_to_v225", from: "v193", to: "v225" },

    { id: "v193_to_v142", from: "v193", to: "v142" },
    { id: "v142_to_v62", from: "v142", to: "v62" },
    { id: "v142_to_v192", from: "v142", to: "v192" },

    { id: "v192_to_v105", from: "v192", to: "v105" },
    { id: "v191_to_v106", from: "v191", to: "v105" },
    { id: "v192_to_v191", from: "v192", to: "v191" },
    { id: "v191_to_v190", from: "v191", to: "v190" },
    { id: "v190_to_v224", from: "v190", to: "v224" },
    { id: "v190_to_v189", from: "v190", to: "v189" },
    { id: "v189_to_v107", from: "v189", to: "v107" },
    { id: "v189_to_v188", from: "v189", to: "v188" },
    { id: "v188_to_v108", from: "v188", to: "v108" },
    { id: "v188_to_v187", from: "v188", to: "v187" },
    { id: "v187_to_v109", from: "v187", to: "v109" },
    { id: "v187_to_v186", from: "v187", to: "v186" },
    { id: "v186_to_v110", from: "v186", to: "v110" },
    { id: "v186_to_v141", from: "v186", to: "v141" },
    { id: "v141_to_v72", from: "v141", to: "v72" },
    //north hall
    { id: "v72_to_v71", from: "v72", to: "v71" },
    //{ id: "v72_to_v71", from: "v72", to: "v71" },
    { id: "v72_to_v70", from: "v72", to: "v70" },
    { id: "v223_to_v70", from: "v223", to: "v70" },
    { id: "v223_to_v71", from: "v223", to: "v71" },
    { id: "v223_to_v69", from: "v223", to: "v69" },

    { id: "v69_to_v68", from: "v69", to: "v68" },
    { id: "v68_to_v139", from: "v68", to: "v139" },
    { id: "v68_to_v70", from: "v68", to: "v70" },
    { id: "v63_to_v139", from: "v63", to: "v139" },
    { id: "v63_to_v172", from: "v63", to: "v172" },
    { id: "v68_to_v65", from: "v68", to: "v65" },
    { id: "v65_to_v67", from: "v65", to: "v67" },
    { id: "v69_to_v67", from: "v69", to: "v67" },
    { id: "v66_to_v67", from: "v66", to: "v67" },
    { id: "v65_to_v138", from: "v65", to: "v138" },
    { id: "v64_to_v138", from: "v64", to: "v138" },
    { id: "v64_to_v63", from: "v64", to: "v63" },
    { id: "v64_to_v73", from: "v64", to: "v73" },
    { id: "v73_to_v137", from: "v73", to: "v137" },

    //old stage
    { id: "v172_to_v83", from: "v172", to: "v83" },
    { id: "v83_to_v140", from: "v83", to: "v140" },
    //forest
    { id: "v172_to_v146", from: "v172", to: "v146" },
    { id: "v146_to_v60", from: "v146", to: "v60" },
    { id: "v146_to_v61", from: "v146", to: "v61" },
    { id: "v61_to_v62", from: "v61", to: "v61" },
    { id: "v61_to_v134", from: "v61", to: "v134" },

    //sp
    { id: "v47_to_v134", from: "v47", to: "v134" },
    { id: "v47_to_v219", from: "v47", to: "v219" },
    { id: "v219_to_v130", from: "v219", to: "v130" },
    { id: "v219_to_v185", from: "v219", to: "v185" },
    { id: "v219_to_v62", from: "v219", to: "v62" },
    { id: "v219_to_v140", from: "v219", to: "v140" },
    { id: "v62_to_v140", from: "v62", to: "v140" },
    { id: "v46_to_v133", from: "v46", to: "v133" },
    //cma hall
    { id: "v167_to_v46", from: "v167", to: "v46" },
    { id: "v167_to_v168", from: "v167", to: "v168" },
    { id: "v168_to_v169", from: "v168", to: "v169" },
    { id: "v168_to_v170", from: "v168", to: "v170" },
    { id: "v170_to_v60", from: "v170", to: "v60" },
    { id: "v170_to_v171", from: "v170", to: "v171" },
    { id: "v171_to_v59", from: "v171", to: "v59" },
    { id: "v171_to_v64", from: "v171", to: "v64" },

    //mcdo
    { id: "v156_to_v7", from: "v156", to: "v7" },
    { id: "v7_to_v113", from: "v7", to: "v113" },

    //river
    { id: "v206_to_v208", from: "v206", to: "v208" },
    { id: "v208_to_v74", from: "v208", to: "v74" },
    { id: "v208_to_v209", from: "v208", to: "v209" },
    { id: "v207_to_v74", from: "v207", to: "v74" },
    { id: "v209_to_v82", from: "v209", to: "v82" },
    //{ id: "v209_to_v82", from: "v209", to: "v82" },
    { id: "v82_to_v152", from: "v82", to: "v152" },
    { id: "v74_to_v150", from: "v74", to: "v150" },
    { id: "v211_to_v231", from: "v211", to: "v231" },
    { id: "v231_to_v210", from: "v231", to: "v210" },
    { id: "v211_to_v212", from: "v211", to: "v212" },
    { id: "v212_to_v213", from: "v212", to: "v213" },
    { id: "v212_to_v80", from: "v212", to: "v80" },
    { id: "v213_to_v81", from: "v213", to: "v81" },
    { id: "v80_to_v81", from: "v80", to: "v81" },
    { id: "v80_to_v233", from: "v80", to: "v233" },
    { id: "v81_to_v151", from: "v81", to: "v151" },
    { id: "v233_to_v151", from: "v233", to: "v151" },
    { id: "v151_to_v214", from: "v151", to: "v214" },
    { id: "v214_to_v215", from: "v214", to: "v215" },
   // { id: "v214_to_v215", from: "v214", to: "v215" },
    { id: "v215_to_v79", from: "v215", to: "v79" },
    { id: "v215_to_v216", from: "v215", to: "v216" },
    { id: "v216_to_v232", from: "v216", to: "v232" },
    { id: "v216_to_v217", from: "v216", to: "v217" },
    { id: "v217_to_v78", from: "v217", to: "v78" },
    { id: "v218_to_v77", from: "v218", to: "v77" },
    { id: "v218_to_v217", from: "v218", to: "v217" },
    { id: "v218_to_v76", from: "v218", to: "v76" },
    { id: "v75_to_v76", from: "v75", to: "v76" },
    { id: "v210_to_v75", from: "v210", to: "v75" },

    //cma bldg
    { id: "v59_to_v136", from: "v59", to: "v136" },
    { id: "v136_to_v58", from: "v136", to: "v58" },
    { id: "v57_to_v136", from: "v57", to: "v136" },
    { id: "v57_to_v56", from: "v57", to: "v56" },
    { id: "v56_to_v55", from: "v56", to: "v55" },
    { id: "v54_to_v55", from: "v54", to: "v55" },
    { id: "v53_to_v54", from: "v53", to: "v54" },
    { id: "v53_to_v52", from: "v53", to: "v52" },
    { id: "v51_to_v52", from: "v51", to: "v52" },
    { id: "v51_to_v50", from: "v51", to: "v50" },
    { id: "v49_to_v50", from: "v49", to: "v50" },
    { id: "v49_to_v58", from: "v49", to: "v58" },
    { id: "v221_to_v135", from: "v221", to: "v135" },
    { id: "v48_to_v135", from: "v48", to: "v135" },
    //atrium
    { id: "v48_to_v88", from: "v48", to: "v88" },
    { id: "v121_to_v88", from: "v121", to: "v88" },
    { id: "v121_to_v87", from: "v121", to: "v87" },
    { id: "v86_to_v87", from: "v86", to: "v87" },
    { id: "v86_to_v149", from: "v86", to: "v149" },
    { id: "v86_to_v85", from: "v86", to: "v85" },
    { id: "v85_to_v84", from: "v85", to: "v84" },
    { id: "v148_to_v149", from: "v148", to: "v149" },

    //lib
    { id: "v23_to_v88", from: "v23", to: "v88" },
    { id: "v23_to_v117", from: "v23", to: "v117" },
    { id: "v117_to_v20", from: "v117", to: "v20" },
    { id: "v117_to_v14", from: "v117", to: "v14" },

    { id: "v160_to_v24", from: "v160", to: "v24" },
    { id: "v122_to_v24", from: "v122", to: "v24" },
    { id: "v122_to_v169", from: "v122", to: "v169" },
    { id: "v169_to_v22", from: "v169", to: "v22" },
    { id: "v22_to_v120", from: "v22", to: "v120" },
    { id: "v21_to_v120", from: "v21", to: "v120" },
  ],
};
