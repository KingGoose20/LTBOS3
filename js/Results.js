Today = {
  "Date": ["10 October"],
  "GameNumber":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  "Winner":["5 Musketeers","Wet Willies","5 Musketeers","5 Musketeers","Wet Willies","Wet Willies","Wet Willies","Wet Willies","Wet Willies","Wet Willies","5 Musketeers","Wet Willies","5 Musketeers","Wet Willies","5 Musketeers","5 Musketeers","5 Musketeers","5 Musketeers","5 Musketeers","5 Musketeers","5 Musketeers","5 Musketeers"],
  "Loser":["Wet Willies","5 Musketeers","Wet Willies","Wet Willies","5 Musketeers","5 Musketeers","5 Musketeers","5 Musketeers","5 Musketeers","5 Musketeers","Wet Willies","5 Musketeers","Wet Willies","5 Musketeers","Wet Willies","Wet Willies","Wet Willies","Wet Willies","Wet Willies","Wet Willies","Wet Willies","Wet Willies"],
  "Score":["3-0","1-3","4-1","5-1","2-5","3-5","4-5","5-5","6-5","7-5","6-7","8-6","7-8","9-7","8-9","9-9","11-9","12-9","13-9","14-9","15-9","16-9"],
  "Scorer":["Alexander Galt","Rudy Hoschke","Alexander Galt","Lukas Johnston","Rudy Hoschke","Rudy Hoschke","Nicholas Szogi","Rudy Hoschke","Michael Iffland","Clarrie Jones","Alexander Galt","Michael Iffland","Alexander Galt","Michael Iffland","Alexander Galt","Alexander Galt","Samuel McConaghy","Alexander Galt","Samuel McConaghy","Lukas Johnston","Lukas Johnston","Lukas Johnston"],
  "Type":["Finish","Finish","Finish","Finish","Finish","Finish","Finish","Midrange","Finish","Midrange","Finish","Midrange","Finish","Midrange","Finish","Finish","Three Pointer","Finish","Midrange","Midrange","Finish","Midrange"],
  "WStreak":["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","1"],
  "LStreak":["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","1"],
  "SStreak":[1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,3]
}

Override = false
OverrideOrder = ["LG", "5M", "WW"]
overRideDate = "Play-In Game"
overrideW = ""
overrideL = ""
overrideDayPoints = [0,0,0]






