LooseGooses = {
    "TeamsNames": ["Wet Willies", "5 Musketeers", "WW", "5M", "Loose Gooses"],
    "Quote": ["Honk honk honk, honk honk"],
    "Colours": ["#d74268", "#f5b153", "#d48619", "#d74268"],
    "Players": ["Angus Walker", "William Kim", "Christopher Tomkinson", "Jasper Collier", "Conor Farrington"],
    "Images": ["../Images/Players/Angus.png", "../Images/Players/Kimmy.png", "../Images/Players/Christopher.png", "../Images/Players/Jasper.png", "../Images/Players/Conor.png"],
    "PartA":[22,16],
    "PartB":[12,"Angus Walker",6,"Angus Walker",2,"Angus Walker",2,"Angus Walker"],
    "PartC":[8.7,3.7,2.3,1.3,7.3,5.3],
    "PartD":[10,3,76.9,12,13,48],       
    "Date":["11-July","12-July","13-July"],
    "Wins":[5,9,8],
    "Losses":[6,8,2],
    "Points":[2,2,3],
    "TA":["William Kim","Angus Walker","Angus Walker"],
    "TB":["William Kim, Christopher Tomkinson, Conor Farrington","Angus Walker, Christopher Tomkinson","Angus Walker"]
}

WetWillies = {
    "TeamsNames": ["Loose Gooses", "5 Musketeers", "LG", "5M", "Wet Willies"],
    "Quote": ["Screw Clarrie Jones, we like to eat little white boys."],
    "Colours": ["#e45e0b", "#8c3600", "#8c3600", "#ff690c"],
    "Players": ["Rudy Hoschke", "Michael Iffland", "Lukas Johnston", "Ryan Pattemore", "Will Weekes", "(OUT) Clarrie Jones", "William Scott"],
    "Images": ["../Images/Players/Rudy.png", "../Images/Players/Michael.png", "../Images/Players/Lukas.png", "../Images/Players/Ryan.png", "../Images/Players/Willie.png", "../Images/Players/Clarrie.png", "../Images/Players/Will.png"],
    "PartA":[6,25],
    "PartB":[3,"Michael Iffland",1,"Lukas Johnston",1,"Michael Iffland",1,"Michael Iffland"],
    "PartC":[3,0.7,0.3,1,2,8.3],
    "PartD":[3,10,23.1,2,15,11.8],     
    "Date":["11-July","12-July","13-July"],
    "Wins":[0,2,4],
    "Losses":[8,12,5],
    "Points":[1,1,2],
    "TA":["N/A","Lukas Johnston","Clarrie Jones, Michael Iffland"],
    "TB":["N/A","Ryan Pattemore","Michael Iffland, William Scott"]
}

Musketeers = {
    "TeamsNames": ["Loose Gooses", "Wet Willies", "LG", "WW", "5 Musketeers"],
    "Quote": ["With Nick, we're the 6 Musketeers"],
    "Colours": ["#004045", "#004045", "#47aeb5", "#47aeb5"],
    "Players": ["Samuel McConaghy", "Alexander Galt", "Nicholas Szogi", "Sam James", "Mitch Yue"],
    "Images": ["../Images/Players/SamM.png", "../Images/Players/Alex.png", "../Images/Players/Nicholas.png", "../Images/Players/SamJ.png", "../Images/Players/Mitch.png"],
    "PartA":[28,14],
    "PartB":[12,"Samuel McConaghy",10,"Alexander Galt",9,"Samuel McConaghy",1,"Samuel McConaghy"],
    "PartC":[10.3,5,3.3,1,9.3,4.7],
    "PartD":[13,12,52,15,2,88.2],        
    "Date":["11-July","12-July","13-July"],
    "Wins":[12,15,1],
    "Losses":[3,5,6],
    "Points":[3,3,1],
    "TA":["Alexander Galt","Alexander Galt","N/A"],
    "TB":["Samuel McConaghy","Samuel McConaghy","Nicholas Szogi"]
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
    for (i = 0; i < variable.Players.length; i++) {
        rowOne = document.getElementById("playersRow1")
        width = 100 / variable.Players.length
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