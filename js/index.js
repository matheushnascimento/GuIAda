const button = document.getElementById("burger_button");

button.onclick = () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("hide");
};
