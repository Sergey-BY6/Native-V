//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

const repeatString = (str, povt, split) => {
    return `${str}${split}`.repeat(povt).slice(0,-1)
}

console.log(repeatString("yo", 3, " "))
console.log(repeatString("yo", 3, ","))


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false


const checkStart = (str, podstr) => {
    // console.log(str.toLowerCase().slice(0,podstr.length))
    // console.log(podstr)
    return str.toLowerCase().slice(0,podstr.length) === podstr
}

console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."


const truncateString = (str, value) => {
    // console.log(`${str.slice(0,value)}...`)
    return `${str.slice(0,value)}...`
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))



//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null


const getMinLengthWord = (str) => {
    // console.log(typeof str)
    return  (typeof str === "string" && str.length > 0) ? str.slice(0, -1).split(" ").reduce((acc, value) => value.length < acc.length ? value : acc) : null

}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи."))
console.log(getMinLengthWord(""))
console.log(getMinLengthWord(123))


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"


const setUpperCase = (str) => {
    return str.toLowerCase().split(" ").map(el=> el[0].toUpperCase() + el.slice(1, el.length)).join(" ")
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ"))


// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false





const isIncludes = (str, podstr) => {
    let arrStr = podstr.toLowerCase().split("")
    // let result = []
    let result2
    for (let i = 0; i < arrStr.length; i++) {
        // result.push(str.toLowerCase().includes(arrStr[i]))
        result2 = str.toLowerCase().includes(arrStr[i])
        if(!result2) {
            return result2
        }
    }
return result2
}




console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "inbba"))
console.log(isIncludes("Incubator", "inba"))
console.log(isIncludes("Incubator", "Incubatorrr"))
