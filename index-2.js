const express = require('express')
const path = require(path)
const app = express()

app.use(express.json())
app.use(express.static('./static')) // with this, everything that is inside the static folder will be available from the browser
app.use('/public',express.static('./static')) // same as above but i need to go to /public to access its static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

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