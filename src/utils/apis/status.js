import { ApiException } from "./Exceptions";

/**
 * API 에서 status code 분석
 */
export const parsseStatus = (status_code) => {
  switch (status_code) {
    case 404:
      throw new ApiException({ msg: "찾을 수 없음", status_code });
  }
};
