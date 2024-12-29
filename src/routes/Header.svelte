<script>
</script>

<header>
	<nav class="navbar navbar-expand-lg navbar-light bg-lightd-flex justify-content-center">
		<div class="">
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavAltMarkup">
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<a class="nav-link" aria-current="page" href="/">Home</a>
					<a class="nav-link" href="/projects">Projects</a>
					<a href="/blog" class="nav-link">Blog</a>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
	.navbar {
		padding: 1rem 2rem;
		background-color: var(--primary-color);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.navbar-nav {
		gap: 2rem;
	}

	.nav-link {
		color: var(--bg-color) !important;
		font-weight: 500;
		position: relative;
		transition: color 0.3s ease;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: -2px;
		left: 0;
		background-color: var(--accent-color);
		transition: width 0.3s ease;
	}

	.nav-link:hover {
		color: var(--accent-color) !important;
	}

	.nav-link:hover::after {
		width: 100%;
	}

	.navbar-toggler {
		border-color: var(--accent-color);
	}

	.navbar-toggler-icon {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(105, 152, 171, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
	}
</style>
