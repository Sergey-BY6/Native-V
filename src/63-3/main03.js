// handler === listener === subscriber  => function
// handler ⊂ callback
// callback => handler, setTimeout/SetInterval, param of arrays method
// onClick = handler; handler()



const sm = document.getElementById("small")
const md = document.getElementById("medium")
const big = document.getElementById("big")

const handler1 = (e) => {
    console.log(e)
}

const handler2 = (e) => {
    alert(e)
}

// sm.onclick = handler1
// sm.onclick = handler2

//
// sm.addEventListener("click", handler1)
// sm.addEventListener("click", handler2)


sm.onclick = handler1
md.onclick = handler1
big.onclick = handler1