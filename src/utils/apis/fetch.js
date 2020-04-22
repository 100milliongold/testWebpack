import { parsseStatus } from "./status";
import { GET } from "./methods";
const controller = new AbortController();
const signal = controller.signal;

export function cancel() {
  controller.abort();
}
export const getApiData = (url) => {
  // Default options are marked with *
  return fetch(`${url}`).then((response) => response.json());
};
