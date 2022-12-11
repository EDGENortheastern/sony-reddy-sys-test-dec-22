import {convertToNum} from "./utils";

test("that utils tests are working",()=>{
    expect(0).toBeFalsy();
});

describe("testing function convertToNum",()=>{
    test("that function returns a number",()=>{
        expect(convertToNum("2")).toBe(2);
        expect(convertToNum("3")).toBe(3);
    })
    test("that function works for negitive numbers",()=>{
        expect(convertToNum("-127")).toBe(-127);
        expect(convertToNum("-3")).toBe(-3);
    })
})