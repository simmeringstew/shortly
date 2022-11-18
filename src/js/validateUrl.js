// function to validate the url before sending it off

import getShortUrl from "./getShortUrl.js";

export default function validateUrl(url, e) {
    const urlInputField = document.querySelector("#urlInput");
    const httpsUrlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    const nonHttpsUrlRegex = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    if (httpsUrlRegex.test(String(url)) === false) {
        if (nonHttpsUrlRegex.test(String(url)) === false) {
            e.preventDefault();
            urlInputField.classList.add("is-invalid");
        }
        else {
            validInput(url, e);
        }
    }
    else {
        validInput(url, e);
    }
}

function validInput(url, e) {
    const urlInputField = document.querySelector("#urlInput");
    e.preventDefault();
    urlInputField.classList.remove("is-invalid");
    urlInputField.classList.add("is-valid");
    urlInputField.disabled = true;
    getShortUrl(url);
}