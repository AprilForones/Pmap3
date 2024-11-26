import React, { useContext,  useState } from "react";
import { isMobile } from "react-device-detect";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { MapDataContext, NavigationContext } from "../pages/Map";
import "../styles/map.css";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "../utils/types";
import { MapBackground, Paths, Positions, Objects , Legends, RainPath } from "./IndoorMap";
import Controls from "./MapControls";
import ObjectDetailsModal from "./Modals/ObjectDetailsModal";
import { navigateToObject } from "@/utils/navigationHelper";
import { toast } from "react-toastify";
import LegendsBtn from "./MapLegends";
import DirectoryBtn from "./MapDirectory";

function IndoorMapWrapper() {
  const [modalOpen, setModalOpen] = useState(false);
  const [object, setObject] = useState<ObjectItem>({} as ObjectItem);
  // const [showRainRoute, setShowRainRoute] = useState(true); // Add state for toggling rain route


  const positionRadius = isMobile ? 6 : 6;
  const { navigation, setNavigation, isEditMode, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;

// Function to toggle visibility of rain route
    // function handleTogglePaths() {
    //   setShowRainRoute((prev) => !prev);  // Toggle visibility of rain route
    // }
    // const transformWrapperRef = useRef<any>(null); // Set ref type to 'any' to access methods like setTransform

    // // Automatically zoom to "vertex 1" on component mount
    // useEffect(() => {
    //   if (transformWrapperRef.current) {
    //     const zoomLevel = 1.5; // Adjust the zoom level as needed
    //     transformWrapperRef.current.setTransform(5000, 5000, zoomLevel);
    //   }
    // }, []);
  

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
      // setModalOpen(false); // Open the object details modal
      navigateToObject(selectedObject.name, navigation, setNavigation);
    } else {
      toast.error("Building not found"); // Show an error if no matching object is found
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

      <ObjectDetailsModal
        open={modalOpen}
        object={object}
        onClose={() => setModalOpen((cur) => !cur)}
        objectNavigation={handleNavigationClick}
      />

      <TransformWrapper
      // ref={transformWrapperRef}
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
           <Paths/>
           <RainPath/>

            {/*Objects are the clickable areas on the map e.g. Rooms, Desks, ...*/}
            <Objects
              handleObjectClick={handleObjectClick}
              className={
                isEditMode ? "" : "hover:cursor-pointer hover:opacity-50"
              }
            />

            <Positions
              positionRadius={positionRadius}
              handlePositionClick={() => {}}
              className={isEditMode ? "opacity-100" : "opacity-0"}
              navigation={navigation}
            />
            <Legends
              handleLegendClick={handleLegendClick} // Pass the legend click handler here
              className="hover:cursor-pointer hover:opacity-0"
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
        <DirectoryBtn/>
        <LegendsBtn/>
        <Controls />
      </TransformWrapper>
    </div>
  );
}
export default IndoorMapWrapper;
