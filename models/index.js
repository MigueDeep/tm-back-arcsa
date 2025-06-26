const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
const UserModel = require('./user.model')
const TaskModel = require('./task.model')

dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
)

const User = UserModel(sequelize)
const Task = TaskModel(sequelize)


User.hasMany(Task, { foreignKey: 'user_id'})
Task.belongsTo(User, { foreignKey: 'user_id' })

module.exports = {
  sequelize,
  User,
  Task
}
