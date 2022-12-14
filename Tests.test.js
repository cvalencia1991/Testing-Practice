const stringLength = require('./modules/stringlength');
const reverseString = require('./modules/reversestring');
const capitalize = require('./modules/capitalize');
const calculator = require('./modules/calculator')


test('alfa to equal 4', () => {
    expect(stringLength('alfa')).toBe(4);
});

test('valenciaguilar throws error', () => {
    expect(stringLength('italoionkan')).error;
});

test('the hello of reverse is olleh', () => {
    expect(reverseString("hello")).toMatch('olleh');
});

describe('calculator test',()=>{
    const cal = new calculator();
    test('add two values', () => {
        expect(cal.add(1,2)).toBe(3);
    });
    test('substract two values', () => {
        expect(cal.substract(5,3)).toBe(2);
    });
    test('multiply two values', () => {
        expect(cal.multiply(2,2)).toBe(4);
    });
});

test('cesar capitalize is Cesar', () => {
    expect(capitalize("cesar")).toBe("Cesar");
});