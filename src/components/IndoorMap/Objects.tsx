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
              d="M166 29L123.5 25L120.5 75H137V97H120.5L117 142H166V71H151.5V45.5H166V29Z"
              onClick={handleObjectClick}
            /> 
          <path
            id="Gymnasium"
            className={`${className} object`}
             d="M348 25H217V140H348V25ZM226 28H251V45H226V28ZM276 122H307V138H276V122Z"
            onClick={handleObjectClick}
          />
          <path
            id="CMA's Comfort Room"
            className={`${className} object`}
            d="M154 325H167V337H154z"
            onClick={handleObjectClick}
          />
          <path
             id="BASIC ED's Comfort Room"
            className={`${className} object`}
            d="M153 50H166V62H153z"
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
             d="M176 26H207V81V100.5H202.5V81H179.5V100.5H207V140H176V26Z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE's Comfort Room"
            className={`${className} object`}
             d="M185 85H198V97H185z"
            onClick={handleObjectClick}
          />
          <path
            id="Gymnasium's Comfort Room"
            className={`${className} object`}
             d="M232 28H244V38H232z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building"
            className={`${className} object`}
            d="M404.56 6C403.532 28.6667 399.83 82 393.25 114L395.225 124.921C392.312 124.421 386.773 125.3 387.595 132.5C388.418 139.7 391.708 140.167 393.25 139.5L396.849 178L500.692 162.5V153L513.544 150C514.23 146.333 515.395 137.9 514.572 133.5L516.048 133.776L528.371 136.5L529.913 108.5L531.044 87.9792L533.079 56.5L524.854 55V35.5C522.445 34.8751 517.326 34.016 515 35.2282V32.8659L516.115 26L404.56 6ZM513.302 55H489V28H515V32.8659L514.572 35.5C514.701 35.3997 514.844 35.3093 515 35.2282V53.7754L513.463 53.5L513.302 55ZM511.696 70L513.302 55H515V53.7754L532.998 57L531.456 80.5L531.044 87.9792L527.938 136L516.048 133.776L505.752 131.5L508.322 105.5L509.102 97H514V70H511.696ZM511.696 70L510.892 77.5L509.102 97H486V70H511.696ZM475 75H447V106H475V75ZM406 116H437V140H406V116Z"
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
            d="M341.126 224.167H265.097V244H265V262H265.097V288.918H341.126V224.167ZM265.097 262H290V244H265.097V262Z"
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
            d="M76.026 191.292H107.0377V224.1658H76.026z"
            onClick={handleObjectClick}
          />
          {/* Left part */}
          <path
            id="North Hall Entrance 1"
            className={`${className} object`}
             d="M177 467H243V504H201V486H177V467Z"
            onClick={handleObjectClick}
          />

          <path
            id="North Hall's Comfort Room 1"
            className={`${className} object`}
             d="M179 495H192V507H179z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="North Hall Entrance 2"
            className={`${className} object`}
            d="M247 467H386V505H334V489H298V505H247V467Z"
            onClick={handleObjectClick}
          />        
          {/* Ground Floor*/}
          <path
            id="PTC Building"
            className={`${className} object`}
            d="M24 203H64V311H24z"
            onClick={handleObjectClick}
          />
          {/* second floor*/}
          <path
            id="MBA Hall's Comfort Room 1"
            className={`${className} object`}
             d="M370 68H383V80H370z"
            onClick={handleObjectClick}
          />
          <path
            id="MBA Hall's Comfort Room 2"
            className={`${className} object`}
            d="M374 364H387V376H374z"
            onClick={handleObjectClick}
          />
          <path
            id="University Chapel"
            className={`${className} object`}
            d="M380.25 293.25H389.75V303.75H380.25z"
            onClick={handleObjectClick}
          />
          <path
            id="University Clinic"
            className={`${className} object`}
            d="M380.25 305.25H389.75V315.75H380.25z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building's Comfort Room 1"
            className={`${className} object`}
            d="M489 32H510V47H489z"
            onClick={handleObjectClick}
          /> 
          <path
            id="Riverside Building's Comfort Room 2"
            className={`${className} object`}
            d="M411 122H428V137H411z"
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
            d="M489 77H510V95H489z"
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
            d="M28 314H41V326H28z"
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
            d="M120 81H137V91H120z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area in front of Basic ED Building"
            className={`${className} object`}
            d="M117 141H169V159H117z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of Basic Ed."
            className={`${className} object`}
            d="M166 77H176V136H166z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of CCJE."
            className={`${className} object`}
            d="M207 77H217V137H207z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking right side of Gymnasium."
            className={`${className} object`}
            d="M348 79H358V140H348z"
            onClick={handleObjectClick}
          />                              
          <path
            id="Motorcycle parking right side of SP"
            className={`${className} object`}
            d="M342 225H359V286H342z"
            onClick={handleObjectClick}
          />                                                                                                                                  
           <path
            id="MBA Engineering Building"
            className={`${className} object`}
            d="M399.5 13L348 20V66H359.5V150.5H382.5V100.5V84.5H365.5V66H382.5H387V90H398V66L399.5 13Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL-P.Ave */}
          <path
            id="MBA Hall Entrance 1"
            className={`${className} object`}
           d="M360 151H383V217H360z"
            onClick={handleObjectClick}
          />
          {/* MBA Hall -PF */}
          <path
            id="MBA Hall Entrance 3"
            className={`${className} object`}
            d="M360 308H375.5V328.71H388V356.162H371V382.651H388V439H360V308Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL - SP */}
          <path
            id="MBA Hall Entrance 2"
            className={`${className} object`}
            d="M359 218H382.5V243.787H392V285.809H374V303H359V218Z"
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
            d="M118.042 224.167H169.061V242.098H118.042V238H131V230H118.042V224.167ZM118.042 230H118V238H118.042V230Z"
            onClick={handleObjectClick}
          />
          <path
            id="University Library Building"
            className={`${className} object`}
            d="M169.061 243.094H118.042V261.025H169.061V243.094Z"
            onClick={handleObjectClick}
          />          
          <path
            id="CSDL/ITS Building"
            className={`${className} object`}
            d="M76.026 224.167H106.03729999999999V258.037H76.026z"
            onClick={handleObjectClick}
          />
          {/* upper part */}
          <path
            id="CMA Building Entrance 1"
            className={`${className} object`}
            d="M129 307H193V366H172.5V322H149V343H172.5V366H149H129V307Z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="CMA Building Entrance 2"
            className={`${className} object`}
            d="M129.046 365.624H193.0701V460.26070000000004H129.046z"
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
            d="M169.061 259.033V224.167H196.071V259.033H169.061Z"
            onClick={handleObjectClick}
          />
           <path
            id="Teller"
            className={`${className} object`}
            d="M169.061 282.941V259.033H196.071V282.941H169.061Z"
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
            d="M122 81H132V91H122z"
            onClick={handleObjectClick}
          />
            <path
            id="Old Stage"
            className={`${className} object`}
            d="M339.645 465C337.645 454.5 339.145 430.8 361.145 420V430.5V465H345.145H339.645Z"
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
             d="M265 244H290V262H265z"
            onClick={handleObjectClick}
          />
            <path
            id="College of Allied Health And Sciences (CAHS) Office"
            className={`${className} object`}
            d="M449 81H470V90H449z"
            onClick={handleObjectClick}
          />
          <path
            id="College of Arts And Sciences (CAS) Office"
            className={`${className} object`}
            d="M449 91H470V102H449z"
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

            <path
            id="General Services Department(GSD) Office"
            className={`${className} object`}
            d="M283 128H297V138H283z"
            onClick={handleObjectClick}
          />
    </g>
  );
}

export default Objects;
