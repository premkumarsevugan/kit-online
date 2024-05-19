const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const dbUri = 'mongodb+srv://prem:prem123@onlinecourse.vbqy72m.mongodb.net/?retryWrites=true&w=majority&appName=onlinecourse';
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define the schema and model
const registrationSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    course: String,
    age: Number,
    dob: Date,
    cutoff: String,
    address: String
});

const Registration = mongoose.model('Registration', registrationSchema);

// Define the routes
app.post('/api/register', async (req, res) => {
    try {
        const newRegistration = new Registration(req.body);
        await newRegistration.save();
        res.status(200).send('Registration successful');
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/api/registrations', async (req, res) => {
    try {
        const registrations = await Registration.find({});
        res.status(200).json(registrations);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
