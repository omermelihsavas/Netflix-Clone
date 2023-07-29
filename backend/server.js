const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/userRoute');

const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('Veritabanı bağlantısı başarılı...');
        app.listen(process.env.PORT, () => {
            console.log(`Sunucu ${process.env.PORT}. port ile ayağa kaldırıldı...`);
        });
    })
    .catch(err => {
        console.log(err);
    });

app.use('/api/user', userRoute);

