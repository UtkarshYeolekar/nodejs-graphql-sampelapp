const {GraphQLScalarType , Kind} = require('graphql');

const DateType = new GraphQLScalarType({
    name:"date",
    serialize(value){
        return value;
    },
    parseValue(value){
        return new Date(value);
    },
    parseLiteral(ast){
        
        if (ast.kind === Kind.INT) {
          return parseInt(ast.value, 10); // ast value is always in string format
        }
        return ast.value;
      }
});

module.exports = { DateType };