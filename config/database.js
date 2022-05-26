const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


// useCreateIndex: true,
// useFindAndModify: false,    ==> use these options in case of cloud mongo instance.


exports.connect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true  
    })
    .then(() => {
        console.log('successfully connected to database');
    })
    .catch((error) => {
        console.log('Database connection failed. exiting now...');
        console.error(error);
        process.exit(1);
    })
}