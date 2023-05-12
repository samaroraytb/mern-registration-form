const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/registerForm')
.then(() => {
    console.log(`Connect with mongoDB`);
})
.catch((error) => {
    console.log(`Database error ${error}`)
})
