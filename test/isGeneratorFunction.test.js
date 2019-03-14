const expect = require('expect');
const {isGeneratorFunction} = require('./_30s.js');

test('isGeneratorFunction is a Function', () => {
  expect(isGeneratorFunction).toBeInstanceOf(Function);
});
test('passed value is a generator function', () => {
  expect(isGeneratorFunction(function* () { })).toBeTruthy();
});
test('passed value is not a generator function', () => {
  expect(isGeneratorFunction(x => x)).toBeFalsy();
});
test('passed value is not a generator function', () => {
  expect(isGeneratorFunction(async () => { })).toBeFalsy();
});
test('passed value is not a generator function', () => {
  expect(isGeneratorFunction('x')).toBeFalsy();
});