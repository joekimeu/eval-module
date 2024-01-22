import express from "express";
import {Evaluation} from '../models/evalModel.js'

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.Name ||
            !request.body.Age ||
            !request.body.Rating ||
            !request.body.Comment
        ) {
            return response.status(400).send({
                message: 'Send all required fields: name, age, rating, comment'
            });
        }
        const newEvaluation = {
            Name: request.body.Name,
            Age: request.body.Age,
            Rating: request.body.Rating,
            Comment: request.body.Comment
        };

        const evaluation = await Evaluation.create(newEvaluation);

        return response.status(201).send(evaluation);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//route to get all evaks from database
router.get('/', async (request, response) => {
    try {
        const evaluations = await Evaluation.find({});
        return response.status(200).json({
            count : evaluations.length,
            data : evaluations
        })
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

//route to get all evals from database by id
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const evaluation = await Evaluation.findById(id);
        return response.status(200).json(evaluation)
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

//route for update a evaluation
router.put('/:id', async (request, response) => {
    try{
        if (
            !request.body.Name ||
            !request.body.Age ||
            !request.body.Rating ||
            !request.body.Comment
        ) { 
            return response.status(400).send({
                message: 'Send all required fields : name, age, rating, comment',
            })
        }

        const {id} = request.params;

        const result = await Evaluation.findByIdAndUpdate(id, request.body);

        if(!result) {
            return response.status(404).json({ message: 'Evaluation not found'});
        }

        return response.status(200).send({message : "Evaluation updated successfully"});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message : error.message})
    }
});

//route to delete an eval
router.delete('/:id', async (request, response) =>{
    const {id} = request.params;

    const result = await Evaluation.findByIdAndDelete(id);

    if (!result) {
        return response.status(404).json({message : 'Evaluation not found'});
    }
    return response.status(200).send({message : 'Book deleted successfully'});
})

export default router;
