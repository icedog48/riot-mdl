(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./tags/mdl-button');
require('./tags/mdl-layout');

},{"./tags/mdl-button":2,"./tags/mdl-layout":4}],2:[function(require,module,exports){
require('./mdl-button.tag');
},{"./mdl-button.tag":3}],3:[function(require,module,exports){
(function (global){
var riot = (typeof window !== "undefined" ? window['riot'] : typeof global !== "undefined" ? global['riot'] : null);
module.exports = riot.tag('mdl-button', '<button __disabled="{this.disabled}" class="mdl-button mdl-js-button {mdl-button--flat: this.flat} {mdl-button--raised: this.raised} {mdl-button--fab: this.fab} {mdl-button--mini-fab: this.miniFab} {mdl-js-ripple-effect: this.ripple} {mdl-button--colored: this.colored} {mdl-button--accent: this.accent}" > <i class="material-icons" if="{this.showIcon}">{opts.icon}</i> {opts.caption} </button>', function(opts) {

//The available button display types are flat (default), raised, fab, mini-fab, and icon
var typeDefined = typeof opts.type != 'undefined';
var typeValid = ['flat', 'raised', 'fab', 'mini-fab', 'icon'].contains(opts.type);

this.type = typeDefined && typeValid ? opts.type : 'flat';

this.flat = this.type == 'flat';
this.raised = this.type == 'raised';
this.fab = this.type == 'fab';
this.miniFab = this.miniFab == 'mini-fab';
this.icon = this.icon == 'icon';

//The fab, mini-fab, and icon button types typically use a small image as their caption rather than text
var useIcon = ['fab', 'mini-fab', 'icon'].contains(this.type);
var iconTypeDefined = typeof opts.icon != 'undefined';

this.showIcon = useIcon || iconTypeDefined;

//any of these types may be plain (light gray) or colored
this.colored = typeof opts.colored != 'undefined';

this.ripple = typeof opts.ripple != 'undefined';
this.accent = typeof opts.accent != 'undefined';

this.disabled = typeof opts.disabled != 'undefined';
});




}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
require('./mdl-layout.tag');
},{"./mdl-layout.tag":5}],5:[function(require,module,exports){
(function (global){
var riot = (typeof window !== "undefined" ? window['riot'] : typeof global !== "undefined" ? global['riot'] : null);
module.exports = riot.tag('mdl-layout', '<header class="mdl-layout__header"> <div class="mdl-layout-icon"></div> <div class="mdl-layout__header-row"> <span class="mdl-layout-title"> { opts.title } </span> <div class="mdl-layout-spacer"></div> <nav class="mdl-navigation"> </nav> </div> </header> <div class="mdl-layout__drawer"> <span class="mdl-layout-title"> { opts.title } </span> <nav class="mdl-navigation"> </nav> </div> <main class="mdl-layout__content"> <div> <yield></yield> </div> </main>', 'class="mdl-layout mdl-js-layout mdl-layout--overlay-drawer-button"', function(opts) {

/*
 * The Material Design Lite (MDL) layout component is a comprehensive approach to page
 * layout that uses MDL development tenets, allows for efficient use of MDL 
 * components, and automatically adapts to different browsers, screen sizes, and 
 * devices.
 */
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])


//# sourceMappingURL=riot-mdl.js.map