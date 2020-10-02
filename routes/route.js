const express = require('express');
const router = express.Router();

const contact = require('../models/contact');

//Display contacts
router.get('/contacts',(req, res, next) => {
    contact.find((err, contacts) => {
        res.json(contacts);
    });
});

//Home
router.get('/', (req, res, next) =>{
   
});

//Add contacts
router.post('/contacts', (req, res, next) => {
    let newContact = new contact({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        phone: req.body.phone
    });
    
    newContact.save((err, result) => {
        if(err){
            res.json({"msg": "Failed to Add contacts","Error":err});
        }
        else{
            res.json({"msg": "success","Result":result});
        }
    });
});

//Delete contacts
router.delete('/contacts/:id', (req, res, next) => {
    contact.remove({_id: req.params.id}, (err, result) => {
        if(err){
            res.json({"msg": "Failed","error": err});
        }
        else{
            res.json({"msg": result});
        }

    });
});

module.exports = router;