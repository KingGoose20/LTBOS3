Joe = ["../Images/Players/Alex.png", 3, 2, 5, 7, "Child", "lebym"]
Angus = ["../Images/Players/Angus.png", 2, 1, 3, 4, "Champion", "Angus Walker"]

function prepare(variable, team) {
    document.getElementById("playerImage").src = variable[0]
    document.getElementById("points").innerHTML = variable[1]
    document.getElementById("finishes").innerHTML = variable[2]
    document.getElementById("midranges").innerHTML = variable[3]
    document.getElementById("threes").innerHTML = variable[4]
    document.getElementById("accomplishment").innerHTML = variable[5]
    document.getElementById("name").innerHTML = variable[6]

    if (team == "Loose Gooses") {
        document.getElementById("teamImage").src = "../Images/LG_Final.png"
        document.getElementById("playerImage").style.border = "5px solid rgb(195, 45, 83);"
    }
}


function showPlayer() {
    console.log("ran")
    position = window.pageYOffset
    var id = '#dialog';

    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //Set heigth and width to mask to fill up the whole screen
    $('#mask').css({ 'width': maskWidth, 'height': maskHeight });

    //transition effect		
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);

    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();

    //Set the popup window to center
    $(id).css('top', (winH / 2 - $(id).height() / 2) + position);
    $(id).css('left', (winW - $(id).width() - 40) / 2);
    console.log($(id).width())

    //transition effect
    $(id).fadeIn(2000);

    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();

        $('#mask').hide();
        $('.window').hide();
    });

    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });
}

prepare(Joe, "abcd")
setTimeout(() => { showPlayer() }, 0);



