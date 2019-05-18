var score = 0
var clickCount = 0
var fin = 0
var numPlayers = 0
var finalScores = []



// FRONT PAGE --- INPUT PLAYER NUMBERS

$("#button").click(function() {
    numPlayers = $("#playersInput").val();
    $("#frontPage").hide();
    $("#gamePage").show();
    $("body").css("background-image", "url('images/pluse.gif')")
})


// GAME --- THREE BUTTON AND SCORE COUNT

$(".target").click(function() {


    if (clickCount > 10) {
        finalScores.push(score)
            // score = 0
            // clickCount = 0

    } else {
        clickCount++
        $(".finPlayer").html("(( " + clickCount + " ))" + "(( " + score + " ))");

    }
})


$("#stupid").click(function() {
    score = score - 5
    if (clickCount < 10) {
        $(".count").html("(( " + clickCount + " ))" + "(( " + score + " ))");
    } else {
        $(".count").css("font-size", "1.2rem");
        $(".count").css("color", "#ffbaba");
    }
})

$("#unlucky").click(function() {
    score = score - 1
    if (clickCount < 10) {
        $(".count").html("(( " + clickCount + " ))" + "(( " + score + " ))");
    } else {
        $(".count").css("font-size", "1.2rem");
        $(".count").css("color", "#ffbaba");
    }
})

$("#lucky").click(function() {
    score = score + 5
    if (clickCount < 10) {
        $(".count").html("(( " + clickCount + " ))" + "(( " + score + " ))");
    } else {
        $(".count").css("font-size", "1.2rem");
        $(".count").css("color", "#ffbaba");
    }
})