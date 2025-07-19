
//connects database asynchronously 
const express=require("express")
const mongoose =require('mongoose');
//const cors=require('cors');

// import models,{connectDb} from './models';

const models = require("./models/index")
const app=express();
const PORT=8080;

var DATABASE_URL="mongodb://localhost:27017/myapp"

mongoose.set('useCreateIndex', true);
mongoose.connect(DATABASE_URL,{'useNewUrlParser':true});
var connectDb=mongoose.connection;

app.use(async(req,res,next)=>{
    req.context={
        models,
        me:await models.User.findByLogin('topgyal'),
    };
    next();
});

//middlewares,routes

//to reinitialize database on every Express server start
const eraseDatabaseOnSync=true;
 
connectDb.then(async()=>{
    if(eraseDatabaseOnSync){
        await Promise.all([
            models.User.deleteMany({}),
            models.Message.deleteMany({}),
        ]);
        console.log("checking ")
        createUsersWithMessages();
        console.log("created user")

    }
    app.listen(PORT,()=>
        console.log(`App listening on port ${PORT}`),
        );
});

//seed database
const createUsersWithMessages=async()=>{
    const firstUser=new models.User({
        username:'topgyal',
    });

    //associate message with user by reference user identifier
    const firstMessage=new models.Message({
        text:'First app to learn mongoose and mongodb',
        user:firstUser.id,
    })

    const message2=new models.Message({
        text:'this is fun',
        user:firstUser.id,
    })
    await firstMessage.save();
    await message2.save();
    await firstUser.save();
}

connectDb.on('error', function(err){
    console.log(error("Mongoose default connection has occured "+err+" error"));
});