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

// CONCATENATED MODULE: ./src/utils.js
/**
 * Some refs:
 * https://github.com/dnldsht/vue-insta-stories/blob/main/packages/lib/src/utils/h-demi.ts
 * https://github.com/vueuse/vue-demi/issues/65
 */
var version = __webpack_require__("8bbf").version || __webpack_require__("8bbf").default.version;

var isVue3 = /^3\./.test(version);
/**
 * Maps $scopedSlots or $slots based on vue version
 * Avoids warning on perf when not wrapping slots in a function at vue3 (new to me)
 * https://stackoverflow.com/a/69877587/2801012
 * @param {object} vm - the component istance
 * @returns
 */

var useSlots = function useSlots(vm) {
  var slotsProxy = getCurrentInstanceSlots(vm);
  return slotsProxy; // return Object.keys(slotsProxy).reduce((acc, name) => {
  //   acc[name] = scope => slotsProxy[name](scope);
  //   return acc;
  // }, {});
};

function getCurrentInstanceSlots(vm) {
  return isVue3 ? vm.$slots : vm.$scopedSlots;
}
/**
 * A poor-man's lodash uid
 */


var idCounter = 0;
function uniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "v-eye-";
  var id = ++idCounter;
  return "".concat(prefix).concat(id);
}
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./src/components/VPrimitive.js


/**
 * Reusable primitive prop. Every component with support for template
 * slot should include it.
 */

var asTemplate = {
  type: Boolean,
  default: false
};
/**
 * Conditionally render the appropriate skeleton element or the slot
 * content in case consumer wants to provide their own implementation
 * via a truthy asTemplate. No prop merging happens, bindings will be
 * fully exposed via slot-scope.
 *
 * @private - this is for internal lib use only.
 */

var VPrimitive = {
  compatConfig: {
    MODE: 3 // opt-in to Vue 3 if in compat mode

  },
  name: "VPrimitive",
  props: {
    asTemplate: asTemplate,
    tagName: {
      type: String,
      default: "div"
    }
  },
  render: function render() {
    var $slots = useSlots(this);

    if (this.asTemplate) {
      return $slots.default();
    } else if (isVue3) {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(this.tagName, $slots.default());
    } else {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(this.tagName, {
        on: this.$listeners
      }, $slots.default());
    }
  }
};
// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/VEye.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * An individual switch that can work within a team when managed.
 */



