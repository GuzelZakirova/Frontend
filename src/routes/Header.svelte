<script>
	import logo from '$lib/images/logo.png';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="logo" class="logo" />
		</a>
	</div>

	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About Me</a>
			</li>
			<li>
				<a href="/photos">Photos</a>
			</li>
			<li>
				<a href="/portfolio">Portfolio</a>
			</li>
			<li>
				<a href="/contact">Contact Me</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #000;
		width: 100%;
		padding: 10px 10px;
		position: fixed;
	}

	.corner img {
		height: 40px;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: #fff;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

</style>
