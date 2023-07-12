<script>
	import mainPhoto from '$lib/images/main_photo.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="container">
		<div class="greeting">
			<div class="main-photo block">
				<img src={mainPhoto} class="base-photo" alt="Guzel Zakirova"/>
			</div>
			<div class="main-text block">
				<div class="text">
					<h1 class="greeting__text">Hi, I'm Guzel</h1>
					<p class="greeting__paragraph">Hello everyone, I am a novice developer in the
						field of
						frontend.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		font-size: 20px;
	}

	.container {
		max-width: 1460px;
		width: 100%;
		padding: 5% 60px;
		margin: 0 auto;
	}

	.greeting {
		display: flex;
		justify-content: space-between;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	.base-photo {
		min-width: 300px;
	}

	.block {
		width: 46%;
		padding-top: 20px;
	}

	h1 {
		font-weight: bold;
	}

	.greeting__paragraph {
		font-size: 25px;
	}

	.text {
		margin-top: 50%;
	}


</style>
