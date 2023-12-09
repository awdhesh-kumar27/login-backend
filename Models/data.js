import mongoose from 'mongoose';
mongoose.set("strictQuery", false);
const Schema = mongoose.Schema;
var objectId = Schema.objectId;
const dataSchema = Schema({
        username : {
            type : String,
            required : true,
            unique : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password :  {
            type : String,
            required : true
        },
});

const data = mongoose.model('logins',dataSchema);
export default data;