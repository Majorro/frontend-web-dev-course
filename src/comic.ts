interface ComicJson {
    alt: string;
    day: string;
    img: string;
    link: string;
    month: string;
    news: string;
    num: number;
    safe_title: string;
    title: string;
    transcript: string;
    year: string;
}

async function comic() {
    const email = "a.plekhov@innopolis.university";
    const comicIdRetrieveUrl = new URL("https://fwd.innopolis.app/api/hw2");
    const comicRetrieveUrl = new URL("https://getxkcd.vercel.app/api/comic");

    comicIdRetrieveUrl.searchParams.set("email", email);

    const comicId = await fetch(comicIdRetrieveUrl).then((response) =>
        response.json()
    );

    comicRetrieveUrl.searchParams.set("id", comicId.toString());

    const comicJson = await fetch(comicRetrieveUrl).then((response) =>
        response.json() as Promise<ComicJson>
    );
    
    const comicFigure = document.getElementById("comic") as HTMLElement;

    const comicImg = comicFigure.querySelector("img") as HTMLImageElement;
    comicImg.src = comicJson.img;
    comicImg.alt = comicJson.alt;
    comicImg.title = comicJson.title;

    const comicTitle = document.getElementById("comic-title") as HTMLElement;
    comicTitle.textContent = comicJson.title;

    const comicPublishDate = document.getElementById("comic-publish-date") as HTMLElement;
    comicPublishDate.textContent = `Publication date: ${new Date(
        +comicJson.year,
        +comicJson.month,
        +comicJson.day
    ).toLocaleDateString()}`;
}

comic();
