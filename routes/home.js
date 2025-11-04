const express = require('express')

const router = express.Router() // unifies all routes in the router to enable its use in the main index.js

router.get('/', (res, res) => {
    const title = 'my title from js'

    res.render('index', { title })
})

module.exports = router // im using it in index-2
