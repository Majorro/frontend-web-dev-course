<script lang="ts">
    import { onMount } from "svelte";
    import loading from "../assets/loading.gif"
    import type { ComicJson } from "../lib/ComicJson";
    
    let comicImg: HTMLImageElement;
    let comicTitle: HTMLDivElement;
    let comicPublishDate: HTMLDivElement;

    const email = "a.plekhov@innopolis.university";
    const comicIdRetrieveUrl = new URL("https://fwd.innopolis.app/api/hw2");
    const comicRetrieveUrl = new URL("https://getxkcd.vercel.app/api/comic");

    async function showComic() {
        comicIdRetrieveUrl.searchParams.set("email", email);

        const comicId = await fetch(comicIdRetrieveUrl).then(
            (response) => response.json() as Promise<number>
        );

        comicRetrieveUrl.searchParams.set("num", comicId.toString());

        const comicJson = await fetch(comicRetrieveUrl).then(
            (response) => response.json() as Promise<ComicJson>
        );

        comicImg.src = comicJson.img;
        comicImg.alt = comicJson.alt;
        comicImg.title = comicJson.title;

        comicTitle.textContent = comicJson.title;

        comicPublishDate.textContent = `Publication date: ${new Date(
            +comicJson.year,
            +comicJson.month,
            +comicJson.day
        ).toLocaleDateString()}`;
    }

    onMount(async () => {
        await showComic();
    })
</script>

<figure>
    <img bind:this={comicImg} src={loading} alt="loading..." />
    <figcaption>
        <div bind:this={comicTitle} />
        <div bind:this={comicPublishDate} />
    </figcaption>
</figure>

<style>
    figcaption {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>