function ladder() {
  /* Goes LG, WW, 5M */
  LadderPoints = [LooseGooses.PartA[2], WetWillies.PartA[2], Musketeers.PartA[2]]
  DaysPlayed = (LadderPoints[0] + LadderPoints[1] + LadderPoints[2]) / 6
  LooseGoosesPlayers = []
  WetWilliesPlayers = []
  MusketeersPlayers = []
  for (i = 0; i < LooseGooses.Players.length; i++) {
    LooseGoosesPlayers.push(LooseGooses.Players[i])
  }
  for (i = 0; i < WetWillies.Players.length; i++) {
    WetWilliesPlayers.push(WetWillies.Players[i])
  }
  for (i = 0; i < Musketeers.Players.length; i++) {
    MusketeersPlayers.push(Musketeers.Players[i])
  }
  Leaders = [LooseGooses.PartB[1], WetWillies.PartB[1], Musketeers.PartB[1]]
  LeadersPoints = [(LooseGooses.PartB[0] / DaysPlayed).toFixed(2), (WetWillies.PartB[0] / DaysPlayed).toFixed(2), (Musketeers.PartB[0] / DaysPlayed).toFixed(2)]
  if (Override == false) {
    LG = false
    WW = false
    MM = false
    if ((LadderPoints[0] > LadderPoints[1]) && (LadderPoints[0] > LadderPoints[2])) {
      document.getElementById("firstName").innerHTML = "Loose Gooses";
      document.getElementById("firstPoints").innerHTML = LadderPoints[0];
      document.getElementById("firstImagea").src = "../Images/LG_Final.png"
      document.getElementById("firstImageb").src = "../Images/LG_Final.png"
      document.getElementById("firstLeader").innerHTML = Leaders[0]
      if (LeadersPoints[0] == 1) {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " point")
      } else {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " points")
      }
      leader = LadderPoints[0]
      LG = true
      AddData(LooseGoosesPlayers, "teamLista")
    } else if ((LadderPoints[1] > LadderPoints[2]) && (LadderPoints[1] > LadderPoints[0])) {
      document.getElementById("firstName").innerHTML = "Wet Willies";
      document.getElementById("firstPoints").innerHTML = LadderPoints[1];
      document.getElementById("firstImagea").src = "../Images/WW_Final.png"
      document.getElementById("firstImageb").src = "../Images/WW_Final.png"
      document.getElementById("firstLeader").innerHTML = Leaders[1]
      if (LeadersPoints[1] == 1) {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " point")
      } else {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " points")
        console.log(LeadersPoints[1] + " points")
      }
      leader = LadderPoints[1]
      WW = true
      AddData(WetWilliesPlayers, "teamLista")
    } else {
      document.getElementById("firstName").innerHTML = "5 Musketeers";
      document.getElementById("firstPoints").innerHTML = LadderPoints[2];
      document.getElementById("firstImagea").src = "../Images/5M_Final.png"
      document.getElementById("firstImageb").src = "../Images/5M_Final.png"
      document.getElementById("firstLeader").innerHTML = Leaders[2]
      if (LeadersPoints[2] == 1) {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " point")
      } else {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " points")
        console.log(DaysPlayed)
      }
      leader = LadderPoints[2]
      MM = true
      AddData(MusketeersPlayers, "teamLista")
    }






    if (((LadderPoints[0] > LadderPoints[1]) || (LadderPoints[0] > LadderPoints[2])) && LG != true) {
      document.getElementById("secondName").innerHTML = "Loose Gooses";
      document.getElementById("secondPoints").innerHTML = LadderPoints[0];
      document.getElementById("secondImagea").src = "../Images/LG_Final.png"
      document.getElementById("secondImageb").src = "../Images/LG_Final.png"
      document.getElementById("secondLeader").innerHTML = Leaders[0]
      if (LeadersPoints[0] == 1) {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " point")
      } else {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " points")
      }
      LG = true
      AddData(LooseGoosesPlayers, "teamListb")
    } else if (((LadderPoints[1] > LadderPoints[2]) || (LadderPoints[1] > LadderPoints[0])) && WW != true) {
      document.getElementById("secondName").innerHTML = "Wet Willies";
      document.getElementById("secondPoints").innerHTML = LadderPoints[1];
      document.getElementById("secondImagea").src = "../Images/WW_Final.png"
      document.getElementById("secondImageb").src = "../Images/WW_Final.png"
      document.getElementById("secondLeader").innerHTML = Leaders[1]
      if (LeadersPoints[1] == 1) {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " point")
      } else {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " points")
      }
      WW = true
      AddData(WetWilliesPlayers, "teamListb")
    } else {
      document.getElementById("secondName").innerHTML = "5 Musketeers";
      document.getElementById("secondPoints").innerHTML = LadderPoints[2];
      document.getElementById("secondImagea").src = "../Images/5M_Final.png"
      document.getElementById("secondImageb").src = "../Images/5M_Final.png"
      document.getElementById("secondLeader").innerHTML = Leaders[2]
      if (LeadersPoints[2] == 1) {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " point")
      } else {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " points")
      }
      MM = true
      AddData(MusketeersPlayers, "teamListb")
    }






    if (LG == false) {
      document.getElementById("thirdName").innerHTML = "Loose Gooses";
      document.getElementById("thirdPoints").innerHTML = LadderPoints[0];
      document.getElementById("thirdImagea").src = "../Images/LG_Final.png"
      document.getElementById("thirdImageb").src = "../Images/LG_Final.png"
      document.getElementById("thirdLeader").innerHTML = Leaders[0]
      if (LeadersPoints[0] == 1) {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " point")
      } else {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " points")
      }
      AddData(LooseGoosesPlayers, "teamListc")
    } else if (WW == false) {
      document.getElementById("thirdName").innerHTML = "Wet Willies";
      document.getElementById("thirdPoints").innerHTML = LadderPoints[1];
      document.getElementById("thirdImagea").src = "../Images/WW_Final.png"
      document.getElementById("thirdImageb").src = "../Images/WW_Final.png"
      document.getElementById("thirdLeader").innerHTML = Leaders[1]
      if (LeadersPoints[1] == 1) {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " point")
      } else {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " points")
      }
      AddData(WetWilliesPlayers, "teamListc")
    } else {
      document.getElementById("thirdName").innerHTML = "5 Musketeers";
      document.getElementById("thirdPoints").innerHTML = LadderPoints[2];
      document.getElementById("thirdImagea").src = "../Images/5M_Final.png"
      document.getElementById("thirdImageb").src = "../Images/5M_Final.png"
      document.getElementById("thirdLeader").innerHTML = Leaders[2]
      if (LeadersPoints[2] == 1) {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " point")
      } else {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " points")
      }
      AddData(MusketeersPlayers, "teamListc")
    }









  } else {
    for (i = 0; i < OverrideOrder.length; i++) {
      if (i == 0) {
        if (OverrideOrder[i] == "LG") {
          document.getElementById("firstName").innerHTML = "Loose Gooses";
          document.getElementById("firstPoints").innerHTML = LadderPoints[0];
          document.getElementById("firstImagea").src = "../Images/LG_Final.png"
          document.getElementById("firstImageb").src = "../Images/LG_Final.png"
          document.getElementById("firstLeader").innerHTML = Leaders[0]
          if (LeadersPoints[0] == 1) {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " point")
          } else {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " points")
          }
          leader = LadderPoints[0]
          LG = true
          AddData(LooseGoosesPlayers, "teamLista")
        } else if (OverrideOrder[i] == "WW") {
          document.getElementById("firstName").innerHTML = "Wet Willies";
          document.getElementById("firstPoints").innerHTML = LadderPoints[1];
          document.getElementById("firstImagea").src = "../Images/WW_Final.png"
          document.getElementById("firstImageb").src = "../Images/WW_Final.png"
          document.getElementById("firstLeader").innerHTML = Leaders[1]
          if (LeadersPoints[1] == 1) {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " point")
          } else {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " points")
          }
          leader = LadderPoints[1]
          WW = true
          AddData(WetWillies, "teamLista")
        } else {
          document.getElementById("firstName").innerHTML = "5 Musketeers";
          document.getElementById("firstPoints").innerHTML = LadderPoints[2];
          document.getElementById("firstImagea").src = "../Images/5M_Final.png"
          document.getElementById("firstImageb").src = "../Images/5M_Final.png"
          document.getElementById("firstLeader").innerHTML = Leaders[2]
          if (LeadersPoints[2] == 1) {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " point")
          } else {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " points")
          }
          leader = LadderPoints[2]
          MM = true
          AddData(MusketeersPlayers, "teamLista")
        }
      }
      else if (i == 1) {
        if (OverrideOrder[i] == "LG") {
          document.getElementById("secondName").innerHTML = "Loose Gooses";
          document.getElementById("secondPoints").innerHTML = LadderPoints[0];
          document.getElementById("secondImagea").src = "../Images/LG_Final.png"
          document.getElementById("secondImageb").src = "../Images/LG_Final.png"
          document.getElementById("secondLeader").innerHTML = Leaders[0]
          if (LeadersPoints[0] == 1) {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " point")
          } else {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " points")
          }
          AddData(LooseGoosesPlayers, "teamListb")
        } else if (OverrideOrder[i] == "WW") {
          document.getElementById("secondName").innerHTML = "Wet Willies";
          document.getElementById("secondPoints").innerHTML = LadderPoints[1];
          document.getElementById("secondImagea").src = "../Images/WW_Final.png"
          document.getElementById("secondImageb").src = "../Images/WW_Final.png"
          document.getElementById("secondLeader").innerHTML = Leaders[1]
          if (LeadersPoints[1] == 1) {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " point")
          } else {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " points")
          }
          AddData(WetWilliesPlayers, "teamListb")
        } else {
          document.getElementById("secondName").innerHTML = "5 Musketeers";
          document.getElementById("secondPoints").innerHTML = LadderPoints[2];
          document.getElementById("secondImagea").src = "../Images/5M_Final.png"
          document.getElementById("secondImageb").src = "../Images/5M_Final.png"
          document.getElementById("secondLeader").innerHTML = Leaders[2]
          if (LeadersPoints[2] == 1) {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " point")
          } else {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " points")
          }
          AddData(MusketeersPlayers, "teamListb")
        }
      }
      else {
        if (OverrideOrder[i] == "LG") {
          document.getElementById("thirdName").innerHTML = "Loose Gooses";
          document.getElementById("thirdPoints").innerHTML = LadderPoints[0];
          document.getElementById("thirdImagea").src = "../Images/LG_Final.png"
          document.getElementById("thirdImageb").src = "../Images/LG_Final.png"
          document.getElementById("thirdLeader").innerHTML = Leaders[0]
          if (LeadersPoints[0] == 1) {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " point")
          } else {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " points")
          }
          AddData(LooseGoosesPlayers, "teamListc")
        } else if (OverrideOrder[i] == "WW") {
          document.getElementById("thirdName").innerHTML = "Wet Willies";
          document.getElementById("thirdPoints").innerHTML = LadderPoints[1];
          document.getElementById("thirdImagea").src = "../Images/WW_Final.png"
          document.getElementById("thirdImageb").src = "../Images/WW_Final.png"
          document.getElementById("thirdLeader").innerHTML = Leaders[1]
          if (LeadersPoints[1] == 1) {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " point")
          } else {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " points")
          }
          AddData(WetWilliesPlayers, "teamListc")
        } else {
          document.getElementById("thirdName").innerHTML = "5 Musketeers";
          document.getElementById("thirdPoints").innerHTML = LadderPoints[2];
          document.getElementById("thirdImagea").src = "../Images/5M_Final.png"
          document.getElementById("thirdImageb").src = "../Images/5M_Final.png"
          document.getElementById("thirdLeader").innerHTML = Leaders[2]
          if (LeadersPoints[2] == 1) {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " point")
          } else {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " points")
          }
          AddData(MusketeersPlayers, "teamListc")
        }
      }
    }
  }

  document.getElementById("firstText").title = "Click on me to see " + document.getElementById("firstLeader").innerHTML + "'s stats!"
  document.getElementById("firstText").style.cursor = "pointer"
  document.getElementById("firstText").onclick = function () { window.location.href = 'Stats.html?Player=' + document.getElementById("firstLeader").innerHTML; };

  document.getElementById("secondText").title = "Click on me to see " + document.getElementById("secondLeader").innerHTML + "'s stats!"
  document.getElementById("secondText").style.cursor = "pointer"
  document.getElementById("secondText").onclick = function () { window.location.href = 'Stats.html?Player=' + document.getElementById("secondLeader").innerHTML; };

  document.getElementById("thirdText").title = "Click on me to see " + document.getElementById("thirdLeader").innerHTML + "'s stats!"
  document.getElementById("thirdText").style.cursor = "pointer"
  document.getElementById("thirdText").onclick = function () { window.location.href = 'Stats.html?Player=' + document.getElementById("thirdLeader").innerHTML; };
}





