// src/resolvers/ts
import { getAllCards, GetAllCardsInput } from './controllers/card.controller'
const resolvers = {
    Query: {
        cards: (_: null, { input }: { input: GetAllCardsInput }) =>
            getAllCards({ ...input }),
    },
}

export default resolvers
