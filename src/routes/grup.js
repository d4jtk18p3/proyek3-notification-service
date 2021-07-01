import express from 'express'
import * as UserController from '../controller/grup'

const router = express.Router()

router.post(
    '/addNewUser',
    UserController.addUserToGroup
)

export default router
