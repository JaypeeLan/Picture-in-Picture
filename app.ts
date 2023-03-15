const videoElement = document.getElementById("video")! as HTMLVideoElement;
const button = document.getElementById("button")! as HTMLButtonElement;

// prompt user to select media stream, pass to video elem and play
const selectMediaStream = async () => {
  try {
    // request the user to select window, tab,screen
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    //    set the html video source attribute to the user video
    videoElement.srcObject = mediaStream;

    // when the data is loaded, play the video
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    alert("Error: " + error);
  }
};

button.addEventListener("click", async () => {
  button.disabled = true;
  // --- start PiP
  await videoElement.requestPictureInPicture();

  button.disabled = false;
});

selectMediaStream();
