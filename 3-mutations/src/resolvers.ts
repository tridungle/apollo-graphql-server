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
    Mutations: {
        CreateCard: (_: null, { input }: { input: CreateCardInput }) =>
            createCard({ ...input }),
    },
}

export default resolvers
