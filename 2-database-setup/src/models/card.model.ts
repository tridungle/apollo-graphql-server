import mongoose, { Document } from 'mongoose'

export interface Card extends Document {
    title: string
    author: string
    body: string
}

const Schema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
})

export default mongoose.model<Card>('Card', Schema)