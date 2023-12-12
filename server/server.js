// const http = require("http")
// const path = require("path")

// http
//     .createServer((req, res) => {
//         res.end(path.join(__dirname, "database", "data.json"))

//     })
//     .listen("3000", () => {
//         console.log(".........http://localhost:3000")
//         console.log(process.pid)
//     })

const express = require('express')
const path = require("path")
const server = express()

const cors = require('cors')
server.use(cors())

server.listen(3000, () => {
    console.log("http://localhost:3000")
})

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "database", "data.json"), "utf-8", (err) => { if (err) console.log(err) })
})