const router = require('express').Router();
const { Task } = require('../models');

router.get('/', (req, res) => {
    res.json('TESTING FROM TASKROUTES');
});

router.post('/', async (req, res) => {
    try {
        // What the users's input looks like
        const taskData = await Task.create(req.body);
        res.status(200).json({msg: 'We got the data!', taskData});
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;