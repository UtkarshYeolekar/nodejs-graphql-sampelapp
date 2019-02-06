const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: {type:String, required:true},
    designation : {type:String, enum:['SE','PM'], required:true},
    dob: {type:Date,required:true},
    mobile:{type:String},
    experience:{type:Number,required:true},
    projectId:{type:mongoose.Types.ObjectId, ref:"Project"}
});

module.exports = mongoose.model('Employee',EmployeeSchema);

