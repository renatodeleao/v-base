module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "4447");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4447":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VEye", function() { return /* reexport */ VEye; });
__webpack_require__.d(__webpack_exports__, "VEyeManager", function() { return /* reexport */ VEyeManager; });
__webpack_require__.d(__webpack_exports__, "VEyeContent", function() { return /* reexport */ VEyeContent; });
__webpack_require__.d(__webpack_exports__, "VEyeSwitch", function() { return /* reexport */ VEyeSwitch; });

// NAMESPACE OBJECT: ./src/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "VEye", function() { return VEye; });
__webpack_require__.d(components_namespaceObject, "VEyeManager", function() { return VEyeManager; });
__webpack_require__.d(components_namespaceObject, "VEyeContent", function() { return VEyeContent; });
__webpack_require__.d(components_namespaceObject, "VEyeSwitch", function() { return VEyeSwitch; });

// CONCATENATED MODULE: ../node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("dc36")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./src/components/VEye.vue?vue&type=script&lang=js&
/**
 * Opens and closes, revealing its content.
 */
/* harmony default export */ var VEyevue_type_script_lang_js_ = ({
  name: "VEye",
  inject: {
    manager: {
      default: null
    }
  },
  model: {
    prop: "active",
    event: "toggle"
  },
  props: {
    as: {
      type: String,
      default: "div"
    },

    /**
     * when used inside a pack, you better use this
     * to know who is who in the v-model, otherwise
     * you'll get vue's uid
     */
    uid: {
      type: [String, Number],
      default: null
    },

    /**
     * Model value. Also initial value, when used outside a pack.
     */
    active: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      internalActive: this.active
    };
  },
  computed: {
    $_uid: function $_uid() {
      return this.uid === null || this.uid === undefined ? "v-eye-".concat(this._uid) : this.uid;
    },
    $_independent: function $_independent() {
      return !this.manager;
    },
    $_active: function $_active() {
      if (this.$_independent) {
        return this.internalActive;
      }

      return this.manager.getIsActive(this.$_uid);
    }
  },
  watch: {
    active: function active(isActive) {
      this.internalActive = isActive;
    }
  },
  mounted: function mounted() {
    if (!this.$_independent) {
      this.manager.track(this.$_uid, this.$el);
    }

    if (!this.$_independent && this.active !== false) {
      console.log("\n        This eye can't control himself, it's under manager scope.\n        The prop has no effect\n      ");
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.$_independent) {
      this.manager.untrack(this.$_uid);
    }
  },
  methods: {
    toggle: function toggle() {
      if (this.$_independent) {
        this.internalActive = !this.internalActive;
        this.$emit("toggle", this.internalActive);
        this.$emit("update:active", this.internalActive);
        return;
      }

      this.manager.toggle(this.$_uid);
    }
  },
  render: function render(h) {
    var attrs = {
      "data-active": this.$_active ? "" : null,
      "data-uid": this.$_uid
    };

    if (this.as === "template") {
      return this.$scopedSlots.default({
        isActive: this.$_active,
        toggle: this.toggle,
        attrs: attrs
      });
    } else {
      return h(this.as, {
        attrs: attrs
      }, this.$scopedSlots.default({
        isActive: this.$_active,
        toggle: this.toggle
      }));
    }
  },
  provide: function provide() {
    return {
      eye: this
    };
  }
});
// CONCATENATED MODULE: ./src/components/VEye.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VEyevue_type_script_lang_js_ = (VEyevue_type_script_lang_js_); 
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VEye.vue
var render, staticRenderFns




/* normalize component */

var VEye_component = normalizeComponent(
  components_VEyevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VEye = (VEye_component.exports);
// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./src/components/VEyeManager.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isNil = function isNil(val) {
  return val === undefined || val === null;
};
/**
 * Provides state for scoped <v-eye>, so they can work as group based on
 * provider conditions (props).
 */


