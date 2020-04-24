import "./App.css";
import * as ImageList from "./components/ImageList";

export default class App {
  constructor($target) {
    ImageList.render($target);
  }
}
