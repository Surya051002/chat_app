const express = require('express');
const userRouter = require('./User');
const cors = require('cors');
const mongoose=require('mongoose');
const app = express();
app.use(cors());
app.use(express.json()); // Add this line for JSON body parsing

mongoose.connect('mongodb+srv://chat:123@cluster0.a9krjyp.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("connected");
})

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/user', userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(5000, () => {
  console.log('listening......');
});
