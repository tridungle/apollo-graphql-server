// src/schema.ts
import { gql } from 'apollo-server'

const typeDefs = gql`
    type Card {
        _id: ID!
        title: String
        author: String
        body: String
    }

    type Query {
        cards: [Card]
    }

    input CreateCardInput {
        title: String
        author: String
        body: String
    }

    type Mutation {
        CreateCard(input: CreateCardInput): Card
    }
`

export default typeDefs
