const User = require('../models/user_schema')
const bcrypt = require('bcryptjs')

const register = (req, res) => {
  let newUser = new User(req.body) 

  //save user to db 
  newUser.password = bcrypt.hashSync(req.body.password, 10)

  console.log(newUser);
  newUser.save((err, user) => {
    if(err) {
        console.log(err)
        return res.status(400).send({
            message: err
        })
    }
    else {
        user.password = undefined
        return res.json(user)
    }
  })
}

const login = (req, res) => {
  User.findOne({
      email: req.body.email
  })
  .then(user => {
      if(!user || !user.comparePassword(req.body.password)) {
          return res.status(401).json({
          message: 'Authentication failed. Invalid user or password'
      })
    }
    // create token
    res.json({
        token: jwt.sign({
            email: user.email,
            full_name: user.full_name,
            _id: user._id
        }, 'login_example_app')
        })
    })
  .catch(err => {
      throw err
  })
}

const loginRequired = (req, res, next) => {
    if (req.user) {
        next()
    }
    else {
        return res.status(401).json({
            message: 'Unauthorized user'
        })
    }
}

module.exports = {
   register,
   login,
   loginRequired
}