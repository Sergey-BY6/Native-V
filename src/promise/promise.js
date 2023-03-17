// fetch('https://libruary/autors', (err, data) => {
//   if (err) {
//     console.log(err);
//     return
//   } else {
//     fetch('https://libruary/autors/5', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         fetch('https://libruary/autors/5/books', (err, data) => {
//           //
//             fetch('https://libruary/autors/5/books/6', (err, data) => {
//               if (err) {
//                 console.log(err);
//               } else {
//               }
//             });
//           }  
//         });
//       }
//     });
//   }
// });

// fetch('https://libruary/autors')
//   .then((data) => {
//     fetch('https://libruary/autors/5');
//   })
//   .then((data) => {
//     fetch('https://libruary/autors/5/books');
//   })
//   .then((data) => {
//     fetch('https://libruary/autors/5/books/6');
//   })
//   .catch((err) => {
//     console.log('catch err', err)
//   });

// 'pending' //'fulfilled' 'rejected'

// const server = {
//   getData() {
//     const promice = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // resolve('data');
//         reject('something went wrong');
//       }, 2000);
//     });
//     return promice;
//   },
// };

// server
//   .getData()
//   .then((data) => {
//     console.log('then', data);
//     return data;
//   })
//   .catch((err) => {
//     console.log('catch', err);
//     // console.log(a);
//     // return 'some string';
//   })

// const promise = server.getData();

// promise.then(() => {});

// promise.then(() => {});

// const promise2 = promise.then((data) => {
//   console.log('then', data);

// });

// promise2.then((res2) => {
//   console.log('then2', res2);
// });

//then
//catch
//finally

//Напишите функцию delay(ms), которая возвращает промис,
//переходящий в состояние "resolved" через ms миллисекунд.
//Пример использования:

// const delay = (ms) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res();
//         }, ms);
//     });
// };
//
// delay(2000).then(() => console.log('Hello!'));


// const promise = new Promise((resolve, reject) => resolve(200)).then(()=>{return 50}).then(()=>{}).then(()=>{return 300})
//
// console.log(promise.then())

// new Promise((res, rej) => {
//     res(10)
// })
//     .then((data) => {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 console.log(data + 1)
//                 res(data + 1)
//             }, 2000)
//         })
//     })
//     .then((data) => {
//         // return new Promise((res, rej) => {
//             setTimeout(() => {
//                 console.log(data + 1)
//                 // res(data + 1)
//             }, 2000)
//         // })
//         return 50
//     })

//
//
//  const  func =  async () => {
//     try {
//         const value1 = await new Promise((res, rej) => {
//             setTimeout(()=>{
//                 console.log(2)
//                 res(2)
//             },2000)
//         })
//         const value2 = await new Promise((res, rej) => {
//             setTimeout(()=>{
//                 console.log(2 + value1)
//                 res(2 + value1)
//             },2000)
//         })
//         const value3 = await new Promise((res, rej) => {
//             setTimeout(()=>{
//                 console.log(2 + value2)
//                 res(2 + value2)
//             },2000)
//         })
//         return value3
//     }
//     catch {
//         console.log("gggggggg")
//     }
// }
//
// console.log(func())


// new Promise((res, rej) => {
//     res(1)
// })
//     .then((data) => {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 console.log(data + 1)
//                 res(data + 1)
//             }, 2000)
//         })
//     })
//     .then((data) => {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 console.log(data + 1)
//                 res(data + 1)
//             }, 2000)
//         })
//     })
//     .then((data) => {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 console.log(data + 1)
//                 res(data + 1)
//             }, 2000)
//         })
//     })
//     .catch((err) => {
//         console.log("Err")
//     })
//     .then((data) => {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 console.log("final")
//                 res(data + 1)
//             }, 2000)
//         })
//     })

//
// Promise.all([
//     new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("1")
//         res( 1)
//     }, 2000)
// }), new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("2")
//         res(2)
//     }, 3000)
// }),
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("3")
//             res(3)
//         }, 4000)
//     })
// ])
//     .then((data) => {
//         console.log(data)
//     })


//
// const func = async () => {
//         const value1 = await new Promise((res, rej) => {
//             setTimeout(() => {
//                 console.log("1")
//                 res(1)
//             }, 1000)
//         })
//
//         const value2 = await new Promise((res, rej) => {
//             setTimeout(() => {
//                 console.log(value1 + 1)
//                 res(value1 + 1)
//             }, 1000)
//         })
//
//         const value3 = await new Promise((res, rej) => {
//             setTimeout(() => {
//                 console.log(value2 + 1)
//                 res(value2 + 1)
//             }, 1000)
//         })
//
//     return value3
// }
//
// console.log(func())
//
//
//

const promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => data.json().then(data => data.id))
    .then(console.log)

