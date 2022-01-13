const express = require('express');
const router = express.Router();
const { addUser, getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/user');



router.post('/user', addUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);



module.exports = router;