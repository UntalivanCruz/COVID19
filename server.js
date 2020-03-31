const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT || 80

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs')

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/confirmados', (req, res) => {
    res.render('confirmados')
})
app.get('/muertos', (req, res) => {
    res.render('muertos')
})

app.listen(port)