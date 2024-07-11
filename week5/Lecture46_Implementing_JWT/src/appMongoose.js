const { connect } = require("mongoose");

const MONGO_URL = "mongodb+srv://satendraprataps56:Windos123@cluster0.cig8esf.mongodb.net";

const DB_NAME = `cs-mern`;

connect(`${MONGO_URL}/${DB_NAME}`);

async function connectDB(){
    try{
        await connect(`${MONGO_URL}/${DB_NAME}`);
        console.log("MongoDb Connected");
        console.log("Jai Shree Ram");
    }catch(err){
        console.log(err.message);
    }
    
}

connectDB();