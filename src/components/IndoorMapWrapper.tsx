import React, { useContext, useState } from "react";
import { isMobile } from "react-device-detect";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { MapDataContext, NavigationContext } from "../pages/Map";
import "../styles/map.css";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "../utils/types";
import { MapBackground, Paths, Positions, Objects , Legends } from "./IndoorMap";
import Controls from "./MapControls";
import ObjectDetailsModal from "./Modals/ObjectDetailsModal";
import { navigateToObject } from "@/utils/navigationHelper";
import { toast } from "react-toastify";


function IndoorMapWrapper() {
  const [modalOpen, setModalOpen] = useState(false);
  const [object, setObject] = useState<ObjectItem>({} as ObjectItem);
  const [showRainRoute, setShowRainRoute] = useState(false); // Add state for toggling rain route


  const positionRadius = isMobile ? 6 : 6;
  const { navigation, setNavigation, isEditMode, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;

// Function to toggle visibility of rain route
    function handleTogglePaths() {
      setShowRainRoute((prev) => !prev);  // Toggle visibility of rain route
    }

  async function handleObjectClick(e: React.MouseEvent<SVGPathElement>) {
    if (!isEditMode) {
      const targetId = (e.target as HTMLElement).id;
      const selectedObject = objects.find((obj) => obj.name === targetId);
      if (selectedObject?.id) {
        setObject(selectedObject);
        setModalOpen(true);
      } else {
        toast.error("Object not found");
      }
    }
  }
  function handleLegendClick(e: React.MouseEvent<SVGPathElement>) {
    const targetId = (e.target as HTMLElement).id; // Get the ID of the clicked legend
    const selectedObject = objects.find((obj) => obj.name === targetId); // Find the matching object by ID
  
    if (selectedObject?.id) {
      setObject(selectedObject); // Set the object state to the selected object
      setModalOpen(true); // Open the object details modal
    } else {
      toast.error("Object not found 2"); // Show an error if no matching object is found
    }
  }
  
  const handlePositionClick = (e: React.MouseEvent<SVGPathElement>) => {
    if (isEditMode) {
      const vertexId = (e.target as HTMLElement).id;
      setNavigation({ start: vertexId });
      setIsEditMode(false);
    }
  };

  function handleNavigationClick() {
    setModalOpen(false);
    navigateToObject(object.name, navigation, setNavigation);
  }
  return (
    <div className="relative w-full h-full bg-white center">
      {/* Toggle Button for Rain Route */}
      <button onClick={handleTogglePaths}>
        Toggle Rain Route
      </button>

      <ObjectDetailsModal
        open={modalOpen}
        object={object}
        onClose={() => setModalOpen((cur) => !cur)}
        objectNavigation={handleNavigationClick}
      />

      <TransformWrapper
        centerOnInit
        minScale={isMobile ? 0.9 : 1}
        doubleClick={{ mode: "reset" }}
        initialScale={isMobile ? 0.9 : 1}
        smooth={true}
        wheel={{ smoothStep: 0.01 }}
      >
        <TransformComponent wrapperClass="bg-white">
          <MapBackground>
          
           {/*Edges are the lines on the map aka the paths*/}
           <Paths showRainRoute={false} />


            {/*Objects are the clickable areas on the map e.g. Rooms, Desks, ...*/}
            <Objects
              handleObjectClick={handleObjectClick}
              className={
                isEditMode ? "" : "hover:cursor-pointer hover:opacity-50"
              }
            />
             {/* Pass the 'showRainRoute' state to the Paths component */}
            <Paths showRainRoute={showRainRoute} />
            
            <Positions
              positionRadius={positionRadius}
              handlePositionClick={() => {}}
              className={isEditMode ? "opacity-100" : "opacity-0"}
              navigation={navigation}
            />
            <Legends
              handleLegendClick={handleLegendClick} // Pass the legend click handler here
              className="hover:cursor-pointer hover:opacity-50"
            />

            {/*Vertexes are the circles on the map aka the positions*/}
            <Positions
              positionRadius={positionRadius}
              handlePositionClick={handlePositionClick}
              className={
                isEditMode
                  ? "opacity-100 cursor-pointer hover:fill-[#488af4] "
                  : "opacity-0"
              }
              navigation={navigation}
            />
          </MapBackground>
        </TransformComponent>
        <Controls />
      </TransformWrapper>
    </div>
  );
}
export default IndoorMapWrapper;
