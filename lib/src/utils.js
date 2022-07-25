/**
 * Some refs:
 * https://github.com/dnldsht/vue-insta-stories/blob/main/packages/lib/src/utils/h-demi.ts
 * https://github.com/vueuse/vue-demi/issues/65
 */
const version = require("vue").version || require("vue").default.version;
export const isVue3 = /^3\./.test(version);

/**
 * Maps $scopedSlots or $slots based on vue version
 * Avoids warning on perf when not wrapping slots in a function at vue3 (new to me)
 * https://stackoverflow.com/a/69877587/2801012
 * @param {object} vm - the component istance
 * @returns
 */
export const useSlots = vm => {
  const slotsProxy = getCurrentInstanceSlots(vm);
  return slotsProxy;
  // return Object.keys(slotsProxy).reduce((acc, name) => {
  //   acc[name] = scope => slotsProxy[name](scope);
  //   return acc;
  // }, {});
};

function getCurrentInstanceSlots(vm) {
  return isVue3 ? vm.$slots : vm.$scopedSlots;
}
