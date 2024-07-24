interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    <g id="Objects">
      <path
            id="School Front Entrance"
            className={`${className} object`}
             d="M26.268 200.966h14.065v70.256H26.268v-70.256z"
            onClick={handleObjectClick}
            />
           <path
              id="BASIC ED Building"
              className={`${className} object`}
               d="M139 39H200V112H139z"
              onClick={handleObjectClick}
            /> 
          <path
            id="Gymnasium"
            className={`${className} object`}
             d="M248.669 42.4163H373.344V111.22059999999999H248.669z"
            onClick={handleObjectClick}
          />
          {/* <path
            id="School Vehicle Parking"
            className={`${className} object`}
            d=""
            onClick={handleObjectClick}
          /> */}
          {/* <path
             id="PHINMA Avenue"
            className={`${className} object`}
            d=""
            onClick={handleObjectClick}
          /> */}
          <path
            id="PHINMA Forest"
            className={`${className} object`}
             d="M264 265H393V389H264z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE Department"
            className={`${className} object`}
             d="M204 40H245V112H204z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building"
            className={`${className} object`}
            d="M443.586 40.0881H543.3185V139.29579999999999H443.586z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          {/* <path
            id="Student Plaza Entrance 1"
            className={`${className} object`}
            d="M294 192H338V219H294z"
            onClick={handleObjectClick}
          /> */}
          {/* Lower part */}
          <path
            id="Student Plaza"
            className={`${className} object`}
            d="M264.5 200.5H372.5V263.5H264.5z"
            onClick={handleObjectClick}
          />
           {/* Left part */}
           {/* <path
            id="Student Plaza Entrance 3"
            className={`${className} object`}
             d="M268 192H296V249H268z"
            onClick={handleObjectClick}
          /> */}
           {/* Right part */}
           {/* <path
            id="Student Plaza Entrance 4"
            className={`${className} object`}
            d="M338 190H368V249H338z"
            onClick={handleObjectClick}
          /> */}
          {/* Left part */}
          <path
            id="North Hall Entrance 1"
            className={`${className} object`}
             d="M220 397H284V422H220z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="North  Hall Entrance 2"
            className={`${className} object`}
            d="M287 397H392V422H287z"
            onClick={handleObjectClick}
          />
          {/* Ground Floor           */}
          <path
            id="PTC Building Entrance"
            className={`${className} object`}
            d="M40.7803 146.548H87.2835V295.374H40.7803z"
            onClick={handleObjectClick}
          />
          {/* second floor*/}
          {/* <path
            id="PTC Building Entrance 2"
            className={`${className} object`}
            d="M87.5 236.5H101.5V264.5H87.5z"
            onClick={handleObjectClick}
          /> */}
           <path
            id="Engineering Building"
            className={`${className} object`}
             d="M375.344 40.0881H441.586V79.3107H375.344z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-P.Ave */}
          <path
            id="MBA Hall Entrance 1"
            className={`${className} object`}
            d="M397 81H440V187H397z"
            onClick={handleObjectClick}
          />
          {/* MBA Hall -PF */}
          <path
            id="MBA Hall Entrance 3"
            className={`${className} object`}
            d="M396 265H441V387H396z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL - SP */}
          <path
            id="MBA Hall Entrance 2"
            className={`${className} object`}
            d="M396 187H441V261H396z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-NH */}
          <path
            id="MBA Hall Entrance 4"
            className={`${className} object`}
            d="M398 388H439V420H398z"
            onClick={handleObjectClick}
          />
          {/* Left Side */}
            <path
            id="OP/Marketing Department"
            className={`${className} object`}
            d="M140 231H174V258H140z"
            onClick={handleObjectClick}
          />
          <path
            id="FVR Building"
            className={`${className} object`}
            d="M139 200H218V213H139z"
            onClick={handleObjectClick}
          />
          <path
            id="University Library Building"
            className={`${className} object`}
            d="M139 214H218V230H139z"
            onClick={handleObjectClick}
          />          
          <path
            id="CSDL/ITS Building"
            className={`${className} object`}
            d="M101 169H127.7261V229.5872H101z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="CMA Building Entrance 1"
            className={`${className} object`}
            d="M179 282H239V305H179z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="CMA Building Entrance 2"
            className={`${className} object`}
            d="M179 305H239V389H179z"
            onClick={handleObjectClick}
          />
          <path
            id="Technical Vocational Building"
            className={`${className} object`}
            d="M178.605 395.616H217.1018V423.0607H178.605z"
            onClick={handleObjectClick}
          />
          <path
            id="Finance Purchasing Department"
            className={`${className} object`}
            d="M220 200H239V244H220z"
            onClick={handleObjectClick}
          />
           <path
            id="Teller"
            className={`${className} object`}
            d="M220 245H239V263H220z"
            onClick={handleObjectClick}
          />
           <path
            id="Atrium"
            className={`${className} object`}
            d="M87.2832 263.327H219.44219999999999V281.1721H87.2832z"
            onClick={handleObjectClick}
          />
           <path
            id="Registrar Office"
            className={`${className} object`}
            d="M184 230h34v33h-34v-33z"
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
            d="M390.514 356.877c.404-.122.735-.208.986-.266V387.5h-31.999c.003-.066.008-.142.018-.23.058-.494.267-1.346.909-2.678 1.286-2.667 4.276-7.196 11.109-14.537 5.733-6.161 10.892-9.553 14.602-11.403 1.856-.926 3.35-1.467 4.375-1.775z"
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
            d="M442 148H556V191H442z"
            onClick={handleObjectClick}
          />
    </g>
  );
}

export default Objects;
