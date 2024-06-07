const profile = {
  username: "Jacob",
  playTime: 300,
  amount: [],

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
    this.amount;
  },

  getInfo() {
    return `${this.username} has ${amount} active hours!`;
  },
};

profile.playTime(amount);
console.log(profile);

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"
