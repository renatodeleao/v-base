import * as components from "./components";

const Plugin = {
  install(Vue, options = {}) {
    if (this.installed) return;

    this.installed = true;

    for (const { moduleKey, component } in components) {
      Vue.component(options.componentName || moduleKey, component);
    }
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Plugin);
}

export * from "./components";
export default Plugin;
