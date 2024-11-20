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
               d="M567.674 96.9923H761.374V110.6742H567.674z"
              onClick={handleLegendClick}
            />
           <path
              id="ITS Department Building"
              className={`${className} legend`}
              d="M835.674 62.5455H1029.374V76.2274H835.674z"
              onClick={handleLegendClick}
            /> 
            <path
              id="University Chapel"
              className={`${className} legend`}
              d="M835.674 164.621H1029.374V178.30290000000002H835.674z"
              onClick={handleLegendClick}
            />
            <path
              id="University Clinic"
              className={`${className} legend`}
              d="M835.674 181.728H1029.374V195.40990000000002H835.674z"
              onClick={handleLegendClick}
            /> 
           <path
            id="College of Education And Liberal Arts (CELA) Office"
            className={`${className} legend`}
            d="M567.674 113.815H761.374V127.4969H567.674z"
            onClick={handleLegendClick}
          />
            <path
              id="College of Law Office"
              className={`${className} legend`}
              d="M567.674 164.567H761.374V178.24890000000002H567.674z"
              onClick={handleLegendClick}
            />
            <path
              id="Office of Graduate and Professionals"
              className={`${className} legend`}
              d="M835.674 79.6531H1029.374V93.335H835.674z"
              onClick={handleLegendClick}
            />
            <path
              id="PEDRO Hub Office"
              className={`${className} legend`}
              d="M835.674 96.4756H1029.374V110.1575H835.674z"
              onClick={handleLegendClick}
            /> 
            <path
              id="University Library Building"
              className={`${className} legend`}
              d="M835.674 198.836H1029.374V212.51790000000003H835.674z"
              onClick={handleLegendClick}
            />
            <path
              id="College of Arts And Sciences (CAS) Office"
              className={`${className} legend`}
              d="M567.674 79.8848H761.374V93.5667H567.674z"
              onClick={handleLegendClick}
            />
          <path
            id="College of Engineering And Achitecture (CEA) Office"
            className={`${className} object`}
            d="M567.674 130.922H761.374V144.6039H567.674z"
            onClick={handleLegendClick}
          />
          <path
            id="College of Information Technology Education (CITE) Office"
            className={`${className} object`}
            d="M567.674 147.745H761.374V161.42690000000002H567.674z"
            onClick={handleLegendClick}
          />
            <path
              id="CSDL Department"
              className={`${className} legend`}
              d="M567.674 45.9547H761.374V59.6366H567.674z"
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
              d="M567.674 181.675H761.374V195.35690000000002H567.674z"
              onClick={handleLegendClick}
            />
            <path
              id="Finance Purchasing Department"
              className={`${className} legend`}
              d="M567.674 198.782H761.374V212.46390000000002H567.674z"
              onClick={handleLegendClick}
            /> 
            <path
              id="Registrar Office"
              className={`${className} legend`}
              d="M835.674 113.583H1029.374V127.2649H835.674z"
              onClick={handleLegendClick}
            />
              <path
              id="College of Allied Health And Sciences (CAHS) Office"
              className={`${className} legend`}
              d="M567.674 62.7771H761.374V76.459H567.674z"
              onClick={handleLegendClick}
            />
            <path
              id="General Services Department(GSD) Office"
              className={`${className} legend`}
              d="M835.674 45.438H1029.374V59.1199H835.674z"
              onClick={handleLegendClick}
            /> 
          <path
            id="University Canteen"
            className={`${className} legend`}
            d="M835.674 147.513H1029.374V161.19490000000002H835.674z"
            onClick={handleLegendClick}
          />
          <path
            id="Senior High School (SHS) Office"
            className={`${className} legend`}
            d="M835.674 130.691H1029.374V144.37290000000002H835.674z"
            onClick={handleLegendClick}
          />
      </g>
    );
  }
  
  export default Legends;
  