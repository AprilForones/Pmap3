interface ObjectsProps {
    handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
    className?: string;
  }
   function Legends({ handleObjectClick, className }: ObjectsProps) {
    // function Legends({ }: ObjectsProps) {
    return (
      <g id="Legends">
            <path
              id="CCJE Department"
              className={`${className} object`}
               d="M309 742H58V807H309V742ZM219 756H183V793H219V756Z"
              onClick={handleObjectClick}
            />
           <path
              id="ITS Department Building"
              className={`${className} object`}
              d="M424.5 954.5H491.5V1011.5H424.5z"
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
              id="Finance Purchasing Department"
              className={`${className} object`}
              d="M572 819H498V769H572V819Z"
              onClick={handleObjectClick}
            /> 
            <path
              id="Registrar Office"
              className={`${className} object`}
              d="M574.5 821.5H626.5V873.5H574.5z"
              onClick={handleObjectClick}
            />
              <path
              id="College of Allied Health And Sciences (CAHS) Office"
              className={`${className} object`}
              d="M226.5 211.5H252.5V228.5H226.5z"
              onClick={handleObjectClick}
            />
            <path
              id="General Services Department(GSD) Office"
              className={`${className} object`}
              d="M277.5 554.5H308.5V590.5H277.5z"
              onClick={handleObjectClick}
            /> 
            <path
            id="Riverside Building's Parking Lot Area"
            className={`${className} object`}
            d="M125.816 63.0655L177.687 66.2771L239.491 69.4887L301.296 72.7003L290.259 119.804L232.869 114.451L171.065 109.098L118.09 103.746L125.816 63.0655Z"
            onClick={handleObjectClick}
          />
      </g>
    );
  }
  
  export default Legends;
  