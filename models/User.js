const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  firstname:{
    type: String,
    required: true
  },
  lastname:{
    type: String,
    required: true
  },
  
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  streetName:{
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
  // privilege:{
  //   type: String,
  //   required: false
  // },
  // id:{
  //   type: String,
  //   required: false
  // },
});

mongoose.model('users', UserSchema);
