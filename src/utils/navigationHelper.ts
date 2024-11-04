import { Dispatch, SetStateAction } from "react";
import { graph } from "../algorithms/dijkstra";
import { rain } from "../algorithms/Raindijkstra";
import { Navigation, NavigationContextType } from "./types";
import { ObjectItem } from "./types";
import { graphData } from "@/store/graphData";
import {  rainGraphData } from "@/store/rainGraphData";
import { toast } from "react-toastify";
export let routeLength = 0;

// const findVertexByObjectId = (vertexId: string) =>
//   graphData.vertices.find((v) => v.objectName === vertexId);
const findVertexByObjectId = (vertexId: string, useRainGraph = false) =>
  (useRainGraph ? rainGraphData.vertices : graphData.vertices).find((v) => v.objectName === vertexId);

export function navigateToObject(
  selectedObjectId: string,
  navigation: NavigationContextType["navigation"],
  setNavigation: NavigationContextType["setNavigation"],
 
) {
  const target = findVertexByObjectId(selectedObjectId);
  const rainTarget = findVertexByObjectId(selectedObjectId, true);
  if (!target || !rainTarget ) {
    console.error("Target not found");
    toast.error("Target not found");
    return;
  }

  // const shortestPath = graph.calculateShortestPath(navigation.start, target.id);
   const shortestPath = graph.calculateShortestPath(navigation.start, target.id);
  const rainShortestPath = rain.calculateShortestPath(navigation.start, rainTarget.id);
  const pathString = shortestPath
    .slice(1)
    .map((vertexId) => {
      // const vertex = graphData.vertices.find((v) => v.id === vertexId);
      // return vertex ? `L${vertex.cx} ${vertex.cy}` : "";
      const vertex = graphData.vertices.find((v) => v.id === vertexId);
      return vertex ? `L${vertex.cx} ${vertex.cy}` : "";
    })
    .join(" ");

      // Generate path strings for rainGraphData
  const rainPathString = rainShortestPath
  .slice(1)
  .map((vertexId) => {
    const vertex = rainGraphData.vertices.find((v) => v.id === vertexId);
    return vertex ? `L${vertex.cx} ${vertex.cy}` : "";
  })
  .join(" ");
  
  // const startVertex = graphData.vertices.find((v) => v.id === navigation.start);
  // const navigationRoutePath = document.getElementById("navigation-route");
  const startVertex = graphData.vertices.find((v) => v.id === navigation.start);
  const navigationRoutePath = document.getElementById("navigation-route");

  // if (navigationRoutePath && startVertex) {
  //   navigationRoutePath.setAttribute(
  //     "d",
  //     `M${startVertex.cx} ${startVertex.cy} ${pathString}`
  //   );
  //   console.log("navigationRoutePath", navigationRoutePath);
  //   navigationRoutePath.classList.remove("path-once", "path-active");
  //   navigationRoutePath.classList.add("path-once");
  //   navigationRoutePath.addEventListener(
  //     "animationend",
  //     () => {
  //       navigationRoutePath.classList.remove("path-once");
  //       navigationRoutePath.classList.add("path-active");
  //     },
  //     { once: true }
  //   );
  // }
  if (navigationRoutePath && startVertex) {
    navigationRoutePath.setAttribute(
      "d",
      `M${startVertex.cx} ${startVertex.cy} ${pathString}`
    );
    navigationRoutePath.classList.add("path-active");
  }

  // Set path for rainGraphData
  const rainStartVertex = rainGraphData.vertices.find((v) => v.id === navigation.start);
  const rainNavigationRoutePath = document.getElementById("rain-navigation-route");
  if (rainNavigationRoutePath && rainStartVertex) {
    rainNavigationRoutePath.setAttribute(
      "d",
      `M${rainStartVertex.cx} ${rainStartVertex.cy} ${rainPathString}`
    );
    rainNavigationRoutePath.classList.add("path-active");
  }

  // Update navigation state to show the endpoint
  setNavigation((prevNavigation) => ({
    ...prevNavigation,
    end: selectedObjectId,
  }));

  // setNavigation((prevNavigation) => ({
  //   ...prevNavigation,
  //   end: selectedObjectId,
  // }));
}

export function resetEdges() {
  document.getElementById("navigation-route")?.setAttribute("d", "");
  document.getElementById("rain-navigation-route")?.setAttribute("d", "");
  graphData.edges.forEach((edge) => {
    const element = document.getElementById(edge.id);
    if (element) {
      element.classList.remove("path-active");
    }
  });
  rainGraphData.edges.forEach((edge) => {
    const element = document.getElementById(`rain-${edge.id}`);
    if (element) {
      element.classList.remove("rain-active");
    }
  });
}


export function navigateWithDelay(
  objects: ObjectItem[],
  index: number,
  delay: number,
  navigation: Navigation,
  setNavigation: Dispatch<SetStateAction<Navigation>>
) {
  if (index < objects.length) {
    const obj = objects[index];
    navigateToObject(obj.name, navigation, setNavigation);
    navigateToObject(obj.name, navigation, setNavigation);

    setTimeout(() => {
      navigateWithDelay(objects, index + 1, delay, navigation, setNavigation);
    }, delay);
  }
}
