// function for retrieving the shortened url

import updateLinksArea from "./updateLinksArea.js";

export default async function getShortUrl(url) {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const responseData = await response.json();
    const shortUrl = responseData.result.short_link;
    updateLinksArea(url, shortUrl);
}