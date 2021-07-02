import { body, param } from 'express-validator'

export const createGroup = [
    body('nama', 'Nama tidak boleh kosong').exists(),
]

export const createUserDevice = [
    body('user_id', 'User id tidak boleh kosong').exists(),
    body('token', 'Token tidak boleh kosong').exists()
]

export const addUserToGroup = [
    body('userId', 'User id tidak boleh kosong').exists(),
    body('groupName', 'Nama group tidak boleh kosong').exists()
]
