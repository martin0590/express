const express = require('express')

const app = express()

app.get('/hello/:username', (req, res) => { //:username is going to be a dynamic value
    console.log(req.params.username)
    console.log(`hello ${req.params.username}`)
})

app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/photo', (req, res) => {
    if(req.params === 'js'){
        return res.sendFile('./javascipt.png', {
            root: __dirname
        })
    }

    res.send('User does not have access')
})


app.listen(3000, () => {
    console.log(`listening on port 3000`)
})