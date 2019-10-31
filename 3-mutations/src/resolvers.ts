// src/resolvers/ts
import {
    getAllCards,
    GetAllCardsInput,
    createCard,
    CreateCardInput,
} from './controllers/card.controller'
const resolvers = {
    Query: {
        cards: (_: null, { input }: { input: GetAllCardsInput }) =>
            getAllCards({ ...input }),
    },
    Mutation: {
        CreateCard: (_: null, { input }: { input: CreateCardInput }) =>
            createCard({ ...input }),
    },
}

export default resolvers