/* harmony default export */ var VEyeManagervue_type_script_lang_js_ = ({
  name: "VEyeManager",
  model: {
    prop: "active",
    event: "change"
  },
  props: {
    as: {
      type: String,
      default: "div"
    },

    /**
     * The controlled active state of the eyes.
     * Must be used in conjunction with v-model, manually with @change event
     * or .sync modifiers,
     */
    active: {
      type: [String, Array, Number]
    },

    /**
     * The active state when initially rendered.
     * Use when you do not need to control its active state.
     */
    defaultActive: {
      type: [String, Array, Number]
    },

    /**
     * At least one eye must be active all the time
     * Good for accordions, tabs.
     */
    mandatory: {
      type: Boolean,
      default: false
    },

    /**
     * > 1 eyes active at the same time
     * "Checkbox-or-selectobox-like" groups like filters, tags.
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * Weather modelValue values should be readjusted when on of the config props
     * changes. Example: if we have multiple true and 2 items in model array,
     * if we change multiple to false model value is updated to last-item in array
     * to become single (non-multiple) model, so consistent with proposition of "multiple"
     *
     * We also do that for empty states, so if change multiple
     * vuetify as an example doesn't perform any of this side-effects
     * till the user interacts with the component. Because it'f it's controlled
     * and you change multiple to false, you should be able to decide what's the
     * one staying open as well. If using internal value, then you don't care as
     * as long as it still works (and it does after click)
     *
     * If mandatory starts at false and the is updated to true and modelValue
     * doesn't have at least one item we make the first item open to ensure that
     * mandatory promise is fulfilled
     * @see https://codepen.io/ohsimtabem/pen/zYBXWyo?editable=true&editors=101%3Dhttps%3A%2F%2Fvuetifyjs.com%2F
     */
    watchPropsWithModelSideEffects: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      injected: [],
      injectedElMap: {},
      modelValueInternal: this.defaultActive,
      // in order for reactive props to stay reactive when provide/injected
      // because vue will create an observable
      api: {
        track: this.track,
        untrack: this.untrack,
        getIsActive: this.getIsActive,
        toggle: this.toggle
      }
    };
  },
  computed: {
    $_modelValueProxy: {
      get: function get() {
        return this.active || this.active === 0 ? this.serializeModelValue(this.active) : this.serializeModelValue(this.modelValueInternal);
      },
      set: function set(newValue) {
        this.syncModelValue(newValue);
      }
    }
  },
  watch: {
    /**
     * @see emitSideEffect notes
     * @see syncModelValue [1]
     */
    active: function active() {
      // [1]
      if (this._preventActiveWatcher) {
        this._preventActiveWatcher = false;
        return;
      }
      /**
       * @emits change
       */


      this.emitSideEffect("change");
    },
    mandatory: {
      immediate: true,
      handler: "execMandatorySideEffects"
    },
    multiple: {
      immediate: true,
      handler: "execMultipleSideEffects"
    }
  },
  created: function created() {
    /* eslint-disable */
    if (this.multiple && !isNil(this.active) && !Array.isArray(this.active) && !isNil(this.defaultActive) && !Array.isArray(this.defaultActive)) {
      console.warn("[v-eye]: when using multiple, active/defaultActive must be an array if provided");
    }

    if (this.mandatory && isNil(this.active) && isNil(this.defaultActive)) {
      console.warn("[v-eye]: mandatory mode expects an not nil 'active' or 'defaultActive' value");
    }
  },
  mounted: function mounted() {
    /**
     * @todo it's a bit confusing but at leas its clear that we have
     *  access to dom refs for side-effects.
     *  Also this is related with dom animation which is being discussed
     * @example vue
     *   <!-- ❌ works but.. does not have instance context details -->
     *   <v-eye-manager @hook:mounted="handle" />
     *   <!-- ✅ -->
     *   <v-eye-manager @mounted="handle" />
     *
     * @emits mounted
     */
    this.emitSideEffect("mounted");
  },
  methods: {
    syncModelValue: function syncModelValue(newVal) {
      this.modelValueInternal = newVal;
      this.emitSideEffect(["change", "update:active"], newVal); // [1]

      this._preventActiveWatcher = true;
    },

    /**
     * Internally we always use arrays to simplify logic
     * @param {String|null|Array} value - raw value provided by consumer
     */
    serializeModelValue: function serializeModelValue(value) {
      if (Array.isArray(value)) {
        return value;
      } else if (value || value === 0) {
        return [value];
      } else {
        return [];
      }
    },

    /**
     * Internally we always use arrays to simplify logic
     * but when outputting for consumers we give them the expected type for
     * the mode: multiple => array else uid String || null (if no selection)
     */
    deserializeModelValue: function deserializeModelValue(serializedModelValue) {
      return this.multiple ? serializedModelValue : !serializedModelValue.length ? null : serializedModelValue[serializedModelValue.length - 1];
    },

    /**
     * When active is changed from an external source but we still want to perform
     * side-effects on the consumer
     * Ex: using vue-router, we can change the route without interacting with any
     * VTab trigger (clicking). This means regular that @change won't be triggered,
     * and thus side-effects can't be executed for that scenario when consumers need access
     * to internal apis: we could use $refs and access all this info directly but feels
     * even dirtier than this.
     *
     * @note HIGH PROBABILITY OF CHANGE
     *   This was added to perform a specific DOM related side-effect
     *   "the stalker underline" tab demo. But is it really much better than
     *   $nextTick(() => this.$el.querySelector('[data-state="selected"])
     * @note If deprecated...
     *   the code it's still re-used on mounted() hook and that's necessary
     *   for initial side-effects? Or could we go full $refs?
     */
    emitSideEffect: function emitSideEffect(eventNames, modelValueOverwrite) {
      var _this = this;

      var _this$getEventPayload = this.getEventPayload(modelValueOverwrite),
          emitValue = _this$getEventPayload.emitValue,
          details = _this$getEventPayload.details;

      if (Array.isArray(eventNames)) {
        eventNames.forEach(function (event) {
          return _this.$emit(event, emitValue, details);
        });
      } else {
        this.$emit(eventNames, emitValue, details);
      }
    },

    /**
     * @typedef SideEffectDetails
     * @property {Array} elements - array of tracked children dom nodes
     *
     * @returns {SideEffectDetails}
     */
    getSideEffectDetails: function getSideEffectDetails(modelValueOverwrite) {
      var _this2 = this;

      var value = modelValueOverwrite !== null && modelValueOverwrite !== void 0 ? modelValueOverwrite : this.$_modelValueProxy;
      return {
        elements: value.map(function (uid) {
          return _this2.injectedElMap[uid];
        })
      };
    },
    getEventPayload: function getEventPayload(modelValueOverwrite) {
      return {
        emitValue: this.deserializeModelValue(modelValueOverwrite !== null && modelValueOverwrite !== void 0 ? modelValueOverwrite : this.$_modelValueProxy),
        details: this.getSideEffectDetails(modelValueOverwrite)
      };
    },
    execMandatorySideEffects: function execMandatorySideEffects(isMandatory) {
      if (!this.watchPropsWithModelSideEffects) return;

      if (isMandatory && !this.$_modelValueProxy.length) {
        this.$_modelValueProxy = [this.injected[0]];
      }
    },
    execMultipleSideEffects: function execMultipleSideEffects(isMultiple) {
      if (!this.watchPropsWithModelSideEffects) return;

      if (!isMultiple && this.$_modelValueProxy.length > 1) {
        this.$_modelValueProxy = this.$_modelValueProxy.slice(-1);
      } else {
        this.syncModelValue(this.$_modelValueProxy);
      }
    },
    // INJECTED API

    /**
     * Keep track of eyes created inside this provider instance. (injected)
     * @param {String|Number} uid - each eye identifier
     * @param {HTMLElement} element - each eye dom node
     */
    track: function track(uid, element) {
      if (!this.injected.includes(uid)) {
        this.injected.push(uid);
        this.$set(this.injectedElMap, uid, element);
      }
    },

    /**
     * Remove track of eye. In case eye is destroyed
     * @param {String|Number} uid - each eye identifier
     */
    untrack: function untrack(uid) {
      this.injected = this.injected.filter(function (curId) {
        return uid !== curId;
      });
      this.$delete(this.injectedElMap, uid);

      if (this.getIsActive(uid)) {
        this.deactivate(uid, true);
      }
    },

    /**
     * Check current injected eye open state
     * @param {String|Number} uid - each eye identifier
     * @return {Boolean}
     */
    getIsActive: function getIsActive(uid) {
      return this.$_modelValueProxy.includes(uid);
    },
    activate: function activate(uid) {
      if (this.multiple) {
        this.$_modelValueProxy = [].concat(_toConsumableArray(this.$_modelValueProxy), [uid]);
      } else {
        this.$_modelValueProxy = [uid];
      }
    },
    deactivate: function deactivate(uid) {
      var destroyed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.multiple && !(this.mandatory && this.$_modelValueProxy.length === 1)) {
        this.$_modelValueProxy = this.$_modelValueProxy.filter(function (el) {
          return el !== uid;
        });
      } else {
        if (destroyed && this.mandatory) {
          this.$_modelValueProxy = this.injected.slice(-1);
        } // if multiple are open, and we were have current multiple-like state, keep it open
        // and close the other ones. this is inspired by vuetify behaviour, and since they
        // are the major library out there, i'll trust that it reflects the will of the
        // majority of devs


        if (this.$_modelValueProxy.length > 1) {
          this.$_modelValueProxy = [uid];
        } else if (!this.mandatory) {
          this.$_modelValueProxy = [];
        }
      }
    },

    /**
     * Toggle injected eye active state depending on current manager "mode"
     * @param {String|Number} uid - each eye identifier
     */
    toggle: function toggle(uid) {
      var isActive = this.getIsActive(uid);

      if (isActive) {
        this.deactivate(uid);
      } else {
        this.activate(uid);
      }
    }
  },
  render: function render(h) {
    // mostly because of jest, other wise would be regular slot
    return this.as === "template" ? this.$scopedSlots.default({}) : h(this.as, this.$slots.default);
  },
  provide: function provide() {
    return {
      manager: this.api
    };
  }
});
// CONCATENATED MODULE: ./src/components/VEyeManager.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VEyeManagervue_type_script_lang_js_ = (VEyeManagervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VEyeManager.vue
var VEyeManager_render, VEyeManager_staticRenderFns




