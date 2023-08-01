LooseGooses = ["Angus Walker", "William Kim", "Christopher Tomkinson", "Jasper Collier", "Conor Farrington"]
WetWillies = ["Rudy Hoschke", "Michael Iffland","Nicholas Szogi", "Ryan Pattemore", "Willie Weekes", "Clarrie Jones", "Mitch Yue"]
Musketeers = ["Samuel McConaghy", "Alexander Galt", "Lukas Johnston", "Sam James", "William Scott"]

aTeam = ""
bTeam = ""
cTeam = ""
gameNumber = 1
LGstreak = 0
WWstreak = 0
Mstreak = 0
Sstreak = 1
pastScorer = ""


function start() {
    aElement = document.getElementById("aTeam")
    bElement = document.getElementById("bTeam")
    if (aElement.options[aElement.selectedIndex].text == bElement.options[bElement.selectedIndex].text) {
        alert("Team A and B cannot be the same!");
        return
    }
    aElement.disabled = true;
    bElement.disabled = true;
    document.getElementById("startButton").disabled = true;

    switch (aElement.value) {
        case "zero" :
            aTeam = "Loose Gooses"
            break;
        case "one" :
            aTeam = "5 Musketeers"
            break;
        case "two" :
            aTeam = "Wet Willies"
            break;
    }

    switch (bElement.value) {
        case "three" :
            bTeam = "Loose Gooses"
            break;
        case "four" :
            bTeam = "5 Musketeers"
            break;
        case "five" :
            bTeam = "Wet Willies"
            break;
    }

    if (aTeam == "Loose Gooses" && bTeam == "Wet Willies") {
        cTeam = "5 Musketeers"
    } else if (aTeam == "Loose Gooses" && bTeam == "5 Musketeers") {
        cTeam = "Wet Willies"
    } else if (aTeam == "5 Musketeers" && bTeam == "Loose Gooses") {
        cTeam = "Wet Willies"
    } else if (aTeam == "5 Musketeers" && bTeam == "Wet Willies") {
        cTeam = "Loose Gooses"
    } else if (aTeam == "Wet Willies" && bTeam == "5 Musketeers") {
        cTeam = "Loose Gooses"
    } else {
        cTeam = "5 Musketeers"
    }

    assignPlayers(aTeam)

    assignPlayers(bTeam)
}



function assignPlayers(team) {
    select = document.getElementById("Scorer")
    if (team == "Loose Gooses") {
        for (i = 0; i<LooseGooses.length; i++){
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = LooseGooses[i];
            select.appendChild(opt);
        }
    } else if (team == "5 Musketeers") {
        for (i = 0; i<Musketeers.length; i++){
            var opt = document.createElement('option');
            opt.value = i + LooseGooses.length;
            opt.innerHTML = Musketeers[i];
            select.appendChild(opt);
        }
    } else {
        for (i = 0; i<WetWillies.length; i++){
            var opt = document.createElement('option');
            opt.value = i + (LooseGooses.length + Musketeers.length) ;
            opt.innerHTML = WetWillies[i];
            select.appendChild(opt);
        }
    }
}


function logDetails() {
    Scorer = document.getElementById("Scorer")
    Type = document.getElementById("Type")
    table = document.getElementById("loggedDetails");
    row = table.insertRow(-1);
    winner = ""
    loser = ""
    if (Scorer.options[Scorer.selectedIndex].value < LooseGooses.length) {
        winner = "Loose Gooses"
        LGstreak = range(LGstreak, 1, 1, 100)
        wStreak = LGstreak
    } else if (Scorer.options[Scorer.selectedIndex].value < (LooseGooses.length + Musketeers.length)) {
        winner = "5 Musketeers"
        Mstreak = range(Mstreak, 1, 1, 100)
        wStreak = Mstreak
    } else {
        winner = "Wet Willies"
        WWstreak = range(WWstreak, 1, 1, 100)
        wStreak = WWstreak
    }

    if (winner == aTeam) {
        loser = bTeam
    } else {
        loser = aTeam
    }

    if (loser == "Loose Gooses") {
        LGstreak = range(LGstreak, -1, -100, -1)
        lStreak = LGstreak * -1
    } else if (loser == "Wet Willies") {
        WWstreak = range(WWstreak, -1, -100, -1)
        lStreak = WWstreak * -1
    } else {
        Mstreak = range(Mstreak, -1, -100, -1)
        lStreak = Mstreak * -1
    }

    if (Scorer.options[Scorer.selectedIndex].text == pastScorer) {
        sStreak += 1
    } else {
        pastScorer = Scorer.options[Scorer.selectedIndex].text;
        sStreak = 1
    }

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = gameNumber;
    cell2.innerHTML = winner;
    cell3.innerHTML = loser;
    cell4.innerHTML = Scorer.options[Scorer.selectedIndex].text;
    cell5.innerHTML = Type.options[Type.selectedIndex].text;
    cell6.innerHTML = wStreak;
    cell7.innerHTML = lStreak;
    cell8.innerHTML = sStreak;
    gameNumber += 1;
    newTeams(winner)
    alert("Logged!")
}

function range(number, change, min, max) {
    number += change
    if (change < 0) {
        if (number > max) {
            number = max
        }
    } else {
        if (number < min) {
            number = min
        }
    }

    return number;
}




function newTeams(winner) {
    localA = aTeam
    localB = bTeam
    localC = cTeam

    if (winner == aTeam) {
        cTeam = bTeam
        bTeam = localC
    } else {
        cTeam = aTeam
        aTeam = bTeam
        bTeam = localC
    }

    for (i = document.getElementById("Scorer").length; i > 0; i--) {
        document.getElementById("Scorer").remove(i)
    }

    assignPlayers(aTeam)
    assignPlayers(bTeam)
}