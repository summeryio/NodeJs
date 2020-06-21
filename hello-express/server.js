const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const multer = require('multer')

const app = express()

const createFolder = (folder) => {
    try {
        fs.accessSync(folder)
    } catch (error) {
        fs.mkdirSync(folder)
    }
}
const uploadFolder = './upload/'
createFolder(uploadFolder)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadFolder)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})

app.get('/form', (req, res) => {
    // const form = fs.readFileSync('./form.html', {encoding: 'utf8'})
    // res.send(form)

    res.sendFile(__dirname + '/form.html')
})

app.post('/upload', upload.single('logo'), (req, res) => {
    res.send({'ret_code': 0})
})

app.listen(3000)