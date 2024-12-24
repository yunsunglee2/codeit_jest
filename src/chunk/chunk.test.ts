import chunk from "./chunk";

describe('chunk함수 테스트', () => {
    it('size < 0 && length != null 이면 빈배열 반환', () => {
        //arrange
        const output = [];
        //act
        const actual = chunk([], -1);
        //assert
        expect(actual).toStrictEqual(output)
    })
    it('size === 0 && 배열 == null 이면 빈배열 반환', () => {
        //arrange
        const output = [];
        //act
        const actual = chunk([], 0);
        //assert
        expect(actual).toStrictEqual(output)
    })
    // size > 0 && 배열 == null -> 빈배열 반환
    it('size === 0 && 배열 == null 이면 빈배열 반환', () => {
        //arrange
        const output = [];
        //act
        const actual = chunk([], 10);
        //assert
        expect(actual).toStrictEqual(output)
    })
    // size > 0 && 배열 != null
    it('size > 0 && 배열 != null인 경우 i) length > size', () => {
        //arrange
        const output = [];
        //act
        const actual = chunk([1,2,2,3,4,4,5], 10);
        //assert
        expect(actual).toStrictEqual(output)
    })
    // ii) length = size
    // iii) length < size
    it('', () => {
        //arrange
        //act
        //assert
    })
})