const express = require('express');
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
})