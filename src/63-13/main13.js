

// function foo() {
//   //this
//   const a = () => {
//     console.log(this);
//   };
//   a();
// }
//
// foo();

//////////////////////////////////

// let car = {
//   start() {
//     console.log(this)
//   },
// };
//
// const start = car.start;
// // car = null;
//
// start();

/////////////////////////////////

// let car = {
//   color: 'red',
//   showColor() {
//     console.log(this.color);
//   },
// };

// // car.showColor();
// // car = undefined;
// const superCar = car;
// car = {};

// superCar.showColor();

////////////////////////////////////////

// const car1 = {
//   maxSpeed: 200,
// };
//
// const car2 = {
//   maxSpeed: 240,
// };
//
// function showMaxSpeed() {
//   console.log('maxSpeed', this.maxSpeed);
// }
//
// car1.foo = showMaxSpeed;
// car2.foo = showMaxSpeed;
//
// car1.foo();
// car2.foo();

//////////////////////////////////////////

// let car1 = {
//   color: 'red',
//   showColor() {
//     console.log(this.color);
//   },
// };
//
// car1.showColor()

/////////////////////////////////////////

// let car3 = {
//   color: 'red',
//   showColor() {
//     //this
//     (() => {
//       console.log(this.color);
//     })();
//   },
// };
//
// car3.showColor();

////////////////////////////////////////

// let car4 = {
//   color: 'red',
//   showColor() {
//     console.log(this.color);
//   },
// };
//
// let foo = car4.showColor;
//
// foo()

/////////////////////////////////

// call, aplly, bind
//
// let car1 = {
//   maxSpeed: 200,
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//   },
// };
//
// let car2 = {
//   maxSpeed: 260,
// };

// car1.showMaxSpeed();
// car1.showMaxSpeed.apply(car2);
// car1.showMaxSpeed.call(car2);
// const newShowMaxSpeed = car1.showMaxSpeed.bind(car2);
//
// newShowMaxSpeed();

/////////////////////////////////////////////////////

// const scooter = {
//   maxSpeed: 60,
// };
//
// const bike = {
//   maxSpeed: 180,
//   showMaxSpeed(a, b, d) {
//     console.log(this.maxSpeed, a, b, d);
//   },
// };

// bike.showMaxSpeed.bind(scooter, 1, 2)(3);


// const car1 = {
//   maxSpeed: 200,
//   showMaxSpped() {
//     //this
//     (() => {
//       console.log(this.maxSpeed);
//     }).call(scooter);
//   },
// };
// car1.showMaxSpped.bind(scooter).bind(bike);

// car1.showMaxSpped();

////////////////////////////////////////////////////

// function Car(color) {
//   this.color = color;
// }
//
// const bmw = new Car('black');
//
// console.log(bmw);

///////////////////////////////////////////////////

// const car = {
//   color: 'red',
//   showColor() {
//     console.log(this.color);
//   },
// };
//
// setTimeout(car.showColor.bind(car), 1000);

/////////////////////

// const car = {
//   brand: 'ferrari',
//   color: 'red',
//
//   showColor() {
//     return `Car color ${this.color}`;
//   },
//
//   showBrand: () => {
//     return `Car brand ${this.brand}`;
//   },
// };

// console.log(car.showBrand());
// console.log(car.showColor());

////////////////////////////////////////////////

// const car = {
//   color: 'red',
//   firstShowColor() {
//     console.log('1', this.color);
//   },
//   secondShowColor: () => {
//     console.log('2', this.color);
//   },
//   thirdShowColor() {
//     //this
//     (() => {
//       console.log('3', this.color);
//     })();
//   },
// };

// car.firstShowColor();
// car.thirdShowColor();
// car.secondShowColor();

////////////////////////////////////////////

// const car = { color: 'red' };
//
// function foo() {
//   console.log(this.color);
// }
//
// const bindedFoo = foo.bind(car);
// bindedFoo();

/////////////////////////////////////////////

// const dialer = {
//   name: 'Toyota',
//   models: ['Yaris', 'Corolla', 'Prado'],
//   showModelsInDialer() {
//     //this
//     this.models.forEach(
//         (model) => {
//         console.log(`Dialer: ${this.name}, have: ${model}`);
//       }
//     );
//   },
// };
//
// dialer.showModelsInDialer();
