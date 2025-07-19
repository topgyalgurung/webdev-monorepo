//combines all models and export them as database interface 
//to Express application

var mongoose =require('mongoose');


const User =require('./user.js');
const Message =require('./message.js');

const models={User,Message};

// module.exports= {connectDb};
module.exports=  models;