const express = require('express')

const app = express()

// endpoint /about
// header - need to specify the format im sending to the client; can also specify the statuscode
// body - data that i send to the client

// needs to be before my route to let express interpret the content the client is sending
app.use(express.text())
app.use(express.json()) // lets me interpret the information client is sending as json
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => { // req is the information that the client is giving me 
    console.log(req.body) // will return undefined in console if app.use(express.text()) is not provided 
    res.send('Nuevo usuario creado')
})

app.listen(3000)