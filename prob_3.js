function donkeyGame(amountOfTries) {
  const tail = Math.floor(Math.random() * 10);
  console.log("The tail is:", tail)
  let tries = 0;
  return function check(guess) {
    tries++;
    if (tries > amountOfTries) {
      return "You have no tries left!";
    } else {
      if (guess === tail) {
        return "You hit the mark!";
      } else if (guess < tail) {
        return "The tail is above";
      } else if (guess > tail) {
        return "The tail is below";
      }
    }
  };
}

const play = donkeyGame(3);
console.log(play(1));
console.log(play(9));
console.log(play(7));
console.log(play(6));
console.log(play(2));
