const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());    //Permite leitura de json nos parâmetros
app.use(routes);

app.listen(3333);
