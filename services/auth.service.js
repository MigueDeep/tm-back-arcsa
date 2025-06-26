const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'mysecretarcsa'
const SALT_ROUNDS = 10

exports.register = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ where: { email } })

  if (existingUser) {
    throw new Error('El email ya está registrado')
  }
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

  const user = await User.create({ name, email, password: hashedPassword })

  const { password: _, ...userWithoutPassword } = user.toJSON()
  return userWithoutPassword
}

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } })
  if (!user) {
    throw new Error('Correo electrónico inválido')
  }

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    throw new Error('Contraseña inválida')
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '1d' }
  )

  return token
}
