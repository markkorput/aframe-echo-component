/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	// Browser distrubution of the A-Frame component.
	(function () {
	  if (!AFRAME) {
	    console.error('Component attempted to register before AFRAME was available.');
	    return;
	  }

	  // Register all components here.
	  var components = {
	    echo: __webpack_require__(1).echo_component,
	  };

	  Object.keys(components).forEach(function (name) {
	    if (AFRAME.aframeCore) {
	      AFRAME.aframeCore.registerComponent(name, components[name]);
	    } else {
	      AFRAME.registerComponent(name, components[name]);
	    }
	  });
	})();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = { 'echo_component' : {
	  schema: {
	    event: { type: 'string' },
	    echo: { type: 'string' },
	    delay: { type: 'number', default: 0 },
	    subject: { type: 'selector', default: null },
	  },

	  multiple: true,

	  init: function() {
	    this.echoCallback = function(){ this.echo() }.bind(this);
	  },

	  update: function(prevdata) {
	    if (prevdata && prevdata.event) this.el.removeEventListener(this.data.event, this.echoCallback);
	    this.el.addEventListener(this.data.event, this.echoCallback);
	  },

	  echo: function() {
	    // if (this.echoTimeout) clearTimeout(this.echoTimeout);

	    if (this.data.delay > 0.0) {
	      setTimeout(function(){ this.emit() }.bind(this), this.data.delay); // schedule delayed execution
	      return;
	    }

	    this.emit(); // now
	  },

	  emit: function() {
	    (this.data.subject || this.el).emit(this.data.echo);
	  }
	} };


/***/ })
/******/ ]);