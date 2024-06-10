const Conversation = require('../Models/conversationModel')
const Message = require('../Models/messageModel')

exports.SendMessage =async(req,res)=>{
    try {
       const { message } = req.body;
       const { id:recieverId } = req.params;
       const senderId = req.user._id;


    let coversation = await Conversation.findOne({
        participants: {$all: [senderId, recieverId] },

       });


       if(!conversation){
        conversation = await Conversation.create({
            participants: [senderId, recieverId],
        });
       }

       const newMessage = new Message({
        senderId,
        recieverId,
        message
       });

       if(newMessage){
        conversation.messages.push(newMessage._id)
       }

       res.status(201).json(newMessage)
    } catch (error) {
        console.log("error in send message controller" ,error.message);
        res.status(500).json({error:"internal server error"})
    }
}