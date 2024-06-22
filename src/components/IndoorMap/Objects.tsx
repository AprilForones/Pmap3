interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    <g id="Objects">
      <path
            id="FrontEntrance"
            className={`${className} object`}
             d="M164 1013H493V2097H164z"
            onClick={handleObjectClick}
            />
           <path
              id="BASIC ED BLDG"
              className={`${className} object`}
               d="M950.5 617.5H1221.5V767.5H950.5z"
              onClick={handleObjectClick}
            /> 
          <path
            id="GYMNASIUM"
            className={`${className} object`}
           d="M1641.5 246.5H2540.5V758.5H1641.5z"
            onClick={handleObjectClick}
          />
          <path
            id="VEHICLE PARKING"
            className={`${className} object`}
            d="M857.5 1002.5H1570.5V1387.5H857.5z"
            onClick={handleObjectClick}
          />
          <path
             id="PHINMA AVE"
            className={`${className} object`}
            d="M1747.5 932.5H2682.5V1387.5H1747.5z"
            onClick={handleObjectClick}
          />
          <path
            id="PHINMA FOREST"
            className={`${className} object`}
              d="M1747.5 1870.5H2680.5V2814.5H1747.5z"
            onClick={handleObjectClick}
          />
          <path
            id="CELA DEP"
            className={`${className} object`}
             d="M1332.5 229.5H1574.5V762.5H1332.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Riverside Bldg"
            className={`${className} object`}
            d="M3030.5 227.5H3755.5V965.5H3030.5z"
            onClick={handleObjectClick}
          />
          <path
            id="STUDENT PLAZA"
            className={`${className} object`}
             d="M1747.5 1444.5H2540.5V1865.5H1747.5z"
            onClick={handleObjectClick}
          />
          <path
            id="NORTH HALL"
            className={`${className} object`}
             d="M1430.5 2825.5H2680.5V3035.5H1430.5z"
            onClick={handleObjectClick}
          />
          <path
            id="MBA Eng."
            className={`${className} object`}
             d="M329.149 11.556H391.236V72.625H329.149z"
            onClick={handleObjectClick}
          />
           <path
            id="Engineering Bldg."
            className={`${className} object`}
             d="M2545.5 229.5H3027.5V525.5H2545.5z"
            onClick={handleObjectClick}
          />
          <path
            id="MBA Hall"
            className={`${className} object`}
           d="M2688.5 530.5H3027.5V3035.5H2688.5z"
            onClick={handleObjectClick}
          />
          <path
            id="OP"
            className={`${className} object`}
            d="M859.5 1619.5H1157.5V1832.5H859.5z"
            onClick={handleObjectClick}
          />
          <path
            id="FVR BLDG"
            className={`${className} object`}
             d="M860.5 1396.5H1432.5V1614.5H860.5z"
            onClick={handleObjectClick}
          />
          <path
            id="CSDL/ITS BLDG"
            className={`${className} object`}
            d="M594.5 1161.5H796.5V1615.5H594.5z"
            onClick={handleObjectClick}
          />
          <path
            id="CMA BLDG"
            className={`${className} object`}
             d="M1144 2002H1740V2812H1144z"
            onClick={handleObjectClick}
          />
          <path
            id="Technical Vocational Bldg."
            className={`${className} object`}
             d="M1141.5 2825.5H1425.5V3035.5H1141.5z"
            onClick={handleObjectClick}
          />
          <path
            id="Finance Purchasing Dep/Teller"
            className={`${className} object`}
             d="M1437.5 1396.5H1583.5V1865.5H1437.5z"
            onClick={handleObjectClick}
          />
           <path
            id="Atrium"
            className={`${className} object`}
              d="M500.5 1870.5H1431.5V1988.5H500.5z"
            onClick={handleObjectClick}
          />
           <path
            id="Registrar Office"
            className={`${className} object`}
              d="M500.5 1870.5H1431.5V1988.5H500.5z"
            onClick={handleObjectClick}
          />
           <path
            id="CMA HALL"
            className={`${className} object`}
             d="M1591 1399H1740V1986H1591z"
            onClick={handleObjectClick}
          />
          
    </g>
  );
}

export default Objects;
