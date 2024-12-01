import { useContext, useState, useEffect } from "react";
import { NavigationContext, MapDataContext } from "@/pages/Map";
import { NavigationContextType, MapDataContextType } from "@/utils/types";
import { resetEdges } from "@/utils/navigationHelper";

export function useIndicate() {
  const { navigation, setNavigation, isEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;

  // Initial message state
  const [message, setMessage] = useState(
    "Click the circle to your nearest location as your starting location."
  );

  // Log for debugging: Check when the message state is updated
  useEffect(() => {
    console.log("Message state updated:", message);
  }, [message]); // Trigger this effect when 'message' changes

  // Effect to handle the EditPosition button toggling
  useEffect(() => {
    if (isEditMode) {
      setMessage("Click the circle to your nearest location as your starting location.");
    } else {
      setMessage("<< Click the Green button to start new location position.");
    }
  }, [isEditMode, navigation.start, navigation.end]); // Runs when isEditMode, navigation.start, or navigation.end changes

  // Effect to update message when navigation.start changes
  useEffect(() => {
    if (navigation.start) {
      setMessage("Choose your destination.");
    } else if (!navigation.start && !navigation.end) {
      setMessage("Click the circle to your nearest location as your starting location.");
    }
  }, [navigation.start]); // Runs when navigation.start changes

  // Handle the start vertex click
  const handleStartVertexClick = (e: React.MouseEvent<SVGCircleElement>) => {
    const vertexId = e.currentTarget.id;

    // Update navigation with the selected starting vertex
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      start: vertexId,
    }));
    // Message will be updated by the useEffect above when start is set
  };

  // Handle the object click (destination selection)
  const handleObjectClick = (objectName: string) => {
    const selectedObject = objects.find((obj) => obj.name === objectName);

    if (selectedObject) {
      setNavigation((prevNavigation) => ({
        ...prevNavigation,
        end: objectName,
      }));

      // Update message after selecting destination
      setMessage("Click to choose your starting location.");
    } else {
      console.error(`Object with name "${objectName}" not found.`);
    }
  };

  // Reset navigation to initial state
  const resetNavigation = () => {
    resetEdges();
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      start: "",
      end: "",
    }));

    // Reset message state
    setMessage(
      "Click the circle to your nearest location as your starting location."
    );
  };

  // Optional: Update message based on both start and end navigation changes
  useEffect(() => {
    if (navigation.start && navigation.end) {
      setMessage("<< Click the Green button to start new location position.");
    }
  }, [navigation.start, navigation.end]); // Runs when both start and end are set

  return {
    message,
    navigation,
    handleStartVertexClick,
    handleObjectClick,
    resetNavigation,
  };
}
