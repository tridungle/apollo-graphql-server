// src/controllers/card.controller.ts
import CardModel, { Card } from '../models/card.model'

export interface CreateCardInput {
    title: string
    author: string
    body: string
}

// Create a new card from the given input
export function createCard({
    title,
    author,
    body,
}: CreateCardInput): Promise<Card | Error> {
    return CardModel.create({
        title,
        author,
        body,
    })
        .then((data: Card) => data)
        .catch((error: Error) => {
            throw error
        })
}

export interface GetAllCardsInput {
    limit?: number
}

export function getAllCards({ limit }: GetAllCardsInput) {
    return CardModel.find({})
        .limit(limit ? limit : 0)
        .then((data: Card[]) => data)
        .catch((error: Error) => {
            throw error
        })
}
