// День 16. Объекты: введение

const phoneBook = {
   "Братишка": 79269076000,
   "Нур-Мухаммад": 79680571169,
   "Геваргиз Лазарев": 7964588155
};

console.log(phoneBook);
console.log(phoneBook.Братишка);
console.log(phoneBook["Геваргиз Лазарев"]);

phoneBook["Зарина Гафуровна"] = 79671631180;
console.log(phoneBook);

delete phoneBook["Геваргиз Лазарев"];
console.log(phoneBook); 

const phoneBook = {
   list: {
   "Братишка": 79269076000,
   "Нур-Мухаммад": 79680571169,
   "Геваргиз Лазарев": 7964588155
   },
   log() {
         console.log('Its a phonebook!')
   }
};

phoneBook.log();

const phoneBook = {
   list: {
      "Братишка": 79269076000,
      "Нур-Мухаммад": 79680571169,
      "Геваргиз Лазарев": 7964588155
   },
   log() {
         console.log(this.list)
   }
};

phoneBook.log(); 


const dateOfBirthday = {
   "Idris": 1998,
   "Nur-Muhammad": 2004,
   "Ilyas": 2005,
   "Khilola": 1995
};

console.log(dateOfBirthday);

dateOfBirthday["Mom"] = 1972,
console.log(dateOfBirthday);


const dateOfBirthday = {
   list: {
      "Idris": 1998,
      "Nur-Muhammad": 2004,
      "Ilyas": 2005,
      "Khilola": 1995
   },
   log() {
         console.log('Its a date!')
   }
};

dateOfBirthday.log();


const dateOfBirthday = {
   list: {
      "Idris": 1998,
      "Nur-Muhammad": 2004,
      "Ilyas": 2005,
      "Khilola": 1995
   },
   log() {
         console.log(this.list)
   }
};

dateOfBirthday.log();
