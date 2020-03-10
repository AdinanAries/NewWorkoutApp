/*class DAO {
  constructor() {
    User: {
    }
  }

  getUser(UserID) {
    var User;
    User.firstName = "Mohammed";
    User.lastName = "Adinan";
    User.personName = `${User.firstName} ${User.lastName}`;
    User.age = 27;
    User.sex = "male";
    User.weight = "110lbs";
    return User;
  }
}*/

var User = {};

var DAO = {

  getUser: UserID => {
    User.UiserID = UserID;
    
    User.firstName = "Mohammed";
    User.lastName = "Adinan";
    User.personName = `${User.firstName} ${User.lastName}`;
    User.age = 27;
    User.sex = "male";
    User.weight = "110lbs";
    return User;
  },
  getLogin: (username, password) => {
    var UserID = 34;
    //database code
    return UserID;
  }
};

module.exports = DAO;
