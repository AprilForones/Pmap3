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
             d="M26.7676 189.466H39.833200000000005V258.7225H26.7676z"
            onClick={handleObjectClick}
            />
           <path
              id="BASIC ED Building"
              className={`${className} object`}
               d="M139 27H200V100H139z"
              onClick={handleObjectClick}
            /> 
          <path
            id="Gymnasium"
            className={`${className} object`}
           d="M248.669 30.4163H373.344V99.22059999999999H248.669z"
            onClick={handleObjectClick}
          />
          <path
            id="School Vehicle Parking"
            className={`${className} object`}
            d="M138.589 136.726H237.64V188.5895H138.589z"
            onClick={handleObjectClick}
          />
          <path
             id="PHINMA Avenue"
            className={`${className} object`}
            d="M263.303 127.139H393.462V188.5892H263.303z"
            onClick={handleObjectClick}
          />
          <path
            id="PHINMA Forest"
            className={`${className} object`}
              d="M264 253H393V377H264z"
            onClick={handleObjectClick}
          />
          <path
            id="CELA Department"
            className={`${className} object`}
             d="M208 28H240.6115V99.6803H208z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building"
            className={`${className} object`}
            d="M443.586 28.0881H543.3185V127.2958H443.586z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="Student Plaza Entrance 1"
            className={`${className} object`}
            d="M294 192H338V219H294z"
            onClick={handleObjectClick}
          />
          {/* Lower part */}
          <path
            id="Student Plaza Entrance 2"
            className={`${className} object`}
            d="M295 217H338V249H295z"
            onClick={handleObjectClick}
          />
           {/* Left part */}
           <path
            id="Student Plaza Entrance 3"
            className={`${className} object`}
             d="M268 192H296V249H268z"
            onClick={handleObjectClick}
          />
           {/* Right part */}
           <path
            id="Student Plaza Entrance 4"
            className={`${className} object`}
            d="M338 190H368V249H338z"
            onClick={handleObjectClick}
          />
          {/* Left part */}
          <path
            id="North Hall Entrance 1"
            className={`${className} object`}
             d="M220 385H284V410H220z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="North  Hall Entrance 2"
            className={`${className} object`}
            d="M287 385H392V410H287z"
            onClick={handleObjectClick}
          />          
          <path
            id="PTC Building"
            className={`${className} object`}
             d="M40.7803 137.548H87.2835V286.374H40.7803z"
            onClick={handleObjectClick}
          />
           <path
            id="Engineering Building"
            className={`${className} object`}
             d="M375.344 28.0881H441.586V67.3107H375.344z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-P.Ave */}
          <path
            id="MBA Hall Entrance 1"
            className={`${className} object`}
            d="M397 69H440V175H397z"
            onClick={handleObjectClick}
          />
          {/* MBA Hall -SP */}
          <path
            id="MBA Hall Entrance 3"
            className={`${className} object`}
           d="M396 253H441V375H396z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL - PF */}
          <path
            id="MBA Hall Entrance 2"
            className={`${className} object`}
            d="M396 175H439V249H396z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-NH */}
          <path
            id="MBA Hall Entrance 4"
            className={`${className} object`}
            d="M398 376H439V408H398z"
            onClick={handleObjectClick}
          />
          {/* Left Side */}
            <path
            id="OP/Marketing Department Entrance 1"
            className={`${className} object`}
            d="M140 219H151V246H140z"
            onClick={handleObjectClick}
          />
          {/* lower Side */}
          <path
            id="OP/Marketing Department Entrance 2"
            className={`${className} object`}
            d="M151 219H179V246H151z"
            onClick={handleObjectClick}
          />
          <path
            id="FVR Building"
            className={`${className} object`}
             d="M139.229 187.911H218.0825V216.4513H139.229z"
            onClick={handleObjectClick}
          />
          <path
            id="CSDL/ITS Building"
            className={`${className} object`}
            d="M102.096 155.865H128.8221V216.4522H102.096z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="CMA Building Entrance 1"
            className={`${className} object`}
            d="M179 270H239V293H179z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="CMA Building Entrance 2"
            className={`${className} object`}
            d="M179 293H239V377H179z"
            onClick={handleObjectClick}
          />
          <path
            id="Technical Vocational Building"
            className={`${className} object`}
             d="M178.605 386.616H217.1018V414.0607H178.605z"
            onClick={handleObjectClick}
          />
          <path
            id="Finance Purchasing Department"
            className={`${className} object`}
            d="M220 188H239V232H220z"
            onClick={handleObjectClick}
          />
           <path
            id="Teller"
            className={`${className} object`}
            d="M220 233H239V251H220z"
            onClick={handleObjectClick}
          />
           <path
            id="Atrium"
            className={`${className} object`}
              d="M87.2832 251.327H219.44219999999999V269.1721H87.2832z"
            onClick={handleObjectClick}
          />
           <path
            id="Registrar Office"
            className={`${className} object`}
              d="M181.548 218.452h36.395v32.238h-36.395v-32.238z"
            onClick={handleObjectClick}
          />
           <path
            id="CMA HALL"
            className={`${className} object`}
             d="M240.5 187.5H262.5V377.5H240.5z"
            onClick={handleObjectClick}
          />
            <path
            id="Old Stage"
            className={`${className} object`}
             d="M390.514 344.877c.404-.122.735-.208.986-.266V375.5h-31.999c.003-.066.008-.142.018-.23.058-.494.267-1.346.909-2.678 1.286-2.667 4.276-7.196 11.109-14.537 5.733-6.161 10.892-9.553 14.602-11.403 1.856-.926 3.35-1.467 4.375-1.775z"
            onClick={handleObjectClick}
          />
                <path
            id="School Vehicle Entrance"
            className={`${className} object`}
             d="M40.2803 105.562H238.14030000000002V135.0067H40.2803z"
            onClick={handleObjectClick}
          />
                <path
            id="Pedistrian Entrance/Exit"
            className={`${className} object`}
             d="M442 136H556V179H442z"
            onClick={handleObjectClick}
          />
    </g>
  );
}

export default Objects;
