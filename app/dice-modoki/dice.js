function shake_dice() {
  const result = document.getElementById("result");
  let num = Math.floor(1 + Math.random() * 6);
  result.textContent = num;
}

function reset_dice() {
  const result = document.getElementById("result");
  const num = 0;
  result.textContent = num;
}