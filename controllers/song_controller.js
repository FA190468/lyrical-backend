const Song = require('../models/song_schema')
const Album = require('../models/album_schema')
const getAllSongs = (req, res) => {
    //find = findall findOne = just one findById = obvious
    Song.find().populate('album')
        .then((data) => {
            if(data){
             res.status(200).json(data)   
        }
             else {
             res.status(404).json("No songs found")
        }
    })
    .catch((err) => {
    console.error(err)
    res.status(500).json('None found')
    })
}

const getSingleSong = (req, res) => {

    Song.findById(req.params._id)
    .then((data) => {
        if(data){
            res.status(200).json(data)   
       }
            else {
            res.status(404).json(`Song with id: ${req.params._id} not found`)
       }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
        })
}

const addSong = (req, res) => {
    let songData = req.body

    Song.create(songData)
    .then((data) => {
        if(data){
            res.status(201).json(data)
        }
    })
    .catch((err) => {
        if(err.name === "ValidationError"){
            res.status(422).json(err)
        }
        else{
            console.error(err)
            res.status(500).json(err)
        }
    })
}

module.exports = {
    getAllSongs,
    getSingleSong,
    addSong
}