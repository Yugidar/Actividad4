const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  

const app = express();
app.use(express.json());  

const PORT = process.env.PORT || 5000;
const routes = require('./routes');
app.use('/api', routes);


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
