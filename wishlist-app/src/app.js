const express = require('express');
const bodyParser = require('body-parser');
const { setRoutes } = require('./routes/wishlistRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});