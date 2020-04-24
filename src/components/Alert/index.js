import * as _ from "fxjs2/Strict/index.js";
import * as $ from "../../utils/modules/Render";
import "./Alert.css";
const message = _.curry(
  (btns, msg) =>
    new Promise((resolve) =>
      _.go(
        `
    <div class="confirm">
      <div class="body">
        <div class="msg">${msg}</div>
        <div class="buttons">
          ${_.strMap(
            ({ type, name }) =>
              `<button type="button" class="${type}">${name}</button>`,
            btns
          )}
        </div>
      </div>
    </div>
  `,
        $.el,
        $.append($.qs("body")),
        ..._.map(
          ({ type, value }) =>
            _.tap(
              $.find(`.${type}`),
              $.on("click", ({ currentTarget: ct }) =>
                _.go(ct, $.closest(".confirm"), $.remove, (_) => resolve(value))
              )
            ),
          btns
        )
      )
    )
);

export const remover = (
  btnSel,
  targetSel,
  before = (a) => a,
  after = (a) => a
) =>
  _.tap(
    $.findAll(btnSel),
    $.on(
      "click",
      async ({ currentTarget: ct }) =>
        (await confirm("삭제???")) &&
        _.go(
          ct,
          $.closest(targetSel),
          _.tap(before),
          $.remove,
          _.tap(after),
          async (_) => await alert("삭제되었습니다.")
        )
    )
  );

export const confirm = message([
  { name: "취소", type: "cancel", value: false },
  { name: "확인", type: "ok", value: true },
]);
export const alert = message([{ name: "확인", type: "ok", value: true }]);
