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