let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  // ocultar todas las imágenes
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  // quitar clase "active" a todos los puntos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // mostrar la imagen actual y activar el punto correspondiente
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 4000); // cambiar cada 4 segundos
}

// Función para cambiar manualmente al hacer clic en los puntos
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}