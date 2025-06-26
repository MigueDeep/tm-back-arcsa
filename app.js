require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { sequelize } = require('./models')

app.use(express.json())
app.use(cors())


app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/tasks', require('./routes/task.routes'))


sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
  })
})
