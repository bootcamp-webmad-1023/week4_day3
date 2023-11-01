const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')


require('./db/database-connection')             // new: ddbb connection
const Dog = require('./models/dog.model')       // new: model 

app.get('/', (req, res) => {
    res.render('home-page')
})

app.get('/perros', (req, res) => {

    Dog                                         // new: local ddbb transaction
        .find()
        .then(dogs => res.render('dogs-page', { dogs: dogs }))
        .catch(err => console.log('ERROR:', err))
})


app.listen(5005, () => console.log('Server listening on port 5005'))