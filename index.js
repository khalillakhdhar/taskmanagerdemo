const mongoose = require('mongoose');
const port=4000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uri="mongodb+srv://khalillakhdharatc:i3YobGwbrZsp7K2u@cluster0.fquyznt.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to Task Manager!');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));