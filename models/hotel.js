module.exports = function (sequelize, DataTypes) {
    var Hotel = sequelize.define('Hotel', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        nightly: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {min: 0.01}
        },

        roomCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 1 }
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Hotel
};
