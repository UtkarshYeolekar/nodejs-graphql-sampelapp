const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLInputObjectType
} = require('graphql');

const { DateType } = require('./date');
const { ProjectType } = require('./project');
const { TimeOffType } = require('./timeOff');

const { Project, Timeoff } = require('../../models');


const EmployeeInputType  = new GraphQLInputObjectType({
    name:"newEmployee",
    description: "create a new employee",
    fields: function(){
        return {
        "name": { type: GraphQLString },
        "designation": { type: GraphQLString },
        "dob": { type: DateType },
        "experience": { type: GraphQLFloat }
        }
    }
})

const EmployeeType = new GraphQLObjectType({
    name: "employee",
    description: "employee schema",
    fields: function () {
        return {
            "_id": { type: GraphQLID },
            "name": { type: GraphQLString },
            "designation": { type: GraphQLString },
            "dob": { type: DateType },
            "experience": { type: GraphQLFloat },
            "project": {
                type: ProjectType,
                async resolve(emp, args, context) {
                    let empProject = await Project.findOne({ "teams.empId": emp._id });
                    return empProject;
                }
            },
            "timeOffs": {
                type: GraphQLList(TimeOffType),
                async resolve(emp, args, context) {
                    let empTimeOffs = await Timeoff.find({ "empId": emp._id });
                    return empTimeOffs;
                }
            }
        }
    }
});

module.exports = { EmployeeType, EmployeeInputType};