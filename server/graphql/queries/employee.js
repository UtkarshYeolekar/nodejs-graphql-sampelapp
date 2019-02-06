const { GraphQLID , GraphQLList } =  require('graphql');
const { Employee } = require('../../models');

const { EmployeeType } =  require('../types/employee');


module.exports =  {
            employees : {
                type: GraphQLList(EmployeeType),
                resolve(parent,args,context){
                    return Employee.find({});
                }
            },
            employee :{
                type: EmployeeType,
                args:{
                    _id: { type : GraphQLID }
                },
                resolve(parent,args,context){
                    return Employee.findById(args._id);
            }
        }
}