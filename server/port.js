/* eslint-disable no-console */
const { PORT } = require('../config');
const app = require('./app');

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
