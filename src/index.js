// 1. iterator

const iterable = ['a', 'b'];
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());