const project = require('./project');
const employee = require('./employee');
module.exports = {
    ...project,
    ...employee
}
