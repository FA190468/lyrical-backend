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

release: {
    type: [Schema.Types.ObjectId],
    ref: "Release",
    required: [true, 'release field is required'], 
  }
}, {
    timestamps: true

})

module.exports = model('Album', albumSchema)
