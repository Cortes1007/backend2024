const {request,response}=require('express');
const getMessage=(req,res)=>{

    res.send('Hello from the users controller!');

}

module.exports={getMessage};