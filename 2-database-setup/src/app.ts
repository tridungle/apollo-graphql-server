// src/app/ts
import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers/index'
import connect from './database/connect';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(async ({ url }: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`)

    // Connect to your database
    await connect({ db: 'mongodb://localhost:27017/test' })
})
