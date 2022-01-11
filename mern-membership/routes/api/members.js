const express = require('express');
const router = express.Router();

// Member Model 
const Member = require('../../models/Member');

// @route GET api/members
// @desc Get all Members
// @access public
router.get('/', (req, res) => {
    Member.find()
    .sort({ date: -1 })
    .then(members => res.json(members));
});


// @route POST api/members
// @desc Create a member
// @access public
router.post('/', (req, res) => {
    const newMember = new Member({
        name: req.body.name,
        dept: req.body.dept,
        dob: req.body.dob
    });
    newMember.save().then(member => res.json(member));
    
});
// @route UPDATE api/members/:id
// @desc Update a member
// @access public
router.put('/:id', (req, res) => {
     Member.findOneAndUpdate(
        {_id: req.params.id},
        {$set:{
            id: req.body.id,
            name: req.body.name,
            dept: req.body.dept,
            dob: req.body.dob
                }
        })
    .then(result => {res.status(200).json({
        updated_member:result
            })
        })
    .catch(err => {
        console.log(err)
        res.status(404).json({
            error:err})
    });
     
 });

// @route DELETE api/members/:id
// @desc delete a member
// @access public
router.delete('/:id', (req, res) => {
   Member.findById(req.params.id)
   .then(member => member.remove().then(()=> res.json({success: true})))
   .catch(err => res.status(404).json({success: false})); 
    
});
module.exports = router;