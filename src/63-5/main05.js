console.log("hi")

//это все для строк, сорт из коробки приводит данные к строкам
const str1 = ["Bob", "Alex", "John"]

console.log(str1.sort())


const str2 = ["Bob", "Alex", "John", "john", "123", "игорь", "Юрий"]

console.log(str2.sort())

console.log(str2)

// sort работает мутабельно

// sort возвращает  ссылку на исходнй массив
console.log( str2 === str2.sort())


//это все для чисел

const numbers = [1000, "+20", -500, 77, 9]

console.log(numbers.sort())

const compareFn = (a, b) => { // по возрастанию
    if (a > b) { // надо переставить, > 0
return 5567
    }
    else { // не надо переставлять, < 0
        return -22
    }
    // иначе ставим в условии b - a
}

console.log(numbers.sort((a, b) => a - b))


console.log(numbers.reverse()) // если указали не то условие ( a - b или b - a)




const students = [
    {name: "Bob", age: 22, isMarried: true, scores: 95},
    {name: "Alex", age: 24, isMarried: true, scores: 89},
    {name: "Helge", age: 24, isMarried: true, scores: 90},
    {name: "Nick", age: 20, isMarried: false, scores: 120},
    {name: "John", age: 19, isMarried: false, scores: 121},
    {name: "alex", age: 22, isMarried: true, scores: 89},
];

// сортировка массвиа объектов по строковым значениям
// а. Регистрозависимая сортировка

const compareObjByName = (a, b) => {
    if (a.name > b.name) {
        return  5
    }
    else {
        return -5
    }
}

console.log(students.sort(compareObjByName))


// b. РегистронНЕзависимая сортировка
console.log(students.sort((a,b) => a.name.localeCompare(b.name))) // Возвращает 1 или - 1



//сортировка по числам
console.log(students.sort((a,b) => a.scores - b.scores))



//Сортировка пузырьком

const numbersss = [67, 34, 12, 22]

//расшаренный вариант
for (let j = 0; j < numbersss.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < numbersss.length -1 - j; i++) {
        if (numbersss[i] > numbersss[i + 1]) {
            // меняем местами
            isSorted = false;





            // let temp = numbersss[i]
            // numbersss[i] = numbersss[i + 1]
            // numbersss[i + 1] = temp

            //замена куска кода выше, обязательно стави ; после false;
            //здесь деструктуризация, [    ] оборачивающие переменные с двух сторон =(равно) это не массив
            [ numbersss[i+1], numbersss[i] ] = [numbersss[i], numbersss[i + 1]]
        }
    }
    if (isSorted) break
}

//лайтовый вариант
for (let j = 0; j < numbersss.length; j++) {
    for (let i = 0; i < numbersss.length; i++) {
        if (numbersss[i] > numbersss[i + 1]) {
            // меняем местами
            let temp = numbersss[i]
            numbersss[i] = numbersss[i + 1]
            numbersss[i + 1] = temp
        }
    }
}



console.log(numbersss)
// O(n^2) => O((n-1)^2) => O((n-1)^2) * (n-1)/2

