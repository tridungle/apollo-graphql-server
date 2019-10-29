import { createCard, CreateCardInput } from '../controllers/card.controller'

const cards = [
    {
        title: 'Card one title',
        author: 'J.K. Rowling',
        body: 'This is the first card!',
    },
    {
        title: 'Card two title',
        author: 'Michael Crichton',
        body: 'This is the second card!',
    },
]
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        cards: () => cards,
    },
    Mutation: {
        CreateCard: (_: null, { input }: { input: CreateCardInput }) => {
            return createCard({ ...input })
        },
    },
}

export default resolvers
