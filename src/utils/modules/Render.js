import * as _ from "fxjs2/Strict/index.js";

export const qs = (sel, parent = document) => parent.querySelector(sel);
export const qsa = (sel, parent = document) => parent.querySelectorAll(sel);
export const find = _.curry(qs);
export const findAll = _.curry(qsa);
export const el = (html) => {
  const wrap = document.createElement("div");
  wrap.innerHTML = html;
  return wrap.children[0];
};
export const append = _.curry((parent, child) => parent.appendChild(child));
export const closest = _.curry((sel, el) => el.closest(sel));
export const remove = (el) => el.parentNode.removeChild(el);
export const on = (event, f) => (els) =>
  _.each(
    (el) => el.addEventListener(event, f),
    _.isIterable(els) ? els : [els]
  );
export const addClass = _.curry((name, el) => el.classList.add(name));
