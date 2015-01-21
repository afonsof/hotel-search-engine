module.exports = function (sequelize, DataTypes) {
    var Booking = sequelize.define('Booking', {
        checkin: {
            type: DataTypes.DATE,
            allowNull: false
        },

        checkout: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Booking;
};
