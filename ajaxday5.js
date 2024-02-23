
//Program 1
// pro.then(function (str) {
//     console.log(str)//Hello
// }, function (str) {
//     console.log(str)
// })

//Program 2

// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

//Program 3


// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("always")
// })

//program 4

// let pro = new Promise(function (resolve, reject) {
//     let a = 20
//     let b = 20
//     if (a == b) {
//         resolve('Hey')
//     }
//     else {
//         reject('Bye')
//     }
// })
// pro.then(function (str) {
//     console.log(str)
//     return str + "All"
// })
// .then(function(str){
//     console.log(str) //ByeAll
//     return "Minskole"
// })
// .then(function(str){
//     console.log(str)//Minskole
// })
// .catch(function(str){
//     console.log(str)

// })


//Asynch => Synch

//Calbackhell


// function getSingleUser() {
//     setTimeout(function () {
//         console.log("User Create")

//         setTimeout(function () {
//             console.log("Get ID")

//             setTimeout(function () {
//                 console.log("Show User")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getSingleUser()

//================================================================

function createUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("User Create")
        }, 2000)
    })
}

function getId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Get ID")
        }, 2000)
    })
}

function showUser() {
   return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Show User")
        }, 1000)
    })
}


createUser()
.then(function(str){
    console.log(str)
    return getId()
})
.then(function(str){
    console.log(str)
    return showUser()
})
.then(function(str){
    console.log(str)
})
.catch(function(){
    console.log("Bye")
})
.finally(function(){
    console.log("Always execute")
})

//Asynch await