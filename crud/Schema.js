const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    _id: ObjectId,
    "sl_no": Number,
    "name": String,
    "fat": Number,
    "carbs": Number,
    "protein": Number
});
const User = mongoose.model('User', UserSchema);
module.exports = User;