const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play.
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Set mediaStream as the videoElement source (src) property
        videoElement.srcObject = mediaStream
        // If videoElement gets loaded, the onLoaded meta data will be true
        // then the arrow function will run, which is to play the video automatically.
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error here
        console.log("Whoops. error here:", error);
    }
}

button.addEventListener("click", async () => {
    // Disable the button when it is clicked on
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

selectMediaStream();