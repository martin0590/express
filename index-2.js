const express = require('express')

const app = express()

app.get('/products', (req, res) => {
    //validate data
    // query a database 
    // process data

    res.send('Products list')
})

app.post('/products', (req, res) => {
    res.send('Creating product')
})

app.put('/products', (req, res) => {
    res.send('updating product')
})

app.delete('/products', (req, res) => {
    res.send('deleting product')
})

app.patch('/products', (req, res) => {
    res.send('updating product field')
})

app.listen(3000)