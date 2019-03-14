const expect = require('expect');
const {isPlainFunction} = require('./_30s.js');

test('isPlainFunction is a Function', () => {
  expect(isPlainFunction).toBeInstanceOf(Function);
});
test('passed value is a plain function', () => {
  expect(isPlainFunction(x => x)).toBeTruthy;
});
test('passed value is not a plain function', () => {
  expect(isPlainFunction(function* () { })).toBeFalsy;
});
test('passed value is not a plain function', () => {
  expect(isPlainFunction(async () => { })).toBeFalsy();
});
test('passed value is not a plain function', () => {
  expect(isPlainFunction('x')).toBeFalsy();
});