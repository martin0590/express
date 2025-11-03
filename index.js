const express = require('express')

const app = express()

// reponds with index.html
app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/bout', (req, res) => {
    res.send("About Page")
})

// if route is not match it'll default to this one
app.use((req, res) => {
    res.status(404).send("Page not found")
})

app.listen(3000)