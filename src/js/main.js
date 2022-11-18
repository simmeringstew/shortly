// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// import other files
import validateUrl from "./validateUrl.js";

// selector for the input field and shorten button
const urlInputField = document.querySelector("#urlInput");
const shortenButton = document.querySelector(".shorten");
shortenButton.addEventListener("click", (e) => {
    const longUrl = urlInputField.value.trim();
    validateUrl(longUrl, e);
});
urlInputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const longUrl = urlInputField.value.trim();
        validateUrl(longUrl, e);
    }
    else {
        return;
    }
});