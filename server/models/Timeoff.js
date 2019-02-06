const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimeOffSchema = new Schema({
    empid: {type:mongoose.Types.ObjectId, ref :"Employee", required:true},
    startDate : {type:Date, required:true},
    endDate : {type:Date, required:true},
    reason:{type:String, required:true},
    approver:{type:mongoose.Types.ObjectId, ref :"Employee", required:true}
});


module.exports = mongoose.model('Timeoff',TimeOffSchema);