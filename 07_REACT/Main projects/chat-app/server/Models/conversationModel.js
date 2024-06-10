
const mongoose = require('mongoose')

const ConversationSchema =  new mongoose.Schema({
    participants:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
],
 messages:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"message",
        default: [],
        },
 ],
  
}, 
{ timestamps:true });


const Conversation = mongoose.model('Conversation',ConversationSchema)
module.exports = Conversation