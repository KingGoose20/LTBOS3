LooseGooses = {
    "TeamsNames": ["Wet Willies", "5 Musketeers", "WW", "5M", "Loose Gooses"],
    "Quote": ["Honk honk honk, honk honk"],
    "Colours": ["#d74268", "#f5b153", "#d48619", "#d74268"],
    "Players": ["Angus Walker", "William Kim", "Christopher Tomkinson", "Jasper Collier", "Conor Farrington"],
    "Images": ["../Images/Players/Angus.png", "../Images/Players/Kimmy.png", "../Images/Players/Christopher.png", "../Images/Players/Jasper.png", "../Images/Players/Conor.png"],
    "PartA":[45,18],
    "PartB":[19,"Angus Walker",10,"Angus Walker",5,"Angus Walker",2,"Angus Walker"],
    "PartC":[8.3,4.3,2.3,0.8,7.5,3],
    "PartD":[24,6,80,21,12,63.6],             
    "Date":["11-July","12-July","13-July","17-July","18-July","19-July","20-July","24-July","26-July"],
    "Wins":[5,9,8,8,12,15,3,1,6],
    "Losses":[6,8,2,3,1,0,4,5,5],
    "Points":[2,2,3,3,3,3,2,2,2],
    "TA":["William Kim","Angus Walker","Angus Walker","Angus Walker","Angus Walker","William Kim","Christopher Tomkinson, Angus Walker","William Kim","Angus Walker"],
    "TB":["William Kim, Christopher Tomkinson, Conor Farrington","Angus Walker, Christopher Tomkinson","Angus Walker","Angus Walker","Christopher Tomkinson, William Kim","Angus Walker","William Kim","N/A","Christopher Tomkinson, Conor Farrington"]
}
WetWillies = {
    "TeamsNames": ["Loose Gooses", "5 Musketeers", "LG", "5M", "Wet Willies"],
    "Quote": ["Screw Clarrie Jones, we like to eat little white boys."],
    "Colours": ["#e45e0b", "#8c3600", "#8c3600", "#ff690c"],
    "Players": ["Rudy Hoschke", "Michael Iffland", "Lukas Johnston", "Ryan Pattemore", "Will Weekes", "(OUT) Clarrie Jones", "Mitch Yue"],
    "Images": ["../Images/Players/Rudy.png", "../Images/Players/Michael.png", "../Images/Players/Lukas.png", "../Images/Players/Ryan.png", "../Images/Players/Willie.png", "../Images/Players/Clarrie.png", "../Images/Players/Mitch.png"],
    "PartA":[13,35],
    "PartB":[4,"Rudy Hoschke",4,"Rudy Hoschke",3,"Ryan Pattemore",0,"N/A"],
    "PartC":[2.2,1.2,1,0,2.2,5.8],
    "PartD":[6,24,20,7,11,38.9],              
    "Date":["11-July","12-July","13-July","17-July","18-July","19-July","20-July","24-July","26-July"],
    "Wins":[0,2,4,2,1,0,6,1,3],
    "Losses":[8,12,5,5,7,8,3,5,7],
    "Points":[1,1,2,1,1,1,3,1,1],
    "TA":["N/A","Lukas Johnston","Clarrie Jones, Michael Iffland","N/A","Ryan Pattemore","N/A","Ryan Pattemore, Rudy Hoschke, Lukas Johnston","N/A","Lukas Johnston, Rudy Hoschke"],
    "TB":["N/A","Ryan Pattemore","Michael Iffland, William Scott","Ryan Pattemore","N/A","N/A","Rudy Hoschke","Michael Iffland","Will Weekes"]
}

Musketeers = {
    "TeamsNames": ["Loose Gooses", "Wet Willies", "LG", "WW", "5 Musketeers"],
    "Quote": ["With Nick, we're the 6 Musketeers"],
    "Colours": ["#004045", "#004045", "#47aeb5", "#47aeb5"],
    "Players": ["Samuel McConaghy", "Alexander Galt", "Nicholas Szogi", "Sam James", "William Scott"],
    "Images": ["../Images/Players/SamM.png", "../Images/Players/Alex.png", "../Images/Players/Nicholas.png", "../Images/Players/SamJ.png", "../Images/Players/Will.png"],
    "PartA":[23,28],
    "PartB":[12,"Samuel McConaghy",7,"Alexander Galt",8,"Samuel McConaghy",1,"Samuel McConaghy"],
    "PartC":[4,2.2,1.5,0.2,3.8,4.7],
    "PartD":[12,21,36.4,11,7,61.1],          
    "Date":["11-July","12-July","13-July","17-July","18-July","19-July","20-July","24-July","26-July"],
    "Wins":[12,15,1,3,1,0,2,9,8],
    "Losses":[3,6,6,5,6,7,4,1,5],
    "Points":[3,3,1,2,2,2,1,3,3],
    "TA":["Alexander Galt","Alexander Galt","N/A","Samuel McConaghy","N/A","N/A","Samuel McConaghy","Alexander Galt","Alexander Galt"],
    "TB":["Samuel McConaghy","Samuel McConaghy","Nicholas Szogi","N/A","Samuel McConaghy","N/A","Samuel McConaghy","Sam James","Samuel McConaghy"]
}

