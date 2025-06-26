const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid')

module.exports = (sequelize) => {
    const Task = sequelize.define('Task', {
        id: {
            type: DataTypes.UUID,
            defaultValue: () => uuidv4(),
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM,
            values: ['pendiente', 'completado'],
            defaultValue: 'pendiente',
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'users', 
                key: 'id'
            },
        }
    }, {
        tableName: 'tasks',
        underscored: true,
        timestamps: false 
    })
    return Task
}
