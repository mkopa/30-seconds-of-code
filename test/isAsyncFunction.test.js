const expect = require('expect');
const {isAsyncFunction} = require('./_30s.js');

test('isAsyncFunction is a Function', () => {
  expect(isAsyncFunction).toBeInstanceOf(Function);
});
test('passed value is an async function', () => {
  expect(isAsyncFunction(async () => { })).toBeTruthy();
});
test('passed value is not an async function', () => {
  expect(isAsyncFunction(x => x)).toBeFalsy();
});
test('passed value is not an async function', () => {
  expect(isAsyncFunction(function* () { })).toBeFalsy();
});
test('passed value is not an async function', () => {
  expect(isAsyncFunction('x')).toBeFalsy();
});