players = ["Jasper Collier", "Conor Farrington", "Alexander Galt", "Rudy Hoschke",
  "Michael Iffland", "Lukas Johnston", "Sam James", "Clarrie Jones", "William Kim",
  "Samuel McConaghy", "Ryan Pattemore", "William Scott", "Nicholas Szogi", "Christopher Tomkinson",
  "Angus Walker", "Willie Weekes", "Mitch Yue"
]



function results() {
  console.log("ran")
  DidNotPlay = []
  for (i = 0; i < mainArray.Name.length; i++) {
    if (dayArray[dayArray.length - 1].Points[i] == "Did not Play") {
      DidNotPlay.push(mainArray.Name[i])
    }
  }
  LGwins = 0
  WWwins = 0
  Mwins = 0
  LGloss = 0
  WWloss = 0
  Mloss = 0

  for (i = 0; i < Today.Winner.length; i++) {
    if (Today.Winner[i] == "Loose Gooses") {
      LGwins += 1
    } else if (Today.Winner[i] == "Wet Willies") {
      WWwins += 1
    } else {
      Mwins += 1
    }
  }

  for (i = 0; i < Today.Loser.length; i++) {
    if (Today.Loser[i] == "Loose Gooses") {
      LGloss += 1
    } else if (Today.Loser[i] == "Wet Willies") {
      WWloss += 1
    } else {
      Mloss += 1
    }
  }

  document.getElementById("LGrecord").innerHTML = LGwins + " - " + LGloss + " <strong>(" + (Math.round(LGwins / (LGwins + LGloss) * 1000) / 10) + "%)</strong>"
  document.getElementById("WWrecord").innerHTML = WWwins + " - " + WWloss + " <strong>(" + (Math.round(WWwins / (WWwins + WWloss) * 1000) / 10) + "%)</strong>"
  document.getElementById("5Mrecord").innerHTML = Mwins + " - " + Mloss + " <strong>(" + (Math.round(Mwins / (Mwins + Mloss) * 1000) / 10) + "%)</strong>"
  document.getElementById("LGpoints").innerHTML = "<strong>2</strong> points"
  document.getElementById("WWpoints").innerHTML = "<strong>2</strong> points"
  document.getElementById("5Mpoints").innerHTML = "<strong>2</strong> points"

  if ((LGwins / LGloss) > (WWwins / WWloss) && (LGwins / LGloss) > (Mwins / Mloss)) {
    document.getElementById("winning").innerHTML = "Loose Gooses";
    document.getElementById("LGpoints").innerHTML = "<strong>3</strong> points"
  } else if ((WWwins / WWloss) > (LGwins / LGloss) && (WWwins / WWloss) > (Mwins / Mloss)) {
    document.getElementById("winning").innerHTML = "Wet Willies";
    document.getElementById("WWpoints").innerHTML = "<strong>3</strong> points"
  } else {
    document.getElementById("winning").innerHTML = "5 Musketeers";
    document.getElementById("5Mpoints").innerHTML = "<strong>3</strong> points"
  }

  if ((LGwins / LGloss) < (WWwins / WWloss) && (LGwins / LGloss) < (Mwins / Mloss)) {
    document.getElementById("losing").innerHTML = "Loose Gooses";
    document.getElementById("LGpoints").innerHTML = "<strong>1</strong> point"
  } else if ((WWwins / WWloss) < (LGwins / LGloss) && (WWwins / WWloss) < (Mwins / Mloss)) {
    document.getElementById("losing").innerHTML = "Wet Willies";
    document.getElementById("WWpoints").innerHTML = "<strong>1</strong> point"
  } else {
    document.getElementById("losing").innerHTML = "5 Musketeers";
    document.getElementById("5Mpoints").innerHTML = "<strong>1</strong> point"
  }

  if (overrideDayPoints.length != 0) {
    document.getElementById("LGpoints").innerHTML = "<strong>" + overrideDayPoints[0] + "</strong> points"
    document.getElementById("WWpoints").innerHTML = "<strong>" + overrideDayPoints[1] + "</strong> points"
    document.getElementById("5Mpoints").innerHTML = "<strong>" + overrideDayPoints[2] + "</strong> points"
  }
  if (overrideW != "") {
    document.getElementById("winning").innerHTML = overrideW;
  }

  if (overrideL != "") {
    document.getElementById("losing").innerHTML = overrideL;
  }

  table = document.getElementById("mainTable");
  boxtable = document.getElementById("scoringTable")

  for (i = 0; i < Today.Winner.length; i++) {
    row = table.insertRow(-1);
    row.onclick = function () { openStatsLadder(this); };
    row.id = i
    row.title = "Click on me to see " + Today.Scorer[i] + "'s stats!"
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);

    cell1.innerHTML = Today.GameNumber[i]
    cell2.innerHTML = Today.Winner[i];
    cell3.innerHTML = Today.Loser[i];
    cell4.innerHTML = Today.Score[i];
    cell5.innerHTML = Today.Scorer[i];
    cell6.innerHTML = Today.Type[i];
    cell7.innerHTML = Today.WStreak[i];
    cell8.innerHTML = Today.LStreak[i];
    cell9.innerHTML = Today.SStreak[i];
  }

  for (x = 0; x < players.length; x++) {
    finishes = 0
    midrange = 0
    threes = 0

    for (i = 0; i < Today.Winner.length; i++) {
      if (Today.Scorer[i] == players[x]) {
        if (Today.Type[i] == "Finish") {
          finishes += 1
        } else if (Today.Type[i] == "Midrange") {
          midrange += 1
        } else {
          threes += 1
        }
      }
    }

    row = boxtable.insertRow(-1);
    ourHref = 'Stats.html?Player=' + players[x]
    row.onclick = function () { openStats(this); };
    row.id = x
    row.classList.add("boxScore")
    row.title = "Click on me to see " + players[x] + "'s stats!"
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = players[x];
    dnp = false
    for (i = 0; i < DidNotPlay.length; i++) {
      if (DidNotPlay[i] == players[x]) {
        dnp = true
      }
    }
    if (dnp) {
      cell2.innerHTML = "DNP"
      cell3.innerHTML = "DNP"
      cell4.innerHTML = "DNP"
      cell5.innerHTML = "DNP"
    } else {
      cell2.innerHTML = boldNumber((finishes + midrange + (2 * threes)));
      cell3.innerHTML = boldNumber(finishes);
      cell4.innerHTML = boldNumber(midrange);
      cell5.innerHTML = boldNumber(threes);
    }

  }



}





