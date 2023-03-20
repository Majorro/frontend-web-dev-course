<script lang="ts">
	import "./styles.css";
	import { onMount } from "svelte";
    import { base } from '$app/paths';

	let main: HTMLElement;
	let header: HTMLElement;
    let footer: HTMLElement;

	function setMainHeight() {
        console.log(window.innerHeight, header.offsetHeight, footer.offsetHeight);
		main.style.height = window.innerHeight - header.offsetHeight - footer.offsetHeight - 1 + 'px';
	}

	// onresize = function () {
	// 	setMainHeight();
	// };

	onMount(() => {
		setMainHeight();
	});
</script>

<div class="app">
    <div class="bg-image" />

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
            <a href="{base}/">Intro</a>
            <a href="{base}/about">About Me</a>
            <a href="{base}/experience">Experience</a>
            <a href="{base}/comic">Comic</a>
        </nav>
    </header>

	<main bind:this={main}>
		<slot />
	</main>

    <footer bind:this={footer}>
        <p>© 2023 Andrey Plekhov</p>
    </footer>
</div>
