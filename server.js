const express = require('express')
const app = express()
const PORT = 3000

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
    'unknown': {
        'name':'unknown',
        'faction':'unknown',
        'ultimate':'unknown'
    }

}

app.get('/', (req,res) => {
res.sendFile(__dirname + '/index.html')
})

app.get('/api/:champName', (req,res) => {
let ch = req.params.champName.toLowerCase()
champs[ch] ? res.json(champs[ch]) : res.json(champs['unknown'])
res.json(champs)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

