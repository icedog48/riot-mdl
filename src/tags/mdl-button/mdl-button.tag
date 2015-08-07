<mdl-button>
	<button disabled={this.disabled} class="mdl-button mdl-js-button {mdl-button--flat: this.flat} {mdl-button--raised: this.raised} {mdl-button--fab: this.fab} {mdl-button--mini-fab: this.miniFab} {mdl-js-ripple-effect: this.ripple} {mdl-button--colored: this.colored} {mdl-button--accent: this.accent}" >
		<i class="material-icons" if={this.showIcon}>{opts.icon}</i> {opts.caption}
	</button>

	<script type="es6">

		//The available button display types are flat (default), raised, fab, mini-fab, and icon
		var typeDefined = (typeof(opts.type) != 'undefined');
		var typeValid = (['flat', 'raised', 'fab', 'mini-fab', 'icon'].contains(opts.type));

		this.type = (typeDefined && typeValid) ? opts.type : 'flat';

		this.flat = (this.type == 'flat');
		this.raised = (this.type == 'raised');
		this.fab = (this.type == 'fab');
		this.miniFab = (this.miniFab == 'mini-fab');
		this.icon = (this.icon == 'icon');

		//The fab, mini-fab, and icon button types typically use a small image as their caption rather than text
		var useIcon = (['fab', 'mini-fab', 'icon'].contains(this.type));
		var iconTypeDefined = (typeof(opts.icon) != 'undefined');

		this.showIcon = (useIcon || iconTypeDefined);

		//any of these types may be plain (light gray) or colored
		this.colored = (typeof(opts.colored) != 'undefined');

		this.ripple = (typeof(opts.ripple) != 'undefined');
		this.accent = (typeof(opts.accent) != 'undefined');
		
		this.disabled = (typeof(opts.disabled) != 'undefined');
	</script>
</mdl-button>



