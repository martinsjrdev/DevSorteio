const clickButton = document.querySelector(".button-footer");

function generateNumber() {
  const valueMin = Math.ceil(document.querySelector(".input-min").value);
  const valueMax = Math.ceil(document.querySelector(".input-max").value);
  const result = Math.floor(
    Math.random() * (valueMax - valueMin + 1) + valueMin
  );

  alert(`O número sorteado foi:  ${result}`);
}

clickButton.addEventListener("click", generateNumber);
