// require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const isEmail = require('isemail');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const ResturantData = require("./datasources/restuarants")

const context = async ({ req }) => {
  const auth = (req.headers && req.headers.authorization) || '';
  const email = new Buffer(auth, 'base64').toString('ascii');
  if (!isEmail.validate(email)) return { user: null };
  const users = await store.users.findOrCreate({ where: { email } });
  const user = users && users[0] ? users[0] : null;
  return { user: { ...user.dataValues } };
};

const dataSources = () => ({
  ResturantData
});
// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== 'test')
  server
    .listen({ port: 4000 })
    .then(({ url }) => console.log(`🚀 app running at ${url}`));

// export all the important pieces for integration/e2e tests to use
module.exports = {
  dataSources,
  context,
  typeDefs,
  resolvers,
  ApolloServer,
  server,
};
