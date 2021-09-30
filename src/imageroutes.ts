import express from "express";
import cache from"memory-cache";
import sharp2 from "./sharp2";
import path from "path";
import sharp1 from "./sharp1";
const imageroute =express.Router();

imageroute.get("/:filename/:width/:height",(req,res)=>{
    let filename=req.params.filename;
    let width=+req.params.width;
    let height =+req.params.height;
    
    if(cache.get(filename)){
        sharp2(filename,width,height);
        res.setTimeout(5000,()=>{
            console.log("timeout in progress in cache");
            res.sendFile(path.join(__dirname,"../","output.jpg"));
         });
         
    }
    else{
        sharp1(filename);
        setTimeout(function(){sharp2(filename,width,height);  }, 3000);
        
        
        
        cache.put(filename,path.join(__dirname,"../",filename));
        res.setTimeout(7000,()=>{
          
           console.log("timeout in progress in original 2");
           res.sendFile(path.join(__dirname,"../","output.jpg"));
        });
        
    }
    
});

export default imageroute;


