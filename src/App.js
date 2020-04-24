import "./App.css";
import ImageList from "./components/ImageList";

export default class App {
  constructor($target) {
    new ImageList({ $target });
  }
}
