import {convertToNum} from "./utils";
import {add} from "./utils";
import { square } from './utils';
import { div } from "./utils";

test("that utils tests are working",()=>{
    expect(0).toBeFalsy();
});

describe("testing functions",()=>{
    test("that function returns a number",()=>{
        expect(convertToNum("2")).toBe(2);
        expect(convertToNum("3")).toBe(3);
        expect(convertToNum("35")).toBe(35);
    })
    test("that function works for negitive numbers",()=>{
        expect(convertToNum("-127")).toBe(-127);
        expect(convertToNum("-3")).toBe(-3);
        expect(convertToNum("-90")).toBe(-90);
    })
    test("that function works for decimals",()=>{
        expect(convertToNum("12.5")).toBe(12);
        expect(convertToNum("67.5")).toBe(67);
        expect(convertToNum("54.8")).toBe(54);
    })
    test("operation typeof works",()=>{
        expect(typeof convertToNum("50")).toBe('number');
        expect(typeof ("true")).toBe('string');
    })
    test("should remove any non-numaric char ",()=>{
        expect(convertToNum("3rt")).toBe(3);
    })
    test('passes when value is NaN', () => {
        expect(NaN).toBeNaN();
        expect(1).not.toBeNaN();
    })
    test('test adding two positive nums', ()=>{
        expect(add(4, 5)).toBe(9);   
    })
    test('simple decimals', () => {
        expect(div(2,8)).toBe(0.25, 5);
    })
    test("Knowing the length", ()=>{
        expect([1, 2, 3]).toHaveLength(3);
    })
    test("given 2 and -2 as arguments, returns 0", ()=>{
        expect(add(2, -2)).toEqual(0);
    })
    test('should return 16 for square of 4', () => {
        const number = square("4");
        expect(number).toBe(16);
    });
    test('should return 64 for square of -8', () => {
        const number = square("-8");
        expect(number).toBe(64);
    });
    test('should return 0 for square of 0', () => {
        const number = square("0");
        expect(number).toBe(0);
    });
    test('toBeWithin simple', () => {
        const example = 1.25
        expect(Math.round(example)).toBe(1, 2)
    });
})