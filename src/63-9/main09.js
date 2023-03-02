// global lexical environmemt
//{car: 'bmw', startCarEnging: Function, finishCarEnging: Function}

// var car;

// car = 'bmw';

// function startCarEnging() {
//   //{enging: 'Start'}
//   let enging = 'Start';
//   return () => {
//     //{}
//     console.log(`${enging} ${car}`);
//   };
// }

// function finishCarEnging (){
// var car
// }

// const drive = startCarEnging();
// drive();
//{count: 5}
// let count = 1;

// const counter = () => {
//   let count = 1
//   return () => {
//     count++
//   }
// }
// const counter22 = counter()

// const createCounter = (count = 1) => {
//   //{}
//   // let count = 1;
//   return {
//     increment() {
//       count++;
//     },
//     getCounter() {
//       return count;
//     },
//   };
// };

// const counter1 = createCounter();

// counter1.increment();
// counter1.increment();
// counter1.increment();

// console.log(counter1.getCounter());

// const thunk = (dispatch, state) => {
//   console.log(fetch(`http://google.com/${id}`))
// }

// const thunkCreator = (id) => {
//   //{id}
//   const thunk = (dispatch, state) => {
//     //{}
//     console.log(fetch(`http://google.com/${id}`))
//   }
//   return thunk
// }

// const thunk1 = thunkCreator(1)
// const thunk2 = thunkCreator(2)

// thunk1()

// const sum = (a) => (b) => (c) => a + b + c;

// function sum(a) {
//   return function (b = 0) {
//     return function (c = 0) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(1));

// function a (){
//   b(c())
// }
// function b (){}
// function c (){}

// a()
//{pow}
const pow = (x, n) => {
    //{}
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
};

console.log(pow(3, 3));
