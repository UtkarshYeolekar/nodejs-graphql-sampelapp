const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectMember = new Schema({
    empId     : {type:mongoose.Types.ObjectId, ref:"Employee",required:true},
    isBillable : {type:Boolean},
    role : {type:String, enum:['Dev', 'QA', 'PM','TL'], required:true}
});

module.exports = projectMember