// ANIMACIONES
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));


// WHATSAPP FORM
function enviarWhatsApp(e){
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let mensaje = document.getElementById("mensaje").value;

  let texto = `Hola, quiero hacer una consulta:

Nombre: ${nombre}
Teléfono: ${telefono}
Consulta: ${mensaje}`;

  let url = "https://wa.me/59894304856?text=" + encodeURIComponent(texto);

  window.open(url, "_blank");
}

// MENU HAMBURGUESA
const burgerBtn = document.getElementById("burgerBtn");
const navBar = document.getElementById("navBar");

if (burgerBtn && navBar) {
  burgerBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
}
