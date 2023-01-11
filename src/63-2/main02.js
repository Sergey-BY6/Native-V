let students = [
    {name: "Bob", age: 22, isMarried: true, scores: 85,},
    {name: "Alex", age: 21, isMarried: true, scores: 89},
    {name: "Nick", age: 20, isMarried: false, scores: 120},
    {name: "John", age: 19, isMarried: false, scores: 100}
];



const getScores = item => item.scores
const getName = item => item.name

const getStNames = (array) => {
    const result = []
    const getName = item => item.name
    for (let i = 0; i < array.length; i++) {
        result[i] = getName(array[i])
    }
    return result
}
console.log(getStNames(students))

const getStScores = (array) => {
    const result = []
    const getScores = item => item.scores
    for (let i = 0; i < array.length; i++) {
        result[i] = getScores(array[i])
    }
    return result
}


const getNewArray = (array, func) => {   // map :))))))
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

console.log(getNewArray(students, getName))
console.log(students.map(getName))

// const addProp = item => {
//     item.isStudent = true
//     return item
// }

const addProp = item => ({...item, isStudent: true})

// filter
const itPush = (array, el) => {
    array[array.length] = el
    return array.length
}

const itFilter = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if(func(array[i]) === true){
            itPush(array, array[i])
        }
    }
    return result
}

const itIncludes = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === value){
            return true
        }
    }
    return false
}

const itUnShift = (array, item) => {  // + 1
    for (let i = array.length - 1; i >= 0; i--) {
        array[i + 1] = array[i]
    }
    array[0] = item
    return array.length
}

const itShift = (array)=> {
    const removedItem = array[0]
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1]
    }
    array.length = array.length - 1

    return removedItem
}
// const nums = [1,2,3,4,5]
const nums = new Array(1,2,3,4,5)
itShift(nums)
console.log(nums)


nums.map(el => el ** 2)
    .filter(el => el < 20)
    .reverse()
    .pop()

console.dir(Array)





Array.prototype.hey = () => {
    return this.length
}


const arr = []  // new Array()

console.log(arr.hey())

const arr2 = [1,2,3,4]
console.log(arr2.hey())


Array.prototype.getAllValues = function (key) {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i][key])
    }
}

students.getAllValues("name")


class Student {
    
}

const ivan = new Student("Иван")






