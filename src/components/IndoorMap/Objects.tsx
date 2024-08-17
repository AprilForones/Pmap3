interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    <g id="Objects">
      <path
            id="Main Entrance Gate"
            className={`${className} object`}
             d="M40 1145H138V1676H40z"
            onClick={handleObjectClick}
            />
           <path
              id="BASIC ED Building"
              className={`${className} object`}
               d="M954 152.636V771H676.784L720.71 130.372L954 152.636Z"
              onClick={handleObjectClick}
            /> 
          <path
            id="Gymnasium"
            className={`${className} object`}
             d="M1195 145H1749V809H1195z"
            onClick={handleObjectClick}
          />
          <path
            id="CMA's Comfort Room"
            className={`${className} object`}
            d="M840 1824H910V1875H840z"
            onClick={handleObjectClick}
          />
          <path
             id="BASIC ED's Comfort Room"
            className={`${className} object`}
            d="M883 295H953V346H883z"
            onClick={handleObjectClick}
          />
          <path
            id="PHINMA Forest"
            className={`${className} object`}
             d="M1149 1607H1788V2441H1149z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE Department"
            className={`${className} object`}
             d="M999 153H1146V809H999z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE's Comfort Room"
            className={`${className} object`}
             d="M1038 441H1108V492H1038z"
            onClick={handleObjectClick}
          />
          <path
            id="Gymnasium's Comfort Room"
            className={`${className} object`}
             d="M1306 153H1376V204H1306z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building"
            className={`${className} object`}
            d="M2033.5 45L2634 159.5L2628 206H2680V319.5H2721L2700.5 762.5L2628 752L2625.5 896L1990 991.5L1975 783C1975 783 1903.5 819.5 1951.5 716C1999.5 612.5 2033.5 45 2033.5 45Z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="Student Plaza Entrance 01"
            className={`${className} object`}
            d="M1172 1207H1383V1607H1172z"
            onClick={handleObjectClick}
          />
          {/* Lower part */}
          <path
            id="Student Plaza Entrance 02"
            className={`${className} object`}
            d="M1383 1207H1726V1607H1383z"
            onClick={handleObjectClick}
          />
           {/* Left part */}
           <path
            id="Mc Donald's"
            className={`${className} object`}
             d="M150 936H351V1135H150z"
            onClick={handleObjectClick}
          />
           {/* Right part */}
           <path
            id="ITS Department Building"
            className={`${className} object`}
            d="M423 1031H592V1193H423z"
            onClick={handleObjectClick}
          />
          {/* Left part */}
          <path
            id="North Hall Entrance 1"
            className={`${className} object`}
             d="M969 2441H1266V2685H969z"
            onClick={handleObjectClick}
          />

          <path
            id="North Hall's Comfort room 1"
            className={`${className} object`}
             d="M987 2630H1057V2681H987z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="North  Hall Entrance 2"
            className={`${className} object`}
            d="M1263 2441H1846V2685H1263z"
            onClick={handleObjectClick}
          />
          <path
            id="North Hall's Comfort room 2"
            className={`${className} object`}
            d="M1586 2630H1656V2681H1586z"
            onClick={handleObjectClick}
          />          
          {/* Ground Floor           */}
          <path
            id="PTC Building"
            className={`${className} object`}
            d="M143 1140H357V1792H143z"
            onClick={handleObjectClick}
          />
          {/* second floor*/}
          <path
            id="MBA Hall's Comfort Room 1"
            className={`${className} object`}
            d="M1859 387H1929V438H1859z"
            onClick={handleObjectClick}
          />
          <path
            id="MBA Hall's Comfort Room 2"
            className={`${className} object`}
            d="M1851 1934H1921V1985H1851z"
            onClick={handleObjectClick}
          />
          <path
            id="University Chapel"
            className={`${className} object`}
            d="M1872 1564H1942V1615H1872z"
            onClick={handleObjectClick}
          />
          <path
            id="University Clinic"
            className={`${className} object`}
            d="M1872 1630H1942V1681H1872z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Comfort Room 1"
            className={`${className} object`}
            d="M2437 204H2507V255H2437z"
            onClick={handleObjectClick}
          /> 
          <path
            id="Riverside Building's Comfort Room 2"
            className={`${className} object`}
            d="M2104 685H2174V736H2104z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Parking Lot Area"
            className={`${className} object`}
            d="M2610 305L2721.5 325.5L2699.5 765.5L2582.5 738L2610 305Z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Food Hub Area"
            className={`${className} object`}
            d="M2138.94 356L2600.94 434.5L2592 592.5L2103.94 684L2138.94 356Z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Law Office"
            className={`${className} object`}
            d="M640.5 1753.5H701.5V1796.5H640.5z"
            onClick={handleObjectClick}
          /> 
          <path
            id="Office of  Graduate and Professionals"
            className={`${className} object`}
            d="M577.5 1751.5H638.5V1794.5H577.5z"
            onClick={handleObjectClick}
          />
          <path
            id="PEDRO Hub Office"
            className={`${className} object`}
            d="M577.5 1704.5H638.5V1747.5H577.5z"
            onClick={handleObjectClick}
          /> 
          <path
            id="PTC's Comfort Room"
            className={`${className} object`}
            d="M150 1732H220V1783H150z"
            onClick={handleObjectClick}
          />
          <path
            id="4 wheels parking area 01"
            className={`${className} object`}
            d="M660.5 932.5H1057.5V1013.5H660.5z"
            onClick={handleObjectClick}
          />
          <path
            id="4 wheels parking area 02"
            className={`${className} object`}
            d="M651.5 1094.5H1048.5V1176.5H651.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area 01"
            className={`${className} object`}
            d=" "
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area 02"
            className={`${className} object`}
            d=" "
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area 03"
            className={`${className} object`}
            d=" "
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area 04"
            className={`${className} object`}
            d=" "
            onClick={handleObjectClick}
          />                              
          <path
            id="Motorcycle parking area 05"
            className={`${className} object`}
            d=" "
            onClick={handleObjectClick}
          />                                                                                                                                  
           <path
            id="Engineering Building"
            className={`${className} object`}
             d="M1755 343V89.491L2017.78 53.6134L2004.18 343H1755Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-P.Ave */}
          <path
            id="MBA Hall Entrance 1"
            className={`${className} object`}
            d="M1792 817H1926V1178H1792z"
            onClick={handleObjectClick}
          />
          {/* MBA Hall -PF */}
          <path
            id="MBA Hall Entrance 3"
            className={`${className} object`}
            d="M1792 1608H1926V2359H1792z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL - SP */}
          <path
            id="MBA Hall Entrance 2"
            className={`${className} object`}
            d="M1792 1187H1926V1600H1792z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-NH */}
          <path
            id="MBA Hall Entrance 4"
            className={`${className} object`}
            d="M1782.5 2356.5H1820.5V2442.5H1782.5z"
            onClick={handleObjectClick}
          />
          {/* Left Side */}
            <path
            id="OP/Marketing Department"
            className={`${className} object`}
            d="M640.5 1438.5H748.5V1584.5H640.5z"
            onClick={handleObjectClick}
          />
          <path
            id="FVR Building"
            className={`${className} object`}
            d="M915.5 1217.5L642.5 1236V1349.5L915.5 1326V1217.5Z"
            onClick={handleObjectClick}
          />
          <path
            id="University Library Building"
            className={`${className} object`}
            d="M917 1415L645 1449V1351L917 1323.5V1415Z"
            onClick={handleObjectClick}
          />          
          <path
            id="CSDL/ITS Building"
            className={`${className} object`}
            d="M423 1194H592V1398H423z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="CMA Building Entrance 1"
            className={`${className} object`}
            d="M703 1726H1056V1889H703z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="CMA Building Entrance 2"
            className={`${className} object`}
            d="M704 1887H1057V2419H704z"
            onClick={handleObjectClick}
          />
          <path
            id="Technical Vocational Building"
            className={`${className} object`}
            d="M713.5 2442.5H951.5V2666.5H713.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Finance Purchasing Department"
            className={`${className} object`}
            d="M917.5 1219.5V1414.5V1433.5H1053.5L1033 1207.5L917.5 1219.5Z"
            onClick={handleObjectClick}
          />
           <path
            id="Teller"
            className={`${className} object`}
            d="M1060.5 1553.5L931.5 1545.5L918 1436H1051.5L1060.5 1553.5Z"
            onClick={handleObjectClick}
          />
           <path
            id="Atrium"
            className={`${className} object`}
            d="M427.917 1640.42C399.311 1633.31 427.917 1387 427.917 1387L417.5 1347C313 1387 364.508 1674.31 365.393 1697.92C366.279 1721.53 675.984 1704.37 818 1697.92V1624.64C782.588 1666.88 515.936 1662.3 427.917 1640.42Z"
            onClick={handleObjectClick}
          />
           <path
            id="Registrar Office"
            className={`${className} object`}
            d="M810.5 1538.5H951.5V1622.5H810.5z"
            onClick={handleObjectClick}
          />
           {/* <path
            id="CMA HALL"
            className={`${className} object`}
            d="M240.5 199.5H262.5V389.5H240.5z"
            onClick={handleObjectClick}
          /> */}
            <path
            id="Old Stage"
            className={`${className} object`}
            d="M1702.19 2271.79C1749.79 2179.87 1789.67 2189.14 1802 2205.63V2257.23V2339.68V2442.02C1802 2442.02 1721.69 2446.48 1702.19 2442.02H1670.69C1661.35 2423.58 1654.59 2363.72 1702.19 2271.79Z"
            onClick={handleObjectClick}
          />
            {/* <path
            id="School Vehicle Entrance"
            className={`${className} object`}
            d="M40 110H106V147H40z"
            onClick={handleObjectClick}
          /> */}
            <path
            id="Pedistrian Entrance/Exit"
            className={`${className} object`}
            d="M1944.5 1002.5L2688 891L2703.7 1015.53L1944.5 1075.5L1944.5 1002.5Z"
            onClick={handleObjectClick}
          />
    </g>
  );
}

export default Objects;
