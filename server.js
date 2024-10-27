const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path')
const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://Harambessj:Harambe100@persona-quotes.3a9om.mongodb.net/?retryWrites=true&w=majority&appName=Persona-Quotes'


MongoClient.connect(uri, (err, client) => {
    // ... do something here
    console.log('Connected to Database')
  })

  

// Make sure you place this before your CRUD handlers!
app.use(express.urlencoded({ extended: true }))


const champs = {
    'darius':{
'name':'Darius',
'faction':'Noxus',
'ultimate':'Noxian Guillotine'
    }, 
    'sett':{
        'name':'Sett',
        'faction':'Ionia',
        'ultimate':'The Showstopper'
    },

    'illaoi':{
        'name':'Illaoi',
        'faction':'Bilgewater',
        'ultimate':'Leap of Faith'
    }, 
    
    'samira':{
        'name':'Samira',
        'faction':'Noxus',
        'ultimate':'Devil trigger'
    },
    
    'xayah':{
        'name':'Xayah',
        'faction':'Ionia',
        'ultimate':'Featherstorm'
    },
    
    'rakan':{
        'name':'Rakan',
        'faction':'Ionia',
        'ultimate':'The Quickness'
    },

    'unknown': {
        'name':'unknown',
        'faction':'unknown',
        'ultimate':'unknown'
    }

}


app.get('/', (req,res) => {
res.sendFile(__dirname + '/index.html')
})


app.post('/quotes', (req,res) => {
    console.log(req.body)
})





app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});