markers = {
    "Location": [0, 3],
    "Text": ["Preseason", "Regular Season"]
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

if (SelectedTeam == "LTBO") {
    RunLTBO()
} else if (SelectedTeam != null) {
    RunMain()
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
    templateOther = document.getElementsByTagName("template")[1];
    for (let i = 0; i < variable.Date.length; i++) {
        for (x = 0; x < markers.Location.length; x++) {
            if (markers.Location[x] == i) {
                cloneOther = templateOther.content.cloneNode(true);
                cloneOther.getElementById("main").innerHTML = markers.Text[x]
                table.appendChild(cloneOther)
            }
        }
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








function RunLTBO() {
    document.getElementById("ttlGames").innerHTML = LooseGooses.PartA[0] + WetWillies.PartA[0] + Musketeers.PartA[0]
    firstWins = 0;
    firstLosses = 0;
    for (i = 0; i < LooseGooses.Wins.length; i++) {
        if (LooseGooses.Wins[i] > WetWillies.Wins[i] && LooseGooses.Wins[i] > Musketeers.Wins[i]) {
            firstWins += LooseGooses.Wins[i]
            firstLosses += LooseGooses.Losses[i]
        } else if (WetWillies.Wins[i] > Musketeers.Wins[i]) {
            firstWins += WetWillies.Wins[i]
            firstLosses += WetWillies.Losses[i]
        } else {
            firstWins += Musketeers.Wins[i]
            firstLosses += Musketeers.Losses[i]
        }
    }
    document.getElementById("firstWinPct").innerHTML = (Math.round(firstWins / (firstWins + firstLosses) * 1000)) / 10 + "%"

    thirdWins = 0;
    thirdLosses = 0;
    for (i = 0; i < LooseGooses.Wins.length; i++) {
        if (LooseGooses.Wins[i] < WetWillies.Wins[i] && LooseGooses.Wins[i] < Musketeers.Wins[i]) {
            thirdWins += LooseGooses.Wins[i]
            thirdLosses += LooseGooses.Losses[i]
        } else if (WetWillies.Wins[i] < Musketeers.Wins[i]) {
            thirdWins += WetWillies.Wins[i]
            thirdLosses += WetWillies.Losses[i]
        } else {
            thirdWins += Musketeers.Wins[i]
            thirdLosses += Musketeers.Losses[i]
        }
    }
    document.getElementById("thirdWinPct").innerHTML = (Math.round(thirdWins / (thirdWins + thirdLosses) * 1000)) / 10 + "%"

    id = ["lPoints", "lFinishes", "lMidranges", "lThrees"]
    for (i = 0; i < 4; i++) {
        if (WetWillies.PartB[2 * i] > Musketeers.PartB[2 * i] && WetWillies.PartB[2 * i] > LooseGooses.PartB[2 * i]) {
            document.getElementById(id[i] + "S").innerHTML = WetWillies.PartB[2 * i]
            document.getElementById(id[i] + "N").innerHTML = WetWillies.PartB[2 * i + 1]
        } else if (Musketeers.PartB[2 * i] > LooseGooses.PartB[2 * i]) {
            document.getElementById(id[i] + "S").innerHTML = Musketeers.PartB[2 * i]
            document.getElementById(id[i] + "N").innerHTML = Musketeers.PartB[2 * i + 1]
        } else {
            document.getElementById(id[i] + "S").innerHTML = LooseGooses.PartB[2 * i]
            document.getElementById(id[i] + "N").innerHTML = LooseGooses.PartB[2 * i + 1]
        }
    }

    document.getElementById("aPoints").innerHTML = (LooseGooses.PartC[0] + WetWillies.PartC[0] + Musketeers.PartC[0]).toFixed(1)
    document.getElementById("aFinishes").innerHTML = (LooseGooses.PartC[1] + WetWillies.PartC[1] + Musketeers.PartC[1]).toFixed(1)
    document.getElementById("aMidranges").innerHTML = (LooseGooses.PartC[2] + WetWillies.PartC[2] + Musketeers.PartC[2]).toFixed(1)
    document.getElementById("aThrees").innerHTML = (LooseGooses.PartC[3] + WetWillies.PartC[3] + Musketeers.PartC[3]).toFixed(1)
    document.getElementById("aGames").innerHTML = (LooseGooses.PartC[4] + WetWillies.PartC[4] + Musketeers.PartC[4]).toFixed(1)

    secondID = ["PPoints", "PFinishes", "PMidranges", "PThrees"]
    PPG = 0
    FPG = 0
    MPG = 0
    TPG = 0
    for (i = 0; i < mainArray.PPG.length; i++) {
        PPG += mainArray.PPG[i]
        FPG += mainArray.FPG[i]
        MPG += mainArray.MPG[i]
        TPG += mainArray.TPG[i]
    }

    document.getElementById("PPoints").innerHTML = Math.round((PPG / mainArray.PPG.length) * 100) / 100
    document.getElementById("PFinishes").innerHTML = Math.round((FPG / mainArray.FPG.length) * 100) / 100
    document.getElementById("PMidranges").innerHTML = Math.round((MPG / mainArray.MPG.length) * 100) / 100
    document.getElementById("PThrees").innerHTML = Math.round((TPG / mainArray.TPG.length) * 100) / 100
}






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
    console.log("resized")
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

if (SelectedTeam != null) {
    window.addEventListener('DOMContentLoaded', (event) => {
        scaleImages()

    });

    $(window).resize(function () {
        scaleImages()
    });
}

