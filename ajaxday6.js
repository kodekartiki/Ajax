// //call Back hell
// //Asych=> synch

// // function add1() {
// //     setTimeout(function () {
// //         console.log("User created")

// //         setTimeout(function () {
// //             console.log('get Id')

// //             setTimeout(function () {
// //                 console.log("Show user")
// //             }, 500)

// //         }, 4000)

// //     }, 3000)
// // }
// // add1()

// //Promise

// function CreateUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("User Create")
//         }, 5000)
//     })
// }

// function GetId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Get ID")
//         }, 3000)
//     })
// }

// function ShowUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Show User")
//         }, 1000)
//     })
// }
// //WAY1
// // CreateUser()
// // .then(function(result){
// //     console.log(result)
// //     return GetId()
// // })
// // .then(function(result1){
// //     console.log(result1)
// //     return ShowUser()
// // })
// // .then(function(result2){
// //     console.log(result2)
// // })
// // .catch(function(){
// //     console.log("rejected")
// // })
// // .finally(function(){
// //     console.log("Always executed")
// // })

// //WAY 2
// //asynch await

// async function userInfo(){
//     let p1=await CreateUser()
//     console.log(p1)
//     let p2=await GetId()
//     console.log(p2)
//     let p3=await ShowUser() 
//     console.log(p3)
// }
// userInfo()


//===================================================================

let users = {
    "page": 1,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

//Program 1
// users.data.forEach(function(el){
//     //console.log(el)
//     document.write(`<h1>${el.first_name}</h1>`)
//     document.write(`<h1>${el.last_name}</h1>`)
//     document.write(`<h1>${el.email}</h1>`)
//     document.write(`<h1>${el.id}</h1>`)
//     document.write(`<img src=${el.avatar}>`)
// })

//Program 2
let clickMeBtn = document.querySelector('button')
clickMeBtn.addEventListener('click',function(){
    users.data.forEach(function(el){
    //console.log(el)
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<h1>${el.email}</h1>`)
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<img src=${el.avatar}>`)
})
})