/* normalize component */

var VEyeManager_component = normalizeComponent(
  components_VEyeManagervue_type_script_lang_js_,
  VEyeManager_render,
  VEyeManager_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VEyeManager = (VEyeManager_component.exports);
// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./src/components/VEyeContent.vue?vue&type=script&lang=js&
/* harmony default export */ var VEyeContentvue_type_script_lang_js_ = ({
  name: "VEyeContent",
  inject: ["eye"],
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render: function render(h) {
    if (this.as === "template") {
      var _this$eye;

      return this.$scopedSlots.default({
        toggle: (_this$eye = this.eye) === null || _this$eye === void 0 ? void 0 : _this$eye.toggle
      });
    } else {
      var _this$eye2, _this$eye3;

      return ((_this$eye2 = this.eye) === null || _this$eye2 === void 0 ? void 0 : _this$eye2.$_active) ? h(this.as, this.$slots.default || this.$scopedSlots.default({
        toggle: (_this$eye3 = this.eye) === null || _this$eye3 === void 0 ? void 0 : _this$eye3.toggle
      })) : null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEyeContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VEyeContentvue_type_script_lang_js_ = (VEyeContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VEyeContent.vue
var VEyeContent_render, VEyeContent_staticRenderFns




/* normalize component */

var VEyeContent_component = normalizeComponent(
  components_VEyeContentvue_type_script_lang_js_,
  VEyeContent_render,
  VEyeContent_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VEyeContent = (VEyeContent_component.exports);
// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./src/components/VEyeSwitch.vue?vue&type=script&lang=js&
/* harmony default export */ var VEyeSwitchvue_type_script_lang_js_ = ({
  name: "VEyeSwitch",
  inject: ["eye"],
  props: {
    as: {
      type: String,
      default: "button"
    }
  },
  render: function render(h) {
    if (this.as === "template") {
      var _this$eye, _this$eye2;

      return this.$scopedSlots.default({
        toggle: (_this$eye = this.eye) === null || _this$eye === void 0 ? void 0 : _this$eye.toggle,
        isActive: (_this$eye2 = this.eye) === null || _this$eye2 === void 0 ? void 0 : _this$eye2.$_active
      });
    } else {
      var _this$eye3, _this$eye4;

      return h(this.as, {
        attrs: {
          type: "button"
        },
        on: {
          click: (_this$eye3 = this.eye) === null || _this$eye3 === void 0 ? void 0 : _this$eye3.toggle
        }
      }, this.$slots.default || this.$scopedSlots.default({
        isActive: (_this$eye4 = this.eye) === null || _this$eye4 === void 0 ? void 0 : _this$eye4.$_active
      }));
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEyeSwitch.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VEyeSwitchvue_type_script_lang_js_ = (VEyeSwitchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VEyeSwitch.vue
var VEyeSwitch_render, VEyeSwitch_staticRenderFns




/* normalize component */

var VEyeSwitch_component = normalizeComponent(
  components_VEyeSwitchvue_type_script_lang_js_,
  VEyeSwitch_render,
  VEyeSwitch_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VEyeSwitch = (VEyeSwitch_component.exports);
// CONCATENATED MODULE: ./src/components/index.js




// CONCATENATED MODULE: ./src/main.js

var Plugin = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.installed) return;
    this.installed = true;

    for (var _ref in components_namespaceObject) {
      var moduleKey = _ref.moduleKey;
      var component = _ref.component;
      Vue.component(options.componentName || moduleKey, component);
    }
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Plugin);
}


/* harmony default export */ var main = (Plugin);
// CONCATENATED MODULE: ../node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ }),

/***/ "dc36":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ })

/******/ });
//# sourceMappingURL=v-eye.common.js.map