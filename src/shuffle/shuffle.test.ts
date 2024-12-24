import shuffle from ".";

describe("shuffle 함수 테스트", () => {
  it("빈 배열 테스트", () => {
    // arrange
    const output = [];
    // act
    const actual = shuffle([]);
    // assert
    expect(actual).toStrictEqual(output);
  });

  it("길이 변경 여부 테스트", () => {
    // arrange
    const output = 4;
    // act
    const actual = shuffle([1, 2, 3, 4]);
    // assert
    expect(actual).toHaveLength(output);
  });

  it("요소가 동일한지 테스트", () => {
    // arrange
    const output = [4, 1, 3, 2];
    // act
    const actual = shuffle([1, 2, 3, 4]);
    // assert
    expect(actual.sort()).toStrictEqual(output.sort());
  });

  it("요소가 섞였는지 테스트", () => {
    // arrange
    const output = [4, 1, 3, 2];
    // act
    const actual = shuffle([1, 2, 3, 4]);
    // assert
    expect(actual).not.toStrictEqual(output);
  });
});
