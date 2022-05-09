const Artist = require('../models/artist_schema')
const Album = require('../models/album_schema')

const getAllArtists = (req, res) => {
    Artist.find().populate('album')
    Artist.find()
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


const addArtist = (req, res) => {
    let artistData = req.body

    Artist.create(artistData)
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

const getSingleArtist = (req, res) => {

    Artist.findById(req.params._id)
    .then((data) => {
        if(data){
            res.status(200).json(data)   
       }
            else {
            res.status(404).json(`Artist with id: ${req.params._id} not found`)
       }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
        })
}
/*
const getArtistAlias = (req, res) => {

    Artist.find(req.params.alias)
    .then((data) => {
        if(data){
            res.status(200).json(data)   
       }
            else {
            res.status(404).json(`Artist with alias: ${req.params.alias} not found`)
       }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
        })
}*/

const editArtist = (req, res) => {
    let artistData = req.body

    Artist.findByIdAndUpdate(req.params.id, artistData, {
        new: true
    })
    .then((data) => {
        if(data){
            Album.findByIdAndUpdate({
                _id: data.album
            },{
                $push: { artist: data._id }
            }, (error, success) => {
                if (error) {
                    res.status(500).json(err)
                }
            })
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
    getAllArtists,
    getSingleArtist,
    addArtist,
    editArtist
}