$(document).ready(function () {

    function reset() {
        window.gameObj = {
            //attack button to false, then set it to true
            attackOccured: false,
            winOccured: false,
            lossOccured: false,
            wounded: false,
            gameOver: false,
            jediMaster: false,

            //character list array 
            characterList: [{
                    name: 'Rey',
                    visual: 'assets/images/CHARACTER-1.png',
                    healthPoints: 130,
                    attackPower: 15,
                    counterAttackPower: 30,
                },

                {
                    name: 'Chewbacca',
                    visual: 'assets/images/CHARACTER-2.png',
                    healthPoints: 170,
                    attackPower: 20,
                    counterAttackPower: 25,
                },

                {
                    name: 'Poe Dameron',
                    visual: 'assets/images/CHARACTER-3.png',
                    healthPoints: 130,
                    attackPower: 12,
                    counterAttackPower: 25,
                },

                {
                    name: 'Yoda',
                    visual: 'assets/images/CHARACTER-4.png',
                    healthPoints: 130,
                    attackPower: 45,
                    counterAttackPower: 60,
                },

                {
                    name: 'Darth Vader',
                    visual: 'assets/images/CHARACTER-5.png',
                    healthPoints: 180,
                    attackPower: 25,
                    counterAttackPower: 30,
                },

                {
                    name: 'Kylo Ren',
                    visual: 'assets/images/CHARACTER-6.png',
                    healthPoints: 150,
                    attackPower: 18,
                    counterAttackPower: 22,
                },
            ],

            //initializes game start
            gameStart: true,
            //initializes Jedi to nothing
            userCharacter: null,
            //initializes enemy to nothing
            currentEnemy: null,
            //initializes array of previously fought enemies
            previousEnemy: [],
            //sets current attack power to nothing
            currentAttackPower: null,

            //array of battle sounds
            battleSoundArray: ['assets/audio/saberclash.mp3', 'assets/audio/saberclash1.mp3', 'assets/audio/saberclash2.mp3', 'assets/audio/saberclash3.mp3', 'assets/audio/saberclash4.mp3', 'assets/audio/saberclash5.mp3', 'assets/audio/saberclash6.mp3', 'assets/audio/spin1.mp3', 'assets/audio/spin2.mp3', 'assets/audio/spin3.mp3', 'assets/audio/spin4.mp3', 'assets/audio/spin5.mp3', 'assets/audio/spin6.mp3', 'assets/audio/swing1.mp3', 'assets/audio/swing2.mp3', ],
            jediSelectSound: 'assets/audio/saberon.mp3',

            //generation random battle sound from array when attack button is pressed
            RandomBattleSound: function () {
                return this.battleSoundArray[Math.floor(Math.random() * this.battleSoundArray.length)];
            },
        }
    };

    //game start
    reset();

    function play() {
        //defining jQuery object of variables
        var $jediList = $('#jediChoices');
        var $enemyList = $('#enemyChoices');
        var $

    }



    //click function that sends character image to your jedi field and the rest images to enemies to attack field

    //click function that sends button clicked to your opponent field

    //function for random number is assigned in your jedi

    //function for random number is assigned in your opponent

    //click function for the attack button. when this button is clicked , and opponet random number decreases by jedi random number. score number shows the random number that is assigned to each of jedi and opponent

    //health point decreases by click and random number

    //if jedi health point goes to 0, get an alert that says you lost. 

    //if oppoment health point goes to 0, get an alert that says you win. 







    //random number generator

    var RandomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    //assigning a hidden random value to each crystal between 1 and 12

    var buttonOne = Math.floor(Math.random() * 12) + 1;
    var buttonTwo = Math.floor(Math.random() * 12) + 1;
    var buttonThree = Math.floor(Math.random() * 12) + 1;
    var buttonFour = Math.floor(Math.random() * 12) + 1;

    //setting variables for scores
    var wins = 0;
    var losses = 0;
    var userTotal = 0;

    $("#randomNumber").text(RandomNumber);

    //defining functions for scoreboard
    function winScore() {
        wins++;
        $("#wins").text(wins);
    }

    function lossScore() {
        losses++;
        $("#losses").text(losses)

    }

    //click functions that random assign number to each button and add these numbers when clicked
    $("#button-one").click(() => {
        userTotal = userTotal + buttonOne;
        $("#userNumber").text(userTotal);
        if (userTotal === RandomNumber) {
            winScore();
            reset();
        } else if (userTotal > RandomNumber) {
            lossScore();
            reset();
        }
    });

    $("#button-two").click(() => {
        userTotal = userTotal + buttonTwo;
        $("#userNumber").text(userTotal);
        if (userTotal === RandomNumber) {
            winScore();
            reset();
        } else if (userTotal > RandomNumber) {
            lossScore();
            reset();
        }
    });

    $("#button-three").click(() => {
        userTotal = userTotal + buttonThree;
        $("#userNumber").text(userTotal);
        if (userTotal === RandomNumber) {
            winScore();
            reset();
        } else if (userTotal > RandomNumber) {
            lossScore();
            reset();
        }
    });

    $("#button-four").click(() => {
        userTotal = userTotal + buttonFour;
        $("#userNumber").text(userTotal);
        if (userTotal === RandomNumber) {
            winScore();
            reset();
        } else if (userTotal > RandomNumber) {
            lossScore();
            reset();
        }
    });




    //game reset function when win or loss score goes up by 1
    function reset() {
        userTotal = 0;
        $("#userNumber").text(userTotal);

        RandomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $("#randomNumber").text(RandomNumber);


        buttonOne = Math.floor(Math.random() * 12) + 1;
        buttonTwo = Math.floor(Math.random() * 12) + 1;
        buttonThree = Math.floor(Math.random() * 12) + 1;
        buttonFour = Math.floor(Math.random() * 12) + 1;
    }

});