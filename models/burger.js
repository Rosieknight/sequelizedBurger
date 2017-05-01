//Pulls requrirements to build the model
module.exports = function(sequelize, DataTypes){

  //I'm tempted to call this something other than 'burger', but I want to remember that
  //the var burger is in the burger.js file.
  var Burger = sequelize.define("my_burger",{
    //Name of the burger.
    burger_name: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [1]
      }
    },
    //Has the burger been eaten? Default is false.
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    //Created At? I need to check something first...
  });
  return Burger;
  
};