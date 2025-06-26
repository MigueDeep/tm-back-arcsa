const Joi = require('joi')

exports.registerSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': 'El nombre es obligatorio',
    'string.min': 'El nombre debe tener al menos 3 caracteres'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'El email debe ser válido',
    'string.empty': 'El email es obligatorio'
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'La contraseña es obligatoria',
    'string.min': 'La contraseña debe tener al menos 6 caracteres'
  })
})

exports.loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'El email debe ser válido',
        'string.empty': 'El email es obligatorio'
    }),
    password: Joi.string().min(6).required().messages({
        'string.empty': 'La contraseña es obligatoria',
        'string.min': 'La contraseña debe tener al menos 6 caracteres'
    })
})
