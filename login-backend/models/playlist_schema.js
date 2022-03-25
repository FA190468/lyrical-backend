const {Schema, model } = require('mongoose')

const playlistSchema = new Schema({
name: {
    type: String,
},

tags: {
    type: String,
},

user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User field is required']
  },
  //many to many relationship with song
song: {
    type: [Schema.Types.ObjectId], //array = ManyToMany
    ref: 'Song',
  },
}, {
    timestamps: true

})

module.exports = model('Playlist', playlistSchema)
