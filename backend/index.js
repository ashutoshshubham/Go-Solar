const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require('./routers/userRouter');
const equipmentRouter = require('./routers/equipmentRouter');
const cors = require('cors');
const { PORT } = require('./config');

const stripe = require('./routers/stripe')

const product = require('./routers/product')

const app = express();

app.use(cors(
    {
        origin : 'http://localhost:3000',
        credentials : true
    }
));
app.use(express.json());
// app.use(express.urlencoded({extended : true}));
app.use('/user', userRouter);
app.use('/equipment', equipmentRouter);
app.use('/stripe', stripe);
app.use('/product', product)


app.get('/', (req, res) => {
    console.log('Request at index');
    res.status(299).send('Index Working Perfectly!!');
})



app.listen(PORT, () => console.log(`Express server has started at ${PORT}`));