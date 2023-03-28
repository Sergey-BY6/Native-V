const axios = {
    _fake(url, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                };
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: "we will prepare students for you"
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 21
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(1, 5) * 1000);
        });
    },

    post(url, data) {
        return this._fake(url, data);
    },
    get(url, data) {
        return this._fake(url, data);
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//
//
// let myPromise = new Promise((res, rej) => {
//     setTimeout(()=> {
//         const randValue = Math.random()
//         res(randValue)
//     }, 2000)
//     console.log(1)
//     console.log(2)
//     console.log(3)
// });
//
// myPromise.then((data) => {
//     console.log("Promise1 resolve: " + data);
// })
//
// myPromise.then((data) => {
//     console.log("Promise2 resolve: " + data);
// })
//
//
//
// const doAfter = (tik) => {
//     return new Promise((res, rej) => {
//         setTimeout(()=> {
//             // console.log(`Promise resolve ${tik} seconds`)
//             res(tik)
//         }, tik * 1000)
//     })
// }
//
// //
// doAfter(5).then( (tik) => console.log(`Promise resolve ${tik} seconds`) );
// doAfter(3).then( (tik) => console.log(`Promise resolve ${tik} seconds`) );
// doAfter(10).then( (tik) => console.log(`Promise resolve ${tik} seconds`) )
//
//
//
//

//
// const doAfter2 = (tik) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             // console.log(`Promise resolve ${tik} seconds`)
//             rej("ERROR")
//         }, tik * 1000)
//     })
// }
//
// doAfter2(3)
// .then((tik) => console.log('я сработал через 3 секунд'))
// .then((tik) => console.log('и я тоже следом сработал через 3 секунд'))
// .then((tik) => console.log('и я'))
// .catch((err) => {console.error(err)})

