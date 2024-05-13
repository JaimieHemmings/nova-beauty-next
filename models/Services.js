import { Schema, model, models } from 'mongoose'

const ServicesSchema = new Schema({
    type: {
        type: String,
        required: [true, 'Service Type is required']
    },
    name: {
        type: String,
        required: [true, 'ServiceName is required']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description']
    },
    price: {
        type: Number,
        required: [true, 'A price is required']
    },
})
const ServicesList = models.Services || model('Services', ServicesSchema)

export default ServicesList