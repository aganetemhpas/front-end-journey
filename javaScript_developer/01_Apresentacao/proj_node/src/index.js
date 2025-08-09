// console.log("Hello World!");
const http = require("http")

const hostname = "localhost"
const port = 3333

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello World!\n")
})
.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})