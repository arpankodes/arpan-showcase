<svelte:head>
	<title>Home</title>
	<meta name="description" content="Arpan's portfolio website." />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Fira+Code&display=swap" rel="stylesheet">
</svelte:head>

<section class="hero">
	<div class="hero-content">
		<h1>
			<span class="greeting">Hey there! 👋</span>
			<span class="name">I'm Arpan Kanungo</span>
		</h1>
		  
		<div class="description">
			<p class="role">Software Developer & Tech Enthusiast</p>
			<p class="tagline">Developing efficient, user-centric applications with modern technologies.</p>
			<p class="personal">When I'm not coding, you'll find me exploring books, staying active, and discovering new places. I believe in continuous learning and bringing adaptability and a collaborative spirit to every project.</p>
		</div>
  
	  <nav class="cta-links">
		<a href="/projects" class="cta-button primary">My Projects</a>
		<a href="/blog" class="cta-button secondary">Read Blog</a>
		<div class="social-links">
			<a target="_blank" href="https://www.linkedin.com/in/arpan-kanungo-17012a139/" class="social-link">LinkedIn</a>
			<a target="_blank" href="https://www.linkedin.com/in/arpan-kanungo-17012a139/" class="social-link">GitHub</a>
			<a target="_blank" href="https://x.com/ArpanKanungo" class="social-link">Twitter</a>
		</div>
	  </nav>
	</div>
  </section>
  
  <style>
  .hero {
	/* min-height: vh; */
	display: flex;
	align-items: center;
	padding: 2rem;
	background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }
  
  .hero-content {
	max-width: 800px;
	margin: 0 auto;
  }
  
  .hero h1 {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 2rem;
  }
  
  .greeting {
	font-size: clamp(1.5rem, 4vw, 2.5rem);
	color: var(--accent-color);
  }
  
  .name {
	font-size: clamp(2rem, 6vw, 4rem);
	font-weight: 700;
	background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  }
  
  .description {
	margin-bottom: 3rem;
  }
  
  .role {
	font-size: 1.25rem;
	color: var(--secondary-color);
	font-weight: 600;
	margin-bottom: 0.5rem;
  }
  
  .tagline {
	font-size: 1.1rem;
	color: var(--text-color);
	max-width: 600px;
  }
  
  .personal {
	font-size: 1rem;
	color: var(--text-color);
	max-width: 600px;
	margin-top: 1rem;
	line-height: 1.6;
	opacity: 0.9;
	}
  
  .primary {
	background: var(--primary-color);
	color: white;
  }
  
  .secondary {
	background: var(--accent-color);
	color: white;
  }
  
  .social-links {
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
  }
  
  .social-link {
	color: var(--secondary-color);
	font-size: 0.9rem;
	font-weight: 500;
  }
  
  @media (min-width: 768px) {
	.cta-links {
	  flex-direction: row;
	  align-items: center;
	}
	
	.social-links {
	  margin-top: 0;
	  margin-left: auto;
	}
  }
  </style>
