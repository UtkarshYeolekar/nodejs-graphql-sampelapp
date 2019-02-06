const { GraphQLID } = require('graphql');
const { Project } = require('../../models/');
const { ProjectType, ProjectInputType , MemberInputType } = require('../types/project');

module.exports = {
    "newProject": {
        type: ProjectType,
        args: {
            data: { type: ProjectInputType}
        },
        resolve: async (parent,{data}, context) => {
            const newProject = await Project.create(data);
            return newProject;
        }
    },
    "assignProject": {
        type: ProjectType,
        args:{
            data :{ type: MemberInputType},
            projectID: { type : GraphQLID }
        },
        resolve: async (parent,{data, projectID},context) =>{
            const updatedTeam  =  await Project.findByIdAndUpdate({_id:projectID},{
                $push:{
                    teams:{
                        $each:[data]
                    }
                }
            });
            return updatedTeam;
        }
    }
}