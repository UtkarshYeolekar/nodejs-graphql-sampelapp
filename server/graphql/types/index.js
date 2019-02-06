const { EmployeeType, EmployeeInputType}  = require('./employee'),
      { ProjectType , ProjectInputType } = require('./project'),
      { TimeOffType } = require('./timeOff')

module.exports = {
    queryTypes: [ EmployeeType, ProjectType, TimeOffType ],
    mutationTypes: [ProjectInputType, EmployeeInputType ]
}