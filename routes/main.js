const express = require('express');
const app = express();

const port = process.env.PORT || 3001;
const www = process.env.WWW || './';

app.use(express.static(www));
console.log(`serving ${www}`);
// Creating simple middleware
const middleware = (req, res, next) => {
    let c = req.query;
    console.log(c);
    if (c.val == 1) {
        res.redirect('/if');
    } else {
        res.redirect('/else');
    }
    console.log('Middleware Working')
    next();
};

app.get('/yash', middleware, (req, res) => {
    res.json({
        message: "lets see"
    });
});

app.get('/api', (req, res) => {
    res.json({
        message: "Yash ki react app"
    });
});

app.get('/if', (req, res) => {
    res.json({
        statusCode: 200,
        yes: "Middleware Success to If"
    });
});

app.get('/else', (req, res) => {
    res.json({
        statusCode: 200,
        yes: "Middleware Success to Else"
    });
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));