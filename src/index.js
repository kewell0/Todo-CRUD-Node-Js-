const express = require('express');
const {json} = require('express');
const connect = require('./config/database');
const todoRoute = require('./router/todoRoutes');

connect();

const app = express();
app.use(json());
app.use('/todo',todoRoute);

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    return res.send('Testing server');
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})