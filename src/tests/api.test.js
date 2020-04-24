import { getImages } from "../utils/apis";

describe("testing api", () => {
  it("getImages()", () => {
    getImages().then((list) => {
      expect(list);
    });
  });
});
