const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));