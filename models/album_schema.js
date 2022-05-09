const {Schema, model } = require('mongoose')

const albumSchema = new Schema({
year: {
    type: String,
},

genre: {
    type: String,
    required: [true, 'Title field is required']
},

title: {
    type: String,
    required: [true, 'Title field is required']
},

date: {
    type: String,
    
  },

cover: {
    type: String,
    required: [true, 'Cover picture link is required']
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
