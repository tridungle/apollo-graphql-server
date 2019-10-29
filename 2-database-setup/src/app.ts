import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers/index'

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`)
})
