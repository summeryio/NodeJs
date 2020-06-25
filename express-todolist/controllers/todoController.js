const bodyParser = require('body-parser')

const urlencodeParser = bodyParser.urlencoded({extended: false})
let data = [ {item: 'get milk'}, {item: "walk dog"}, {item: 'kick some coding ass'} ];

module.exports = function (app) {
    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data})
    })
    app.post('/todo', urlencodeParser, (req, res) => {
        data.push(req.body)
        res.json(data)
    })
    app.delete('/todo/:item', function(req, res) {
        data = data.filter((todo) => {
            return todo.item.replace(/ /g, '-') !== req.params.item
        })

        res.json(data)
    })
}