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
    type: [Schema.Types.ObjectId],
    ref: "Date",
    required: [true, 'date field is required'], 
  }
}, {
    timestamps: true

})

module.exports = model('Album', albumSchema)
