import * as L from "fxjs2/Lazy/index.js";
import * as _ from "fxjs2/Strict/index.js";

import { getImages } from "../../utils/apis";
import * as $ from "../../utils/modules/Render";

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
    thumbnail: `https://picsum.photos/id/${item.id}/300/${Math.floor(
      item.height * (300 / item.width)
    )}/`,
  }));

  strMap = _.curry(_.pipe(L.map, this.string));

  tmpl = (imgs) => `
    <article class="photos">
      ${this.strMap(
        ({ thumbnail, author }) =>
          `<article class="section">
              <img src="${thumbnail}" class="fade" crossorigin="anonymous">
              <p>${author}</p>
            </article>
          `,
        imgs
      )}
    </article>
  `;

  render = ($target) =>
    _.go(
      this.fetch(),
      this.getThumbnail,
      _.tap(_.pipe(this.tmpl, $.el, $.append($target)))
    );
}
