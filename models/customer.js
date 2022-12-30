const User = require('./models/user');

const Customer = User.extend( {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthDate:{
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports= Customer;