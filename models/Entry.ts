import mongoose, { Schema, Model } from "mongoose"
import { Entry } from "../interfaces"

// Esta mims interfaz que se usa para crear las etradas 
// se usa para definir como me deben llegar de la base d e datos
export interface IEntry extends Entry {}

const entrySchema = new Schema({
    description: { 
        type: String, 
        required: true 
    },
    createAt: { 
        type: Number 
    },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished'],
            message: '{VALUE} no es un estado permitido'
        },
        default: 'pending',
    }
})

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema)

export default EntryModel