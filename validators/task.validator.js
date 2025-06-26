const Joi = require('joi');

exports.registerTaskSchema = Joi.object({
    title: Joi.string().min(3).required().messages({
        'string.empty': 'El título es obligatorio',
        'string.min': 'El título debe tener al menos 3 caracteres'
    }),
    description: Joi.string().max(255).optional().messages({
        'string.max': 'La descripción no puede exceder los 255 caracteres'
    }),
    status: Joi.string().valid('pendiente', 'completado').default('pendiente').messages({
        'any.only': 'El estado debe ser "pendiente" o "completado"',
        'string.empty': 'El estado es obligatorio'
    })
})