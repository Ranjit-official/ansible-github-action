const http = require("http");
const server = http.createServer((req, res) => {
    res.end("first try!!!!")
})

server.listen("3010", "127.0.0.1", (error) => {
    if (!error) {
        console.log("Finally runned successfully")
    }
})