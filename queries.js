// queries is additional information i can send to the server and use.
// the req.query object is made by express.
// & unifies different queries
// ? appends at the end of the url followed by all the queries
const express = require('express')

const app = express()

app.get('', (req, res) => {
    if(req.query.q === 'javascript books'){
        res.send('list of books')
    }else{
        res.send('normal page')
    }
})

app.get('/users/:username', (req, res) => {
    // in localhost:300/users/morgan?age=20&country=canada
    res.send(`hello ${req.params.username} from ${req.query.age}`)
})