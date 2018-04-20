const express = require('express');

const addMiddleware = require('./middleware/decorate.middleware');
const delegateRoutes = require('./routers/delegateRoutes');

const app = express();

addMiddleware(app);
delegateRoutes(app);


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`===================================\n Server is listening on port ${port}. \n===================================`)
})