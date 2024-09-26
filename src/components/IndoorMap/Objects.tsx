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
             d="M16 460H49V676H16z"
            onClick={handleObjectClick}
            />
           <path
              id="BASIC ED Building"
              className={`${className} object`}
              d="M345.67 63.9634L257.17 55.1409L250.923 165.423H285.282V213.947H250.923L243.635 313.2H345.67V156.6H315.476V100.356H345.67V63.9634Z"
              onClick={handleObjectClick}
            /> 
          <path
            id="Gymnasium"
            className={`${className} object`}
             d="M724.657 55.14H451.869V308.79h272.788V55.141zm-254.046 6.618h52.058v37.496h-52.058V61.758zm104.117 207.329h64.553v35.291h-64.553v-35.291z"
            onClick={handleObjectClick}
          />
          <path
            id="CMA's Comfort Room"
            className={`${className} object`}
            d="M320.682 716.831H347.7525V743.2986H320.682z"
            onClick={handleObjectClick}
          />
          <path
             id="BASIC ED's Comfort Room"
            className={`${className} object`}
            d="M318.599 110.282H345.66949999999997V136.7496H318.599z"
            onClick={handleObjectClick}
          />
          <path
            id="PHINMA Forest"
            className={`${className} object`}
             d="M451.869 637.429H751.7270000000001V1025.621H451.869z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE Department"
            className={`${className} object`}
             d="M366.493 57.3465H431.046V178.656V221.666H421.675V178.656H373.781V221.666H431.046V308.789H366.493V57.3465Z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE's Comfort Room"
            className={`${className} object`}
             d="M385.234 187.479H412.30449999999996V213.94660000000002H385.234z"
            onClick={handleObjectClick}
          />
          <path
            id="Gymnasium's Comfort Room"
            className={`${className} object`}
             d="M483.105 61.7578H508.0932V83.8142H483.105z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building"
            className={`${className} object`}
            d="M842.434 13.2338C840.293 63.2282 832.586 180.862 818.884 251.442L822.996 275.53C816.93 274.427 805.396 276.366 807.108 292.247C808.821 308.127 815.672 309.157 818.884 307.686L826.377 392.603L1042.62 358.416V337.462L1069.38 330.845C1070.8 322.758 1073.23 304.157 1071.52 294.452L1074.59 295.061L1100.25 301.069L1103.46 239.311L1105.82 194.046L1110.06 124.618L1092.93 121.31V78.3001C1087.91 76.9218 1077.25 75.0269 1072.41 77.7006V72.4903L1074.73 57.3465L842.434 13.2338ZM1068.87 121.31H1018.27V61.7578H1072.41V72.4903L1071.52 78.3001C1071.79 78.0788 1072.09 77.8795 1072.41 77.7006V118.609L1069.21 118.002L1068.87 121.31ZM1065.53 154.394L1068.87 121.31H1072.41V118.609L1109.89 125.721L1106.68 177.554L1105.82 194.046L1099.35 299.966L1074.59 295.061L1053.15 290.041L1058.5 232.695L1060.13 213.947H1070.33V154.394H1065.53ZM1065.53 154.394H1012.02V213.947H1060.13L1063.86 170.937L1065.53 154.394ZM989.115 165.423H930.809V233.797H989.115V165.423ZM909.986 255.854H845.433V308.789H909.986V255.854Z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="Student Plaza Entrance Near CMA Hall"
            className={`${className} object`}
            d="M451.869 494.062H551.8217V637.428H451.869z"
            onClick={handleObjectClick}
          />
          {/* Lower part */}
          <path
            id="Student Plaza Entrance Near PHINMA Forest"
            className={`${className} object`}
            d="M710.081 494.062H551.822V527H550V586H551.822V637.429H710.081V494.062ZM551.822 586H612V527H551.822V586Z"
            onClick={handleObjectClick}
          />
           {/* Left part */}
           <path
            id="Mc Donald's"
            className={`${className} object`}
             d="M56.2234 379.369H129.10559999999998V447.74370000000005H56.2234z"
            onClick={handleObjectClick}
          />
           {/* Right part */}
           <path
            id="ITS Department Building"
            className={`${className} object`}
            d="M162.423 427.893H216.564V496.2677H162.423z"
            onClick={handleObjectClick}
          />
          {/* Left part */}
          <path
            id="North Hall Entrance 1"
            className={`${className} object`}
             d="M368.576 1030.03H506.01V1111.64H418.552V1071.94H368.576V1030.03Z"
            onClick={handleObjectClick}
          />

          <path
            id="North Hall's Comfort Room 1"
            className={`${className} object`}
             d="M372.74 1091.79H399.8105V1118.2576H372.74z"
            onClick={handleObjectClick}
          />
          <path
            id="North Hall's Comfort Room 2"
            className={`${className} object`}
             d="M641.363 1094H668.4335000000001V1120.4676H641.363z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="North Hall Entrance 2"
            className={`${className} object`}
            d="M514.34 1030.03H803.786V1113.85H695.504V1078.56H620.54V1113.85H514.34V1030.03Z"
            onClick={handleObjectClick}
          />        
          {/* Ground Floor*/}
          <path
            id="PTC Building"
            className={`${className} object`}
            d="M49.9763 447.744H133.2702V685.953H49.9763z"
            onClick={handleObjectClick}
          />
          {/* second floor*/}
          <path
            id="MBA Hall's Comfort Room 1"
            className={`${className} object`}
             d="M770.469 149.983H797.5395000000001V176.4506H770.469z"
            onClick={handleObjectClick}
          />
          <path
            id="MBA Hall's Comfort Room 2"
            className={`${className} object`}
            d="M778.798 802.851H805.8685V829.3186H778.798z"
            onClick={handleObjectClick}
          />
          <path
            id="University Chapel"
            className={`${className} object`}
            d="M791.25 646.25H815.75V670.75H791.25z"
            onClick={handleObjectClick}
          />
          <path
            id="University Clinic"
            className={`${className} object`}
            d="M791.25 673.25H815.75V696.75H791.25z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Comfort Room near Parking Lot"
            className={`${className} object`}
            d="M1026.6 74.9916H1053.6705V101.45920000000001H1026.6z"
            onClick={handleObjectClick}
          /> 
          <path
            id="Riverside Building's Comfort Room"
            className={`${className} object`}
            d="M864.174 273.499H891.2445V299.9666H864.174z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Parking Lot Area"
            className={`${className} object`}
            d="M1109.89 125.721L1106.68 177.554L1103.46 239.311L1100.25 301.069L1053.15 290.041L1058.5 232.695L1063.86 170.937L1069.21 118.002L1109.89 125.721Z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Food Plaza"
            className={`${className} object`}
            d="M1026.6 174.245H1057.8352V202.91830000000002H1026.6z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Law Office"
            className={`${className} object`}
            d="M227.226 695.025H257.9612V716.5814H227.226z"
            onClick={handleObjectClick}
          /> 
          <path
            id="Office of Graduate and Professionals"
            className={`${className} object`}
            d="M195.991 695.025H226.7262V716.5814H195.991z"
            onClick={handleObjectClick}
          />
          <path
            id="PEDRO Hub Office"
            className={`${className} object`}
            d="M195.991 672.969H226.7262V694.5254000000001H195.991z"
            onClick={handleObjectClick}
          /> 
          <path
            id="PTC's Comfort Room"
            className={`${className} object`}
            d="M58.3057 692.569H85.3762V719.0365999999999H58.3057z"
            onClick={handleObjectClick}
          />
          <path
            id="4 wheels parking area"
            className={`${className} object`}
            d="M258.211 377.164H395.646V476.4176H258.211z"
            onClick={handleObjectClick}
          />
          <path
            id="Uniform Claiming Area"
            className={`${className} object`}
            d="M246.011 507.381H267.011V525.395H246.011V507.381Z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area in front of Basic ED Building"
            className={`${className} object`}
            d="M258.211 310.995H345.6696V344.0795H258.211z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of Basic Ed."
            className={`${className} object`}
            d="M345.67 169.834H366.49350000000004V299.966H345.67z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of CCJE."
            className={`${className} object`}
            d="M431.046 169.834H451.8695V302.172H431.046z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of Gymnasium."
            className={`${className} object`}
            d="M724.657 174.245H745.4805V308.789H724.657z"
            onClick={handleObjectClick}
          />                              
          <path
            id="Motorcycle parking right side of SP"
            className={`${className} object`}
            d="M712.163 498.474H747.5629V633.018H712.163z"
            onClick={handleObjectClick}
          />                                                                                                                                  
           <path
            id="MBA Engineering Building"
            className={`${className} object`}
            d="M724.657 44.1127L831.898 28.6733L828.774 145.572V198.507H805.869V145.572H797.539V136.749H751.728V191.89H796.498V331.948H748.604V145.572H724.657V44.1127ZM796.498 191.89H797.539V145.572H796.498V191.89Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-P.Ave */}
          <path
            id="MBA Hall Entrance 1"
            className={`${className} object`}
           d="M748.563 331.845H798.6217V479.82800000000003H748.563z"
            onClick={handleObjectClick}
          />
          {/* MBA Hall -PF */}
          <path
            id="MBA Hall Entrance 3"
            className={`${className} object`}
            d="M749.645 679.336H781.922V725.013H807.951V785.563H772.551V843.988H807.951V968.274H749.645V679.336Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL - SP */}
          <path
            id="MBA Hall Entrance 2"
            className={`${className} object`}
            d="M747.563 480.828H796.498V537.704H816.28V630.39H778.798V668.307H747.563V480.828Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-NH */}
          <path
            id="MBA Hall Entrance 4"
            className={`${className} object`}
            d="M751.727 968.274H778.7975V1025.6205H751.727z"
            onClick={handleObjectClick}
          />
          {/* Left Side */}
            <path
            id="OP/Marketing Department"
            className={`${className} object`}
            d="M244.135 573.965H286.8643V628.1059H244.135z"
            onClick={handleObjectClick}
          />
          <path
            id="FVR Building"
            className={`${className} object`}
            d="M245.804 494.43H352.044V533.979H245.804V494.43ZM273 503H246V530H273V503Z"
            onClick={handleObjectClick}
          />
          <path
            id="University Library Building"
            className={`${className} object`}
            d="M351.917 535.969H245.717V575.671H351.917V535.969Z"
            onClick={handleObjectClick}
          />          
          <path
            id="CSDL Department"
            className={`${className} object`}
            d="M162.423 496.268H216.564V564.6427H162.423z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="CMA Building Entrance near Registrar"
            className={`${className} object`}
            d="M268.623 677.132H401.893V807.265H359.205V710.217H310.27V756.535H359.205V807.265H310.27H268.623V677.132Z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="CMA Building Entrance Near PHINMA Forest"
            className={`${className} object`}
            d="M268.623 807.263H401.89300000000003V1016.798H268.623z"
            onClick={handleObjectClick}
          />
          <path
            id="Technical Vocational Building"
            className={`${className} object`}
            d="M270.705 1025.62H362.3283V1116.051H270.705z"
            onClick={handleObjectClick}
          />
          <path
            id="Finance Purchasing Department"
            className={`${className} object`}
            d="M351.917 571.26V496.268H405.017V571.26H351.917Z"
            onClick={handleObjectClick}
          />
           <path
            id="Teller"
            className={`${className} object`}
            d="M353.999 624.195V571.26H403.975V624.195H353.999Z"
            onClick={handleObjectClick}
          />
           <path
            id="Atrium"
            className={`${className} object`}
            d="M129.622 601.439C131.178 573.383 149.506 554.925 158.476 549.203L163.177 568.769C158.638 587.227 153.516 628.499 169.337 645.923C185.158 663.347 336.52 661.428 410.223 658.29V682.47C389.797 688.746 158.476 670.103 144.697 665.304C130.919 660.505 127.676 636.509 129.622 601.439Z"
            onClick={handleObjectClick}
          />
           <path
            id="Registrar Office"
            className={`${className} object`}
            d="M302.19 571.51H351.6663V621.7396H302.19z"
            onClick={handleObjectClick}
          />
           <path
            id="Module Claiming Area"
            className={`${className} object`}
            d="M249.882 178.656H285.2819V200.7124H249.882z"
            onClick={handleObjectClick}
          />
            <path
            id="Old Stage"
            className={`${className} object`}
            d="M707.258 1025.62C703.094 1002.46 706.217 950.188 752.029 926.367V949.526V1025.62H718.711H707.258Z"
            onClick={handleObjectClick}
          />
           <path
            id="Phinma Forest Pond"
            className={`${className} object`}
             d="M470.611 942.395C470.611 939.634 472.849 937.395 475.611 937.395H517.669C520.431 937.395 522.669 939.634 522.669 942.395V1005.77H470.611V942.395Z"
            onClick={handleObjectClick}
          />
           <path
            id="Student Plaza's Food Place"
            className={`${className} object`}
             d="M555.987 544.792H589.3045999999999V573.4653000000001H555.987z"
            onClick={handleObjectClick}
          />
            <path
            id="College of Allied Health And Sciences (CAHS) Office"
            className={`${className} object`}
            d="M943.303 180.862H972.4559V198.50709999999998H943.303z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Arts And Sciences (CAS) Office"
            className={`${className} object`}
            d="M943.303 202.918H972.4559V218.3574H943.303z"
            onClick={handleObjectClick}
          />
          <path
            id="Phinma Avenue"
            className={`${className} object`}
            d="M452.369 335.757H749.145V495.76800000000003H452.369z"
            onClick={handleObjectClick}
          />
            <path
            id="Pedestrian Entrance/Exit"
            className={`${className} object`}
            d="M801.704 399.22L1098.44 352.902V419.071L801.704 458.772V399.22Z"
            onClick={handleObjectClick}
          />

            <path
            id="General Services Department(GSD) Office"
            className={`${className} object`}
            d="M589.304 282.321H618.4569V304.3774H589.304z"
            onClick={handleObjectClick}
          />
    </g>
  );
}

export default Objects;
