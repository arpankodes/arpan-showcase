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
				Copyright <i class="fa-regular fa-copyright" /> 2024 Arpan Kanungo
			</span>
			<span>
				<a target="_blank" href="https://www.linkedin.com/in/arpan-kanungo-17012a139/"
					><i class="fa-brands fa-linkedin" /></a
				>
				<a target="_blank" href="https://x.com/ArpanKanungo"
					><i class="fa-brands fa-square-x-twitter" /></a
				>
				<a target="_blank" href="https://github.com/arpankodes"><i class="fa-brands fa-github" /></a
				>
			</span>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 80vh;
		background-color: var(--bg-color);
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: calc(100vh - (135.2px));
	}

	footer {
		padding: 1rem 2rem;
		background-color: var(--primary-color);
		color: var(--bg-color);
	}

	footer a {
		line-height: 0;
		display: inline-flex;
		align-items: center;
	}

	footer .fa-brands {
		font-size: 1.5rem;
		margin-left: 1rem;
		color: var(--bg-color);
		transition: color 0.3s ease;
	}

	footer .fa-brands:hover {
		color: var(--accent-color);
	}

	.text-muted {
		color: var(--bg-color) !important;
		opacity: 0.8;
	}

	a {
		border-bottom: none;
	}

	@media (max-width: 768px) {
		main {
			padding: 1rem;
		}

		footer {
			text-align: center;
		}

		footer div {
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
