import { body, param } from 'express-validator'

export const createUserDevice = [
    body('user_id', 'User id tidak boleh kosong').exists(),
    body('token', 'Token tidak boleh kosong').exists()
]

export const addUserToGroup = [
    body('userIdList', 'User id tidak boleh kosong').isArray().exists(),
    body('groupName', 'Nama group tidak boleh kosong').exists()
]