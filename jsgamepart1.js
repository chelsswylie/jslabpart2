function startGame() {
  let vGame = prompt("Would you like to play a game?");
  let charName = prompt("Name your character...");
  let userHP = 40;
  let grantHP = 10;
  let wins = 0;
  if (!vGame) {
    console.log("Come back later!");
  } else if (vGame.toLowerCase() === "no") {
    console.log("Come back when you want a challenge!");
  } else vGame.toLowerCase() === "yes";
  {
    while (!charName) {
      charName = prompt("You must complete this step before proceeding...");
    }
  }
  function getDamage() {
    return Math.floor(Math.random() * 5 + 1);
  }
  function startCombat() {
    alert("You have 40 HP and Grant has 10 HP");
    console.log(
      `${charName}'s Health: ${userHP}, The Almighty Grant's health: ${grantHP}`
    );
  }
  startCombat(charName);
  while (grantHP > 0) {
    let fightorFlight = prompt("Attack and be brave, or quit and be scared?");
    if (!fightorFlight) {
      console.log("Come back when you're feeling brave...");
      break;
    }
    if (fightorFlight.toLowerCase() === "attack") {
      console.log(
        `${charName}'s Health: ${(userHP -= Math.floor(Math.random() * 2 + 1))}`
      );
      console.log(
        `The Almighty Grant's Health: ${(grantHP -= Math.floor(
          Math.random() * 2 + 1
        ))}`
      );
      console.log(`${charName}'s health is: ${(userHP -= getDamage())}`);
      console.log(`The Almighty Grant's HP is: ${(grantHP -= getDamage())}`);

      if (userHP <= 0) {
        console.log("Tough luck, you lost. Better luck next time.");
        break;
      } else if (grantHP <= 0) {
        wins++;
        if (wins === 3) {
          console.log(
            `Congratulations! You beat Grant. We should call you The Almighty ${charName}`
          );
          break;
        }
        console.log(`${charName} has won ${wins} times!`);
        grantHP = 10;
      }
    } else if (fightorFlight.toLowerCase() === "quit") {
      console.log("Chicken!");
      break;
    }
  }
}
startGame();
