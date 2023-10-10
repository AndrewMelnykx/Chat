const phoneBook = {
  nameList: {
    "Denis Skorik": 89231,
    "Shizuku Hinomori": 98523,
    "Zende Yakugu": 42852,
    "Sergey Voitenko": 65124,
    "Alena Vidina": 72344,
  },

  nicknameList: {
    Alina: "@booomdog2",
    Sasha: "@karambaboy",
    Kalzer: "@kalzerr",
  },

  addUser(newNameAdd, newPhoneAdd, inputNameList) {
    if (inputNameList === undefined) {
      this.nameList[newNameAdd] = newPhoneAdd;
    } else if (inputNameList === this.nameList) {
      this.nameList[newNameAdd] = newPhoneAdd;
    } else if (inputNameList === this.nicknameList) {
      this.nicknameList[newNameAdd] = newPhoneAdd;
    } else {
      this.createNewList(inputNameList, newNameAdd, newPhoneAdd);
    }
  },

  deleteUser(userName) {
    delete this.nameList[userName];
  },
  createNewList(inputNewNameList, key, value) {
    if (key === undefined || value === undefined) {
      this[inputNewNameList] = {};
    } else {
      this[inputNewNameList] = {
        [key]: value,
      };
    }
  },
  displayPhoneBook() {
    console.log(this);
  },
};

phoneBook.addUser("Roma Igoreve1", 8952323, "Voiwa");
phoneBook.displayPhoneBook();
