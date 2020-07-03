const expresss = require('express')
const path = require('path')

const app = expresss()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    let articles = [
        {
          id: 1,
          title: 'Title One',
          author: 'hfpp2012'
        },
        {
          id: 2,
          title: 'Title Two',
          author: 'hfpp2012'
        },
        {
          id: 3,
          title: 'Title Three',
          author: 'hfpp2012'
        }
    ]
    
    res.render('index', {
        articles: articles
    })
})
app.get('/user', (req, res) => {
    res.render('user', {
        title: 'summeryio'
    })
})

app.listen(3000, () => {
    console.log('server started at port 3000');
})