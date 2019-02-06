const { GraphQLObjectType, GraphQLString, GraphQLID }  = require('graphql');
const { DateType } = require('./date');

const TimeOffType = new GraphQLObjectType({
name:"TimeOff",
fields:function(){
    return {
        startDate:{type:DateType},
        endDate:{type:DateType},
        reason:{type:GraphQLString},
        approver:{type:GraphQLID}
    }
}
});

module.exports = { TimeOffType };