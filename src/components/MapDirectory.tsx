import { useControls } from "react-zoom-pan-pinch";
// import { Objects} from "./IndoorMap";
import { FaMinus, FaPlus, FaUndo } from "react-icons/fa";

function DirectoryBtn() {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="inline-flex rounded-md absolute right-0 top-0 invisible md:visible">
      <button
        className="control-btn rounded-l"
        aria-label="zoomIn"
        onClick={() => zoomIn()}
      >
        <FaPlus />
      </button>
      <button
        className="control-btn"
        aria-label="zoomOut"
        onClick={() => zoomOut()}
      >
        <FaMinus />
      </button>
      <button
        className="control-btn rounded-r"
        aria-label="resetTransform"
        onClick={() => resetTransform()}
      >
        <FaUndo />
      </button>
    </div>
  );
}

export default DirectoryBtn;
