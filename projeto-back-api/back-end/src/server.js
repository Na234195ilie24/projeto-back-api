import express from 'express';
import cors from 'cors';
import userRouter from './routers/userRouter.js'
//import productRouter from './routers/productRouter.js'
import bodyParser from 'body-parser';

// import db from './db';
// const seed = require('./seed');

// Create express app
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
            
// Routes
app.get('/', (req, res) => {
    res.send({ message: 'API is running!' });
});

// Example route
app.get('/api/example', (req, res) => {
    res.send({ data: 'This is an example endpoint' });
});

app.use('/api/users', userRouter);



// Error handling
app.use((req, res) => {
    res.status(404).send({ message: `Route ${req.url} not found.` });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something broke!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    // Connect to database
    // db.connect();

    // Seed database
    // seed();

    // Create tables
    // db.createTables();

    // Create admin user
    // db.createAdminUser();

    // Create user
    // db.createUser();

    // Create product
    // db.createProduct();

    // Create order
    // db.createOrder();

    // Create order item

    // db.createOrderItem();

    // Create review

    // db.createReview();

    // Create category
});