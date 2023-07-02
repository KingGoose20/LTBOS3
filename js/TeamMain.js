LooseGooses = {
    "TeamsNames": ["Wet Willies", "5 Musketeers", "WW", "5M", "Loose Gooses"],
    "Quote": ["Honk honk honk, honk honk"],
    "Colours": ["#d74268", "#f5b153", "#d48619", "#d74268"],
    "VariablesPlayers": ["Player1", "Player2", "Player3", "Player4", "Player5", "Player6"],
    "VariablesText": ["TPlayer1", "TPlayer2", "TPlayer3", "TPlayer4", "TPlayer5", "TPlayer6"],
    "Players": ["Angus Walker", "William Kim", "Clarrie Jones", "Christopher Tomkinson", "Mitch Yue", "Sam James"],
    "Images": ["../Images/Players/Angus.png", "../Images/Players/Kimmy.png", "../Images/Players/Clarrie.png", "../Images/Players/Christopher.png", "../Images/Players/Mitch.jpeg", "../Images/Players/SamJ.jpg"],
    "PartA": [0, 0],
    "PartB": [0, "N/A", 0, "N/A", 0, "N/A", 0, "N/A"],
    "PartC": [0, 0, 0, 0, 0, 0],
    "PartD": [0, 0, 0, 0, 0, 0],
    "Date": [],
    "Wins": [],
    "Losses": [],
    "Points": [],
    "TA": [],
    "TB": []
}

WetWillies = {
    "TeamsNames": ["Loose Gooses", "5 Musketeers", "LG", "5M", "Wet Willies"],
    "Quote": ["Screw Clarrie Jones, we like to eat little white boys."],
    "Colours": ["#e45e0b", "#8c3600", "#8c3600", "#ff690c"],
    "VariablesPlayers": ["Player1", "Player2", "Player3", "Player4", "Player5"],
    "VariablesText": ["TPlayer1", "TPlayer2", "TPlayer3", "TPlayer4", "TPlayer5"],
    "Players": ["Rudy Hoschke", "Michael Iffland", "Lukas Johnston", "Conor Farrington", "Will Weekes"],
    "Images": ["../Images/Players/Michael.png", "../Images/Players/Rudy.png", "../Images/Players/Lukas.png", "../Images/Players/Conor.png", "../Images/Players/Willie.png"],
    "PartA": [0, 0],
    "PartB": [0, "N/A", 0, "N/A", 0, "N/A", 0, "N/A"],
    "PartC": [0, 0, 0, 0, 0, 0],
    "PartD": [0, 0, 0, 0, 0, 0],
    "Date": [],
    "Wins": [],
    "Losses": [],
    "Points": [],
    "TA": [],
    "TB": []
}

Musketeers = {
    "TeamsNames": ["Loose Gooses", "Wet Willies", "LG", "WW", "5 Musketeers"],
    "Quote": ["With Nick, we're the 6 Musketeers"],
    "Colours": ["#004045", "#004045", "#47aeb5", "#47aeb5"],
    "VariablesPlayers": ["Player1", "Player2", "Player3", "Player4", "Player5"],
    "VariablesText": ["TPlayer1", "TPlayer2", "TPlayer3", "TPlayer4", "TPlayer5"],
    "Players": ["Samuel McConaghy", "Alexander Galt", "Nicholas Szogi", "Ryan Pattemore", "Jasper Collier"],
    "Images": ["../Images/Players/SamM.png", "../Images/Players/Alex.png", "../Images/Players/Nicholas.jpeg", "../Images/Players/Ryan.png", "../Images/Players/Jasper.png"],
    "PartA": [0, 0],
    "PartB": [0, "N/A", 0, "N/A", 0, "N/A", 0, "N/A"],
    "PartC": [0, 0, 0, 0, 0, 0],
    "PartD": [0, 0, 0, 0, 0, 0],
    "Date": [],
    "Wins": [],
    "Losses": [],
    "Points": [],
    "TA": [],
    "TB": []
}

currentLocation = window.location
myKeyValues = currentLocation.search
urlParams = new URLSearchParams(myKeyValues)
SelectedTeam = urlParams.get("Team")
variable = []

if (SelectedTeam == "LG") {
    variable = LooseGooses
}

if (SelectedTeam == "WW") {
    variable = WetWillies
}

if (SelectedTeam == "5M") {
    variable = Musketeers
}

