import { add } from './myLib.mjs'
import assert from 'assert';

console.log('add() \n should add two numbers')

try {
    assert.strictEqual(add(1, 1), 3)
   console.log("  ✅ passed");  
}
catch (e) {
   console.log("  🚫 fail");
    console.error(e)
}