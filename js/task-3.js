const profile = {
  username: "Jacob",
  playTime: 300,
  amount: 0,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    for (hour of hours) {
      this.playTime += hours;
      this.amount = this.playTime;
    }
  },

  getInfo() {
    return `${this.username} has ${this.amount} active hours!`;
  },
};

console.log(profile);

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.changeUsername);
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!
