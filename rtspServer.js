Stream1 = require("node-rtsp-stream");
stream1 = new Stream1({
  name: "Cam1",
  streamUrl: process.env.CAM1_URL,
  wsPort: 2,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream2 = require("node-rtsp-stream");
stream2 = new Stream2({
  name: "Cam2",
  streamUrl: process.env.CAM2_URL,
  wsPort: 3,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream3 = require("node-rtsp-stream");
stream3 = new Stream3({
  name: "Cam3",
  streamUrl: process.env.CAM3_URL,
  wsPort: 4,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream4 = require("node-rtsp-stream");
stream4 = new Stream4({
  name: "Cam4",
  streamUrl: process.env.CAM4_URL,
  wsPort: 5,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream5 = require("node-rtsp-stream");
stream5 = new Stream5({
  name: "Cam5",
  streamUrl: process.env.CAM5_URL,
  wsPort: 6,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream6 = require("node-rtsp-stream");
stream6 = new Stream6({
  name: "Cam6",
  streamUrl: process.env.CAM6_URL,
  wsPort: 8,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});
