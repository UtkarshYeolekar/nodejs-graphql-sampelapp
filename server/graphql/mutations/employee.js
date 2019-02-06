const { EmployeeType, EmployeeInputType } = require('../types/employee');
const { Employee } = require('../../models');

module.exports = {
    "newEmployee":{
        type: EmployeeType,
        args: {
            data: { type : EmployeeInputType }
        },
        resolve: async (parent,{data},context) => {
            const newEmployee =  Employee.create(data);
            return newEmployee;
        }
    }
}


