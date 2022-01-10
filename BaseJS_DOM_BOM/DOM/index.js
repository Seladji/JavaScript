//SELECTEURS
// document.querySelector("h4").style.background = "yellow";

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.add("question-clicked"); //ajouter un effet depuis le fichier style de css qui s'appel "question-clicked"
  //   questionContainer.classList.remove("question-clicked"); // effacer le style de la classe CSS
  // questionContainer.classList.add("question-clicked"); // quand tu clique a chaque fois modifie et revenir sur l'ancien style
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

/* <div> > #id > .class > baliseHTML */

//--------------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemouve");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//---------------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + "Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (e.key === "z") ring(e.key);
});

//-------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//--------------------------------------------------
//  form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";
inputName.addEventListener("input", (e) => {
  pseudo = e.target.value; //recuperer chaque evenement dans l'input
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // annle le rechargement du page

  if (cgv.checked) {
    // innerHTML ajoute le code html
    // textContent aout le code avec des balises
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage préféré : ${language}</h4>
      `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//------------------------------------------------
//Load event
window.addEventListener("load", () => {
  // chargement lent lorsque tous les element chargent
  console.log("Document charger");
});

//-------------------------------------------------
//ForEach
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//-------------------------------------------------

// addEventListner Vs onclick
// document.body.onclick = function () {
//   console.log("click");
// };
document.body.addEventListener("click", () => {
  console.log("click 1 !");
});
//usecapture  c'est pour passer cette evenement en premier
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

//stop propagation
questionContainer.addEventListener("click", (e) => {
  alert("Test !");
  //e.stopPropagation();
});
