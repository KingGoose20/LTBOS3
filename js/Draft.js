Angus = ["../Images/Players/Angus.png", 2.43, 1.43, 0.57, 0.24, "Champion", "Angus Walker"]

Chris = ["../Images/Players/Christopher.png", 1.06, 0.41, 0.64, 0, "MVP", "Christopher Tomkinson"]
Kimmy = ["../Images/Players/Kimmy.png", 1.41, 0.41, 1, 0, "Finals MVP", "William Kim"]
SamJ = ["../Images/Players/SamJ.png", 0.31, 0.18, 0.13, 0, "Champion", "Sam James"]
Mitch = ["../Images/Players/Mitch.png", 0.65, 0.24, 0.29, 0.06, "Champion", "Mitch Yue"]

Alex = ["../Images/Players/Alex.png", 3.14, 3.07, 0.2, 0, "First All-Teams", "Alexander Galt"]
Nick = ["../Images/Players/Nicholas.png", 1.07, 0.53, 0.13, 0.2, "X-Factor", "Nicholas Szogi"]
Jasper = ["../Images/Players/Jasper.png", 0.41, 0.12, 0.29, 0, "Averaged 1.5 points for a week", "Jasper Collier"]
Ryan = ["../Images/Players/Ryan.png", 0.88, 0.13, 0.63, 0.06, "Averaged 2 points for a week", "Ryan Pattemore"]

Michael = ["../Images/Players/Michael.png", 2.06, 0.59, 0.76, 0.35, "Averaged 1.5 threes for a week", "Michael Iffland"]
Lukas = ["../Images/Players/Lukas.png", 1.14, 0.64, 0.5, 0, "All-Second Offence Team", "Lukas Johnston"]
Conor = ["../Images/Players/Conor.png", 0.6, 0.4, 0.2, 0, "Averaged 1.3 points for a week", "Conor Farrington"]
Willie = ["../Images/Players/Willie.png", 0.12, 0.12, 0, 0, "Teammate of the Season", "Will Weekes"]

function prepare(variable, team, number) {
    document.getElementById("playerImage").src = variable[0]
    document.getElementById("points").innerHTML = variable[1]
    document.getElementById("finishes").innerHTML = variable[2]
    document.getElementById("midranges").innerHTML = variable[3]
    document.getElementById("threes").innerHTML = variable[4]
    document.getElementById("accomplishment").innerHTML = variable[5]
    document.getElementById("name").innerHTML = variable[6]
    document.getElementById("teamName").innerHTML = team
    document.getElementById("number").innerHTML = number

    if (team == "Loose Gooses") {
        document.getElementById("teamImage").src = "../Images/LG_Final.png";
        document.getElementById("playerImage").style.border = "5px solid rgb(195, 45, 83)";
    } else if (team == "Wet Willies") {
        document.getElementById("teamImage").src = "../Images/WW_Final.png";
        document.getElementById("playerImage").style.border = "5px solid rgb(136,54,3)";
    } else if (team == "5 Musketeers") {
        document.getElementById("teamImage").src = "../Images/5M_Final.png";
        document.getElementById("playerImage").style.border = "5px solid rgb(71,174,181)";
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



