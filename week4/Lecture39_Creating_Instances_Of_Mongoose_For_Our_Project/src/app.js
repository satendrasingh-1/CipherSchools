require("./appMongoose");

const Task = require("./models/Task")
const express = require("express");

const app = express();


app.get('/', (req,res)=>{
    res.send("Jai Shree Ram <br> Jai shree Mahakal ");
})

app.get("/add",(req,res)=>{
    let {a: first, b:second} = req.query;
    let sum = parseInt(first)+parseInt(second);
    res.send({sum});
})

app.post("/add-task", async (req,res)=>{
    const task = new Task({title: "Test Taks", description: "Test Task Desc"});
    await task.save();
    return res.status(201).send({message: "Saved"});
})

app.listen(3000,()=>{
    console.log("Jai Shree Ram server is started");
})