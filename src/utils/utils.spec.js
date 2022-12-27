import {convertToNum} from "./utils";
import {Add} from "./utils";

test("that utils tests are working",()=>{
    expect(0).toBeFalsy();
});

describe("testing function convertToNum",()=>{
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
        expect(Add(4, 5)).toBe(9);
    })
    test('test adding two digit positive nums', ()=>{
        expect(Add(20, 34)).toBe(54);
    })
    test("given 2 and -2 as arguments, returns 0", ()=>{
        expect(Add(2, -2)).toEqual(0);
    })
})