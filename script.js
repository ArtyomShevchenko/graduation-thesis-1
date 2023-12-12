// document.addEventListener("DOMContentLoaded", () => {
//     document.body.classList.add("body--visible")
// })


// async function f1() {
//     const data = await fetch("http://localhost:3000/")
//         .then(res => res.json())
//     return data
// }
// async function f2() {
//     const res = await setTimeout(() => {
//         return 2
//     }, 2000)
//     return res
// }
// async function f3() {
//     const res = await setTimeout(() => {
//         return 3
//     }, 1000)
//     return res
// }

// async function run() {
//     const data = await f1()
//     console.log(data)
// }

// run()

const arr = [1, 45, 14, 21, 25]

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] += 1
// }

// for (let i in arr) {
//     arr[i] = arr[i] += 1
// }

// for (e of arr) {
//     console.log(e)
// }

// const newArr = arr.map(e => e += 1)

fetch("http://localhost:3000/")
    .then(res => res.json())
    .then(data => console.log(data))