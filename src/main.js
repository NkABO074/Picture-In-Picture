const VIDEO_ELEMENT = document.getElementById("video");
const BUTTON = document.getElementById("button");

/**
 * prompt the user to select a media stream, pass to video alement to play
 */
async function selectMediaStream() {
  if (confirm("allow screen capture")) {
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
}

// on load
selectMediaStream();
