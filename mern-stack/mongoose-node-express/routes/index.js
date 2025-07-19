import session from '../session';
import user from './user';
import message from './message';

const router=require("express").Router();

router.get('/',function(req,res,next){
    res.send('index',{title:'Express'});
})

export default {
    session,user,message
};

module.exports =router;