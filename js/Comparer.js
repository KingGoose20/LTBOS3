numberA = null
numberB = null

dataA = null
dataB = null
elementID = ["avgPoints", "avgFinishes", "avgMidranges", "avgThrees", "ttlPoints", "ttlFinishes", "ttlMidranges", "ttlThrees"]

let selectDiv = document.getElementById('changerA');
selectDiv.addEventListener('change', function (e) {

  switch (e.target.value) {
    case 'zero':
      number = 0
      break;
    case 'one':
      number = 1
      break;
    case 'two':
      number = 2
      break;
    case 'three':
      number = 3
      break;
    case 'four':
      number = 4
      break;
    case 'five':
      number = 5
      break;
    case 'six':
      number = 6
      break;
    case 'seven':
      number = 7
      break;
    case 'eight':
      number = 8
      break;
    case 'nine':
      number = 9
      break;
    case 'ten':
      number = 10
      break;
    case 'eleven':
      number = 11
      break;
    case 'twelve':
      number = 12
      break;
    case 'thirteen':
      number = 13
      break;
    case 'fourteen':
      number = 14
      break;
    case 'fifteen':
      number = 15
      break;
    case 'sixteen':
      number = 16
      break;
  }
  RunMain("A")
});

let selectDivTwo = document.getElementById('changerB');
selectDivTwo.addEventListener('change', function (e) {

  switch (e.target.value) {
    case 'zero':
      number = 0
      break;
    case 'one':
      number = 1
      break;
    case 'two':
      number = 2
      break;
    case 'three':
      number = 3
      break;
    case 'four':
      number = 4
      break;
    case 'five':
      number = 5
      break;
    case 'six':
      number = 6
      break;
    case 'seven':
      number = 7
      break;
    case 'eight':
      number = 8
      break;
    case 'nine':
      number = 9
      break;
    case 'ten':
      number = 10
      break;
    case 'eleven':
      number = 11
      break;
    case 'twelve':
      number = 12
      break;
    case 'thirteen':
      number = 13
      break;
    case 'fourteen':
      number = 14
      break;
    case 'fifteen':
      number = 15
      break;
    case 'sixteen':
      number = 16
      break;
  }
  RunMain("B")
});

function RunMain(option) {
  document.getElementById("avgPoints" + option).innerHTML = mainArray.PPG[number]
  document.getElementById("avgFinishes" + option).innerHTML = mainArray.FPG[number]
  document.getElementById("avgMidranges" + option).innerHTML = mainArray.MPG[number]
  document.getElementById("avgThrees" + option).innerHTML = mainArray.TPG[number]

  document.getElementById("ttlPoints" + option).innerHTML = mainArray.TP[number]
  document.getElementById("ttlFinishes" + option).innerHTML = mainArray.TF[number]
  document.getElementById("ttlMidranges" + option).innerHTML = mainArray.TM[number]
  document.getElementById("ttlThrees" + option).innerHTML = mainArray.TT[number]

  document.getElementById("accolade1" + option).innerHTML = mainArray.AccoladesOne[number]
  document.getElementById("accolade2" + option).innerHTML = mainArray.AccoladesTwo[number]
  document.getElementById("accolade3" + option).innerHTML = mainArray.AccoladesThree[number]
  document.getElementById("accolade4" + option).innerHTML = mainArray.AccoladesFour[number]
  document.getElementById("accolade5" + option).innerHTML = mainArray.AccoladesFive[number]
  document.getElementById("accolade6" + option).innerHTML = mainArray.AccoladesSix[number]
  document.getElementById("accolade7" + option).innerHTML = mainArray.AccoladesSeven[number]
  document.getElementById("accolade8" + option).innerHTML = mainArray.AccoladesEight[number]

  document.getElementById("history" + option).innerHTML = mainArray.History[number]

  if (option == "A") {
    dataA = [mainArray.PPG[number], mainArray.FPG[number], mainArray.MPG[number], mainArray.TPG[number], mainArray.TP[number], mainArray.TF[number], mainArray.TM[number], mainArray.TT[number]]
    numberA = number
  } else {
    dataB = [mainArray.PPG[number], mainArray.FPG[number], mainArray.MPG[number], mainArray.TPG[number], mainArray.TP[number], mainArray.TF[number], mainArray.TM[number], mainArray.TT[number]]
    numberB = number
  }

  if (dataA != null && dataB != null) {
    for (i = 0; i < dataA.length; i++) {
      if (dataA[i] > dataB[i]) {
        document.getElementById(elementID[i] + "A").style.color = "rgb(0, 150,0)"
        document.getElementById(elementID[i] + "B").style.color = "rgb(200, 0,0)"
      } else if (dataA[i] < dataB[i]) {
        document.getElementById(elementID[i] + "B").style.color = "rgb(0, 150,0)"
        document.getElementById(elementID[i] + "A").style.color = "rgb(200, 0,0)"
      } else {
        document.getElementById(elementID[i] + "B").style.color = "rgb(220, 160,0)"
        document.getElementById(elementID[i] + "A").style.color = "rgb(220, 160,0)"
      }
    }
  }

  table = document.getElementById("dayByDayTable")
  for (let i = (table.rows.length - 1); i > 0; i--) {
    table.deleteRow(i)
  }
  for (i = 0; i < dayArray.length; i++) {
    templateOther = document.getElementsByTagName("template")[1];
    for (x = 0; x < markers.Location.length; x++) {
      if (markers.Location[x] == i) {
        cloneOther = templateOther.content.cloneNode(true);
        cloneOther.getElementById("main").innerHTML = markers.Text[x]
        table.appendChild(cloneOther)
      } 
    }
    template = document.getElementsByTagName("template")[0];
    clone = template.content.cloneNode(true);
    if (numberA != null) {
      clone.getElementById("1").innerHTML = dayArray[i].Points[numberA]
      clone.getElementById("2").innerHTML = dayArray[i].Finishes[numberA]
      clone.getElementById("3").innerHTML = dayArray[i].Midrange[numberA]
      clone.getElementById("4").innerHTML = dayArray[i].ThreePointers[numberA]
    }
    if (numberB != null) {
      
      clone.getElementById("6").innerHTML = dayArray[i].Points[numberB]
      clone.getElementById("7").innerHTML = dayArray[i].Finishes[numberB]
      clone.getElementById("8").innerHTML = dayArray[i].Midrange[numberB]
      clone.getElementById("9").innerHTML = dayArray[i].ThreePointers[numberB]
    }
  clone.getElementById("5").innerHTML = dayArray[i].Date[0]

    document.getElementById("dayByDayTable").appendChild(clone)
  }

}


currentLocation = window.location
myKeyValues = currentLocation.search
urlParams = new URLSearchParams(myKeyValues)
SelectedPlayer = urlParams.get("Player")
Players = ["Jasper Collier", "Conor Farrington", "Alexander Galt", "Rudy Hoschke", "Michael Iffland", "Lukas Johnston", "Sam James",
  "Clarrie Jones", "William Kim", "Samuel McConaghy", "Ryan Pattemore", "William Scott", "Nicholas Szogi",
  "Christopher Tomkinson", "Angus Walker", "Will Weekes", "Mitch Yue"]

for (i = 0; i < Players.length; i++) {
  if (Players[i] == SelectedPlayer) {
    number = i
    window.location.href = '#main';
    RunMain()
  }
}