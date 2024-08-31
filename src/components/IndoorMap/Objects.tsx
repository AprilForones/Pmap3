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
             d="M8 209H26V306H8z"
            onClick={handleObjectClick}
            />
           <path
              id="BASIC ED Building"
              className={`${className} object`}
              d="M166 29L123.5 25L117 142H166V29Z"
              onClick={handleObjectClick}
            /> 
          <path
            id="Gymnasium"
            className={`${className} object`}
             d="M218 26H347V139H218z"
            onClick={handleObjectClick}
          />
          <path
            id="CMA's Comfort Room"
            className={`${className} object`}
            d="M154 325H167V334H154z"
            onClick={handleObjectClick}
          />
          <path
             id="BASIC ED's Comfort Room"
            className={`${className} object`}
            d="M153 50H166V58H153z"
            onClick={handleObjectClick}
          />
          <path
            id="PHINMA Forest"
            className={`${className} object`}
             d="M217 289H361V465H217z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE Department"
            className={`${className} object`}
             d="M176.5 26.5H206.5V139.5H176.5z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE's Comfort Room"
            className={`${className} object`}
             d="M185 85H198V96H185z"
            onClick={handleObjectClick}
          />
          <path
            id="Gymnasium's Comfort Room"
            className={`${className} object`}
             d="M232 28H245V36H232z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building"
            className={`${className} object`}
            d="M393.25 114C399.831 82 403.532 28.6667 404.56 6L516.115 26L514.573 35.5C516.629 33.9 522.284 34.8333 524.854 35.5V55L533.079 56.5L527.939 136L514.573 133.5C515.395 137.9 514.23 146.333 513.544 150L500.692 153V162.5L396.849 178L393.25 139.5C391.708 140.167 388.418 139.7 387.596 132.5C386.773 125.3 392.312 124.421 395.225 124.921L393.25 114Z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="Student Plaza Entrance 01"
            className={`${className} object`}
            d="M217 224H265V289H217z"
            onClick={handleObjectClick}
          />
          {/* Lower part */}
          <path
            id="Student Plaza Entrance 02"
            className={`${className} object`}
            d="M265 224H341V289H265z"
            onClick={handleObjectClick}
          />
           {/* Left part */}
           <path
            id="Mc Donald's"
            className={`${className} object`}
             d="M27 172H62V203H27z"
            onClick={handleObjectClick}
          />
           {/* Right part */}
           <path
            id="ITS Department Building"
            className={`${className} object`}
            d="M78 194H104V222H78z"
            onClick={handleObjectClick}
          />
          {/* Left part */}
          <path
            id="North Hall Entrance 1"
            className={`${className} object`}
             d="M177 467H243V504H177z"
            onClick={handleObjectClick}
          />

          <path
            id="North Hall's Comfort room 1"
            className={`${className} object`}
             d="M179 495H192V506H179z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="North Hall Entrance 2"
            className={`${className} object`}
            d="M247 468H386V505H247z"
            onClick={handleObjectClick}
          />
          <path
            id="North Hall's Comfort room 2"
            className={`${className} object`}
            d="M311 495H324V506H311z"
            onClick={handleObjectClick}
          />          
          {/* Ground Floor           */}
          <path
            id="PTC Building"
            className={`${className} object`}
            d="M25.5 204.5H62.5V325.5H25.5z"
            onClick={handleObjectClick}
          />
          {/* second floor*/}
          <path
            id="MBA Hall's Comfort Room 1"
            className={`${className} object`}
             d="M368 70H381V79H368z"
            onClick={handleObjectClick}
          />
          <path
            id="MBA Hall's Comfort Room 2"
            className={`${className} object`}
            d="M374 364H387V373H374z"
            onClick={handleObjectClick}
          />
          <path
            id="University Chapel"
            className={`${className} object`}
            d="M379 296H392V305H379z"
            onClick={handleObjectClick}
          />
          <path
            id="University Clinic"
            className={`${className} object`}
            d="M379 306H392V315H379z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Comfort Room 1"
            className={`${className} object`}
            d="M493 34H506V43H493z"
            onClick={handleObjectClick}
          /> 
          <path
            id="Riverside Building's Comfort Room 2"
            className={`${className} object`}
            d="M415 124H428V134H415z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Parking Lot Area"
            className={`${className} object`}
            d="M532.998 57L531.456 80.5L529.913 108.5L528.371 136.5L505.752 131.5L508.322 105.5L510.892 77.5L513.463 53.5L532.998 57Z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Food Hub Area"
            className={`${className} object`}
            d="M493 79H508V92H493z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Law Office"
            className={`${className} object`}
            d="M109.25 315.25H123.75V324.75H109.25z"
            onClick={handleObjectClick}
          /> 
          <path
            id="Office of  Graduate and Professionals"
            className={`${className} object`}
            d="M94.25 315.25H108.75V324.75H94.25z"
            onClick={handleObjectClick}
          />
          <path
            id="PEDRO Hub Office"
            className={`${className} object`}
            d="M94.25 305.25H108.75V314.75H94.25z"
            onClick={handleObjectClick}
          /> 
          <path
            id="PTC's Comfort Room"
            className={`${className} object`}
            d="M28 314H41V325H28z"
            onClick={handleObjectClick}
          />
          <path
            id="4 wheels parking area"
            className={`${className} object`}
            d="M124 171H190V216H124z"
            onClick={handleObjectClick}
          />
          <path
            id="Uniform Claiming Area"
            className={`${className} object`}
            d="M119 230H128V238H119V230Z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area 01"
            className={`${className} object`}
            d="M124 141H166V156H124z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area 02"
            className={`${className} object`}
            d="M166 77H176V136H166z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area 03"
            className={`${className} object`}
            d="M207 77H217V137H207z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area 04"
            className={`${className} object`}
            d="M348 79H358V140H348z"
            onClick={handleObjectClick}
          />                              
          <path
            id="Motorcycle parking area 05"
            className={`${className} object`}
            d="M342 225H359V286H342z"
            onClick={handleObjectClick}
          />                                                                                                                                  
           <path
            id="MBA Engineering Building"
            className={`${className} object`}
             d="M399.5 13L348 20V66H359.5V150.5H382.5V66H387V90H398V66L399.5 13Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-P.Ave */}
          <path
            id="MBA Hall Entrance 1"
            className={`${className} object`}
           d="M359 154H384V216H359z"
            onClick={handleObjectClick}
          />
          {/* MBA Hall -PF */}
          <path
            id="MBA Hall Entrance 3"
            className={`${className} object`}
            d="M361 290H387V439H361z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL - SP */}
          <path
            id="MBA Hall Entrance 2"
            className={`${className} object`}
            d="M359 218H383V289H359z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-NH */}
          <path
            id="MBA Hall Entrance 4"
            className={`${className} object`}
            d="M361 439H374V465H361z"
            onClick={handleObjectClick}
          />
          {/* Left Side */}
            <path
            id="OP/Marketing Department"
            className={`${className} object`}
            d="M117.5 260.5H137.5V284.5H117.5z"
            onClick={handleObjectClick}
          />
          <path
            id="FVR Building"
            className={`${className} object`}
            d="M169 224H118V242H169V224Z"
            onClick={handleObjectClick}
          />
          <path
            id="University Library Building"
            className={`${className} object`}
            d="M169 243H118V261H169V243Z"
            onClick={handleObjectClick}
          />          
          <path
            id="CSDL/ITS Building"
            className={`${className} object`}
            d="M78 225H104V256H78z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="CMA Building Entrance 1"
            className={`${className} object`}
            d="M359 178H384V208H359z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="CMA Building Entrance 2"
            className={`${className} object`}
            d="M129 366H193V461H129z"
            onClick={handleObjectClick}
          />
          <path
            id="Technical Vocational Building"
            className={`${className} object`}
            d="M130 465H174V506H130z"
            onClick={handleObjectClick}
          />
          <path
            id="Finance Purchasing Department"
            className={`${className} object`}
            d="M169 259V225H194.5V259H169Z"
            onClick={handleObjectClick}
          />
           <path
            id="Teller"
            className={`${className} object`}
            d="M170 283V259H194V283H170Z"
            onClick={handleObjectClick}
          />
           <path
            id="Atrium"
            className={`${className} object`}
            d="M62.2479 272.683C62.9952 259.963 71.797 251.594 76.1045 249L78.362 257.871C76.1823 266.239 73.7224 284.951 81.3202 292.851C88.918 300.751 161.606 299.881 197 298.458V309.421C187.191 312.266 76.1045 303.814 69.4876 301.638C62.8706 299.462 61.3137 288.583 62.2479 272.683Z"
            onClick={handleObjectClick}
          />
           <path
            id="Registrar Office"
            className={`${className} object`}
            d="M138.25 259.25H168.75V281.75H138.25z"
            onClick={handleObjectClick}
          />
           <path
            id="Module Claiming Area"
            className={`${className} object`}
            d="M120 81H137V91H120z"
            onClick={handleObjectClick}
          />
            <path
            id="Old Stage"
            className={`${className} object`}
            d="M339.645 465C337.645 454.5 339.145 430.8 361.145 420V430.5V465H345.145H339.645Z"
            onClick={handleObjectClick}
          />
            <path
            id="University Chapel"
            className={`${className} object`}
            d="M380 293H390V304H380z"
            onClick={handleObjectClick}
          />
          <path
            id="University Clinic"
            className={`${className} object`}
             d="M380 305H390V316H380z"
            onClick={handleObjectClick}
          />
           <path
            id="Phinma Forest Pond"
            className={`${className} object`}
             d="M226 430C226 427.239 228.239 425 231 425H246C248.761 425 251 427.239 251 430V456H226V430Z"
            onClick={handleObjectClick}
          />
           <path
            id="Student Plaza's Food Hub"
            className={`${className} object`}
             d="M272 247H287V260H272z"
            onClick={handleObjectClick}
          />
            <path
            id="College of Allied Health And Sciences (CAHS) Office"
            className={`${className} object`}
            d="M453 82H467V90H453z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Arts And Sciences (CAS) Office"
            className={`${className} object`}
            d="M453 92H467V99H453z"
            onClick={handleObjectClick}
          />
          <path
            id="Phinma Avenue"
            className={`${className} object`}
            d="M217 152H360V225H217z"
            onClick={handleObjectClick}
          />
            <path
            id="Pedistrian Entrance/Exit"
            className={`${className} object`}
            d="M385 181L527.5 160V190L385 208V181Z"
            onClick={handleObjectClick}
          />
    </g>
  );
}

export default Objects;