function RunMain() {
    for (i = 0; i < variable.VariablesPlayers.length; i++) {
        rowOne = document.getElementById("playersRow1")
        width = 100 / variable.VariablesPlayers.length
        rowOne.innerHTML = rowOne.innerHTML + "<td style='width: " + width + "%; cursor: pointer;'><img src='" + variable.Images[i] + "' class='playerImages'/></td>"
        rowTwo = document.getElementById("playersRow2")
        if (i == 0) {
            rowTwo.innerHTML = rowTwo.innerHTML + "<td style='width: " + width + "%; cursor: pointer;'><h3 class=' section-heading centered' id='playersText'>GM - " + variable.Players[i] + "</h3></td>"
        } else {
            rowTwo.innerHTML = rowTwo.innerHTML + "<td style='width: " + width + "%; cursor: pointer;'><h3 class=' section-heading centered' id='playersText'>" + variable.Players[i] + "</h3></td>"
        }

    }

    for (i = 0; i < document.getElementById("playersRow1").children.length; i++) {
        rowOne.children[i].onclick = function () { openStats(this) };
        rowOne.children[i].id = i
        rowTwo.children[i].onclick = function () { openStats(this) };
        rowTwo.children[i].id = i
    }
    console.log()
    document.getElementById("tWins").innerHTML = variable.PartA[0]
    document.getElementById("tLoss").innerHTML = variable.PartA[1]
    document.getElementById("tPercent").innerHTML = (Math.round(variable.PartA[0] / (variable.PartA[1] + variable.PartA[0]) * 1000)) / 10 + "%"
    document.getElementById("lPointsS").innerHTML = variable.PartB[0]
    document.getElementById("lPointsN").innerHTML = variable.PartB[1]
    document.getElementById("lFinishesS").innerHTML = variable.PartB[2]
    document.getElementById("lFinishesN").innerHTML = variable.PartB[3]
    document.getElementById("lMidrangesS").innerHTML = variable.PartB[4]
    document.getElementById("lMidrangesN").innerHTML = variable.PartB[5]
    document.getElementById("lThreesS").innerHTML = variable.PartB[6]
    document.getElementById("lThreesN").innerHTML = variable.PartB[7]
    document.getElementById("aPoints").innerHTML = variable.PartC[0]
    document.getElementById("aFinishes").innerHTML = variable.PartC[1]
    document.getElementById("aMidranges").innerHTML = variable.PartC[2]
    document.getElementById("aThrees").innerHTML = variable.PartC[3]
    document.getElementById("aWins").innerHTML = variable.PartC[4]
    document.getElementById("aLosses").innerHTML = variable.PartC[5]
    document.getElementById("AWins").innerHTML = variable.PartD[0]
    document.getElementById("ALoss").innerHTML = variable.PartD[1]
    document.getElementById("APercent").innerHTML = variable.PartD[2] + "%"
    document.getElementById("BWins").innerHTML = variable.PartD[3]
    document.getElementById("BLoss").innerHTML = variable.PartD[4]
    document.getElementById("BPercent").innerHTML = variable.PartD[5] + "%"
    document.getElementById("teamAsmall").innerHTML = variable.TeamsNames[2]
    document.getElementById("teamBsmall").innerHTML = variable.TeamsNames[3]
    document.getElementById("teamAbig").innerHTML = variable.TeamsNames[0]
    document.getElementById("teamBbig").innerHTML = variable.TeamsNames[1]
    document.getElementById("quoteLocation").innerHTML = variable.Quote[0]

    document.title = variable.TeamsNames[4] + " | LTBO"
    document.getElementById("name2").innerHTML = variable.TeamsNames[4]
    document.getElementById("name3").innerHTML = variable.TeamsNames[4]
    document.getElementById("name4").innerHTML = variable.TeamsNames[4]
    document.getElementById("name5").innerHTML = variable.TeamsNames[4]

    document.querySelector(':root').style.setProperty('--colour-a', variable.Colours[0]);
    document.querySelector(':root').style.setProperty('--colour-b', variable.Colours[1]);
    document.querySelector(':root').style.setProperty('--colour-c', variable.Colours[2]);
    document.querySelector(':root').style.setProperty('--colour-d', variable.Colours[3]);
    console.log(document.querySelector(':root').style)

    if (variable == LooseGooses) {
        document.getElementById("champions").style.display = "block"
    }


    table = document.getElementById("dayByDay")
    template = document.getElementsByTagName("template")[0];
    for (let i = 0; i < variable.Date.length; i++) {
        clone = template.content.cloneNode(true);
        clone.getElementById("Date").innerHTML = String(variable.Date[i])
        clone.getElementById("Wins").innerHTML = String(variable.Wins[i])
        clone.getElementById("Losses").innerHTML = String(variable.Losses[i])
        clone.getElementById("Points").innerHTML = String(variable.Points[i])
        clone.getElementById("TeamA").innerHTML = String(variable.TA[i])
        clone.getElementById("TeamB").innerHTML = String(variable.TB[i])
        table.appendChild(clone)
    }
}

RunMain()

function openStats(item) {
    if (variable == LooseGooses) {
        ourHref = 'Stats.html?Player=' + LooseGooses.Players[item.id]
    } else if (variable == WetWillies) {
        ourHref = 'Stats.html?Player=' + WetWillies.Players[item.id]
    } else {
        ourHref = 'Stats.html?Player=' + Musketeers.Players[item.id]
    }

    window.location.href = ourHref
}

function scaleImages() {
    if (document.getElementById("pTT").offsetWidth < window.innerWidth) {
        objects = document.getElementsByClassName("playerImages").length
        for (i = 0; i < objects; i++) {
            document.getElementsByClassName("playerImages")[i].style.width = (window.innerWidth / (objects * 1.7)) + "px"
        }
        document.getElementById("pTT").style.width = "100%"

    } else {
        objects = document.getElementsByClassName("playerImages").length
        for (i = 0; i < objects; i++) {
            document.getElementsByClassName("playerImages")[i].style.width = (window.innerWidth / objects * 2.5) + "px"
            
        }
        document.getElementById("pTT").style.width = (objects * 250) + "px"
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    scaleImages()

});

$(window).resize(function () {
    scaleImages()
});	