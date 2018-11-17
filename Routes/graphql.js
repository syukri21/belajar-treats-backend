const graphqlHTTP = require('express-graphql');
const router = require('express').Router();

const schema = require('../Schema/index');

router.post('/', graphqlHTTP({
    schema,
    graphiql: "!util.isProduction()"
}))


module.exports = router;