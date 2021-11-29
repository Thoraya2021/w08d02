const mongoose = require("mongoose");


const rolemode = new mongoose.Schema({
    role: { type: String, required: true },
    Permissions:{type:Array,required: true}
 
  });


  module.exports =mongoose.model('role',role)
