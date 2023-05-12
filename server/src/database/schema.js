const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {type: String, default: 'John', setDefaultsOnInsert: true},
  password: {type: String, required: true},
}, {collection: "userData"}); // Default Adding Extra s in Collection name so add {collection: "userData", versionKey: false, timestamps: false, _id: false } 

/* Auto-creation of _id field: By default, Mongoose automatically creates an _id field with a unique identifier for each document. If you want to disable this behavior and use your own _id field, you can set the "_id" option to false.

Auto-versioning: By default, Mongoose automatically adds a __v field to each document to track its version number. 

Automatic timestamping: By default, Mongoose automatically adds createdAt and updatedAt fields to each document to track when it was created and last updated.
*/

const User = mongoose.model('userData', userSchema)

module.exports = User
