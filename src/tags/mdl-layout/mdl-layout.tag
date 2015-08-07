<mdl-layout class="mdl-layout mdl-js-layout mdl-layout--overlay-drawer-button">
	<header class="mdl-layout__header">
		<div class="mdl-layout-icon"></div>
		<div class="mdl-layout__header-row">
			<span class="mdl-layout-title"> { opts.title } </span>
			<div class="mdl-layout-spacer"></div>
			<nav class="mdl-navigation">
			</nav>
	</div>
	</header>
	<div class="mdl-layout__drawer">
		<span class="mdl-layout-title"> { opts.title } </span>
		<nav class="mdl-navigation">
		</nav>
	</div>
	<main class="mdl-layout__content">
		<div> <yield/> </div>
	</main>
	

	<script type="es6">

		/*
		 * The Material Design Lite (MDL) layout component is a comprehensive approach to page
		 * layout that uses MDL development tenets, allows for efficient use of MDL 
		 * components, and automatically adapts to different browsers, screen sizes, and 
		 * devices.
		 */


	</script>
</mdl-layout>