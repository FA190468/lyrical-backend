const Artist = require('../models/artist_schema')

const getAllArtists = (req, res) => {
    //find = findall findOne = just one findById = obvious
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
    res.status(500).json(err)
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

const editArtist = (req, res) => {
    let artistData = req.body

    Artist.findByIdAndUpdate(req.params.id, artistData, {
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
    getAllArtists,
    addArtist,
    editArtist
}