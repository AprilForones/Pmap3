interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    <g id="Objects">
      <path
            id="Front Entrance"
            className={`${className} object`}
             d="M26.7676 189.466H39.833200000000005V258.7225H26.7676z"
            onClick={handleObjectClick}
            />
           <path
              id="BASIC ED BLDG"
              className={`${className} object`}
               d="M139 27H200V100H139z"
              onClick={handleObjectClick}
            /> 
          <path
            id="GYMNASIUM"
            className={`${className} object`}
           d="M248.669 30.4163H373.344V99.22059999999999H248.669z"
            onClick={handleObjectClick}
          />
          <path
            id="VEHICLE PARKING"
            className={`${className} object`}
            d="M138.589 136.726H237.64V188.5895H138.589z"
            onClick={handleObjectClick}
          />
          <path
             id="PHINMA AVE"
            className={`${className} object`}
            d="M263.303 127.139H393.462V188.5892H263.303z"
            onClick={handleObjectClick}
          />
          <path
            id="PHINMA FOREST"
            className={`${className} object`}
              d="M264 253H393V377H264z"
            onClick={handleObjectClick}
          />
          <path
            id="CELA DEPARTMENT"
            className={`${className} object`}
             d="M208 28H240.6115V99.6803H208z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Bldg"
            className={`${className} object`}
            d="M443.586 28.0881H543.3185V127.2958H443.586z"
            onClick={handleObjectClick}
          />
          <path
            id="STUDENT PLAZA"
            className={`${className} object`}
             d="M264.5 191.5H372.5V254.5H264.5z"
            onClick={handleObjectClick}
          />
          <path
            id="NORTH HALL"
            className={`${className} object`}
             d="M219.102 383.616H392.962V411.0607H219.102z"
            onClick={handleObjectClick}
          />
          <path
            id="PTC Bldg"
            className={`${className} object`}
             d="M40.7803 137.548H87.2835V286.374H40.7803z"
            onClick={handleObjectClick}
          />
           <path
            id="Engineering Bldg."
            className={`${className} object`}
             d="M375.344 28.0881H441.586V67.3107H375.344z"
            onClick={handleObjectClick}
          />
          <path
            id="MBA Hall"
            className={`${className} object`}
           d="M395.382 69.3108H441.5858V411.0608H395.382z"
            onClick={handleObjectClick}
          />
          <path
            id="OP"
            className={`${className} object`}
            d="M139.089 218.452H179.5476V246.3076H139.089z"
            onClick={handleObjectClick}
          />
          <path
            id="FVR BLDG"
            className={`${className} object`}
             d="M139.229 187.911H218.0825V216.4513H139.229z"
            onClick={handleObjectClick}
          />
          <path
            id="CSDL/ITS BLDG"
            className={`${className} object`}
            d="M102.096 155.865H128.8221V216.4522H102.096z"
            onClick={handleObjectClick}
          />
          <path
            id="CMA BLDG"
            className={`${className} object`}
             d="M178.5 269.5H239.5V377.5H178.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Technical Vocational Bldg."
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
            id="Vehicle Entrance"
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
