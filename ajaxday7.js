
// function getMultipleUser() {
//     fetch("https://reqres.in/api/users?page=2")
//         .then(function (res) {
//             // console.log(res)//output is not in readable format
//             //console.log(res.json()) //json method returns promise
//             return res.json()
//         })
//         .then(function (response) {
//             //console.log(response)
//             //console.log(response.data)
//             response.data.forEach(function (el) {
//                 document.write(`<h1>${el.first_name}</h1>`)
//                 document.write(`<h1>${el.last_name}</h1>`)
//                 document.write(`<h1>${el.id}</h1>`)
//                 document.write(`<h1>${el.email}</h1>`)
//                 document.write(`<img src=${el.avatar}>`)
//             })
//         })
// }

//getMultipleUser()


//GetUser
function getMultipleUser(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return (res.json())
        })
        .then(function (res) {
            return (res.data)
        })
}
//getMultipleUser()

//SingleUser
function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return (res.data)
        })
}
//getSingleUser()

//ShowInfo
function showInfo(el) {
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h1>${el.email}</h1>`)
    document.write(`<img src=${el.avatar}>`)
}

// getMultipleUser(2)
// .then(function(res){
//     console.log(res) //[{5},{5},{5},{5}]
//     getId=(res[4].id)//10
//     return getSingleUser(getId)
// })
// .then(function(res){
//    // console.log(res) //id 10 ==> userInfo
//     showInfo(res)
// })

//asynch await

async function info(){
    let dataArray=await getMultipleUser(1)
    let idUserInfo=await getSingleUser(dataArray[5].id)
    showInfo(idUserInfo)
}
info()
