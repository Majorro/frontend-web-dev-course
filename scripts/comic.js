async function main() {
    const email = "a.plekhov@innopolis.university";
    const comicIdRetrieveUrl = new URL("https://fwd.innopolis.app/api/hw2");
    const comicRetrieveUrl = new URL("https://getxkcd.vercel.app/api/comic");

    comicIdRetrieveUrl.searchParams.set("email", email);

    const comicId = await fetch(comicIdRetrieveUrl)
        .then((response) => response.json());

    comicRetrieveUrl.searchParams.set("id", comicId);

    const comicJson = await fetch(comicRetrieveUrl)
        .then((response) => response.json());

    const comicFigure = document.getElementById("comic");
    
    const comicImg = comicFigure.querySelector("img");
    comicImg.src = comicJson.img;
    comicImg.alt = comicJson.alt;
    comicImg.title = comicJson.title;

    const comicTitle = document.getElementById("comic-title");
    comicTitle.textContent = comicJson.title;

    const comicPublishDate = document.getElementById("comic-publish-date");
    comicPublishDate.textContent = `Publication date: ${new Date(comicJson.year, comicJson.month, comicJson.day).toLocaleDateString()}`;
}

main();