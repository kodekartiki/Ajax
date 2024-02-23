//AJAX

//Synch => Asynch

//Program 1 => synch code

// function init(){
//     console.log("I am init one")
// }

// let init1=function(){
//     console.log("I am init two")
// }

// init1()
// init()

// //I am init two
// //I am init one

//===================================================

//setTimeOut()

//Program 2 //asynch

// function init2() {
//     setTimeout(function () {
//         console.log('I am init 2')
//     }, 2000)
// }

// function init3(){
//     console.log('I am init 3')
// }

// init2()
// init3()

// //I am init 3
// //2 sec
// //I am init 2

//=====================================================

//User Create ==> getId => getInfo

//Program 3
// function getUserInfo() {
//     setTimeout(function () {
//         console.log('Get Multiple User')
//     }, 3000)

//     setTimeout(function () {
//         console.log('Get Single User')
//     }, 2000)

//     setTimeout(function () {
//         console.log("Render user Info")
//     }, 1000)
// }

// getUserInfo()

//Render User info
//Get single user
//Get multiple user

//=================================================================
//synch => asynch  => synch

//Call Back hell
//Problem 4
//asynch => synch
// function getUserInfo() {
//     setTimeout(function () {
//         console.log('Get Multiple User')

//         setTimeout(function () {
//             console.log("get sinple user")

//             setTimeout(function () {
//                 console.log('render user info')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }

// getUserInfo()

//readability
//tightly couple

//3 sec
//get Multiple user
//2 sec
//Get sinple user
//1 sec
//render user info

//=======================================================

//Promises
//call back hell
//asynch => synch

//promise => reject , resolve, pending

let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10

    if (a == b) {
        resolve("hello")
    }
    else {
        reject("Bye")
    }
})

//consuming the promise
pro.then((function (str) {
    console.log(str)
}), (function (str) {
    console.log(str)
}))












