import * as $ from "../../utils/modules/Render";
import * as _ from "fxjs2/Strict/index.js";

export default class Modal {
  constructor({ $data }) {
    this.render($.qs("body"));
  }

  render = ($target) => {
    const modal = `
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
    `;
    $target.append($.el(modal));

    _.go($.qsa("#myModal"), $.on());

    return $target;
  };
}
