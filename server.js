const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./db')()

const { getAllSongs, getSingleSong, addSong } = require('./controllers/song_controller')
const { getAllAlbums, addAlbum,getSingleAlbum, editAlbum } = require('./controllers/album_controller')
const { getAllArtists, addArtist, getSingleArtist, editArtist } = require('./controllers/artist_controller')
const { getAllPlaylists, addPlaylist, editPlaylist } = require('./controllers/playlist_controller')
const { register, login, loginRequired } = require('./controllers/user_controller')


//import controller here

const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())

app.use((req, res, next) =>{
if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
    jwt.verify(req.headers.authorization.split(' ')[1], 'login_example_app', (err, decode) => {
        if (err) req.user = undefined
        req.user = decode 
        next()
    })
    }
    else {
        req.user = undefined
        next()
    }
})


////SONG ROUTES////
app.get('/song', getAllSongs)
app.get('/song/:_id', loginRequired, getSingleSong)
app.post('/song', addSong)
//////////////

////ALBUM ROUTES////
app.get('/album', getAllAlbums)
app.post('/album', addAlbum)
app.get('/album:_id', getSingleAlbum)
app.put('/album/:_id', editAlbum)
//////////////

////ARTIST ROUTES////
app.get('/artist', getAllArtists)
app.post('/artist', addArtist)
app.get('/artist/:_id', getSingleArtist)
//app.get('/artist/_id/:alias', getArtistAlias)
app.put('/artist/:_id', editArtist)
//////////////

////PLAYLIST ROUTES////
app.get('/playlist', getAllPlaylists)
app.post('/playlist', addPlaylist)
app.put('/playlist/:_id', editPlaylist)
//////////////

////USER ROUTES
app.post('/register', register)
app.post('/login', login)
///////////////


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})