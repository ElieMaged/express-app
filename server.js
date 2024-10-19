const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path')


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

app.get('/api/:champName', (req,res) => {
   let ch = req.params.champName;
    res.json(champs[ch]) ? res.json(champs[ch]) : res.json(champs['unknown'])
})


app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});