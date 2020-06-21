const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const multer = require('multer')

const app = express()
app.set('view engine', 'ejs')

app.get('/user/:name', (req, res) => {
    const person = req.params.name
    res.render('user', {person: person})
})

app.listen(3000)