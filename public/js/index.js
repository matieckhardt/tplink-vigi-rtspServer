const WSURL = "ws://localhost";

Cam1 = new JSMpeg.Player(WSURL + ":2", {
  canvas: document.getElementById("canvas1"), // Canvas should be a canvas DOM element
});

Cam2 = new JSMpeg.Player(WSURL + ":3", {
  canvas: document.getElementById("canvas2"), // Canvas should be a canvas DOM element
});

Cam3 = new JSMpeg.Player(WSURL + ":4", {
  canvas: document.getElementById("canvas3"), // Canvas should be a canvas DOM element
});

Cam4 = new JSMpeg.Player(WSURL + ":5", {
  canvas: document.getElementById("canvas4"), // Canvas should be a canvas DOM element
});

Cam5 = new JSMpeg.Player(WSURL + ":6", {
  canvas: document.getElementById("canvas5"), // Canvas should be a canvas DOM element
});

Cam6 = new JSMpeg.Player(WSURL + ":8", {
  canvas: document.getElementById("canvas6"), // Canvas should be a canvas DOM element
});
console.log("it Works!");
console.log(WSURL);
RTCRtpSender;

const Boton = document.getElementById("reset");

Boton.addEventListener("click", function () {
  fetch("reset").then(window.location.reload());
  console.log("reset ok");
});
