import slice from "./slice";

describe('slice 메서드 테스트', () => {
    const tempArray = [1,2,3,4]
    // ------------- 엣지 케이스 범위를 벗어나거나 []빈 배열이 주어진 경우
    it('배열의 길이가 0인 경우 빈 배열을 반환한다.', () => {
        //arrange
        const output = [];
        // act
        const actual = slice([],55,100);
        // assert
        expect(actual).toEqual(output);
    })

    it('end가 음수이고 end는 배열의 length와 더한 값이 start보다 작은 end값은 0이다.', () => {
        // arrane
        const output = []
        // act
        const actual = slice(tempArray, 0,-6)
        // assert
        expect(actual).toEqual(output);
    })

    it('start가 음수이고 절대값이 배열의 길이보다 길면 start는 0이다.', () => {
        // arrane
        const output = slice(tempArray, 0,3)
        // act
        const actual = slice(tempArray, -6,3)
        // assert
        expect(actual).toEqual(output);
    })

    // ------------- 기본 동작 확인
    it('end가 음수이면 end는 배열의 length와 더한 값을 갖는다.', () => {
        // arrane
        const output = [2,3];
        // act
        const actual = slice(tempArray, 1, 3)
        // assert
        expect(actual).toEqual(output);
    })

    // ------------ 특수한 입력 처리 undefined, null
    it('start가 Null end가 undefined이면 배열 그대로 반환', () => {
        // arrange
        
        // act
        const actual = slice(tempArray);
        // assert
        expect(actual).toEqual(tempArray);
    })
})