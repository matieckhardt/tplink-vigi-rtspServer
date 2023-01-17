var CAM_URL = [];
for (XX = 3; XX < process.env.CHANNELS; XX++) {
  CAM_URL[XX] =
    "rtsp://admin:aaabbb000%2B%2B%2B@10.0.101." + XX + ":554/stream2";
  StreamXX = require("node-rtsp-stream");
  streamXX = new StreamXX({
    name: "Cam" + XX,
    streamUrl: CAM_URL[XX],
    wsPort: 6500 + XX,
  });
}
