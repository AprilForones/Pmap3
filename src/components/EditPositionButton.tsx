import { FiMapPin } from "react-icons/fi";
import Tooltip from "./ui/Tooltip";
import { NavigationContext } from "@/pages/Map";
import { NavigationContextType } from "@/utils/types";
import { useContext, useEffect } from "react";
import { resetEdges } from "@/utils/navigationHelper";

function EditPositionButton() {
  // const { isEditMode, setIsEditMode, setNavigation } = useContext(
  //   NavigationContext
  const {setIsEditMode, setNavigation, isEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;

  function handleEdit() {
  //  // setIsEditMode(!isEditMode);
  //   setIsEditMode(true);
  //   resetEdges();
  //   setNavigation((prevNavigation) => ({
  //     ...prevNavigation,
  //     end: "",
  //   }));

  if (isEditMode) {
    // If already in edit mode, hide the circles and reset the state
    setIsEditMode(false);
    // Optionally reset edges here or handle hiding circles differently
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      end: "", // Reset end point when hiding circles
    }));
  } else {
    // If not in edit mode, enable edit mode and show the circles
    setIsEditMode(true);
    resetEdges(); // This function shows the circles
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      end: "",
    }));
  }

  }

// Automatically run the function when the component loads
useEffect(() => {
  handleEdit();  // This will trigger the circles to show when the page loads
}, []); // Empty dependency array ensures it only runs once, when the component mounts


  return (
    <Tooltip content="Change Position" className="bg-green-500">
      <button
        data-tooltip-target="tooltip-default"
        className="ml-1 h-12 w-12 bg-green-500 center rounded text-white"
        onClick={() => handleEdit()}
        aria-label="change position"
      >
        <FiMapPin />
      </button>
    </Tooltip>
  );
}

export default EditPositionButton;
