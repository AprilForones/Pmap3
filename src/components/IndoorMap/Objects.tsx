interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
  selectedId?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {


  return (
    <g id="Objects">
      <path
            id="Main Entrance Gate"
            className={`${className} object`}
             d="M683.5 1112.5H900.5V1147.5H683.5z"
            onClick={handleObjectClick}
            />
           <path
              id="BASIC ED Building"
              className={`${className} object`}
              d="M278.182 905.819L287.011 817.315H536.436V919.354L417.242 913.107H432.693V871.458H392.962V911.835L278.182 905.819ZM392.962 911.835V913.107H417.242L392.962 911.835ZM322.328 854.799V817.315H368.681V854.799H322.328Z"
              onClick={handleObjectClick}
            /> 
          <path
            id="Gymnasium"
            className={`${className} object`}
             d="M278.182 438.312V711.111H532.021V438.312H278.182ZM284.804 692.369V640.308H322.328V692.369H284.804ZM492.29 588.247V523.692H527.607V588.247H492.29Z"
            onClick={handleObjectClick}
          />
          <path
            id="CMA's Comfort Room"
            className={`${className} object`}
            d="M940.078 815.525H967.1496999999999V842.0124999999999H940.078z"
            onClick={handleObjectClick}
          />
          <path
             id="BASIC ED's Comfort Room"
            className={`${className} object`}
            d="M335.5 819.5H358.5V845.5H335.5z"
            onClick={handleObjectClick}
          />
          <path
            id="PHINMA Forest"
            className={`${className} object`}
             d="M862.5 414.5H1247.5V713.5H862.5z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE Department"
            className={`${className} object`}
             d="M532 732H281V797H532V732ZM442 746H406V783H442V746Z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE's Comfort Room"
            className={`${className} object`}
             d="M411.5 752.5H434.5V778.5H411.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Gymnasium's Comfort Room"
            className={`${className} object`}
             d="M283.5 649.5H314.5V685.5H283.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building"
            className={`${className} object`}
            d="M236.244 320.529C286.276 322.67 403.998 330.378 474.632 344.081L498.737 339.968C497.634 346.034 499.574 357.57 515.466 355.857C531.359 354.144 532.389 347.293 530.917 344.081L615.898 336.587L581.685 120.34H560.716L554.094 93.5763C546.001 92.1489 527.386 89.7224 517.674 91.4352L518.283 88.3616L524.296 62.7003L462.491 59.4887L417.193 57.1348L347.712 52.8961L344.401 70.0246H301.359C299.98 75.0416 298.083 85.7016 300.759 90.5448H295.545L280.39 88.2236L236.244 320.529ZM344.401 94.0803V144.688H284.804V90.5448H295.545L301.359 91.4352C301.137 91.1667 300.938 90.8688 300.759 90.5448H341.698L341.09 93.7457L344.401 94.0803ZM377.511 97.4257L344.401 94.0803V90.5448H341.698L348.816 53.0655L400.687 56.2771L417.193 57.1348L523.192 63.6014L518.283 88.3616L513.259 109.804L455.87 104.451L437.107 102.826V92.6272H377.511V97.4257ZM377.511 97.4257V150.935H437.107V102.826L394.065 99.0984L377.511 97.4257ZM425 196V254.308H493.426V196H425ZM479 267V318H532V267H479Z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="Student Plaza Entrance Near CMA Hall"
            className={`${className} object`}
            d="M720.5 612.5H860.5V712.5H720.5z"
            onClick={handleObjectClick}
          />
          {/* Lower part */}
          <path
            id="Student Plaza Entrance Near PHINMA Forest"
            className={`${className} object`}
            d="M859 454H718V613H750V549H810V613H859V454Z"
            onClick={handleObjectClick}
          />
           {/* Left part */}
           <path
            id="Mc Donald's"
            className={`${className} object`}
             d="M602.5 1035.5H669.5V1106.5H602.5z"
            onClick={handleObjectClick}
          />
           {/* Right part */}
           <path
            id="ITS Department Building"
            className={`${className} object`}
            d="M647.5 944.5H714.5V1001.5H647.5z"
            onClick={handleObjectClick}
          />
          {/* Left part */}
          <path
            id="North Hall Entrance 1"
            className={`${className} object`}
             d="M1295.24 744.43V793.909H1254.31V657.468H1334.98V743.93H1295.74H1295.24V744.43Z"
            onClick={handleObjectClick}
          />

          <path
            id="North Hall's Comfort Room 1"
            className={`${className} object`}
             d="M1315.32 763.464H1342.3917V789.9515H1315.32z"
            onClick={handleObjectClick}
          />
          <path
            id="North Hall's Comfort Room 2"
            className={`${className} object`}
             d="M1317.53 494.83H1344.6017V521.3175H1317.53z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="North Hall Entrance 2"
            className={`${className} object`}
            d="M1302.37 542.934H1337.18V648.138H1254.31V359.679H1337.18V466.966H1302.37H1301.87V467.466V542.434V542.934H1302.37Z"
            onClick={handleObjectClick}
          />        
          {/* Ground Floor*/}
          <path
            id="PTC Building"
            className={`${className} object`}
            d="M670 1031H943V1113H670z"
            onClick={handleObjectClick}
          />
          {/* second floor*/}
          <path
            id="MBA Hall's Comfort Room 1"
            className={`${className} object`}
             d="M373.5 364.5H396.5V390.5H373.5z"
            onClick={handleObjectClick}
          />
          <path
            id="MBA Hall's Comfort Room 2"
            className={`${className} object`}
            d="M1027.5 356.5H1050.5V382.5H1027.5z"
            onClick={handleObjectClick}
          />
          <path
            id="University Chapel"
            className={`${className} object`}
            d="M869.5 348.5H892.5V374.5H869.5zz"
            onClick={handleObjectClick}
          />
          <path
            id="University Clinic"
            className={`${className} object`}
            d="M896.5 347.5H919.5V373.5H896.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Comfort Room near Parking Lot"
            className={`${className} object`}
            d="M301.5 103.5H330.5V136.5H301.5z"
            onClick={handleObjectClick}
          /> 
          <path
            id="Riverside Building's Comfort Room"
            className={`${className} object`}
            d="M497.5 269.5H523.5V304.5H497.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Parking Lot Area"
            className={`${className} object`}
            d="M348.816 53.0655L400.687 56.2771L462.491 59.4887L524.296 62.7003L513.259 109.804L455.869 104.451L394.065 99.0984L341.09 93.7457L348.816 53.0655Z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Food Plaza"
            className={`${className} object`}
            d="M398.5 103.5H427.5V136.5H398.5z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Law Office"
            className={`${className} object`}
            d="M919.5 907.5H939.5V935.5H919.5z"
            onClick={handleObjectClick}
          /> 
          <path
            id="Office of Graduate and Professionals"
            className={`${className} object`}
            d="M919.5 937.5H939.5V965.5H919.5z"
            onClick={handleObjectClick}
          />
          <path
            id="PEDRO Hub Office"
            className={`${className} object`}
            d="M897.5 937.5H917.5V965.5H897.5z"
            onClick={handleObjectClick}
          /> 
          <path
            id="PTC's Comfort Room"
            className={`${className} object`}
            d="M910 1071H943V1107H910V1071Z"
            onClick={handleObjectClick}
          />
          <path
            id="4 wheels parking area"
            className={`${className} object`}
            d="M597.5 762.5H699.5V910.5H597.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Uniform Claiming Area"
            className={`${className} object`}
            d="M734.197 900.301H744.6087V911.3375000000001H734.197z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area in front of Basic ED Building"
            className={`${className} object`}
            d="M524.5 814.5H568.5V911.5H524.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of Basic Ed."
            className={`${className} object`}
            d="M389.5 797.5H522.5V820.5H389.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of CCJE."
            className={`${className} object`}
            d="M394.5 709.5H527.5V732.5H394.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of Gymnasium."
            className={`${className} object`}
            d="M398.5 415.5H531.5V438.5H398.5z"
            onClick={handleObjectClick}
          />                              
          <path
            id="Motorcycle parking right side of SP"
            className={`${className} object`}
            d="M717.5 414.5H860.5V452.5H717.5z"
            onClick={handleObjectClick}
          />                                                                                                                                  
           <path
            id="MBA Engineering Building"
            className={`${className} object`}
            d="M267.146 438.312L251.695 331.066L368.681 334.19H421.656V357.096H368.681V365.426H359.852V411.24H415.035V366.467H555.198V414.363H368.681V438.312H267.146ZM415.035 366.467V365.426H368.681V366.467H415.035Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-P.Ave */}
          <path
            id="MBA Hall Entrance 1"
            className={`${className} object`}
           d="M556 364H704V417H556z"
            onClick={handleObjectClick}
          />
          {/* MBA Hall -PF */}
          <path
            id="MBA Hall Entrance 3"
            className={`${className} object`}
            d="M1068.12 390.415V355.514H1191.5V412.822H903.346V381.544H948.559H949.059V381.044V355.514H1008.65V390.415V390.915H1009.15H1067.62H1068.12V390.415Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL - SP */}
          <path
            id="MBA Hall Entrance 2"
            className={`${className} object`}
            d="M853.864 384.668H891.31V414.905H704.69V366.968H761.108H761.608V366.468V347.184H853.364V384.168V384.668H853.864Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-NH */}
          <path
            id="MBA Hall Entrance 4"
            className={`${className} object`}
            d="M1192 385H1254V409H1192z"
            onClick={handleObjectClick}
          />
          {/* Left Side */}
            <path
            id="OP/Marketing Department"
            className={`${className} object`}
            d="M797.5 875.5H851.5V919.5H797.5z"
            onClick={handleObjectClick}
          />
          <path
            id="FVR Building"
            className={`${className} object`}
            d="M717.801 917.186V810.941H757.381V917.186H717.801ZM726.378 889.988V916.99H753.399V889.988H726.378Z"
            onClick={handleObjectClick}
          />
          <path
            id="University Library Building"
            className={`${className} object`}
            d="M758.5 809.5H796.5V916.5H758.5z"
            onClick={handleObjectClick}
          />          
          <path
            id="CSDL Department"
            className={`${className} object`}
            d="M720.5 943.5H787.5V1000.5H720.5z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="CMA Building Entrance near Registrar"
            className={`${className} object`}
            d="M984 794H933.5V841.5H902V761.5H929V775.5H965.5V761.5H1029.5V893.5H902V847.5H933.5H984V794Z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="CMA Building Entrance Near PHINMA Forest"
            className={`${className} object`}
            d="M1031.5 762.5H1240.5V892.5H1031.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Technical Vocational Building"
            className={`${className} object`}
            d="M1249.5 801.5H1341.5V892.5H1249.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Finance Purchasing Department"
            className={`${className} object`}
            d="M721.5 758.5H793.5V810.5H721.5z"
            onClick={handleObjectClick}
          />
           <path
            id="Teller"
            className={`${className} object`}
            d="M795.5 758.5H847.5V810.5H795.5z"
            onClick={handleObjectClick}
          />
           <path
            id="Atrium"
            className={`${className} object`}
            d="M824.892 1033.37C796.814 1031.82 778.342 1013.49 772.616 1004.52L792.196 999.816C810.668 1004.35 851.971 1009.48 869.409 993.656C886.846 977.834 884.925 826.466 881.785 752.76H905.983C912.264 773.186 893.607 1004.52 888.804 1018.3C884.002 1032.08 859.988 1035.32 824.892 1033.37Z"
            onClick={handleObjectClick}
          />
           <path
            id="Registrar Office"
            className={`${className} object`}
            d="M797.5 811.5H849.5V863.5H797.5z"
            onClick={handleObjectClick}
          />
           <path
            id="Module Claiming Area"
            className={`${className} object`}
            d="M400.5 879.5H424.5V911.5H400.5z"
            onClick={handleObjectClick}
          />
            <path
            id="Old Stage"
            className={`${className} object`}
            d="M1249.39 455.711C1226.21 459.876 1173.9 456.752 1150.06 410.939H1173.24H1249.39V444.258V455.711Z"
            onClick={handleObjectClick}
          />
           <path
            id="Phinma Forest Pond"
            className={`${className} object`}
             d="M1163.5 640.5H1230.5V691.5H1163.5z"
            onClick={handleObjectClick}
          />
           <path
            id="Student Plaza's Food Place"
            className={`${className} object`}
             d="M766.5 570.5H797.5V606.5H766.5z"
            onClick={handleObjectClick}
          />
            <path
            id="College of Allied Health And Sciences (CAHS) Office"
            className={`${className} object`}
            d="M449.5 201.5H475.5V218.5H449.5z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Arts And Sciences (CAS) Office"
            className={`${className} object`}
            d="M447.5 222.5H476.5V239.5H447.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Phinma Avenue"
            className={`${className} object`}
            d="M557.5 414.5H714.5V710.5H557.5z"
            onClick={handleObjectClick}
          />
            <path
            id="Pedestrian Entrance/Exit"
            className={`${className} object`}
            d="M622.52 361.262L576.167 64.5144H642.386L682.117 361.262H622.52Z"
            onClick={handleObjectClick}
          />
            <path
            id="General Services Department(GSD) Office"
            className={`${className} object`}
            d="M500.5 544.5H531.5V580.5H500.5z"
            onClick={handleObjectClick}
          />
           <path
            id="College of Education And Liberal Arts (CELA) Office"
            className={`${className} object`}
            d="M401.5 365.5H424.5V391.5H401.5z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Engineering And Achitecture (CEA) Office"
            className={`${className} object`}
            d="M431.5 366.5H454.5V392.5H431.5z"
            onClick={handleObjectClick}
          />
          <path
            id="University Canteen"
            className={`${className} object`}
            d="M398.5 103.5H427.5V136.5H398.5z"
            onClick={handleObjectClick}
          />
            <path
            id="Senior High School (SHS) Office"
            className={`${className} object`}
            d="M387.5 820.5H411.5V852.5H387.5z"
            onClick={handleObjectClick}
          />
           <path
            id="College of Information Technology Education (CITE) Office"
            className={`${className} object`}
            d="M911.5 1044.5H939.5V1061.5H911.5z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Management and Accounting (CMA) Office"
            className={`${className} object`}
            d="M929.5 764.5H964.5V775.5H929.5z"
            onClick={handleObjectClick}
          />
    </g>
  );
}

export default Objects;
