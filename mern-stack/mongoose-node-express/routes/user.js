import {Router} from 'express';

const router=Router();

/*  API endpoints   */ 

// fetch list of users
router.get('/',async(req,res)=>{
    const users=await req.context.models.User.find();
    return res.send(users);
});

//read user by user identifier
router.get('/:userId',async(req,res)=>{
    const user=await req.context.models.User.findById(
        req.params.userId,
    );
    return res.send(user);
})

export default router;