// can protect routes using middlewares like checking if the user wanting to access /dashboard is authenticated
// the code is synchronous, 'profile page' does not have a middleware but all the routes after it uses middleware
const express = require('express')

const app = express()


app.get('/profile', (req, res) => {
    res.send('profile page')
})


app.use((req, res, next) => {
    console.log(`Route: ${req.url} Metodo: ${req.method}`)

    next() // if not provided, code will not leave the function
})

app.get('/users', (req, res) => {
    res.send('users page')
})

app.use((req, res, next) => {
    if(req.query.login === 'asd@asd.com'){
        next()

    }else{
        res.send('not authorized')
    }
})

app.get('/dashboard', (req, res) => {
    res.send('dashboard page')
})

app.listen(3000, () => {
    console.log(`listening on port 3000`)
})