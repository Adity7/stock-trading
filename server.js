const express = require('express');
const { fetchPrice } = require('./utils');
const { getStockPrices, postTest, getHome, middleWareInterceptor } = require('./routes');

const app = express();
const port = 5353;




// MIDDLEWARE
app.use(express.json());
app.use(require('cors')());
app.use(middleWareInterceptor);

// ROUTES
app.get('/', getHome);

app.get('/api/stock',getStockPrices);

app.post('/api/test', postTest);

app.listen(port, () => console.log(`Server has started on port: ${port}`));