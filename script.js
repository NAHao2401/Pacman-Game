document.getElementById("start-button").addEventListener("click", function () {
  const playerName = document.getElementById("player-name").value.trim();

  if (playerName === "") {
    alert("Vui lòng nhập tên của bạn!");
    return;
  }

  document.getElementById("start-screen").style.opacity = "0";
  document.getElementById("game-container").style.display = "block";

  setTimeout(() => {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-container").style.opacity = "1";
  }, 500);

  if (typeof startGame === "function") {
    startGame(playerName);
  }
});

document
  .getElementById("player-name")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("start-button").click();
    }
  });
