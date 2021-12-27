import { firstCapitalize, reverseString, calculater, ceaserCipher, analyzeArray } from '../main.js';

it('first-letter-capital', () => {
    expect(firstCapitalize('abcd')).toBe('Abcd');
    expect(firstCapitalize('Test')).toBe('Test');
    expect(firstCapitalize('test')).toBe('Test');
});

it('reverse-string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('12345')).toBe('54321');
});

it('calculater', () => {
    expect(calculater.add(10, 2)).toBe(12);
    expect(calculater.add(1000, 57)).toBe(1057);

    expect(calculater.multiplay(1000, 10)).toBe(10000);
    expect(calculater.multiplay(2, 6)).toBe(12);

    expect(calculater.subtract(2, 6)).toBe(-4);
    expect(calculater.subtract(200, 0)).toBe(200);

    expect(calculater.divide(200, 0)).toBe(null);
    expect(calculater.divide(200, 2)).toBe(100);
    expect(calculater.divide(2, 200)).toBe(0.01);
});


it('ceaserCiper', () => {
    expect(ceaserCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
    expect(ceaserCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
    expect(ceaserCipher('a To Z', 3)).toBe('d Wr C');
    expect(ceaserCipher('test', 0)).toBe('test');
    expect(ceaserCipher('test')).toBe(undefined);
    expect(ceaserCipher('13A,,B1]55', 2)).toBe('13C,,D1]55');
});

it('analyze-array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).averge).toBe(4);
});