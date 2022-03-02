const {Schema, model } = require('mongoose')

const songSchema = new Schema({
title: {
    type: String,
    required: [true, 'title field is required']
},

artist: {
    type: String,
    required: [true, 'artist field is required']
},

album: {
    type: [String]
    
},

lenght: {
    type: [String]

},

year: {
    type: [String]

}

})

module.exports = model('Song', songSchema)
