**********\*********** RTSP SERVER by Switch IT **************\*\*\*\***************

This app allows you to capture the rtsp image from any IPCAM rtsp enabled.

**Considerations**

This app runs in order to make the reset button work needs to be running
in develop mode (nodemon)

npm start by default runs "npm run dev"

use env.template to create your own .env and add de rstp URL for every camera.

by default the app only shows 6 cameras if you need to add more this is the way

////////////////////////////////////////////////////////////////////////////

add another of this changing # with the number of the camera needed

public/js/index.js

Cam# = new JSMpeg.Player(WSURL + ":#", {
canvas: document.getElementById("canvas#"), // Canvas should be a canvas DOM element
});

/views/index.hbs

            <div class="col-sm">
                <canvas id="canvas#"></canvas>
            </div>
