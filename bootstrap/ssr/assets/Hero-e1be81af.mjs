import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "h-[95vh] w-100 relative flex items-center justify-center bg-[url('/storage/image/sliders/home-img-1.jpg')] bg-no-repeat bg-cover bg-center",
    style: { "clip-path": "polygon(100% 0%, 0% 0% , 0.00% 78.50%, 2.00% 78.44%, 4.00% 78.25%, 6.00% 77.96%, 8.00% 77.55%, 10.00% 77.06%, 12.00% 76.49%, 14.00% 75.87%, 16.00% 75.22%, 18.00% 74.56%, 20.00% 73.92%, 22.00% 73.31%, 24.00% 72.77%, 26.00% 72.30%, 28.00% 71.93%, 30.00% 71.67%, 32.00% 71.53%, 34.00% 71.51%, 36.00% 71.61%, 38.00% 71.83%, 40.00% 72.17%, 42.00% 72.60%, 44.00% 73.12%, 46.00% 73.71%, 48.00% 74.34%, 50.00% 75.00%, 52.00% 75.66%, 54.00% 76.29%, 56.00% 76.88%, 58.00% 77.40%, 60.00% 77.83%, 62.00% 78.17%, 64.00% 78.39%, 66.00% 78.49%, 68.00% 78.47%, 70.00% 78.33%, 72.00% 78.07%, 74.00% 77.70%, 76.00% 77.23%, 78.00% 76.69%, 80.00% 76.08%, 82.00% 75.44%, 84.00% 74.78%, 86.00% 74.13%, 88.00% 73.51%, 90.00% 72.94%, 92.00% 72.45%, 94.00% 72.04%, 96.00% 71.75%, 98.00% 71.56%, 100.00% 71.50%)" }
  }, _attrs))}><div class="h-[100%] w-[100%] relative z-10 flex items-center justify-center"><h1 class="font-black text-5xl text-white absolute z-20 w-100 h-100"> Welcome to Foodtrips </h1><div class="h-[100%] w-[100%] absolute opacity-50 bg-slate-900 top-0 left-0 z-10"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Home/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Hero as default
};
