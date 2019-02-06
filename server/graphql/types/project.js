const {
    GraphQLObjectType,
    GraphQLInputObjectType, 
    GraphQLString, 
    GraphQLID,
    GraphQLBoolean,
    GraphQLList
} =  require('graphql');

const { DateType } = require('./date');

const MemberType = new GraphQLObjectType({
    name:"teamMember",
    fields: function (){
        return {
            "empId":{type:GraphQLID},
            "isBillable":{type:GraphQLBoolean},
            "role":{type:GraphQLString}
    }
}
})

const MemberInputType = new GraphQLInputObjectType({
    name:"addTeamMember",
    fields: function (){
        return {
            "empId":{type:GraphQLID},
            "isBillable":{type:GraphQLBoolean},
            "role":{type:GraphQLString}
    }
}
})


const ProjectType = new GraphQLObjectType({
name:"project",
description:"project schema",
fields: function () {
    return {
            "_id":{type:GraphQLID},
            "title": {type:GraphQLString},
            "startDate":{type: DateType},
            "endDate":{type: DateType},
            "client": {type:GraphQLString},
            "offshore":{type:GraphQLBoolean},
            "domain":{type:GraphQLString},
            "studio":{type:GraphQLString},
            "teams":{
                type:GraphQLList(MemberType),
                resolve(parent,args,context){
                    return parent.teams;
                }
            } 
}
}
});

const ProjectInputType = new GraphQLInputObjectType({
    name:"createProject",
    description:"create project",
    fields:function (){
        return {
            "title": {type:GraphQLString},
            "startDate":{type: DateType},
            "endDate":{type: DateType},
            "client": {type:GraphQLString},
            "offshore":{type:GraphQLBoolean},
            "domain":{type:GraphQLString},
            "studio":{type:GraphQLString}
        }
    }
});


module.exports = { ProjectType , ProjectInputType, MemberInputType};