'use strict';


/* Test 1 ex */
function wait(ms) {
	const { resolve, reject, promise } = Promise.withResolvers();
    setTimeout(resolve, ms);
    return promise;
}

async function run() {
    console.log('начало');
    await wait(1);
    console.log('конец');
}

run();

/* Test 2 ex */
class Queue {
    #message = [];
    #resolve;
    #reject;
    #promise;

    constructor() {
        const { resolve, reject, promise } = Promise.withResolvers();
        this.#resolve = resolve;
        this.#reject = reject;
        this.#promise = promise;
    }

    add(msg) {
        this.#message.push(msg);
        return this;
    }

    close() {
        this.#resolve(this.#message);
    }

    error(reason) {
        this.#reject(reason);
    }

    subscriber() {
        return this.#promise;
    }
}


const queue = new Queue();
const sub1 = queue.subscriber();
sub1.then(data => console.log(data)).catch(err => console.error(err));
const sub2 = queue.subscriber();
sub2.then(data => console.log(data)).catch(err => console.error(err));

queue.add('msg1').add('msg2').close();
// queue.add('msg1').add('msg2').error('Не получен последний пакет!');