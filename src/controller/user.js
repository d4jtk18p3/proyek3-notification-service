import User from '@proyek3/postgres-database/models/User'

export const createUser = async (req, res, next) => {
  try {
    const { idUser, email } = req.body
    const [result, created] = await User.findOrCreate({
      where: {
        id: idUser
      },
      defaults: {
        id: idUser,
        email: email
      }
    })
    res.status(201).json({
      message: 'Berhasil membuat data user',
      data: result,
      isExistBefore: created
    })
  } catch (error) {
    next(error)
  }
}
