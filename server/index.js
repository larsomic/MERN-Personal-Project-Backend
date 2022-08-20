import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/projects.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", exended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", exended:true}))
app.use(cors());

app.use('/projects', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Mongo DB
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))