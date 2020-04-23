import * as L from "fxjs2/Lazy/index.js";
import * as _ from "fxjs2/Strict/index.js";

import { getImages } from "../../utils/apis";
import * as $ from "../../utils/modules/Render";

import "./ImageList.css";

export default class ImageList {
  constructor({ $target }) {
    this.render($target);
  }

  /**
   * 데이터 가져오기
   */
  fetch = () => getImages();

  /**
   * 가져온 데이터를 문자열로 변환
   */
  string = (iter) => _.reduce((a, b) => `${a}${b}`, iter);

  strMap = _.curry(_.pipe(L.map, this.string));

  tmpl = (imgs) => `
    <section class="photos">
    ${this.strMap(
      (img) =>
        `<img src="${img.download_url}" class="fade" alt="${img.author}" crossorigin="anonymous">`,
      imgs
    )}
    </section>
  `;

  render = ($target) => _.go(this.fetch(), this.tmpl, $.el, $.append($target));
}
