import { getApiData, cancel } from "./fetch";

/**
 * api 취소
 */
export const cancelApiData = () => {
  cancel();
};

export const getImages = ({ page = 1, limit = 30 }) =>
  getApiData(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
