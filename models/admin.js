const User = require('./models/user');

const Admin = User.extend( {
    privileges: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports= Admin;