const {Schema, model } = require('mongoose')

const albumSchema = new Schema({
year: {
    type: String,
},

genre: {
    type: String,
},

title: {
    type: String,
    required: [true, 'Title field is required']
},

date: {
    type: String,
    
  },

  artist: {
    type: Schema.Types.ObjectId, //array = ManyToMany
    ref: 'Artist',
    required: [true, 'Artist field is required']
  },
}, {
    timestamps: true

})

module.exports = model('Album', albumSchema)
