const router = require('express').Router()
const {insertData, updateUsers,deleteUserbyid,getUser} = require('../Controller/index')
router.post('/insert', insertData)
router.put('/update/:id',updateUsers)
router.delete('/delete/:id',deleteUserbyid)
router.get('/get/:id',getUser)

module.exports = router;

