const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./db')

const { getAllSongs, getSingleSong, addSong } = require('./controllers/song_controller')

//import controller here

const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())


////ROUTES////

app.get('/songs', getAllSongs)
app.get('/songs/:id', getSingleSong)
app.post('/songs', addSong)

/*app.get('/', (req, res) =>{
    res.json('Get')
})

app.post('/', (req, res) =>{
    res.json('Post')
})

app.get('/songs', (req, res) =>{
    res.json('Get')
})
*/

//////////////


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})