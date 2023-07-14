const connection = require('../config/db');
const md5 = require('md5'); 

class user_login{
    constructor(){
    }
    new_user = async(req,res) =>{
        const username= req.body.username;
        const password = md5(req.body.password);
        connection.query(`SELECT * FROM usercheck WHERE username = '${username}'`,(err,rows)=>{
            if (err) throw err;
           
            if(rows[0] == null){
                connection.query(`INSERT INTO usercheck (username,password,status) VALUES ('${username}' ,'${password}','Active')`,(err,rows)=>{
                            if(!err){
                            res.status(201).send(req.body);
                            }
                        else
                            res.status(400).send(err);
                        })
            }
            else{
                res.send("user already registered");
            }
        });
       
    }

    login_here = async(req,res) =>{
        const username = req.body.username;
        const password = md5(req.body.password);
        connection.query(`SELECT * FROM usercheck WHERE username = '${username}'`,(err,rows)=>{
            if (err) 
            throw err;
            
            if(rows[0] == null){
                res.send("user does not exist");   

    }
    else{
        if(md5(req.body.password)==rows[0].password){
            res.send("user login");
        }
        else{
            res.send("wrong password");
        }
    }
        })
    }

}

module.exports = new user_login();