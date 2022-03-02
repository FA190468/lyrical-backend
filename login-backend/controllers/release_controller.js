const Release = require('../models/release_schema')

const getAllReleases = (req, res) => {
    //find = findall findOne = just one findById = obvious
    Release.find().populate('album, artist')
        .then((data) => {
            if(data){
             res.status(200).json(data)   
        }
             else {
             res.status(404).json("No release found")
        }
    })
    .catch((err) => {
    console.error(err)
    res.status(500).json('None found')
    })
}


module.exports = {
    getAllReleases
}