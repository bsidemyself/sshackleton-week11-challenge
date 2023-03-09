const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoute = require('./routes/apiRoute/api-routes');
const htmlRoute = require('./routes/html-routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoute);
app.use('/', htmlRoute);
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});