function asOf() {
  if (overRideDate == "") {
    x = document.getElementById("asOf");
    extra = "th"
    dateNumber = Number(Today.Date[0].slice(0, 2))
    dateMonth = Today.Date[0].slice(getlength(dateNumber) + 1)

    if (dateNumber == 1 || dateNumber == 21 || dateNumber == 31) {
      extra = "st"
    } else if (dateNumber == 2 || dateNumber == 22) {
      extra = "nd"
    } else if (dateNumber == 3 || dateNumber == 23) {
      extra = "rd"
    }

    x.innerHTML = dateNumber + extra + " of " + dateMonth
  } else {
    x = document.getElementById("asOf");
    x.innerHTML = overRideDate
  }

}

function getlength(number) {
  return number.toString().length;
}

function boldNumber(number) {
  if (number != 0) {
    return ("<span class='boldNumber'>" + number + "</span>")
  } else {
    return (number)
  }
}



function AddData(array, elementID) {
  for (y = 0; y < array.length; y++) {
    element = document.createElement("p")
    if (y == 0) {
      element.innerHTML = "<strong>GM - " + array[y] + "</strong>"
    } else {
      element.innerHTML = array[y]
    }
    element.id = players.indexOf(array[y])
    element.onclick = function () { openStats(this); };
    element.style.cursor = "pointer"
    document.getElementById(elementID).appendChild(element)
  }
}

function openStats(item) {
  ourHref = 'Stats.html?Player=' + players[item.id]
  window.location.href = ourHref
}

function openStatsLadder(item) {
  ourHref = 'Stats.html?Player=' + Today.Scorer[item.id]
  window.location.href = ourHref
}
