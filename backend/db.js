const mongoose = require('mongoose');
const db = mongoose.connect("mongodb+srv://chat:123@cluster0.a9krjyp.mongodb.net/?retryWrites=true&w=majority").then(() => { console.log("connected....") }).catch((ers) => {
    console.err(ers);
});

module.exports=db;