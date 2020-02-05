$(document).ready(function () {

    var characterImages = ["assets/images/CHARACTER-1.png", "assets/images/CHARACTER-2.png", "assets/images/CHARACTER-3.png", "assets/images/CHARACTER-4.png", "assets/images/CHARACTER-5.png", "assets/images/CHARACTER-6.png"];

    //showing character images icon in select your Jedi div
    for (let i = 0; i < characterImages.length; i++) {

        var charImages = $("<img>").attr("src", characterImages[i]);
        charImages.addClass("charImages")
        $("#jediChoices").append(charImages);
    }

    //on click function when user selects jedi
//     function chooseJedi() {
//         $(".charImages").on("click", function () {
//             $("#chosenJedi").empty();
//             $("#chosenJedi").append(this);
//         console.log("works")
//         });
//     };

// $(document).on("click", "#charImages", chooseJedi);


$(".charImages").on("click", function () {
    $("#chosenJedi").empty();
    $("#chosenJedi").append(this);
console.log("image moved")
});

});