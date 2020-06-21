const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// post 传递json
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/profire/:id/user/:name', (req, res) => {
    console.dir(req.params);
    res.send('profire page name: ' + req.params.name)
})

app.get('/query', (req, res) => {
    console.dir(req.query);
    res.send('query name ' + req.query.name)
})

app.post('/', urlencodedParser, (req, res) => {
    console.dir(req.body);
    res.send(req.body.name)
})
app.post('/upload', jsonParser, (req, res) => {
    console.dir(req.body);
    res.send(req.body.name)
})

app.listen(3000)
// console.log('listening to port 3000');