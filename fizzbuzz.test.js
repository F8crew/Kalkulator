import { fizzBuzz } from './fizzbuzz.js';
import test from 'node:test';
import * as assert from 'node:assert';

test('fizzBuzz(1) should return "1"', () => {
    assert.strictEqual(fizzBuzz(1), "1");
});

test('fizzBuzz(3) should return "Fizz"', () => {
    assert.strictEqual(fizzBuzz(3), "Fizz");
});

test('fizzBuzz(5) should return "Buzz"', () => {
    assert.strictEqual(fizzBuzz(5), "Buzz");
});

test('fizzBuzz(15) should return "FizzBuzz"', () => {
    assert.strictEqual(fizzBuzz(15), "FizzBuzz");
});
