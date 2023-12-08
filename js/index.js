const button = document.getElementById("burger_button");
const currentYear = document.getElementById("year");

button.onclick = () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("hide");
};

currentYear.innerHTML = `&copy; ${new Date().getFullYear()} Emter Sistema 
Todos os direitos reservados`;
