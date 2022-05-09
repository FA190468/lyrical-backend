const {Schema, model } = require('mongoose')

const songSchema = new Schema({
description: {
    type: String,
    required: [true, 'title field is required']
},

title: {
    type: String,
    required: [true, 'artist field is required']
},

lenght: {
    type: [String]
    
},

year: {
    type: [String]

},

lyrics: {
    type: String,
    required: [true, 'artist field is required']

},
album: {
    type: [Schema.Types.ObjectId],
    ref: 'Album',
    //required: [true, 'Album field is required']
  },

})

module.exports = model('Song', songSchema)
