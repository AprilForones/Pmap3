import { useRouteDetails } from "@/hooks/useRouteDetails";
import { useState } from "react";
import { FaX, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { TbRoute } from "react-icons/tb";
import { RiRectangleFill } from "react-icons/ri";

function MobileRouteDetails() {
  // const { object, rightRouteLength, walkingTime, handleLeave } =
  const { object, rightRouteLength, handleLeave } =
    useRouteDetails();

    const [isMinimized, setIsMinimized] = useState(false); // State for minimizing and expanding

      // Function to toggle between minimized and expanded views
    const toggleMinimize = () => {
    setIsMinimized(!isMinimized); // Toggle the state
    };

    // const [isVisible, setIsVisible] = useState(true); 

      // Function to toggle visibility
  // const handleHide = () => {
  //   // setIsVisible(false); // Hides the component when clicked
  // };
  // Don't render the component if it's hidden
  // if (!isVisible) return null;
  return (
    <div className="absolute navigation-info-pulse bottom-0 left-0 right-0 mx-auto w-full bg-white border-t border-blue-300 shadow-lg rounded-t-lg overflow-hidden">
      
      <button onClick={toggleMinimize} className="text-black-400">
          {isMinimized ? <FaChevronUp /> : <FaChevronDown />} {/* Toggle icon */}
        </button>

      <button className="absolute right-2 top-2" onClick={handleLeave}>
        <FaX className="text-black-400" />
      </button>

      {/* <button
          className="text-gray px-3 py-1 rounded-md"
          onClick={handleHide}
        >
          Hide
        </button> */}

      {/* Conditionally Render Content */}
      {!isMinimized && (
              <>

          <div className="p-4 pb-0">
            <h6 className="text-gray-900 text-m font-semibold mb-1">
              {object?.name}
            </h6>
            <p className="text-gray-500 text-sm">{object?.categoryName}</p>
          </div>
          <div className="p-4 pb-0">
            <h6 className="text-gray-900 text-sm"> 
              Click the Green button to start new location position.
            </h6>        
          </div>
          <div className="flex space-x-3 bg-gray-200 text-gray-900 px-3 py-1 rounded-md text-sm font-semibold m-3">
              <div className="flex items-center">
                <TbRoute className="inline-block mr-1" />
                {/* {walkingTime} seconds away -  */}
                {rightRouteLength} meters
              </div>
              <div className="flex items-center">
                <RiRectangleFill className="inline-block mr-1" color="#FFA500" />
                Day Path
              </div>
              <div className="flex items-center">
                <RiRectangleFill className="inline-block mr-1" color="#1b1b1b79" />
                Rain Path
              </div>
          </div>
          </>
           )}
        </div>
  );
}

export default MobileRouteDetails;
