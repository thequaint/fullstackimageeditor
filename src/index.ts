import express from "express";
import imageroute from "./imageroutes";

const app=express();
const port=3000;
app.use("/images",imageroute);

app.listen(port, ()=> {
 console.log(`server started at localhost:${port}`)
});