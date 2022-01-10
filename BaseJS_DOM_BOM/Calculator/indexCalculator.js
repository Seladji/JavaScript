const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
// affiche les bouttons sur l'ecrant
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});
//equal
equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent); //eval calcule tous ce qui est a l'interieur
});
//clear
clear.addEventListener("click", () => {
  result.textContent = "";
});
