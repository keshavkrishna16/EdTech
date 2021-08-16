const express=require('express');
const app=express();
const port=process.env.PORT || 4000;

app.use();


app.listen(port,()=>{
    console.log(`Connected to the Server at PORT ${port}`)
})