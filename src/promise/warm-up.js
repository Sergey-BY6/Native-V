


// let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log(promise)
//         res(200)
//     }, 3000)
// })
//
// console.log(promise)




let axios = {
    get() {
        return new Promise((res, rej) => {
            console.log("Status......")
            setTimeout(() => {
              res({
                  G: 2,
                  G3: 4,
                  message: "200"
              })
              // rej("ERROR")
            }, 3000)
        })
    }
}

axios.get()
    .then((data)=> {
        // return new Promise((res, rej) => {
        //     console.log(500)
        //     setTimeout(() => {
        //         res(500)
        //     }, 3000)
        //
        // })
        return data.message
    })
    .then((data) => {
        console.log(data)})
    // .then((data)=> {console.log(2)})
    // .catch((err)=> {console.error(err)})



