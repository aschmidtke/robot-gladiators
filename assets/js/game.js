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

// fight function (now with parameter for enemy's names)
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
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

// function to start a new game 
var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // fight each enemy robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy name to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;


    // pass the pickedEnemyName varaiable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
    if (playerHealth > 0 && i <enemyNames.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
        shop();
    }
    }
}
// if player isn't alive, stop the game
else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
}
}
endGame();
};


// function to end the entire game
var endGame = function () {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " +playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    window.alert("The game has now ended. Let's see how you did!");

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    // ask a player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack or LEAVE?"
    );
// use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney > 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
    //increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney -7;
            }
            else {
                window.alert("You don't have enough money!");
            }
    break;
    case "UPGRADE":
    case "upgrade":
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        //increase attack and decrease money
        playAttack = playerAttck +6;
        playerMoney = playerMoney -7;
        break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            //do nothing, so function will end
            break;
            default:
                window.alert("You did not pick a valid option. Try again.");

                // call shop() again to force player to pick a valid option
                shop();
                break;
    }

};

// start the games when the page loads
startGame();