$(document).ready(function() {

// build a grid
    let num = 4;
    let col = 0;
    let row = 0;


//make span to create #garden
    for (let col = 0; col < num; col++) {
    for (let row = 0; row < num; row++) {
    let newSpan = $("<span>");
    $("#garden").append(newSpan);
    }
    $("#garden").append("<br>");
    }



//hide 3 worms
    $("span").on("click", flipCard)

    const numWorms = 3;
    let wormsHidden = 0;
    let wormsFound = 0;
    let blank =0;

    while (wormsHidden < numWorms) {
    wormsHidden++
    let randomSpan = Math.floor(Math.random() * numWorms ** 2)
    $("span").eq(randomSpan).addClass("hiddenWorm");
    }



//make a flipcard function for worms and dirt
    function flipCard() {

    if ($(this).hasClass("hiddenWorm")) {
        $(this).addClass("cardWorm")
        wormsFound++
    }
    if ($(this).addClass("cardDirt")) {
        blank++
    }
//stop the clicks after worms are found
    if (wormsFound === numWorms) {
        $("span").off("click");
    }

    }



//create progress bar click function
    $("span").click(function () {

    progressBar(numWorms * 3 / 100 * 100)
    });

    function progressBar(diff) {
    let progressValue = $("#progress").val();
    let totalValue = progressValue + diff;

//turn off click if progress bar fills up
    if (totalValue >= 100) {
    $("span").off("click");
    }
    $("progress").val(Math.round(totalValue));
    }



//create notification for finding three worms
    $("span").click(function () {

    if (wormsFound === numWorms) {
        $("#notification").fadeIn("slow").text('You found all 3 worms!!!').style.color = "green";
    }

//create notification for losing
    if (wormsFound + blank === 13) {
        $("#notification").fadeIn("slow").text('uh oh the farmer caught you!');
    }

    });
    // $(".dismiss").click(function(){
    //     $("#notification").fadeOut("slow");


});