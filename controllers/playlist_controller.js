const Playlist = require('../models/playlist_schema')
const User = require('../models/user_schema')

const getAllPlaylists = (req, res) => {
    //find = findall findOne = just one findById = obvious
    Playlist.find().populate('user')
        .then((data) => {
            if(data){
             res.status(200).json(data)   
        }
             else {
             res.status(404).json("No artist found")
        }
    })
    .catch((err) => {
    console.error(err)
    res.status(500).json('None found')
    })
}

const addPlaylist = (req, res) => {
    let playlistData = req.body

    Playlist.create(playlistData)
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

const editPlaylist = (req, res) => {
    let playlistData = req.body

    Playlist.findByIdAndUpdate(req.params._id, playlistData, {
        new: true
    })
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
    getAllPlaylists,
    addPlaylist,
    editPlaylist
}