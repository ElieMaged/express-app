const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 3000




MongoClient.connect('mongodb+srv://narutossj23:Harambe100@star-wars-quotes.jtfdq.mongodb.net/?retryWrites=true&w=majority&appName=Star-Wars-Quotes').then(client => {
    console.log('Connected to the Database!');
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
 
}


  ).catch(error => console.error(error))

const champs = {
    'darius':{
        'name':'Darius',
        'title':'Hand of Noxus',
        'ultimate':'Noxian Guillotine'
    },
    'illaoi':{
        'name':'Illaoi',
        'title':'Hand of the Prophet',
        'ultimate':'Leap of Faith'
    },
    'bob':{
        'name':'Bob',
        'title':'Bob the Builder',
        'ultimate':'Bob Attack'
    }

}



app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html')
})


app.get('/api/:champName', (req, res) => {
    const name = req.params.champName.toLowerCase();
    champs[name] ? res.json(champs[name].ultimate) : res.json('bob')
    // res.json(champs.ultimate)
})



// app.get('/api/:champName', (req, res) => {
// const name = req.params.champName.toLowerCase();
// if(champs[name]) {
//     res.json(champs[name].title)
// } else {
//     res.json(champs['BOB'].title)
// }
// })



app.listen(process.env.PORT || PORT, () => {
    console.log('listening on 3000')
})


// app.use(express.urlencoded({ extended: true }))


// app.post('/quotes', (req,res) => {
//     quotesCollection
//     .insertOne(req.body)
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.error(error))
// })