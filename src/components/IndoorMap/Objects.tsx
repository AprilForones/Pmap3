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
              d="M123.502 25L166.018 28.9847L166.018 49.9045H153.014V60.8624H166.018L166.018 141.553H117L120.001 87.7574V90.7477H137.008V80.7859H120.39L123.502 25ZM120.39 80.7859H120.001V87.7574L120.39 80.7859Z"
              onClick={handleObjectClick}
            /> 
          <path
            id="Gymnasium"
            className={`${className} object`}
             d="M348.128 24.9272H217.079V139.487H348.128V24.9272ZM245.09 27.9159H232.085V38.8738H245.09V27.9159Z"
            onClick={handleObjectClick}
          />
          <path
            id="CMA's Comfort Room"
            className={`${className} object`}
            d="M154.055 324.78H167.0599V335.73789999999997H154.055z"
            onClick={handleObjectClick}
          />
          <path
             id="BASIC ED's Comfort Room"
            className={`${className} object`}
            d="M153.055 49.8315H166.0599V60.7894H153.055z"
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
             d="M207.075 25.9233H176.063V139.487H207.075V25.9233ZM198.072 84.6979H185.067V95.6558H198.072V84.6979Z"
            onClick={handleObjectClick}
          />
          <path
            id="CCJE's Comfort Room"
            className={`${className} object`}
             d="M185.067 84.6978H198.0719V95.6557H185.067z"
            onClick={handleObjectClick}
          />
          <path
            id="Gymnasium's Comfort Room"
            className={`${className} object`}
             d="M232.085 27.916H245.0899V38.8739H232.085z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Building"
            className={`${className} object`}
            d="M404.71 6C403.681 28.58 399.978 81.7094 393.396 113.587L395.371 124.466C392.457 123.968 386.916 124.844 387.739 132.016C388.561 139.189 391.853 139.654 393.396 138.989L396.996 177.342L500.878 161.902V152.438L513.735 149.449C514.421 145.797 515.586 137.396 514.763 133.012L516.24 133.287L528.567 136.001L530.11 108.108L531.241 87.6591L533.277 56.3069L525.049 54.8126V35.3872C522.477 34.7231 516.82 33.7933 514.763 35.3872L516.306 25.9235L404.71 6ZM531.241 87.6591L531.653 80.2151L533.196 56.805L513.654 53.3184L511.082 77.2266L508.511 105.12L505.939 131.02L516.24 133.287L528.134 135.503L531.241 87.6591ZM506.188 33.8929H493.183V44.8509H506.188V33.8929ZM493.183 78.7208H508.189V91.6711H493.183V78.7208ZM453.168 81.7094H467.173V89.6788H453.168V81.7094ZM467.173 91.6711H453.168V98.6444H467.173V91.6711ZM415.154 123.549H428.158V134.507H415.154V123.549Z"
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
            d="M341.126 224.167H265.097V288.918H341.126V224.167ZM287.105 247.078H272.1V260.029H287.105V247.078Z"
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
             d="M247.09 465.245H176.063V505.092H178.093V506.088H191.284V505.092H247.09V465.245ZM191.284 505.092V495.13H178.093V505.092H191.284Z"
            onClick={handleObjectClick}
          />

          <path
            id="North Hall's Comfort room 1"
            className={`${className} object`}
             d="M178.093 495.13H191.28369999999998V506.0879H178.093z"
            onClick={handleObjectClick}
          />
          {/* Right part */}
          <path
            id="North Hall Entrance 2"
            className={`${className} object`}
            d="M386.143 465.245H247.09V506.088H311.115V506.088H324.119V506.088H386.143V465.245ZM324.119 506.088V495.13H311.115V506.088H324.119Z"
            onClick={handleObjectClick}
          />
          <path
            id="North Hall's Comfort room 2"
            className={`${className} object`}
            d="M311.115 495.13H324.11990000000003V506.0879H311.115z"
            onClick={handleObjectClick}
          />          
          {/* Ground Floor           */}
          <path
            id="PTC Building"
            className={`${className} object`}
            d="M64.0215 203.247H24.0065V326.772H64.0215V203.247ZM41.0128 313.822H28.0079V324.78H41.0128V313.822Z"
            onClick={handleObjectClick}
          />
          {/* second floor*/}
          <path
            id="MBA Hall's Comfort Room 1"
            className={`${className} object`}
             d="M368.136 69.7554H381.14090000000004V78.72098H368.136z"
            onClick={handleObjectClick}
          />
          <path
            id="MBA Hall's Comfort Room 2"
            className={`${className} object`}
            d="M374.138 363.631H387.1429V374.58889999999997H374.138z"
            onClick={handleObjectClick}
          />
          <path
            id="University Chapel"
            className={`${className} object`}
            d="M379.765 292.627H390.0814V303.8368H379.765z"
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
            d="M28.0079 313.822H41.0128V324.7799H28.0079z"
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
            d="M119.042 230.144H128.046V238.113H119.042V230.144Z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area in front of Basic ED Building"
            className={`${className} object`}
            d="M124 141H166V156H124z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area near at Basic Ed and CCJE bldg."
            className={`${className} object`}
            d="M166 77H176V136H166z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area near at Gymnasum and CCJE bldg."
            className={`${className} object`}
            d="M207 77H217V137H207z"
            onClick={handleObjectClick}
          />
          <path
            id="Motorcycle parking area near at Gymnasum and MBA Engineering bldg."
            className={`${className} object`}
            d="M348 79H358V140H348z"
            onClick={handleObjectClick}
          />                              
          <path
            id="Motorcycle parking area near at Studemt Plaza and MBA Hall"
            className={`${className} object`}
            d="M342 225H359V286H342z"
            onClick={handleObjectClick}
          />                                                                                                                                  
           <path
            id="MBA Engineering Building"
            className={`${className} object`}
             d="M348.128 19.9464L399.648 12.9731L398.147 65.7705V89.6787H387.143V65.7705H382.641V149.947H359.633V65.7705H348.128V19.9464ZM381.141 69.7553H368.136V78.7208H381.141V69.7553Z"
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
            d="M380.14 304.856H390.144V305H380.14V304.856ZM380.14 305H360V438H392V305H390.144V315.814H380.14V305ZM374.138 363.631H387.143V374.589H374.138V363.631Z"
            onClick={handleObjectClick}
          />
          {/* MBA HALL - SP */}
          <path
            id="MBA Hall Entrance 2"
            className={`${className} object`}
            d="M392.145 216.197H359.133V304.856H392.145V216.197ZM390.082 292.628H379.765V303.838H390.082V292.628Z"
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
            d="M118.042 224.167H169.061V242.098H118.042V224.167ZM128.046 230.143H119.042V238.113H128.046V230.143Z"
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
            d="M193.07 306.849H129.046V365.624H193.07V306.849ZM167.06 324.78H154.055V335.738H167.06V324.78Z"
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
            d="M379.765 292.627H390.0814V303.8368H379.765z"
            onClick={handleObjectClick}
          />
          <path
            id="University Clinic"
            className={`${className} object`}
             d="M380.25 305.25H389.75V315.75H380.25z"
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
             d="M272.1 247.079H287.10560000000004V260.02930000000003H272.1z"
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
