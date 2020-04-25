import "./App.css";
import * as ImageList from "./components/ImageList";
import { go } from "fxjs2/Strict/index.js";

export default class App {
  constructor($target) {
    go($target, ($target) => ImageList.render($target));
  }
}
