interface  LegendsProps{
  handleLegendClick: (e: React.MouseEvent<SVGPathElement>) => void;
    className?: string;

  }
   function Legends({ handleLegendClick, className }: LegendsProps) {
    // function Legends({ }: ObjectsProps) {
    return (
      <g id="Legends">
            <path
              id="CCJE Department"
              className={`${className} legend`}
               d="M1385 225H1784V270H1385z"
              onClick={handleLegendClick}
            />
           <path
              id="ITS Department Building"
              className={`${className} legend`}
              d="M1385 634H1784V679H1385z"
              onClick={handleLegendClick}
            /> 
            <path
              id="University Chapel"
              className={`${className} legend`}
              d="M1385 942H1784V987H1385z"
              onClick={handleLegendClick}
            />
            <path
              id="University Clinic"
              className={`${className} legend`}
              d="M1385 994H1784V1039H1385z"
              onClick={handleLegendClick}
            /> 
           <path
            id="College of Education And Liberal Arts (CELA) Office"
            className={`${className} legend`}
            d="M1385 275H1784V320H1385z"
            onClick={handleLegendClick}
          />
            <path
              id="College of Law Office"
              className={`${className} legend`}
              d="M1385 427H1784V472H1385z"
              onClick={handleLegendClick}
            />
            <path
              id="Office of Graduate and Professionals"
              className={`${className} legend`}
              d="M1385 686H1784V731H1385z"
              onClick={handleLegendClick}
            />
            <path
              id="PEDRO Hub Office"
              className={`${className} legend`}
              d="M1385 736H1784V781H1385z"
              onClick={handleLegendClick}
            /> 
            <path
              id="University Library Building"
              className={`${className} legend`}
              d="M1385 1044H1784V1089H1385z"
              onClick={handleLegendClick}
            />
            <path
              id="College of Arts And Sciences (CAS) Office"
              className={`${className} legend`}
              d="M1385 173H1784V218H1385z"
              onClick={handleLegendClick}
            />
          <path
            id="College of Engineering And Achitecture (CEA) Office"
            className={`${className} object`}
            d="M1385 325H1784V370H1385z"
            onClick={handleLegendClick}
          />
          <path
            id="College of Information Technology Education (CITE) Office"
            className={`${className} object`}
            d="M1385 377H1784V422H1385z"
            onClick={handleLegendClick}
          />
            <path
              id="CSDL Department"
              className={`${className} legend`}
              d="M1385 73H1784V118H1385z"
              onClick={handleLegendClick}
            />
            {/* upper part */}
            {/* <path
              id="CMA Building Entrance near Registrar"
              className={`${className} legend`}
              d="M705 863.5V864H705.5H757.5H758H807.5V901.5H678.5V772.5H807.5V863H758.5V812V811.5H758H705.5H705V812V863.5Z"
              onClick={handleObjectClick}
            />  */}
            {/* Right part */}
            <path
              id="College of Management and Accounting (CMA) Office"
              className={`${className} legend`}
              d="M1385 477H1784V522H1385z"
              onClick={handleLegendClick}
            />
            <path
              id="Finance Purchasing Department"
              className={`${className} legend`}
              d="M1385 534H1784V579H1385z"
              onClick={handleLegendClick}
            /> 
            <path
              id="Registrar Office"
              className={`${className} legend`}
              d="M1385 786H1784V831H1385z"
              onClick={handleLegendClick}
            />
              <path
              id="College of Allied Health And Sciences (CAHS) Office"
              className={`${className} legend`}
              d="M1385 123H1784V168H1385z"
              onClick={handleLegendClick}
            />
            <path
              id="General Services Department(GSD) Office"
              className={`${className} legend`}
              d="M1385 584H1784V629H1385z"
              onClick={handleLegendClick}
            /> 
          <path
            id="University Canteen"
            className={`${className} legend`}
            d="M1385 892H1784V937H1385z"
            onClick={handleLegendClick}
          />
          <path
            id="Senior High School (SHS) Office"
            className={`${className} legend`}
            d="M1385 842H1784V887H1385z"
            onClick={handleLegendClick}
          />
      </g>
    );
  }
  
  export default Legends;
  