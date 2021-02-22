import express from 'express';

const app = express();


//Routes
app.get('/', (req, res) => {
    return res.json({
        message: "Hello World - NLW04"
    });
});

app.post('/', (req, res) => {
    return res.json({
        message: "Data saved successfully!"
    });
});

//starting the server
app.listen(3000, () => {
    console.log("Server is running...");
});