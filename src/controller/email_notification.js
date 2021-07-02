import Grup from '@proyek3/postgres-database/models/Grup'
import User from '@proyek3/postgres-database/models/User'
import db from '@proyek3/postgres-database/db'

export const sendEmailGroupNotification = async (req, res, next) => {
  try {
    const { groupName, subject, bodyEmail } = req.body

    const group = await Grup.findByPk(groupName)
    if (!group) {
      const error = new Error('Grup tidak ditemukan')
      error.statusCode = 404
      error.cause = 'Nama grup tidak ditemukan'
      throw error
    }

    // const listEmail = await User.findAll({
    //   where: db.where(db.col('nama_grup'), groupName)
    // })
    // console.log(listEmail.toJSON())
    res.json({
      data: group
    })
  } catch (error) {
    next(error)
  }
}
