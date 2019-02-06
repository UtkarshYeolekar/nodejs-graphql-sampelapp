const {
    GraphQLObjectType,
    GraphQLSchema
} =  require('graphql');

const queries = require('./queries');
const mutations = require('./mutations');
const {queryTypes, mutationTypes } = require('./types');

const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: queries
    }),
    types:queryTypes,
    mutation:new GraphQLObjectType({
        name:"Mutation",
        fields:mutations
    })
});

module.exports = Schema;