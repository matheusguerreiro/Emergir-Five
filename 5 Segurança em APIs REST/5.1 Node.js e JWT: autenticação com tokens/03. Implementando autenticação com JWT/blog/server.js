// 3.3.3
require('dotenv').config()
// 3.3.3

const app = require('./app');
const port = 3000;
const db = require('./database');

const routes = require('./rotas');
routes(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
