const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

const MONGODB_URI="mongodb+srv://sampleuser:sampleuserhere@cluster0.cdnhr.mongodb.net/customers?retryWrites=true&w=majority&ssl=true";

mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected',()=>{console.log('Database connected')});
mongoose.connection.on('error',(error)=>{console.log('Error occured: '+error)});


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
//HTTP request logger
app.use(morgan('tiny'));
app.use('/api',routes)



app.listen(PORT,console.log(`Server is starting at ${PORT}`));