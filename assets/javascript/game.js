$(document).ready(function () {

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