<script lang="ts">
    import { onMount } from "svelte";
    import { Router, Link, Route } from "svelte-navigator";
    import About from "./routes/About.svelte";
    import Experience from "./routes/Experience.svelte";
    import Comic from "./routes/Comic.svelte";

    let main: HTMLElement;
    let header: HTMLElement;

    function setMainHeight() {
        main.style.height = window.innerHeight - header.offsetHeight - 1 + "px";
    }

    onresize = function () {
        setMainHeight();
    };

    onMount(() => {
        setMainHeight();
    });
</script>

<div class="bg-image" />
<Router>
    <header bind:this={header}>
        <h1 id="title-name">Andrey Plekhov</h1>
        <div class="icon-container">
            <a id="gh-link" class="icon-link" href="https://github.com/Majorro"
                ><i class="fab fa-github" /></a
            >
            <a id="tg-link" class="icon-link" href="https://t.me/majorro228"
                ><i class="fab fa-telegram" /></a
            >
            <a
                id="email"
                class="icon-link"
                href="mailto:a.plekhov@innopolis.university"
                ><i class="fas fa-envelope" /></a
            >
        </div>
        <nav>
            <Link to="/">Intro</Link>
            <Link to="about">About Me</Link>
            <Link to="experience">Experience</Link>
            <Link to="comic">Comic</Link>
        </nav>
    </header>
    <main bind:this={main}>
        <Route path="/">
            <div>
                <p id="typed-message">Hello, it's Andrey Plekhov's website</p>
            </div>
        </Route>
        <Route path="about" component={About} />
        <Route path="experience" component={Experience} />
        <Route path="comic" component={Comic} />
    </main>
</Router>

<style>
    #typed-message {
        font-size: 3vw;
        overflow: hidden;
        border-right: 0.1em solid orange;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: 0.1em;
        animation: typing 3.5s steps(40, end),
            blink-caret 0.75s step-end infinite;
    }

    @keyframes typing {
        from {
            width: 0%;
        }

        to {
            width: 100%;
        }
    }

    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }

        50% {
            border-color: rgb(255, 111, 0);
        }
    }
</style>
