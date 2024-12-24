import { escape, unescape } from "./htmlEscape";

describe("escape 함수를 테스트", () => {
  it("기본동작 테스트", () => {
    // arrange
    const output = 'fred, barney, &amp; pebbles';
    // act
    const actual = escape('fred, barney, & pebbles');
    // assert
    expect(actual).toBe(output);
  });

  it("텍스트만 입력시 테스트", () => {
    // arrange
    const output = 'pebbles';
    // act
    const actual = escape('pebbles');
    // assert
    expect(actual).toBe(output);
  });

  it("빈문자열 입력시 테스트", () => {
    // arrange
    const output = '';
    // act
    const actual = escape('');
    // assert
    expect(actual).toBe(output);
  });
});

describe("unescape 함수를 테스트", () => {
  it("기본동작 테스트", () => {
    // arrange
    const output = 'fred, barney, & pebbles';
    // act
    const actual = unescape('fred, barney, &amp; pebbles');
    // assert
    expect(actual).toBe(output);
  });

  it("escaped string과 함께 테스트", () => {
    // arrange
    const output = 'fred & barney & pebbles';
    // act
    const actual = unescape('fred &amp; barney & pebbles');
    // assert
    expect(actual).toBe(output);
  });

  it("빈문자열 테스트", () => {
    // arrange
    const output = '';
    // act
    const actual = unescape('');
    // assert
    expect(actual).toBe(output);
  });

  it("문자열만 테스트", () => {
    // arrange
    const output = '';
    // act
    const actual = unescape('');
    // assert
    expect(actual).toBe(output);
  });
});
