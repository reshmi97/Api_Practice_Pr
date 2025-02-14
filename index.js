import express from 'express'
import axios from 'axios'

const port=3000;
const app=express();

app.get("/",(req,res)=>{
        res.render("home.ejs");
        
});

app.get("/jokes",async(req,res)=>{
        try{
                const result=await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
                res.render("index.ejs",{joke: result.data.joke});
        }catch(error){
                console.log(error);
                res.render("index.ejs",{joke: "Error in Server"});
        }     
});

app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
});