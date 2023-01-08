const express=require('express');
const serverless=require('serverless-http');

const app=express();

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Express on Vercel");
});

app.use('/.netlify/functions/api',router)

module.exports=app;
module.exports.handler=serverless(app);