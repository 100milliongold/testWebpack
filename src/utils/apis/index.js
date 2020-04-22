import { getApiData, cancel } from "./fetch";

/**
 * api 취소
 */
export const cancelApiData = () => {
  cancel();
};

export const getImages = () => getApiData("https://picsum.photos/v2/list");
