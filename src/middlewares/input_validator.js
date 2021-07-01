import { body } from 'express-validator'

export const sendEmailGroupNotification = [
  body('groupName')
    .trim()
    .notEmpty()
    .withMessage('Nama grup tidak boleh kosong')
    .isString()
    .withMessage('Nama grup harus bertipe string'),
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subjek email tidak boleh kosong'),
  body('subject').trim().notEmpty().withMessage('Body email tidak boleh kosong')
]
