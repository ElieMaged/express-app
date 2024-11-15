const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Harambessj:Harambe100@quotes.vuxgr.mongodb.net/?retryWrites=true&w=majority&appName=quotes";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
})


const db = client.db('got-quotes')

const quotesCollection = db.collection('quotes')


// app.post('/quotes', (req,res) => {
//     console.log(req.body)
//     res.redirect('/')
// // 
// })


app.use(express.urlencoded({ extended: true }))


app.listen(3000, () => {
    console.log('Listening to 3000!')
})

app.get('/', (req,res) => {
    res.sendFile(__dirname +'/public' + '/index.html')
})



// app.post('/quotes', (req,res) => {

//     console.log(req.body);
//     const gotName = req.body.name;
//     const gotQuote = req.body.quote;

// quotesCollection
//                 .insertOne({'name':gotName, 'quote':gotQuote})
//                 .then(result => {
//                     console.log(result)
//                     .catch(error => console.log(error))
//                     res.redirect('/')
//                 })
// })


app.post('/quotes', (req,res) => {
const gotName = req.body.name;
const gotQuote = req.body.quote;
quotesCollection.insertOne({'name':gotName, 'quote':gotQuote})
.then(result => {
    console.log(result)
})
.catch(error => console.log(error))
res.redirect('/')
})




