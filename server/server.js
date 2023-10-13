const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const routes = require('./routes/routes');

app.use(express.json());
app.use('/api', routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`))