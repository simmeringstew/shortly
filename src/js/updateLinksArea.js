// updates the area where the links go

let urls = [];

class UrlInfo {
    constructor(longUrl, shortUrl) {
        this.longUrl = longUrl;
        this.shortUrl = shortUrl;
    }
}

export default function updateLinksArea(longUrl, shortUrl) {
    const currentUrl = new UrlInfo(longUrl, shortUrl);
    urls.push(currentUrl);

    const statisticsArea = document.querySelector(".statistics");

    let linksArea = document.querySelector(".generated-links");
    if (linksArea === null) {
        linksArea = document.createElement("div");
        linksArea.classList.add("generated-links");
    }

    linksArea.innerHTML = "";

    for (let i = 0; i < urls.length; i++) {
        const linkCard = document.createElement("div");
        linkCard.classList.add("link-card");

        const longLink = document.createElement("div");
        longLink.classList.add("long-link");
        longLink.textContent = urls[i].longUrl;

        const breakLine = document.createElement("hr");

        const shortLinkArea = document.createElement("div");
        shortLinkArea.classList.add("short-link-area");

        const shortLink = document.createElement("input");
        shortLink.value = urls[i].shortUrl;
        shortLink.classList.add("short-link");
        shortLink.disabled = true;

        const copyPaste = document.createElement("button");
        copyPaste.classList.add("copy-paste");
        copyPaste.setAttribute("data-key", `${i}`);
        copyPaste.addEventListener("click", () => {
            copyToClipBoard(parseInt(copyPaste.getAttribute("data-key")));
        });

        const icon = document.createElement("i");
        icon.setAttribute("data-key", `${i}`);
        icon.classList.add("bi-clipboard");

        copyPaste.appendChild(icon);

        shortLinkArea.appendChild(shortLink);
        shortLinkArea.appendChild(copyPaste);

        linkCard.appendChild(longLink);
        linkCard.appendChild(breakLine);
        linkCard.appendChild(shortLinkArea);

        linksArea.appendChild(linkCard);
    }
    statisticsArea.prepend(linksArea);
    resetLinkInput();
}

function resetLinkInput() {
    const urlInputField = document.querySelector("#urlInput");
    urlInputField.classList.remove("is-valid");
    urlInputField.disabled = false;
    urlInputField.value = "";
}

async function copyToClipBoard(index) {
    await navigator.clipboard.writeText(urls[index].shortUrl);
    const icon = document.querySelector(`i[data-key="${index}"]`);
    icon.classList.remove("bi-clipboard");
    icon.classList.add("bi-clipboard-fill");
}