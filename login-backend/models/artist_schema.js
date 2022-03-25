const {Schema, model } = require('mongoose')

const artistSchema = new Schema({
name: {
    type: String,
    required: [true, 'Title field is required']
},

age: {
    type: String,
},

alias: {
    type: String,
    required: [true, 'Title field is required']
},

country: {
    type: [Schema.Types.ObjectId],
    ref: "country",
    required: [true, 'Country field is required'], 
  }
}, {
    timestamps: true

})

module.exports = model('Artist', artistSchema)
