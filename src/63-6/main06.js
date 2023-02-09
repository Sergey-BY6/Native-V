const students = [
    {id: 1, name: "Bob", age: 22, isMarried: true, scores: 85,
        // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {id: 2, name: "Alex", age: 21, isMarried: true, scores: 90,},
    {id: 3, name: "Nick", age: 20, isMarried: false, scores: 120},
    {id: 4, name: "John", age: 19, isMarried: false, scores: 100},
    {id: 5, name: "Helen", age: 20, isMarried: false, scores: 110},
    {id: 6, name: "Ann", age: 20, isMarried: false, scores: 105},
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {id: 1, name: "Ann", age: 22, isMarried: true, scores: 85},
        {id: 2, name: "Alex", age: 21, isMarried: true, scores: 90,},
        {id: 4, name: "John", age: 19, isMarried: false, scores: 100}
    ]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: user.friends.map( el => ({...el}))}

//3. Поверхностная копия массива students
let copyStudents = students.map( el => el)

//4. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map( el => ({...el}))

//4a. Внесите  следующие изменения в объект superUser:
// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// - удалите объект с id=1 из массива  friends
// {...superUser, friends: superUser.friends.map( el => ({...el}))}
let superUserCorrect1 = {...superUser, friends: superUser.friends.filter(el => el.id !== 1)}




// - поменяйте объекту с id=2 из массива  friends значение св-ва name на
// "Donald"
let superUserCorrect2 = {...superUser, friends: superUser.friends.map(el => el.id === 2 ? {...el, name: "Donald"}: el)}



// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)

let sortedByName = [...deepCopyStudents].sort((a,b) => a.name > b.name ? 500 :-500)
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым)(sort)

let sortedByScores = deepCopyStudents.sort((a,b) => a.scores > b.scores ? -500 : 500)
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)

let  bestStudents = students.filter(( el => el.scores >= 100))
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

const topStudents = deepCopyStudents.splice(0, 3);

console.log(topStudents)
console.log(deepCopyStudents)



// 6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор || concat)

let newDeepCopyStudents = [...topStudents, ...deepCopyStudents ]

console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)

let notMarriedStudents = students.filter(el => !el.isMarried)
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)

let studentsNames = students.map ( el => el.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)

let namesWithSpace = students.map(el => el.name).join(" ")
console.log(namesWithSpace)
let namesWithComma = students.map(el => el.name).join(",")
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)

let trueStudents = students.map(el => ({...el, isStudent: true }))
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)

let studentsWithMarriedNick = students.map(el => el.name === "Nick" ? {...el, isMarried: true} : el)
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)

let ann = students.find(el => el.name === "Ann")
console.log(ann)

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не используя методы массивов и Math.max()*

let bestStudent = students.reduce((acc, el) => el.scores > acc ? acc = el.scores : acc, 0);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

let scoresSum = students.reduce((acc, el) => el.scores +  acc, 0);
console.log(scoresSum)











// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    const nameArr = students.map(el => el.name)
    return  students.map (el => ({...el, friends: nameArr.filter( f => f !== el.name) })   )
}


console.log(addFriends(students));





// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает массив из одного лучшего студента
// getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]



// let sortedByName = [...deepCopyStudents.sort( (a, b)=> a.name.localeCompare(b.name))]; так мутируем deepCopyStudents
// let sortedByName = [...deepCopyStudents].sort( (a, b)=> a.name.localeCompare(b.name)); так не мутируем deepCopyStudents, нужно сначала [...deepCopyStudents] и только потом применяем sort