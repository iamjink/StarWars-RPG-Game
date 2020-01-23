


$(document).ready(function () {
    //reset function sets everything to 0/ false at game start
 
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
            }
        }
    };

    //game start
    reset();

    //game play. shows character selections and text will dynamically appear in scoreboard as game continues
    function play() {
        //defining jQuery variables that are selecting ids from characters area html 
        var $jediList = $('#jediChoices');
        var $enemyList = $('#enemyChoices');
        //defining jQuery variabl(es that are selecting ids from wrapper area html 
        var $chosenJedi = $('#chosenJedi');
        var $chosenEnemy = $('#chosenEnemy');
        //defining jQuery variables that are selecting text ids from score area html
        var $scoreText = $('#scoreText');
        var $winText = $('#scoreText');
        var $lossText = $('#scoreText');
        var $gameOverBUtton = $('#gameOverButton');
        var $jediText = $('#scoreText');

        //underscore.js for dynamically updated templates for scoreText. The text ids are in the html
        var $charTemplate = _.template($('#characterTemplate').html());
        var $attTemplate = _.template($('#attackTemplate').html());
        var $wTemplate = _.template($('#winTemplate').html());
        var $lTemplate = _.template($('#lossTemplate').html());
        var $JDTemplate = _.template($('#jediTemplate').html());

        //characters not selected yet, then returns empty strings
        var charNotSelected = ""
        $chosenJedi.html("");
        $chosenEnemy.html("");
        $scoreText.html("");
        $gamegameOverButton.html("");

        //characters to select will appear in select your jedi. If none of the characters are selected, then index 0 of array will show in the div
        gameObj.characterList.forEach(function (character, index) {
            charNotSelected = charNotSelected + $charTemplate({
                index: index,
                character: character
            });
        });
        if (gameObj.userCharacter) {
            $chosenJedi.html($charTemplate({
                index: 0,
                character: gameObj.userCharacter
            }));
            $enemyList.html(charNotSelected);
            $jediList.html("");
        } else {
            $jediList.html(charNotSelected);
            $enemyList.html("")
        }
        if (gameObj.currentEnemy) {
            $chosenEnemy.html($charTemplate({
                index: 0,
                character: gameObj.currentEnemy
            }));
        }
        //if attack happened, then display attack text in the scoreboard
        if (gameObj.attackOccured) {
            $scoreText.html($attTemplate({
                gameObj: gameObj
            }))
        }
        //if win occured, display win text in the scoreboard
        if (gameObj.winOccured) {
            $winText.html($wTemplate({
                lastOpponent: gameObj.lastOpponent
            }));
            $('#chosenEnemy').empty(gameObj.currentEnemy);
        }
        //if loss occured,
        if (gameObj.lossOccured) {
            $lossText.html($lTemplate({gameObj: gameObj}));
        }
        //if enemy is wounded, health point is less than 0
        if (gameObj.wounded){
            $("#scoreText").html("You are fatally wounded! Game Over!");
        }
        //if game is over/ user loses, battle again button shows up
        if (gameObj.gameOver) {
            var b =$('<button>');
            b.addClass('btn-primary waves-effect waves-light btn-lg');
            b.html('Battle Again!');
            reset();

            b.click(play);
            $('#gameOverButton').append(b);
        }
        //if user is a true jedi master
        if (gameobj.jediMaster) {
            $jediText.html($JDTemplate({lastOpponent: gameObj.lastOpponent}));
            $('#chosenEnemy').empty(gameObj.currentEnemy);

            var b =$('<button>');
            b.addClass('btn-primary waves-effect waves-light btn-lg');
            b.html('Battle Again!');
            reset();

            b.click(play);
            $('#gameOverButton').append(b);
        }
    };

    //selecting characters
    $('#jediChoices').on('click', '.characterListArea', function(e) {
        //stores element into dom, then into character-index
        var element = $(this);
        var charIndex = element.data('character-index');
        if (!gameObj.userCharacter) {
            //pushes selection into usercharacter array
            gameObj.userCharacter = gameObj.characterList.splice(charIndex, 1)[0];
            //setting attack power to the value in the gameObj
            gameObj.currentAttackPower = gameObj.userCharacter.attackPower;
        }

        play();
    });

    //selecting enemy
    $('#enemyChoices').on('click', '.characterListArea', function(e){
        var element = $(this);
        var charIndex = element.data('character-index');
        
        //if current enemy is not seleted
        if(!gameObj.currentEnemy) {
            gameObj.winOccured = false;
            gameObj.attackOccured = false;
            gameObj.currentEnemy = gameObj.characterList.splice(charIndex, 1)[0];
        }

        //updates html elements
        play();
    });

});