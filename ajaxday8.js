
//Call Back hell
//Promises

//asynch==> AJAX

//asych => synch => dependancy

//==========================================

//if there is no dependancy

//Paraller combinators

//1. Promise.all()
//2. Promise.race()
//3. Promise.any()
//4. Promise.allsettle()

//Promise.all() => shortCircut at forst reject state
// async function promiseAll(){
//     let result=await Promise.all([
//         Promise.resolve("hey"),
//         Promise.reject("Bye"),
//         Promise.resolve("Hello"),
//         Promise.reject("Good Bye")

//     ])
//     console.log(result)
// }
// promiseAll()

// async function promiseAll(){
//     try{
//         let result=await Promise.all([
//             Promise.resolve("hey"),
//             Promise.reject("Bye"),
//             Promise.resolve("Hello"),
//             Promise.reject("Good Bye")

//         ])
//         console.log(result)
//     }
//     catch{
//         console.log("output")
//     }

// }
// promiseAll()

//2. Promise.race()

// function one() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("hello")
//         }, 500)
//     })
// }

// function two() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("good morning")
//         }, 1000)
//     })
// }

// async function promiseRace(){
//     let race=await Promise.race([
//         one(),
//         two()
//     ])
//     console.log(race)
// }

// promiseRace()

//3. Promise.allSettel

// async function promiseallsettle(){
//     let result=await Promise.allSettled([
//         Promise.resolve('hi'),
//         Promise.reject('bye'),
//         Promise.reject('good bye')
//     ])
//     console.log(result)
// }
// promiseallsettle()

//4. Promise.any() => shortcircuit first resolve 
async function promiseAny(){
    let output=await Promise.any([
        Promise.reject('bye'),
        Promise.resolve('hi'),
        Promise.resolve('hello all'),
        Promise.reject('GoodBye'),
        Promise.resolve('hello'),

    ])
    console.log(output)
}
promiseAny()
