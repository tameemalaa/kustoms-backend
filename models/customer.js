const User = require('./models/user');

const Customer = User.extend( {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthdate:{
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports= Customer;