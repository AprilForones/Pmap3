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
             d="M460.5 1122.5H677.5V1157.5H460.5z"
            onClick={handleObjectClick}
            />
           <path
              id="BASIC ED Building"
              className={`${className} object`}
              d="M64.0114 827.315L55.1823 915.819L165.547 922.066V887.706H214.107V922.066L313.436 929.355V827.315H156.718V857.511H100.432V827.315H64.0114Z"
              onClick={handleObjectClick}
            /> 
          <path
            id="Gymnasium"
            className={`${className} object`}
             d="M55.1824 448.312L55.1824 721.111H309.021V448.312H55.1824ZM61.8042 702.369V650.308H99.3282V702.369H61.8042ZM269.29 598.247V533.692H304.607V598.247H269.29Z"
            onClick={handleObjectClick}
          />
          <path
            id="CMA's Comfort Room"
            className={`${className} object`}
            d="M717.078 825.525H744.1496999999999V852.0124999999999H717.078z"
            onClick={handleObjectClick}
          />
          <path
             id="BASIC ED's Comfort Room"
            className={`${className} object`}
            d="M110.073 827.607H137.1447V854.0944999999999H110.073z"
            onClick={handleObjectClick}
          />
          <path
            id="PHINMA Forest"
            className={`${className} object`}
             d="M639.5 424.5H1024.5V723.5H639.5z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE Department"
            className={`${className} object`}
             d="M309 742H58V807H309V742ZM219 756H183V793H219V756Z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE's Comfort Room"
            className={`${className} object`}
             d="M187.328 760.969H214.3997V787.4565H187.328z"
            onClick={handleObjectClick}
          />
          <path
            id="Gymnasium's Comfort Room"
            className={`${className} object`}
             d="M60.3461 666.344H85.3353V688.4169H60.3461z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building"
            className={`${className} object`}
            d="M13.2438 330.529C63.2758 332.67 180.998 340.378 251.632 354.081L275.737 349.968C274.634 356.034 276.574 367.57 292.466 365.857C308.359 364.144 309.389 357.293 307.917 354.081L392.898 346.587L358.685 130.34H337.716L331.094 103.576C323.001 102.149 304.386 99.7224 294.674 101.435L295.283 98.3616L301.296 72.7003L239.491 69.4887L194.193 67.1348L124.712 62.8961L121.401 80.0246H78.3589C76.9797 85.0416 75.0833 95.7016 77.759 100.545H72.5449L57.3896 98.2236L13.2438 330.529ZM121.401 104.08V154.688H61.8042V100.545H72.5449L78.3589 101.435C78.1375 101.167 77.938 100.869 77.759 100.545H118.698L118.09 103.746L121.401 104.08ZM154.511 107.426L121.401 104.08V100.545H118.698L125.816 63.0655L177.687 66.2771L194.193 67.1348L300.192 73.6014L295.283 98.3616L290.259 119.804L232.87 114.451L214.107 112.826V102.627H154.511V107.426ZM154.511 107.426V160.935H214.107V112.826L171.065 109.098L154.511 107.426ZM202 206V264.308H270.426V206H202ZM256 277V328H309V277H256Z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="Student Plaza Entrance Near CMA Hall"
            className={`${className} object`}
            d="M497.5 622.5H637.5V722.5H497.5z"
            onClick={handleObjectClick}
          />
          {/* Lower part */}
          <path
            id="Student Plaza Entrance Near PHINMA Forest"
            className={`${className} object`}
            d="M636 464H495V623H527V559H587V623H636V464Z"
            onClick={handleObjectClick}
          />
           {/* Left part */}
           <path
            id="Mc Donald's"
            className={`${className} object`}
             d="M379.5 1045.5H446.5V1116.5H379.5z"
            onClick={handleObjectClick}
          />
           {/* Right part */}
           <path
            id="ITS Department Building"
            className={`${className} object`}
            d="M424.5 954.5H491.5V1011.5H424.5z"
            onClick={handleObjectClick}
          />
          {/* Left part */}
          <path
            id="North Hall Entrance 1"
            className={`${className} object`}
             d="M1072.24 754.43V803.909H1031.31V667.468H1111.98V753.93H1072.74H1072.24V754.43Z"
            onClick={handleObjectClick}
          />

          <path
            id="North Hall's Comfort Room 1"
            className={`${className} object`}
             d="M1092.32 773.464H1119.3917V799.9515H1092.32z"
            onClick={handleObjectClick}
          />
          <path
            id="North Hall's Comfort Room 2"
            className={`${className} object`}
             d="M1094.53 504.83H1121.6017V531.3175H1094.53z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="North Hall Entrance 2"
            className={`${className} object`}
            d="M1079.37 552.934H1114.18V658.138H1031.31V369.679H1114.18V476.966H1079.37H1078.87V477.466V552.434V552.934H1079.37Z"
            onClick={handleObjectClick}
          />        
          {/* Ground Floor*/}
          <path
            id="PTC Building"
            className={`${className} object`}
            d="M720 1046H453V1118H720V1117H687V1081H720V1046Z"
            onClick={handleObjectClick}
          />
          {/* second floor*/}
          <path
            id="MBA Hall's Comfort Room 1"
            className={`${className} object`}
             d="M149.804 375.719H176.8757V402.2065H149.804z"
            onClick={handleObjectClick}
          />
          <path
            id="MBA Hall's Comfort Room 2"
            className={`${className} object`}
            d="M803.163 367.389H830.2347V393.8765H803.163z"
            onClick={handleObjectClick}
          />
          <path
            id="University Chapel"
            className={`${className} object`}
            d="M646.5 358.5H669.5V384.5H646.5z"
            onClick={handleObjectClick}
          />
          <path
            id="University Clinic"
            className={`${className} object`}
            d="M673.5 357.5H696.5V383.5H673.5"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Comfort Room near Parking Lot"
            className={`${className} object`}
            d="M78.5 113.5H107.5V146.5H78.5z"
            onClick={handleObjectClick}
          /> 
          <path
            id="Riverside Building's Comfort Room"
            className={`${className} object`}
            d="M274.5 279.5H300.5V314.5H274.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Parking Lot Area"
            className={`${className} object`}
            d="M125.816 63.0655L177.687 66.2771L239.491 69.4887L301.296 72.7003L290.259 119.804L232.869 114.451L171.065 109.098L118.09 103.746L125.816 63.0655Z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Food Plaza"
            className={`${className} object`}
            d="M175.5 113.5H204.5V146.5H175.5z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Law Office"
            className={`${className} object`}
            d="M696.5 917.5H716.5V945.5H696.5z"
            onClick={handleObjectClick}
          /> 
          <path
            id="Office of Graduate and Professionals"
            className={`${className} object`}
            d="M696.5 947.5H716.5V975.5H696.5z"
            onClick={handleObjectClick}
          />
          <path
            id="PEDRO Hub Office"
            className={`${className} object`}
            d="M674.5 947.5H694.5V975.5H674.5z"
            onClick={handleObjectClick}
          /> 
          <path
            id="PTC's Comfort Room"
            className={`${className} object`}
            d="M692.798 1087.91H719.8697V1114.3975H692.798z"
            onClick={handleObjectClick}
          />
          <path
            id="4 wheels parking area"
            className={`${className} object`}
            d="M374.5 772.5H476.5V920.5H374.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Uniform Claiming Area"
            className={`${className} object`}
            d="M507.381 926.99V905.99H525.395V926.99H507.381Z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area in front of Basic ED Building"
            className={`${className} object`}
            d="M301.5 824.5H345.5V921.5H301.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of Basic Ed."
            className={`${className} object`}
            d="M166.5 807.5H299.5V830.5H166.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of CCJE."
            className={`${className} object`}
            d="M171.5 719.5H304.5V742.5H171.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of Gymnasium."
            className={`${className} object`}
            d="M175.5 425.5H308.5V448.5H175.5z"
            onClick={handleObjectClick}
          />                              
          <path
            id="Motorcycle parking right side of SP"
            className={`${className} object`}
            d="M494.5 424.5H637.5V462.5H494.5z"
            onClick={handleObjectClick}
          />                                                                                                                                  
           <path
            id="MBA Engineering Building"
            className={`${className} object`}
            d="M44.1459 448.312L28.6948 341.066L145.681 344.19H198.656V367.097H145.681V375.426H136.852V421.24H192.035V376.468H332.198V424.364H145.681V448.312H44.1459ZM192.035 376.468V375.426H145.681V376.468H192.035Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-P.Ave */}
          <path
            id="MBA Hall Entrance 1"
            className={`${className} object`}
           d="M334.5 376.5H476.5V424.5H334.5z"
            onClick={handleObjectClick}
          />
          {/* MBA Hall -PF */}
          <path
            id="MBA Hall Entrance 3"
            className={`${className} object`}
            d="M845.123 400.416V365.515H968.502V422.823H680.346V391.545H725.559H726.059V391.045V365.515H785.654V400.416V400.916H786.154H844.623H845.123V400.416Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL - SP */}
          <path
            id="MBA Hall Entrance 2"
            className={`${className} object`}
            d="M630.864 394.668H668.31V424.905H481.69V376.968H538.108H538.608V376.468V357.185H630.364V394.168V394.668H630.864Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-NH */}
          <path
            id="MBA Hall Entrance 4"
            className={`${className} object`}
            d="M967.5 394.5H1025.5V420.5H967.5z"
            onClick={handleObjectClick}
          />
          {/* Left Side */}
            <path
            id="OP/Marketing Department"
            className={`${className} object`}
            d="M574.5 885.5H628.5V929.5H574.5z"
            onClick={handleObjectClick}
          />
          <path
            id="FVR Building"
            className={`${className} object`}
            d="M494.801 927.186V820.941H534.381V927.186H494.801ZM503.378 899.988V926.99H530.399V899.988H503.378Z"
            onClick={handleObjectClick}
          />
          <path
            id="University Library Building"
            className={`${className} object`}
            d="M536.372 821.068V927.272H576.104V821.068H536.372Z"
            onClick={handleObjectClick}
          />          
          <path
            id="CSDL Department"
            className={`${className} object`}
            d="M497.5 953.5H564.5V1010.5H497.5z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="CMA Building Entrance near Registrar"
            className={`${className} object`}
            d="M705 863.5V864H705.5H757.5H758H807.5V901.5H678.5V772.5H807.5V863H758.5V812V811.5H758H705.5H705V812V863.5Z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="CMA Building Entrance Near PHINMA Forest"
            className={`${className} object`}
            d="M808.5 772.5H1017.5V902.5H808.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Technical Vocational Building"
            className={`${className} object`}
            d="M1026.5 811.5H1118.5V902.5H1026.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Finance Purchasing Department"
            className={`${className} object`}
            d="M572 819H498V769H572V819Z"
            onClick={handleObjectClick}
          />
           <path
            id="Teller"
            className={`${className} object`}
            d="M624.664 818.986H571.689V769.007H624.664V818.986Z"
            onClick={handleObjectClick}
          />
           <path
            id="Atrium"
            className={`${className} object`}
            d="M601.892 1043.37C573.814 1041.82 555.342 1023.49 549.616 1014.52L569.196 1009.82C587.668 1014.36 628.971 1019.48 646.409 1003.66C663.846 987.834 661.925 836.466 658.785 762.76H682.983C689.264 783.186 670.607 1014.52 665.804 1028.3C661.002 1042.08 636.988 1045.32 601.892 1043.37Z"
            onClick={handleObjectClick}
          />
           <path
            id="Registrar Office"
            className={`${className} object`}
            d="M574.5 821.5H626.5V873.5H574.5z"
            onClick={handleObjectClick}
          />
           <path
            id="Module Claiming Area"
            className={`${className} object`}
            d="M177.5 889.5H201.5V921.5H177.5z"
            onClick={handleObjectClick}
          />
            <path
            id="Old Stage"
            className={`${className} object`}
            d="M1026.39 465.711C1003.22 469.876 950.902 466.752 927.063 420.939H950.24H1026.39V454.258V465.711Z"
            onClick={handleObjectClick}
          />
           <path
            id="Phinma Forest Pond"
            className={`${className} object`}
             d="M943.1 702.369C940.338 702.369 938.1 700.131 938.1 697.369V655.308C938.1 652.547 940.338 650.308 943.1 650.308H1006.53V702.369H943.1Z"
            onClick={handleObjectClick}
          />
           <path
            id="Student Plaza's Food Place"
            className={`${className} object`}
             d="M543.5 580.5H574.5V616.5H543.5z"
            onClick={handleObjectClick}
          />
            <path
            id="College of Allied Health And Sciences (CAHS) Office"
            className={`${className} object`}
            d="M226.5 211.5H252.5V228.5H226.5z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Arts And Sciences (CAS) Office"
            className={`${className} object`}
            d="M224.5 232.5H253.5V249.5H224.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Phinma Avenue"
            className={`${className} object`}
            d="M334.5 424.5H491.5V720.5H334.5z"
            onClick={handleObjectClick}
          />
            <path
            id="Pedestrian Entrance/Exit"
            className={`${className} object`}
            d="M399.52 371.262L353.167 74.5144H419.386L459.117 371.262H399.52Z"
            onClick={handleObjectClick}
          />
            <path
            id="General Services Department(GSD) Office"
            className={`${className} object`}
            d="M277.5 554.5H308.5V590.5H277.5z"
            onClick={handleObjectClick}
          />
           <path
            id="College of Education And Liberal Arts (CELA) Office"
            className={`${className} object`}
            d="M178.5 375.5H201.5V401.5H178.5z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Engineering And Achitecture (CEA) Office"
            className={`${className} object`}
            d="M208.5 376.5H231.5V402.5H208.5z"
            onClick={handleObjectClick}
          />
          <path
            id="University Canteen"
            className={`${className} object`}
            d="M247.217 110.957H286.7833V130.8226H247.217z"
            onClick={handleObjectClick}
          />
            <path
            id="Senior High School (SHS) Office"
            className={`${className} object`}
            d="M164.5 830.5H188.5V862.5H164.5z"
            onClick={handleObjectClick}
          />
           <path
            id="College of Information Technology Education (CITE) Office"
            className={`${className} object`}
            d="M688.5 1054.5H716.5V1071.5H688.5z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Management and Accounting (CMA) Office"
            className={`${className} object`}
            d="M706.5 774.5H741.5V785.5H706.5z"
            onClick={handleObjectClick}
          />
    </g>
  );
}

export default Objects;
