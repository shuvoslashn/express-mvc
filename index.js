const express = require('express');
require('dotenv').config();

// initializing app
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/users', (req, res) => {
    res.send(`Hello World`);
});

app.use((req, res, next) => {
    res.status(404).json({
        message: `resource not found`,
    });
});

// server listening
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});
