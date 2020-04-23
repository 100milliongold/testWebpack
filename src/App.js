import "./App.css";
import ImageList from "./components/ImageList";
import Header from "./components/Header";
import Modal from "./components/Modal";

export default class App {
  constructor($target) {
    new Header({ $target });
    new ImageList({ $target });
    new Modal({ $target });
  }
}
