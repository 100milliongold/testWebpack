import * as $ from "../../utils/modules/Render";
import "./Header.css";

export default class Header {
  constructor({ $target }) {
    this.render($target);
  }

  render = ($target) => {
    const header = `<header>
        <div class="logo">
        </div>
    </header>`;
    $target.append($.el(header));
    return $target;
  };
}
