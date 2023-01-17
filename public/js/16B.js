const WSURL = "ws://localhost:650";
const CHANNELS = 2 + 32;

for (x = 16; x < CHANNELS; x++) {
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "canvas" + x);
  document.getElementById("camaras").appendChild(canvas);

  cam = new JSMpeg.Player(WSURL + x, {
    canvas: document.getElementById("canvas" + x),
  });
}
console.log("it Works!");
console.log(WSURL);
RTCRtpSender;

const Boton = document.getElementById("reset");

Boton.addEventListener("click", function () {
  fetch("reset").then(window.location.reload());
  console.log("reset ok");
});