/* harmony default export */ var VEyevue_type_script_lang_js_ = ({
  compatConfig: {
    MODE: 3 // opt-in to Vue 3 if in compat mode

  },
  name: "VEye",
  inject: {
    manager: {
      default: null
    }
  },
  emits: ["toggle", "update:active"],
  model: {
    prop: "active",
    event: "toggle"
  },
  props: {
    asTemplate: asTemplate,

    /**
     * When used under manager scope, it's highly recommended to provide unique
     * value to each instance as it will act as v-model's value when active.
     * Omitting will get random generated value, which is not very useful,
     * but necessary for internal tracking logic.
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
      return this.uid === null || this.uid === undefined ? uniqueId() : this.uid;
    },
    $_independent: function $_independent() {
      return !this.manager;
    },
    $_active: function $_active() {
      if (this.$_independent) {
        return this.internalActive;
      }

      return this.manager.getIsActive(this.$_uid);
    },

    /**
     * Provided via slot-scope or injection
     */
    api: function api() {
      return {
        isActive: this.$_active,
        toggle: this.toggle
      };
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
  render: function render() {
    var _this = this;

    var attrs = {
      "data-active": this.$_active ? "" : null,
      "data-uid": this.$_uid
    };
    var $slots = useSlots(this);

    var renderSlots = function renderSlots() {
      return $slots.default(_objectSpread(_objectSpread({}, _this.api), {}, {
        attrs: attrs
      }));
    };

    var props = {
      asTemplate: this.asTemplate
    };
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(VPrimitive, _objectSpread({}, isVue3 ? props : {
      props: props
    }), isVue3 ? function () {
      return renderSlots();
    } : renderSlots());
  },
  provide: function provide() {
    return {
      eye: this
    };
  }
});
// CONCATENATED MODULE: ./src/components/VEye.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VEyevue_type_script_lang_js_ = (VEyevue_type_script_lang_js_); 
// CONCATENATED MODULE: ../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
var VEye_render, staticRenderFns




/* normalize component */

var VEye_component = normalizeComponent(
  components_VEyevue_type_script_lang_js_,
  VEye_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VEye = (VEye_component.exports);
// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/VEyeManager.vue?vue&type=script&lang=js&
function VEyeManagervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VEyeManagervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VEyeManagervue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { VEyeManagervue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VEyeManagervue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function VEyeManagervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  compatConfig: {
    MODE: 3 // opt-in to Vue 3 if in compat mode

  },
  name: "VEyeManager",
  emits: ["change", "update:active", "mounted"],
  model: {
    prop: "active",
    event: "change"
  },
  props: {
    asTemplate: asTemplate,

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
     *   $nextTick(() => this.$el.querySelector('[data-state="selected"])?
     *
     * @note [1] do not re-emit if triggered from internal chang
     *   @see syncModelValue [1]
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


      this.emitModelValueWithDetails(["change"]);
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
     * @todo it's a bit confusing but at least its clear that we have
     *  access event details
     * @example vue
     *   <!-- ❌ works but.. does not have instance context details -->
     *   <v-eye-manager @hook:mounted="handle" />
     *   <!-- ✅ -->
     *   <v-eye-manager @mounted="handle" />
     *
     * @emits mounted
     */
    this.emitModelValueWithDetails(["mounted"]);
  },
  methods: {
    syncModelValue: function syncModelValue(newVal) {
      this.modelValueInternal = newVal;
      this.emitModelValueWithDetails(["change", "update:active"], newVal); // [1]

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
     * Convenience wrapper that emits provided vue event names with most up-to
     * date modelValue and EventDetails object for consumer side-effects.
     *
     * @param {Array<String>} eventNames - the ones to emit with payload
     * @param {Array} newModelValue - omitting it means using currently computed
     *   this.$_modelValueProxy. Currently, raw active cannot be used because
     *   it's not coerced to internal expected representation (Array)
     */
    emitModelValueWithDetails: function emitModelValueWithDetails(eventNames, newModelValue) {
      var _this = this;

      var _this$getEventParams = this.getEventParams(newModelValue !== null && newModelValue !== void 0 ? newModelValue : this.$_modelValueProxy),
          emitValue = _this$getEventParams.emitValue,
          details = _this$getEventParams.details;

      eventNames.forEach(function (event) {
        return _this.$emit(event, emitValue, details);
      });
    },

    /**
     * Additional information for consumers to perform model change
     * side-effects on their implementations.
     *
     * @typedef {Object} EventDetails
     * @property {Array} elements - array of tracked children dom nodes
     *
     * @param {Array} modelValue
     * @returns {EventDetails}
     */
    getEventDetails: function getEventDetails(modelValue) {
      var _this2 = this;

      return {
        elements: modelValue.map(function (uid) {
          return _this2.injectedElMap[uid];
        })
      };
    },

    /**
     * Proxy to get all event emit information in a single call
     *
     * @typedef {Object} EventParams
     * @property {Array|String|Number|null} emitValue
     * @property {EventDetails} details
     *
     * @returns {EventParams}
     */
    getEventParams: function getEventParams(modelValue) {
      return {
        emitValue: this.deserializeModelValue(modelValue),
        details: this.getEventDetails(modelValue)
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

        if (isVue3) {
          this.injectedElMap[uid] = element;
        } else {
          this.$set(this.injectedElMap, uid, element);
        }
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

      if (isVue3) {
        delete this.injectedElMap[uid];
      } else {
        this.$delete(this.injectedElMap, uid);
      }

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
  render: function render() {
    var $slots = useSlots(this);

    var renderSlots = function renderSlots() {
      return $slots.default();
    };

    var props = {
      asTemplate: this.asTemplate
    };
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(VPrimitive, VEyeManagervue_type_script_lang_js_objectSpread({}, isVue3 ? props : {
      props: props
    }), isVue3 ? function () {
      return renderSlots();
    } : $slots.default());
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
// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"75974368-vue-loader-template"}!../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/VEyeContent.vue?vue&type=template&id=139fa69c&
var VEyeContentvue_type_template_id_139fa69c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.eye.api.isActive)?_c('v-primitive',_vm._b({},'v-primitive',{ asTemplate: _vm.asTemplate },false),[_vm._t("default",null,null,{ toggle: _vm.eye.api.toggle })],2):_vm._e()}
var VEyeContentvue_type_template_id_139fa69c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEyeContent.vue?vue&type=template&id=139fa69c&

// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/VEyeContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var VEyeContentvue_type_script_lang_js_ = ({
  compatConfig: {
    MODE: 3 // opt-in to Vue 3 if in compat mode

  },
  name: "VEyeContent",
  components: {
    VPrimitive: VPrimitive
  },
  inject: ["eye"],
  props: {
    asTemplate: asTemplate
  }
});
// CONCATENATED MODULE: ./src/components/VEyeContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VEyeContentvue_type_script_lang_js_ = (VEyeContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VEyeContent.vue





/* normalize component */

var VEyeContent_component = normalizeComponent(
  components_VEyeContentvue_type_script_lang_js_,
  VEyeContentvue_type_template_id_139fa69c_render,
  VEyeContentvue_type_template_id_139fa69c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VEyeContent = (VEyeContent_component.exports);
// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"75974368-vue-loader-template"}!../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/VEyeSwitch.vue?vue&type=template&id=4d1caa6e&
var VEyeSwitchvue_type_template_id_4d1caa6e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-primitive',_vm._b({on:{"click":_vm.eye.api.toggle}},'v-primitive',{
    asTemplate: _vm.asTemplate,
    tagName: 'button',
    type: 'button'
  },false),[_vm._t("default",null,null,_vm.eye.api)],2)}
var VEyeSwitchvue_type_template_id_4d1caa6e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEyeSwitch.vue?vue&type=template&id=4d1caa6e&

// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/VEyeSwitch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VEyeSwitchvue_type_script_lang_js_ = ({
  compatConfig: {
    MODE: 3 // opt-in to Vue 3 if in compat mode

  },
  name: "VEyeSwitch",
  components: {
    VPrimitive: VPrimitive
  },
  inject: ["eye"],
  props: {
    asTemplate: asTemplate
  }
});
// CONCATENATED MODULE: ./src/components/VEyeSwitch.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VEyeSwitchvue_type_script_lang_js_ = (VEyeSwitchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VEyeSwitch.vue





/* normalize component */

var VEyeSwitch_component = normalizeComponent(
  components_VEyeSwitchvue_type_script_lang_js_,
  VEyeSwitchvue_type_template_id_4d1caa6e_render,
  VEyeSwitchvue_type_template_id_4d1caa6e_staticRenderFns,
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

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

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