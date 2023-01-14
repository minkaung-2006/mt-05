// window.addEventListener("scroll", function () {
//   let header = this.document.querySelector("header");
//   header.classList.toggle("sticky", this.window.scrollY > 0);
// });

window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 10);
});

// loading

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

function showPwL() {
  const p = document.getElementById("password");
  const s = document.getElementById("show");
  const h = document.getElementById("hide");

  if (p.type === "password") {
    p.type = "text";
    s.style.display = "block";
    h.style.display = "none";
  } else {
    p.type = "password";
    s.style.display = "none";
    h.style.display = "block";
  }
}

function showPwS() {
  const ps = document.getElementById("passwordS");
  const ss = document.getElementById("showS");
  const hs = document.getElementById("hideS");

  if (ps.type === "password") {
    ps.type = "text";
    ss.style.display = "block";
    hs.style.display = "none";
  } else {
    ps.type = "password";
    ss.style.display = "none";
    hs.style.display = "block";
  }
}

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1500,
  delay: 0,
});

ScrollReveal().reveal(".cardRec", { delay: 0, origin: "left" });

ScrollReveal().reveal(".contentcard1", {
  delay: 200,
  origin: "bottom",
  interval: 200,
});

document
  .getElementById("themeSwitch")
  .addEventListener("change", function (event) {
    event.target.checked
      ? document.body.setAttribute("data-theme", "dark")
      : document.body.removeAttribute("data-theme");
  });

// const body = document.querySelector("body"),
//   navbar = body.querySelector("nav"),
//   card = body.querySelector(".card"),
//   cardheader = body.querySelector(".cardheader"),
//   modeSwitch = body.querySelector("#flexSwitchCheckDefault");

// function modeSwitch() {
//   if (onclick) {
//     body.style.backgroundColor = "#18191A";
//     card.style.backgroundColor = "#18191A";
//   }
// }

// const cities = document.querySelector("#cities");
// const transport = document.querySelector("#transport");
// const plan = document.querySelector("#plan");
// const poeple = document.querySelector("#poeple");
// const book = document.querySelector("#book");
// const ticket = document.querySelector("#ticket");

// calc.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const result = cities.innerText + transport.innerText + plan.innerText + poeple;
//   ticket.innerText = result;
// });

// clear.addEventListener("click", function () {
//   result.innerText = null;

//   calc.reset();
// });

// store.addEventListener("click", function () {
//   const tr = document.createElement("tr");
//   tr.innerHTML = `
//         <td>${cities.innerText}</td>
//         <td>${transport.innerText}</td>
//         <td>${plan.innerText}</td>
//         <td>${poeple.valueAsNumber}</td>
//     `;
//   lists.append(tr);

//   result.innerText = null;

//   calc.reset();
// });
