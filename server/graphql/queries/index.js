const employee = require('./employee');
const project = require('./project');

module.exports = {
    ...employee,
    ...project
}
