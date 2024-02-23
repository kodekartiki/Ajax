
//Ajax 

// function additionA(){
//     console.log("A")
// }

// function additionB(){
//     console.log("B")
// }
// additionB()
// additionA()

//B
//A

// function additionC() {
//     setTimeout(function () {
//         console.log("C")
//     }, 3000)
// }

// function additionD(){
//     console.log('D')
// }
// additionC()
// additionD()
//D
//3sec
//C


//user create => getID => getInfo

// function getSingleInfo() {
//     setTimeout(function () {
//         console.log('User Created')
//     }, 3000)

//     setTimeout(function () {
//         console.log('Get ID')
//     }, 2000)

//     setTimeout(function () {
//         console.log('GetInfo')
//     }, 1000)

// }

// getSingleInfo()


//asynch => synch

//call Back hell

// function getSingleInfo() {
//     setTimeout(function () {
//         console.log('User created')

//         setTimeout(function () {
//             console.log("get ID")

//             setTimeout(function () {
//                 console.log('Get Info')
//             }, 1000)

//         }, 2000)

//     }, 3000)
// }

// getSingleInfo()


//promises

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 10

//     if (a == b) {
//         resolve("hello")
//     }
//     else {
//         reject("Bye")
//     }
// })

// //consumed  => .then

// pro.then(function (result) {
//     console.log(result)
// }, function (result) {
//     console.log(result)
// })


// let pro1 = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 20

//     if (a == b) {
//         resolve([11, 22, 33])
//     }
//     else {
//         reject([-11, -22, -33, -44])
//     }
// })

// pro1.then(function (a) {
//     console.log(a[2])
// }, function (a) { //[-11, -22, -33, -44]
//     console.log(a[0])//-11
// })


// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 100

//     if (a == b) {
//         resolve("hello")
//     }
//     else {
//         reject("Bye")
//     }
// })

// //consumed  => .then

// pro
//     .then(function (result) {
//         console.log(result)
//     })
//     .catch(function (result) {
//         console.log(result)
//     })


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

pro
    .then(function (a) {
        console.log(a)
    })
    .catch(function (b) {
        console.log(b)
    })
    .finally(function(){
        console.log("I will always executed block")
    })
