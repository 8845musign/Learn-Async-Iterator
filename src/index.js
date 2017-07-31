// 1. iterator

const iterable = ['a', 'b'];
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

// 2. Aysnc Iterator
async function* createAsyncIterable(syncIterable) {
  for (const elem of syncIterable) {
    yield elem;
  }
}

const asyncIterable = createAsyncIterable(['a', 'b']);
const asyncIterator = asyncIterable[Symbol.asyncIterator]();

asyncIterator
  .next().then(res1 => {
    console.log(res1);
    return asyncIterator.next()
  }).then(res2 => {
    console.log(res2);
    return asyncIterator.next()
  }).then(res3 => {
    console.log(res3);
    return asyncIterator.next()
  });

// 3. for-await-of 
async function f() {
  for await (const x of createAsyncIterable(['a', 'b', 'c'])) {
    console.log(x);
  }
}
f();

// 4. for-await-of temp break;
async function g() {
  for await (const x of createAsyncIterable(['e', 'f', 'g'])) {
    console.log(x);
    break;
  }
}
g();