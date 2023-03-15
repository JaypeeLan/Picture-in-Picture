"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const videoElement = document.getElementById("video");
const button = document.getElementById("button");
// prompt user to select media stream, pass to video elem and play
const selectMediaStream = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // request the user to select window, tab,screen
        const mediaStream = yield navigator.mediaDevices.getDisplayMedia();
        //    set the html video source attribute to the user video
        videoElement.srcObject = mediaStream;
        // when the data is loaded, play the video
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    }
    catch (error) {
        alert("Error: " + error);
    }
});
button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    button.disabled = true;
    // --- start PiP
    yield videoElement.requestPictureInPicture();
    button.disabled = false;
}));
selectMediaStream();
