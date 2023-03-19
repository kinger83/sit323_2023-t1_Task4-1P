const express = require('express');
const app = express();

// Addidtion. add /add/x/x values together.
app.get('/add/:num1/:num2', (req, res) =>{
    try {
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);

        const result = number1 + number2;
        res.send(result.toString());
        
    } catch (error) {
        res.send(error);
        
    }
});

// Subtraction. subtact param 2 from param 1 /subtract/x/x values.
app.get('/subtract/:num1/:num2', (req, res) =>{
    try {
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);

        const result = number1 - number2;
        res.send(result.toString());
        
    } catch (error) {
        res.send(error);
        
    }
});

// Multiplication. multiplies /multiply/x/x values together.
app.get('/multiply/:num1/:num2', (req, res) =>{
    try {
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);

        const result = number1 * number2;
        res.send(result.toString());
        
    } catch (error) {
        res.send(error);
        
    }
});

// Divide. divides parram 1 by param 2 /divide/x/x values together.
app.get('/divide/:num1/:num2', (req, res) =>{
    try {
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);

        const result = number1 / number2;
        res.send(result.toString());
        
    } catch (error) {
        res.send(error);
        
    }
});

app.listen(3000, () => {
    console.log('Calculator API is listenning on port 3000. Enjoy');
});