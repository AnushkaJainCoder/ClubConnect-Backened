const { message } = require('statuses');
const student = require('../models/student');

exports.createUser = async (req,res) => {
    try{
        const {name, rollno, email_id, password, department, currentYear, interests } = req.body;

        const stud = new student({
            name, 
            rollno,
            email_id,
            password, 
            department, 
            currentYear, 
            interests 
        });
        await stud.save();
        res.status(201).json(stud);
    }
    catch(error ){
        console.log(error);
        res.status(400).json({message: error.message});
    }
};