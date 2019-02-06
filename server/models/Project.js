const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectMember  = require('./ProjectMember');

const ProjectSchema = new Schema({
    title:{type:String,required:true},
    startDate:{type:Date, required:true},
    endDate : {type:Date},
    client:{type:String, required:true},
    offshore:{type:Boolean, required:true},
    domain:{type:String},
    studio:{type:String, enum:['iot','scalable platform','devops','ux']},
    teams : [projectMember]
});


module.exports  = mongoose.model('Project',ProjectSchema);

