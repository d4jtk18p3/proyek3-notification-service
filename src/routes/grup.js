import express from 'express'
import * as UserController from '../controller/Grup'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'
import { transactionMiddleware } from '../middleware/transaction'

const router = express.Router()

router.post(
    '/addNewUser',
    ValidatorSanitizer.addUserToGroup,
    transactionMiddleware,
    UserController.addUserToGroup
)

export default router
