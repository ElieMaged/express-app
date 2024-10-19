const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


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

app.get('/api', (req,res) => {
res.json(champs)
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});