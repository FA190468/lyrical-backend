const {Schema, model } = require('mongoose')

const releaseSchema = new Schema({
date: {
    type: Date,
},

album: {
    type: Schema.Types.ObjectId,
    ref: 'Album',
    required: [true, 'Album field is required']
},

artist: {
    type: String,
    required: [true, 'Artist field is required']
}

})

module.exports = model('Release', releaseSchema)
