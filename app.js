//file vars
const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

//using statements
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/views'));

//incuding routes
var router = require('./routes/index');
app.use('/', router);

//hbs setup
app.engine('hbs', exphbs.engine({
    defaultLayout:'main',
    extname:'.hbs',
}));
app.set('view engine', 'hbs');

//port listener
app.listen(port, () => {
    console.log(`Connected on port ${port}`);
});
