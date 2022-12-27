# RTSP SERVER by Switch IT

### This app allows you to capture the rtsp image from any IPCAM rtsp enabled.

# **Considerations**

This app runs in order to make the reset button work needs to be running
in develop mode (nodemon)

npm start by default runs "npm run dev"

use env.template to create your own .env and add de rstp URL for every camera.

### Cameras

by default the app only shows 6 cameras

adding more cameras:

add another of this changing # with the number of the camera needed

## Frontend:

public/js/index.js

Cam# = new JSMpeg.Player(WSURL + ":#", {
canvas: document.getElementById("canvas#"), // Canvas should be a canvas DOM element
});

/views/index.hbs

            <div class="col-sm">
                <canvas id="canvas#"></canvas>
            </div>

## Backend:

            Stream# = require("node-rtsp-stream");
                stream# = new Stream#({
                        name: "Cam#",
                        streamUrl: process.env.CAM#\_URL,
                        wsPort: #,
                        ffmpegOptions: {
                        // options ffmpeg flags
                        "-stats": "", // an option with no neccessary value uses a blank string
                        " -r": 30, // options with required values specify the value after the key
                },
            });
