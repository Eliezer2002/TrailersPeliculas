require('dotenv').config();
const app = require('./app');
require('./database');

app.listen(app.get('port'), () => {
    console.log("Puerto: ", app.get('port'));
});