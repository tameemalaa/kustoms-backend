const Customer = require('./models/customer');

const Designer = Customer.extend( {
    NationalID: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
    }
});

module.exports= Designer;