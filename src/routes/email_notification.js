import express from 'express'
import * as emailNotifController from '../controller/email_notification'
import { validate } from '../middleware/input_validation'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'
import { transactionMiddleware } from '../middleware/transaction'

const router = express.Router()

router.post(
  '/',
  ValidatorSanitizer.sendEmailGroupNotification,
  validate,
  transactionMiddleware,
  emailNotifController.sendEmailGroupNotification
)

export default router
