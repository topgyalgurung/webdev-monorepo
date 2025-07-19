const express=require('express')
const fetch=require('node-fetch')
const redis=require('redis')

const PORT=process.env.PORT||5000;
//REDIS PORT
const REDIS_PORT=process.env.PORT||6379;

const client=redis.createClient(REDIS_PORT);

//initialize express
const app=express();

// set response
function setResponse(username,repos){
    return `<h2>${username} has ${repos} GitHub repos </h2>`;
}


//MIDDLEWARE

//make request to Github for data
async function getnRepos(req,res,next){
    try{
        console.log('Fetching Data ...');

        const {username}=req.params;

        const response=await fetch(`https://api.github.com/users/${username}`);
        
        //DATA IN JSON format
        const data=await response.json();

        // get public_records number from json
        const repos=data.public_repos

        //set DATA to REDIS
        //https://redis.io/commands/setex   // SET mykey value EXPIRE mykey seconds

        client.setex(username,3600,repos);

        res.send(setResponse(username,repos));

    }catch(err){
        console.error(err);
        res.status(500);
    }
}

// use a middleware to cache the value (Cache Middleware)
// middleware jst a function runs in between request and response cycle
function cache(req,res,next){
    const {username} = req.params;

    client.get(username,(err,data)=>{
        if (err) throw err;

        if(data!=null){
            res.send(setResponse(username,data));
        }else{
            next();
        }
    })
}
//create function specific route
app.get('/repos/:username', cache,getnRepos);

app.listen(5000,()=>{
    console.log(`App listening on port ${PORT}`);
})