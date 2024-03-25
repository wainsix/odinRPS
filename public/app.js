let games = 1;
let wins = 0;

function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "KIVI";
  } else if (choice == 1) {
    return "PAPERI";
  } else {
    return "SAKSET";
  }
}

function getPlayerSelection(i) {
  let num = parseInt(i);
  if (num == 0) {
    return "KIVI";
  } else if (num == 1) {
    return "PAPERI";
  } else {
    return "SAKSET";
  }
}

function playRound(playerSelection, computerSelection) {
  document.getElementById("mid").innerHTML =
    "Peli " +
    games +
    "<br>" +
    "<br>" +
    playerSelection +
    "<br>" +
    " - vastaan - " +
    "<br>" +
    computerSelection;
  oikea = document.getElementById("right");
  oikea.removeAttribute("class");
  if (games < 5) {
    if (playerSelection == computerSelection) {
      oikea.innerHTML = "TASAPELI";
      oikea.classList.add("draw");
      games++;
    } else if (playerSelection == "KIVI" && computerSelection == "PAPERI") {
      oikea.innerHTML = "KONE VOITTI";
      oikea.classList.add("computerWin");
      games++;
    } else if (playerSelection == "KIVI" && computerSelection == "SAKSET") {
      oikea.innerHTML = "VOITIT!";
      oikea.classList.add("playerWin");
      games++;
      wins++;
    } else if (playerSelection == "PAPERI" && computerSelection == "KIVI") {
      oikea.innerHTML = "VOITIT!";
      oikea.classList.add("playerWin");
      games++;
      wins++;
    } else if (playerSelection == "PAPERI" && computerSelection == "SAKSET") {
      oikea.innerHTML = "KONE VOITTI";
      oikea.classList.add("computerWin");
      games++;
    } else if (playerSelection == "SAKSET" && computerSelection == "KIVI") {
      oikea.innerHTML = "KONE VOITTI";
      oikea.classList.add("computerWin");
      games++;
    } else {
      oikea.innerHTML = "VOITIT!";
      oikea.classList.add("playerWin");
      games++;
      wins++;
    }
  } else {
    oikea.innerHTML = "Peli loppui ja pisteesi olivat: " + wins;
    oikea.classList.add("gameEnd");
  }
}
const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
