
//AJAX==> Asynchronous javascript

//synchronous js
//line by line

// function add1() {
//     console.log('I am add one function')
// }

// function add2() {
//     console.log('I am add two function')
// }

// add2()
// add1()
// //I am add two function
//I am add one function

//cypress playwright

//html
//css
//js
//========================================================
//synch => asynch

//setTimeout

// function add3() {
//     setTimeout(function () {
//         console.log('I am add three')
//     }, 2000)
// }

// function add4(){
//     console.log('I am add four')
// }

// add3()
// add4()

//I am add four
//2 sec
//I am add three

//==========================================

//api => multiple user info=> single user => show info   => dependent


//synch => asynch => synch
function getUser() {
    setTimeout(function () {
        console.log("Multiple user Created")
    }, 4000)

    setTimeout(function () {
        console.log('Get single user')
    }, 3000)

    setTimeout(function () {
        console.log("Render user info")
    }, 2000)
}
getUser()






