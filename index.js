const express = require('express')

const app = express()

// reponds with index.html
app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/myfile', (req, res) => {
    res.sendFile('./myfile.png', {
        root: __dirname
    })
})

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get('/user', (req, res) => {
    res.json({ "name": "json Borne" })
})

app.get('/isAlive', (req, res) => {
    res.sendStatus(204)
})

// if route is not match it'll default to this one
app.use((req, res) => {
    res.status(404).send("Page not found")
})

app.listen(3000)