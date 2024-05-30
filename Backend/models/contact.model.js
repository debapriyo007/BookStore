import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
        maxLen: 200,
    }
    
});
const ContactInfo = mongoose.model('ContactInfo', contactSchema);
export default ContactInfo;