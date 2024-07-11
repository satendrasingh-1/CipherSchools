const bcrypt = require("bcrypt");
const { model } = require("mongoose");

const encryptPassword = async(plainTextPassword) =>{
    try{
        return await bcrypt.hash(plainTextPassword, 8);
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

const checkPassword = async (plainTextPassword, encryptedPassword) =>{
    return await bcrypt.compare(plainTextPassword, encryptedPassword);
}

module.exports = { checkPassword, encryptPassword};