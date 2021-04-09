const express = require("express");
const path = require('path');
var cors = require('cors');


const cookieParser = require('cookie-parser');
const app = express();

const UserRoute = require('./routes/user');
app.use('/products', UserRoute);

const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set('useFindAndModify', false);
    await mongoose.connect('mmongodb+srv://user:user@vault.zbcc5.mongodb.net/vault?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("Connection Estabilsed successfully");
    });

}

connectDB();

app.use(cors());


const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT || 2005;
//port connection

app.listen(PORT, () => {
    console.log("Server Started");
})

