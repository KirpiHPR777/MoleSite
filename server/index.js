const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();
const sequelize = require('./database');
const models = require('./models/models');
const router = require('./routes/mainRouter');
const errorHandler = require('./middleware/errorHandlingMiddleware');

const PORT = process.env.PORT || 5000;
// const corsOptions ={ origin: '*', credentials: true, optionSuccessStatus:200,}
const corsOptions ={ origin: 'https://molesite.netlify.app/'}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);
 
const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    }catch(e){
        console.log(e);
    }
}

start();