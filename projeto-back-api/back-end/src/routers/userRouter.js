import express from 'express'
import listUserController from '../controllers/listUserController.js'
import getUserController from '../controllers/getUserController.js'
import createUserController from '../controllers/createUserController.js'
import updateUserController from '../controllers/updateUserController.js'
import deleteUserController from '../controllers/deleteUserController.js'
import editNameUserController from '../controllers/editNameUserController.js'

const router = express.Router()

router.get('/list', listUserController)
router.get('/:id', getUserController)
router.post('/', createUserController)
router.put('/:id', updateUserController)
router.delete('/:id', deleteUserController)
router.patch('/nome/:id', editNameUserController)

export default router