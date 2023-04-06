// class

// const bmw = {
//   brand: 'BMW',
//   maxSpeed: 220,
//   showMaxSpeed() {
//     console.log(`${this.brand} have max speed: ${this.maxSpeed}`)
//   }
// }

// const toyota = {
//   brand: 'Toyota',
//   maxSpeed: 220,
//   showMaxSpeed() {
//     console.log(`${this.brand} have max speed: ${this.maxSpeed}`)
//   }
// }
//
// class Car {
//     #brand;
//     constructor(brand, maxSpeed) {
//         this.#brand = brand;
//         this.maxSpeed = maxSpeed;
//     }
//     showMaxSpeed() {
//         console.log(`${this.#brand} have max speed: ${this.maxSpeed}`);
//     }
//     setBrand(newBrand) {
//         if (!newBrand) throw new Error('bad brand');
//         this.#brand = newBrand;
//     }
//     getBrand() {
//         return this.#brand;
//     }
//     set brand(newBrand) {
//         if (!newBrand) throw new Error('bad brand');
//         this.#brand = newBrand;
//     }
//     get brand() {
//         return this.#brand;
//     }
//     static concatinationsCar(inst1, inst2) {
//         console.log('ogo');
//     }
// }
//
// const bmw = new Car('BMW', 220);
// const opel = new Car('BMW', 220);
// const toyota = new Car('BMW', 220);
//
// // bmw.concatinationsCar(); false
//
// Car.concatinationsCar(); // true
//
// class SuperCar extends Car {
//     constructor(brand, maxSpeed) {
//         super(brand, maxSpeed);
//         this.wings = true;
//     }
// }
//
// const superBmw = new SuperCar('Super BMW', 300);
//
// console.log('superBmw', superBmw);
//
// superBmw.showMaxSpeed();

// console.log(bmw.brand);

// Car.concatinationsCar(bmw);
// console.log(bmw instanceof Object);

// bmw.showMaxSpeed();

// const pr1 = new Promise()
// const pr2 = new Promise()

// Promise.all([pr1, pr2])

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { AxiosError } from 'axios';

// import { iexAPI } from 'api';
// import { IEquities } from 'components';
// import { IFetchError } from 'types';

// export const getChart = createAsyncThunk<IEquities[], string, { rejectValue: IFetchError }>(
//   'equities/getEquities',
//   async (symbols, { rejectWithValue }) => {
//     try {
//       const res = await iexAPI.getChart(symbols);

//       return res.data;
//     } catch (e) {
//       if (e instanceof AxiosError && e.response?.data) {
//         return rejectWithValue({ message: e.response.data });
//       } else {
//         throw e;
//       }
//     }
//   },
// );

// export const getNewUsersPageTC = (pageNumber: number, usersOnPage: number) => {
//   return (dispatch: Dispatch) => {
//     dispatch(setIsLoadingAC(true));
//     dispatch(setCurrentPageAC(pageNumber));
//     usersAPI
//       .getUsers(usersOnPage, pageNumber)
//       .then((data) => dispatch(setUsersAC(data.items)))
//       .finally(() => dispatch(setIsLoadingAC(false)));
//   };
// };
