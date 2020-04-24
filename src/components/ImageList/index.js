import * as L from "fxjs2/Lazy/index.js";
import * as _ from "fxjs2/Strict/index.js";

import { getImages } from "../../utils/apis";

import $ from "fxdom";

import "./ImageList.css";

export default class ImageList {
  constructor({ $target }) {
    return this.render($target);
  }

  /**
   * 데이터 가져오기
   */
  fetch = () => getImages();

  /**
   * 가져온 데이터를 문자열로 변환
   */
  string = (iter) => _.reduce((a, b) => `${a}${b}`, iter);

  /**
   * 썸네일
   */
  getThumbnail = L.map(({ ...item }) => ({
    ...item,
    thumbnail: `https://picsum.photos/id/${item.id}/300/300/`,
  }));

  tmpl = (imgs) => `
    <div class="images">
      ${_.strMap(
        ({ thumbnail, author }) =>
          `
          <div class="image">
            <div class="box"><img src="${thumbnail}" class="fade" alt="" crossorigin="anonymous"></div>
            <div class="name">${author}</div>
            <div class="remove">x</div>
          </div>
          `,
        imgs
      )}
    </div>
  `;

  render = ($target) =>
    _.go(this.fetch(), this.getThumbnail, this.tmpl, $.el, $.appendTo($target));
}
