const { message } = require('statuses');
const club = require('../models/club');

exports.createClub = async (req,res) =>{
    try{
        const {clubName, email_id, category, members, details} = req.body;
        const c = new club({
            clubName, 
            email_id, 
            category, 
            members, 
            details
            
        })
        await c.save();
        res.status(201).json(c);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}