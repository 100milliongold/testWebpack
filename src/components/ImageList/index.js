import * as L from "fxjs2/Lazy/index.js";
import * as _ from "fxjs2/Strict/index.js";
import * as C from "fxjs2/Concurrency/index";

import * as $ from "../../utils/modules/Render";
import { getImages } from "../../utils/apis";
import * as Ui from "../Alert";

import "./ImageList.css";

/**
 * 데이터 가져오기
 */
const fetch = () => getImages({ limit: 100 });

/**
 * 썸네일
 */
const getThumbnail = L.map(({ ...item }) => ({
  ...item,
  thumbnail: `https://picsum.photos/id/${item.id}/300/300/`,
  // thumbnail: item.download_url,
}));

const tmpl = (imgs) => `
    <div class="images">
      ${gridImageList(imgs)}
    </div>
  `;

const gridImageList = (imgs) =>
  _.strMap(
    ({ thumbnail, author }) =>
      `
          <div class="image">
            <div class="box"><img src="" lazy-src="${thumbnail}" class="fade" alt="" crossorigin="anonymous"></div>
            <div class="name">${author}</div>
            <div class="remove">x</div>
          </div>
          `,
    imgs
  );

const loader = (limit) =>
  _.tap(
    $.findAll("img"),
    L.map((img) => (_) =>
      new Promise((resolve) => {
        img.onload = () => resolve(img);
        img.src = img.getAttribute("lazy-src");
      })
    ),
    takeAllWithLimit(limit),
    _.each(_.each($.addClass("fade-in")))
  );

const groupBySize = _.curry((size, iter) => {
  let r = L.range(Infinity);
  return _.groupBy((_) => Math.floor(r.next().value / size), iter);
});

const takeAllWithLimit = _.curry((limit = Infinity, iter) =>
  _.go(
    iter,
    groupBySize(undefined),
    L.values,
    L.map(L.map((f) => f())),
    L.map(C.takeAll)
  )
);

export const render = ($target) =>
  _.go(
    fetch(),
    getThumbnail,
    tmpl,
    $.el,
    $.append($target),
    Ui.remover(".remove", ".image"),
    // _.tap(
    //   (e) => $.qs(".images"),
    //   $.on(
    //     "scroll",
    //     ({ target: { scrollHeight, scrollTop, offsetHeight } }) =>
    //       scrollHeight - offsetHeight <= scrollTop && render($target)
    //   ),
    //   console.log
    // ),
    loader(10)
  );
