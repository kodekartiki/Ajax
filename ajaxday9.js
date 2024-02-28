//Promise.All()
//Promise.race()
//Promise.allSettled()
//Promise.any()

async function getInfo(id) {
    let res = await fetch(`https://reqres.in/api/users/${id}`)
    // console.log(res)
    if (!res.ok) {
        throw new Error("Http error")
    }
    else {
        return res.json()
    }

}
getInfo(3)

function getTimer(sec) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Hey")
        }, sec)
    })
}

//Promise.all()

// Promise.all([
//     getInfo(4) ,
//     Promise.reject('Bye'),
//     getTimer(2000)
// ])
// .then(function(res){
//     console.log(res)
// })

// async function getresult() {
//     let ouput=await Promise.all([
//         getInfo(4),
//         Promise.reject('Bye'),
//         getTimer(2000)
//     ])
//     console.log(ouput)
// }
// getresult()

//========================================================

//Promise.race()
// Promise.race([
//     getInfo(4),
//     getTimer(2000)
// ])
// .then(function(res){
//     console.log(res)
// })

// async function getResult() {
//     let output=await Promise.race([
//         getInfo(4),
//         getTimer(0)
//     ])
//     console.log(output)
// }
// getResult() 

//===================================================

//Promise.allsettle()

// Promise.allSettled([
//     getTimer(1),
//     getInfo(2),
//     Promise.reject('fail')
// ])
// .then(function(res){
//     console.log(res)
// })

// async function getresult(){
//     let res=await Promise.allSettled([
//         getTimer(1),
//             getInfo(2),
//             Promise.reject('fail')
//     ])
//     console.log(res)
// }
// getresult()

//===============================================

//Promise.any()
// Promise.any([
//     getTimer(1),
//     getInfo(4) ,
//     Promise.reject('Bye'),
//     getTimer(5000)
// ])
// .then(function(res){
//     console.log(res)
// })


async function getResult() {
    let result=await Promise.any([
        getTimer(1),
        getInfo(4),
        Promise.reject('Bye'),
        getTimer(5000)
    ])
    console.log(result)
}
getResult()
