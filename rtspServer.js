Stream1 = require("node-rtsp-stream");
stream1 = new Stream1({
  name: "Cam1",
  streamUrl: process.env.CAM1_URL,
  wsPort: 10,
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
  wsPort: 11,
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
  wsPort: 12,
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
  wsPort: 13,
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
  wsPort: 14,
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
  wsPort: 15,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream7 = require("node-rtsp-stream");
stream7 = new Stream7({
  name: "Cam7",
  streamUrl: process.env.CAM7_URL,
  wsPort: 16,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream8 = require("node-rtsp-stream");
stream8 = new Stream8({
  name: "Cam8",
  streamUrl: process.env.CAM8_URL,
  wsPort: 17,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream9 = require("node-rtsp-stream");
stream9 = new Stream9({
  name: "Cam9",
  streamUrl: process.env.CAM9_URL,
  wsPort: 18,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream10 = require("node-rtsp-stream");
stream10 = new Stream10({
  name: "Cam10",
  streamUrl: process.env.CAM10_URL,
  wsPort: 19,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream11 = require("node-rtsp-stream");
stream11 = new Stream11({
  name: "Cam11",
  streamUrl: process.env.CAM11_URL,
  wsPort: 20,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream12 = require("node-rtsp-stream");
stream12 = new Stream12({
  name: "Cam12",
  streamUrl: process.env.CAM12_URL,
  wsPort: 21,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream13 = require("node-rtsp-stream");
stream13 = new Stream13({
  name: "Cam13",
  streamUrl: process.env.CAM13_URL,
  wsPort: 22,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream14 = require("node-rtsp-stream");
stream14 = new Stream14({
  name: "Cam14",
  streamUrl: process.env.CAM14_URL,
  wsPort: 23,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream15 = require("node-rtsp-stream");
stream15 = new Stream15({
  name: "Cam15",
  streamUrl: process.env.CAM15_URL,
  wsPort: 24,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream16 = require("node-rtsp-stream");
stream16 = new Stream16({
  name: "Cam16",
  streamUrl: process.env.CAM16_URL,
  wsPort: 25,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream17 = require("node-rtsp-stream");
stream17 = new Stream17({
  name: "Cam17",
  streamUrl: process.env.CAM17_URL,
  wsPort: 26,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream18 = require("node-rtsp-stream");
stream18 = new Stream18({
  name: "Cam18",
  streamUrl: process.env.CAM18_URL,
  wsPort: 27,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream19 = require("node-rtsp-stream");
stream19 = new Stream19({
  name: "Cam19",
  streamUrl: process.env.CAM19_URL,
  wsPort: 28,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream20 = require("node-rtsp-stream");
stream20 = new Stream20({
  name: "Cam20",
  streamUrl: process.env.CAM20_URL,
  wsPort: 29,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream21 = require("node-rtsp-stream");
stream21 = new Stream21({
  name: "Cam21",
  streamUrl: process.env.CAM21_URL,
  wsPort: 30,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream22 = require("node-rtsp-stream");
stream22 = new Stream22({
  name: "Cam22",
  streamUrl: process.env.CAM22_URL,
  wsPort: 31,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream23 = require("node-rtsp-stream");
stream23 = new Stream23({
  name: "Cam23",
  streamUrl: process.env.CAM23_URL,
  wsPort: 32,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream24 = require("node-rtsp-stream");
stream24 = new Stream24({
  name: "Cam24",
  streamUrl: process.env.CAM24_URL,
  wsPort: 33,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream25 = require("node-rtsp-stream");
stream25 = new Stream25({
  name: "Cam25",
  streamUrl: process.env.CAM25_URL,
  wsPort: 34,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream26 = require("node-rtsp-stream");
stream26 = new Stream26({
  name: "Cam26",
  streamUrl: process.env.CAM26_URL,
  wsPort: 35,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream27 = require("node-rtsp-stream");
stream27 = new Stream27({
  name: "Cam27",
  streamUrl: process.env.CAM27_URL,
  wsPort: 36,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream28 = require("node-rtsp-stream");
stream28 = new Stream28({
  name: "Cam28",
  streamUrl: process.env.CAM28_URL,
  wsPort: 37,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream29 = require("node-rtsp-stream");
stream29 = new Stream29({
  name: "Cam29",
  streamUrl: process.env.CAM29_URL,
  wsPort: 38,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream30 = require("node-rtsp-stream");
stream30 = new Stream30({
  name: "Cam30",
  streamUrl: process.env.CAM30_URL,
  wsPort: 39,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream31 = require("node-rtsp-stream");
stream31 = new Stream31({
  name: "Cam31",
  streamUrl: process.env.CAM31_URL,
  wsPort: 40,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

Stream32 = require("node-rtsp-stream");
stream32 = new Stream32({
  name: "Cam32",
  streamUrl: process.env.CAM32_URL,
  wsPort: 41,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});
