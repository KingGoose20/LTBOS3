var myVid = document.getElementById("backgroundVideo");
  switch (Math.floor(Math.random() * 5)) {
  case 0:
    myVid.poster = "Images/Poster/Decider Game.png"
    myVid.src = "Videos/Decider Game.mp4"
    break;
  case 1:
    myVid.poster = "Images/Poster/Part 1.png"
    myVid.src = "Videos/Part 1.mp4"
    break;
  case 2:
    myVid.poster = "Images/Poster/Part 2.png"
    myVid.src = "Videos/Part 2.mp4"
    break;
  case 3:
    myVid.poster = "Images/Poster/Part 3.png"
    myVid.src = "Videos/Part 3.mp4"
    break;
  case 4:
    myVid.poster = "Images/Poster/Part 4.png"
    myVid.src = "Videos/Part 4.mp4"
}
