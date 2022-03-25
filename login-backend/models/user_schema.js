const {Schema, model } = require('mongoose')


// function to check email validation
let validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const userSchema = new Schema({
username: {
    type: String,
    trim:true,
    required: [true, 'Username field is required']
},

email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: [true, 'email is required'],
    validate: [validateEmail, 'Please fill a valid email address'], // calling validation email "validateEmail"
//match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] alternative way of validate email
},

country: {
    type: String,
    trim:true,
},

age: {
    type: String,
    trim:true,
},

password: {
    type: String,
    required: [true, 'password is required']
}
}, {
    timestamps: true
})

userSchema.methods.comparePassword = function(password){
return bcrypt.compareSync(password, this.password, this.password, function(result) {
    return result
})
}

module.exports = model('User', userSchema)
