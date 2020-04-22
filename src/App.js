import "./App.css";
import { getImages } from "./utils/apis";

import * as L from "fxjs2/Lazy/index.js";
import * as _ from "fxjs2/Strict/index.js";

export default function App() {
  const element = document.createElement("div");
  element.className = "App";
  _.go(
    getImages(),
    L.map(
      (img) => `
      <div class="images">
        <div class="image">
            <div class="box">
              <img src="${img.download_url}" class="fade" alt="" crossorigin="anonymous">
            </div>
            <div class="name">${img.author}</div>
            <div class="remove">x</div>
          </div>
      </div>
    `
    ),
    _.reduce((a, b) => `${a}${b}`)
  ).then((html) => {
    element.innerHTML = html;
  });
  return element;
}
