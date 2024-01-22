import express from 'express';
import {PORT, mongoDBURL}  from './config.js';
import mongoose from 'mongoose';
import {Evaluation} from './models/evalModel.js';
import evalsRoute from './routes/evalsRoute.js'
import cors from 'cors'

const app = express();
 
//middlware used for parsing request body
app.use(express.json());


//middleware for handling cors policy
//option 1 : allow all origins with default of cors(*)
app.use(cors());

//allow custom origins
// app.use(
//     cors({
//         origin : 'http://localhost:3000',
//         methods : ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeader: ['Content-Type'],
//     })
// )

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('welcome to evaluation catalogue')
});

app.use('/evaluations', evalsRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('app connected to database');
        app.listen(PORT, () => {
            console.log('App is listening to port: %d', PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    })
