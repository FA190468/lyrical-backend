const Album = require('../models/album_schema')

const getAllAlbums = (req, res) => {
    Album.find().populate('artist')
        .then((data) => {
            if(data){
             res.status(200).json(data)   
        }
             else {
             res.status(404).json("No album found")
        }
    })
    .catch((err) => {
    console.error(err)
    res.status(500).json('None found')
    })
}


const addAlbum = (req, res) => {
    let albumData = req.body

    Album.create(albumData)
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

const getSingleAlbum = (req, res) => {

    Album.findById(req.params._id)
    .then((data) => {
        if(data){
            res.status(200).json(data)   
       }
            else {
            res.status(404).json(`Album with id: ${req.params._id} not found`)
       }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
        })
}

const editAlbum = (req, res) => {
    let albumData = req.body

    Album.findByIdAndUpdate(req.params._id, albumData, {
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
    getAllAlbums,
    addAlbum,
    getSingleAlbum,
    editAlbum
}