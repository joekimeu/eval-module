import mongoose from 'mongoose';

const evaluationSchema = mongoose.Schema (
    {
        Name: {
            type: String,
            required: true,
        }, 
        Age: {
            type: String,
            required: true,
        },  
        Rating: {
            type: Number,
            required: true,
        }, 
        Comment: {
            type: String,
            required: true,
        }, 
    },
    {
        timestamps: true,
    }
);

export const Evaluation = mongoose.model('Evaluation', evaluationSchema);