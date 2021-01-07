const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true});

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log("MongoDB database connection established successfully");
})

const todoRouter = require('./routes/todo');
const usersRouter = require('./routes/users');

app.use('/todo', todoRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});