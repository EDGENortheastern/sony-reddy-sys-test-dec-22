import {convertToNum} from "./utils";

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
})