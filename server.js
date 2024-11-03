const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 3000;
const path = require('path')

const uri = "mongodb+srv://Harambessj:Harambe100@quotes.vuxgr.mongodb.net/?retryWrites=true&w=majority&appName=quotes";


  



app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => console.log('Server is running on port 3000!'))

app.get('/quotes', (req,res) => {

})



app.get('/quotes/:name', (req,res) => {
    console.log(req.params)
    const name = req.params.name
    res.json(posts.filter(prev => prev.name === name))
})




