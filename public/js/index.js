const WSURL = "ws://localhost:";

for (x = 9; x < 42; x++) {
  cam = new JSMpeg.Player(WSURL + x, {
    canvas: document.getElementById("canvas" + x),
  });
  console.log(cam);
}
console.log("it Works!");
console.log(WSURL);
RTCRtpSender;

const Boton = document.getElementById("reset");

Boton.addEventListener("click", function () {
  fetch("reset").then(window.location.reload());
  console.log("reset ok");
});
