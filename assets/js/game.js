// Game States
// "Win" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's names)
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), then fight
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip the fight. Goodbye.");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
    }
} 
    // remove enemy health by subtracting the amouint set in the playerAttack
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        // award player money for winning
        playerMoney = playerMoney + 20;
        // leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of 'enemy Attack' from the value of 'playerHealth' and us that result t update the value in 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " healthremaining.");

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + "health left");
    }
  }
};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy name to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames [i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;


    // pass the pickedEnemyName varaiable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
}
// if player isn't alive, stop the game
else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
}
}