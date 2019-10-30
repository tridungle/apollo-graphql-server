// src/controllers/card.controller.ts
import CardModel, { Card } from '../models/card.model'

export interface CreateCardInput {
    title: string
    author: string
    body: string
}

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
        .then(data => data)
        .catch(error => {
            throw error
        })
}
