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


const api1 = {
    sendStudentsCountToItKamasutra(studentsCount) {
        return axios.post("https://it-kamasutra.com/students-need",
            {count: studentsCount})
            .then(res => res.data);
    },
    getVacanciesCountFromMicrosoft() {
        return axios.get("https://microsoft.com")
            .then(res => res.data.vacancies);
    },
    getVacanciesCountFromGoogle() {
        return axios.get("https://google.com")
            .then(res => res.data.vacancies);
    }
}

///////////////////////////////////////////////////////////////////////////


// let myPromise = new Promise((res, rej) => {
//     setTimeout(()=> {
//         const randValue = Math.random()
//         res(randValue)
//     }, 2000)
//     console.log(1)
//     console.log(2)
//     console.log(3)
// });


// myPromise.then((data) => {
//     console.log("Promise1 resolve: " + data);
// })


// myPromise.then((data) => {
//     console.log("Promise2 resolve: " + data);
// })


///////////////////////////////////////////////////////////////////////////////////////////


// const doAfter = (tik) => {
//     return new Promise((res, rej) => {
//         setTimeout(()=> {
//             // console.log(`Promise resolve ${tik} seconds`)
//             res(tik)
//         }, tik * 1000)
//     })
// }


// doAfter(5).then( (tik) => console.log(`Promise resolve ${tik} seconds`) );
// doAfter(3).then( (tik) => console.log(`Promise resolve ${tik} seconds`) );
// doAfter(10).then( (tik) => console.log(`Promise resolve ${tik} seconds`) )


////////////////////////////////////////////////////////////////////////////////////////


// const doAfter2 = (tik) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             // console.log(`Promise resolve ${tik} seconds`)
//             rej("ERROR")
//         }, tik * 1000)
//     })
// }


// doAfter2(3)
// .then((tik) => console.log('я сработал через 3 секунд'))
// .then((tik) => console.log('и я тоже следом сработал через 3 секунд'))
// .then((tik) => console.log('и я'))
// .catch((err) => {console.error(err)})


/////////////////////////////////////////////////////////////////////////////////


//
// let a = api1.getVacanciesCountFromMicrosoft()
//     .then(res => {
//         console.log(res)
//         return res
//     })
//
//
// let b = api1.getVacanciesCountFromGoogle()
//         .then(res => {
//             console.log(res)
//             return res
//     })
//
// Promise.all([a, b])
//     .then((data) => {
//         console.log(data)
//         let resVac = data[0] + data[1]
//         console.log(resVac)
//         return resVac
//     })
//     .then((data) => {
//         api1.sendStudentsCountToItKamasutra(data)
//         return data
//     })
//     .then((data)=> {
//     console.log("OK, sending vacansies " + data)
// })


////////////////////////////////////////////////////////////////////


// const doAfter3 = (tik) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             // console.log(`Promise resolve ${tik} seconds`)
//             res("OK")
//         }, tik * 1000)
//     })
// }


// let a = doAfter3(4)
//     .then( () => console.log("a resolved") )
// let b = doAfter3(7)
//     .then( () => console.log("b resolved") )


// Promise.all([a, b])
//     .then( () => console.log("a and b resolved"))


///////////////////////////////////////////////////////////////////////////////


// const getRandomAfter = (tik) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             const randValue = Math.random()
//             res(randValue)
//         }, tik * 1000)
//     })
// }
//


// getRandomAfter(4).then( number => console.log(`я получил ${number} спустя 4 секунды`))
//
// let promises = [getRandomAfter(1),getRandomAfter(2), getRandomAfter(3)];
// Promise.all(promises)
// .then( (data) => {
//     console.log(data[0], data[1], data[2])
// } )


///////////////////////////////////////////////////////////////////////////////////////////////

//
// const foo = () => {
//     let vacRes = 0
//     api1.getVacanciesCountFromMicrosoft()
//         .then((res) => {
//             console.log(res)
//             vacRes += res
//             return api1.getVacanciesCountFromGoogle()
//         })
//         .then((res) => {
//             console.log(res)
//             vacRes += res
//             return api1.sendStudentsCountToItKamasutra(vacRes)
//         })
//         .then(() => {
//             console.log("OK, sending vacansies " + vacRes)
//         })
// }
//
// foo()


///////////////////////////////////////////////////////////////////////////////



// const loadVacancies = async () => {
//     const getM = await api1.getVacanciesCountFromMicrosoft()
//     console.log(getM)
//
//     const getG = await api1.getVacanciesCountFromGoogle()
//     console.log(getG)
//
//     const sendVac = await api1.sendStudentsCountToItKamasutra(getM + getG)
//     console.log("OK, sending vacansies " + (getM + getG))
//
//     return sendVac
// }
//
// // loadVacancies()
// console.log(loadVacancies())



///////////////////////////////////////////////////////////////////////////////////////////


const loadVacancies2 = async () => {
    const getM = api1.getVacanciesCountFromMicrosoft()
        .then(res => {
        console.log(res)
        return res
    })
    
    const getG = api1.getVacanciesCountFromGoogle()
        .then(res => {
        console.log(res)
        return res
    })

    const promiseAll = await Promise.all([getM, getG]).then(res => {
        console.log("Promise res all")
        return res
    })

    const sendVac = await api1.sendStudentsCountToItKamasutra(promiseAll[0] + promiseAll[2])
    console.log("OK, sending vacansies " + (promiseAll[0] + promiseAll[2]))

    return sendVac
}

loadVacancies2()