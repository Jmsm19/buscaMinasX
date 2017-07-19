var points = 0;

var audio = document.getElementsByClassName("bgm")[0];
audio.currentTime = 255;
audio.play();

function mostrar() {
  var elemento = event.target;
  var clase = elemento.classList[1];
  if (clase === "oculta") {
      var hijo = elemento.childNodes[1];
      elemento.classList.remove(clase);
      hijo.style.display = "block";
      hijo.classList.remove(clase);
      elemento.style.boxShadow = "0 0 50px #425E2E inset"
      
      if (hijo.classList[0] === "bomba") {
        elemento.style.boxShadow = "none";
        elemento.style.backgroundColor = "transparent";
        $("#perder").modal();
        audio.currentTime = 641;
        setTimeout(function() { audio.pause(); }, 4000);
        return;
      }

      subirPuntaje();

    if (points === 32) {
        $("#ganar").modal();
        audio.pause();
    }

    if (points === 51) {
        $("#ganar").modal();
        audio.pause();
    }
  }
};

function subirPuntaje() {
  var elemento = event.target.childNodes[1];
  var scoreActual = Number(document.getElementsByClassName("puntos")[0].innerHTML);
  var score = Number(elemento.getAttribute("value"));
  points = scoreActual + score;
  document.getElementsByClassName("puntos")[0].innerHTML = points;
};