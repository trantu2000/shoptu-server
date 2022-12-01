const express = require('express')
const app = express();

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
var cors = require('cors')
const dotenv = require('dotenv');

const errorMiddleware = require('./middlewares/errors')

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(fileUpload())
// app.use(fileUpload({useTempFiles: true}))

//import all routes
const products = require('./routes/product')
const auth = require('./routes/auth')
const payment = require('./routes/payment');
const order = require('./routes/order');

//setting up config file
dotenv.config({ path: 'backend/config/config.env' })

app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', payment)
app.use('/api/v1', order)




// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app