const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const multer = require('multer')

const app = express()

// 访问静态文件
app.use('/static', express.static('static'))

app.use((req, res, next) => {
    console.log('first middleware');
    next()
    console.log('first middleware after');
})
app.get('/', (req, res) => {
    console.log('second middleware');
    res.send('ok')
})

app.listen(3000)