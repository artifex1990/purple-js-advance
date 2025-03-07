'use strict';

class Test {
    static a = 1;
    static hello() {
        console.log('Hello!');
    }

    static {
        let b = 5;
        this.a = 5;
    }
}

Test.hello();
console.log(Test.a);

// const Test2 = function () {}
// Test2.hello = function () {
//     console.log('Hello!');
// }
// Test2.hello();