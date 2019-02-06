const {
    GraphQLID,
    GraphQLList
} =  require('graphql');

const { ProjectType }=  require('../types/project');
const { Project } = require('../../models');

module.exports =  {
            projects : {
                type: GraphQLList(ProjectType),
                resolve(parent,args,context){
                    return Project.find({});
                }
            },
            project :{
                type: ProjectType,
                args:{
                    _id: { type : GraphQLID }
                },
                resolve(parent,args,context){
                    return Project.findById(args._id);
                }
            }
}