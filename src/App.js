import "./App.css";
import ImageList from "./components/ImageList";

export default class App {
  constructor($target) {
    const imageList = document.createElement("div");
    imageList.className = "flex_container";
    $target.append(imageList);
    new ImageList({ $target: imageList });
  }
}
