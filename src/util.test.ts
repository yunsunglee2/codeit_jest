import { toUpperCase } from "./util";

describe("util test suite", () => {
  it("소문자를 넣으면 대문자로 변환한다.", () => {
    // Arrange
    const param = "abc";
    const output = "ABC";

    // Act 실제로 함수를 호출한 결과
    const actual = toUpperCase(param);

    // ------------------------------
    // 로직에 에러를 내는 로직이 있다면 선 아래로 코드가
    // 접근하지 못하고 에러가 발생됨.
    // expect(() => toUpperCase(param)).toThrow()

    // Assert (실제로 나온 값 === 예상값)
    //expect(input).matcher
    expect(actual).toBe(output);

    expect(actual).not.toBe("abc");
  });
});

// Form 관련 테스트
// Form 요소는 name, input, email input, submit button
describe("tyep: string, test title", () => {
  // 실제 테스트 코드 작성

  // Arrange
  // 테스트에 필요한 파라미터, 예상값 등 테스트에 필요한 데이터를 정의

  // Act
  // 테스트 대상 함수를 호출

  // Assert
  // 테스트 결과를 검증

  it("type: string, test subtitle", () => {});
  // 어떠한 동작이 실행되면 어떤 기댓값이 나온다는 것을 상세히 작성
  it("name input에 텍스트를 입력하면 name에 텍스트 값이 있어야 합니다.", () => {});
});
