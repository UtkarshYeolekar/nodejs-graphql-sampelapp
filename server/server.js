const express = require('express');
const mongoose = require('./config/mongoose');
const graphqlHttp = require('express-graphql');
const Schema = require('./graphql')

const db = mongoose();
const app = express();

app.get('/healthz',(req,res,next)=>{
    res.status(200).send('Server Running');
});

app.use('/graphql',graphqlHttp({
    schema:Schema,
    graphiql:true
}));


app.listen(process.env.PORT || 4000, ()=>{
    console.log('GraphQL server listening on 4000');
});

