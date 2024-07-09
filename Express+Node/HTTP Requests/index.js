import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
    // console.log(req)
    // console.log(req.rawHeaders)
    res.send("<h1>Home Page</h1><p>Welcome to the home page of my website</p>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Us Page</h1><p>Mobile: +123 456 789</p>")
})

app.get("/about", (req, res) => {
    res.send("<h1>About Us Page</h1><p>My name is <code>Aarsh Patel.</code></p>")
})

app.listen(port, () => {
    console.log(`The server started on ${port}.`)
})