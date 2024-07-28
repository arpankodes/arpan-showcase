<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';
	import Header from './Header.svelte';
	import './styles.css';

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	$: if (browser && data?.analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId: data.analyticsId
		});
	}
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="d-flex justify-content-between">
			<span class="text-muted fs-6">
				Copyright <i class="fa-regular fa-copyright"></i> 2024 Arpan Kanungo
			</span>
			<span>
				<a target="_blank" href="https://www.linkedin.com/in/arpan-kanungo-17012a139/"><i class="fa-brands fa-linkedin"></i></a>
				<a target="_blank" href="https://x.com/ArpanKanungo"><i class="fa-brands fa-square-x-twitter"></i></a>
				<a target="_blank" href="https://github.com/arpankodes"><i class="fa-brands fa-github"></i></a>
			</span>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		/* display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; */
		padding: 12px;
		background-color: #BEBEBE;
	}

</style>
