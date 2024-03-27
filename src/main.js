const VIDEO_ELEMENT = document.getElementById("video");
const BUTTON = document.getElementById("button");

/**
 * prompt the user to select a media stream, pass to video alement to play
 */
async function selectMediaStream() {
  try {
    const MEDIA_STREAM = await navigator.mediaDevices.getDisplayMedia();
    VIDEO_ELEMENT.srcObject = MEDIA_STREAM;
    VIDEO_ELEMENT.onloadedmetadata = () => {
      VIDEO_ELEMENT.play();
    };
  } catch (error) {
    console.log(`oops something hapend ${error}`);
    // error handling here ...
  }
}

BUTTON.addEventListener("click", async () => {
  // Disable the button
  BUTTON.disabled = true;

  // Start Picture in picture
  await VIDEO_ELEMENT.requestPictureInPicture();

  // reset the button
  BUTTON.disabled = false;
});

// on load
selectMediaStream();
