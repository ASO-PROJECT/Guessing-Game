const btn = document.getElementById("btn");
const nbr = document.createElement("p");
const randomNbr = () => {
  const n = Math.floor(Math.random() * 100 + 1);
  //   console.log(n);
  nbr.textContent = n;
  btn.addEventListener("click", () => {
    document.body.appendChild(nbr);
  });
  //   winAlert(n);
  console.log(n.between(1, 10));
};
const winAlert = (n) => {
  if (n >= 1 && n <= 10) {
    alert("You won!", n);
  } else {
    alert("You lost!", n);
  }
};
Number.prototype.between = function (a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return this > min && this < max;
};
