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
              d="M166.018 28.9847L123.502 25L120.546 78H120V87.7793L117 141.553H166.018V28.9847ZM120 87.7793V93H140V78H120.546L120 87.7793ZM166 47H150V64H166V47Z"
              onClick={handleObjectClick}
            /> 
          <path
            id="Gymnasium"
            className={`${className} object`}
             d="M217.079 24.9272H348.128V139.487H217.079V24.9272ZM229 25H247V41H229V25ZM300 126H280V139H300V126Z"
            onClick={handleObjectClick}
          />
          <path
            id="CMA's Comfort Room"
            className={`${className} object`}
            d="M152 323H169V337H152z"
            onClick={handleObjectClick}
          />
          <path
             id="BASIC ED's Comfort Room"
            className={`${className} object`}
            d="M151 49H164V62H151z"
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
             d="M176.5 97.5H206.5V139.5H176.5z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE's Comfort Room"
            className={`${className} object`}
             d="M179 79H205V96H179z"
            onClick={handleObjectClick}
          />
          <path
            id="Gymnasium's Comfort Room"
            className={`${className} object`}
             d="M230 26H246V39H230z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building"
            className={`${className} object`}
            d="M404.71 6C403.681 28.58 399.978 81.7094 393.396 113.587L395.371 124.466C392.457 123.968 386.916 124.844 387.739 132.016C388.561 139.189 391.853 139.654 393.396 138.989L396.996 177.342L500.878 161.902V152.438L513.735 149.449C514.421 145.797 515.586 137.396 514.763 133.012L516.24 133.287L528.567 136.001L530.11 108.108L531.241 87.6591L533.277 56.3069L525.049 54.8126V35.3872C522.477 34.7231 516.82 33.7933 514.763 35.3872L516.306 25.9235L404.71 6ZM511 78.1177L511.082 77.2266L513.654 53.3184L533.196 56.805L531.653 80.2151L531.241 87.6591L528.134 135.503L516.24 133.287L505.939 131.02L508.511 105.12L509.444 95H511V78.1177ZM511 78.1177L509.444 95H489V77H511V78.1177ZM510 32H489V47H510V32ZM449 81H469V90H449V81ZM470 91H449V102H470V91ZM407 121H431V139H407V121Z"
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
             d="M177 465H226V492H177z"
            onClick={handleObjectClick}
          />

          <path
            id="North Hall's Comfort Room 1"
            className={`${className} object`}
             d="M178 495H191V506H178z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="North Hall Entrance 2"
            className={`${className} object`}
            d="M249 466H388V493H249z"
            onClick={handleObjectClick}
          />        
          {/* Ground Floor*/}
          <path
            id="PTC Building"
            className={`${className} object`}
            d="M64.0215 203.247H24.0065V326.772H27V327H43V326.772H64.0215V203.247ZM43 326.772V314H27V326.772H43Z"
            onClick={handleObjectClick}
          />
          {/* second floor*/}
          <path
            id="MBA Hall's Comfort Room 1"
            className={`${className} object`}
             d="M366 69H381V80H366z"
            onClick={handleObjectClick}
          />
          <path
            id="MBA Hall's Comfort Room 2"
            className={`${className} object`}
            d="M372 362H389V376H372z"
            onClick={handleObjectClick}
          />
          <path
            id="University Chapel"
            className={`${className} object`}
            d="M376 290H392V304H376z"
            onClick={handleObjectClick}
          />
          <path
            id="University Clinic"
            className={`${className} object`}
            d="M376.25 305.25H391.75V316.75H376.25z"
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
            d="M28 316H41V327H28z"
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
            d="M118 230H131V238H118V230Z"
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
            d="M348.128 19.9464L399.648 12.9731L398.147 65.7705V89.6787H387.143V65.7705H382.641V66H364V82H382.641V149.947H359.633V65.7705H348.128V19.9464ZM382.641 82H383V66H382.641V82Z"
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
            d="M375 305H360V438H392V319H375V305ZM372 362H389V376H372V362Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL - SP */}
          <path
            id="MBA Hall Entrance 2"
            className={`${className} object`}
            d="M359 245H392.5V281H374V304H359V245Z"
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
            d="M131 307H191V364H178V341.5V319H145.5V364H131V307Z"
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
            d="M122 80H139V92H122z"
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
            d="M281 126H299V138H281z"
            onClick={handleObjectClick}
          />
    </g>
  );
}

export default Objects;
