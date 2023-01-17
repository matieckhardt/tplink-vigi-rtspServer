var CAM_URL = [];
for (XX = 3; XX < process.env.CHANNELS; XX++) {
  CAM_URL[XX] =
    "rtsp://" +
    process.env.CAM_USER +
    ":" +
    process.env.CAM_PASS +
    "@" +
    process.env.CAM_IP +
    XX +
    ":554/stream2";
  StreamXX = require("node-rtsp-stream");
  streamXX = new StreamXX({
    name: "Cam" + XX,
    streamUrl: CAM_URL[XX],
    wsPort: "650" + XX,
  });
}
