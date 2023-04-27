import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "h-[95vh] w-100 relative flex items-center justify-center bg-[url('/storage/image/sliders/home-img-1.jpg')] bg-no-repeat bg-cover bg-center",
    style: { "clip-path": "polygon(\n                100% 0%,\n                0% 0%,\n                0% 78.5%,\n                2% 78.44%,\n                4% 78.25%,\n                6% 77.96%,\n                8% 77.55%,\n                10% 77.06%,\n                12% 76.49%,\n                14% 75.87%,\n                16% 75.22%,\n                18% 74.56%,\n                20% 73.92%,\n                22% 73.31%,\n                24% 72.77%,\n                26% 72.3%,\n                28% 71.93%,\n                30% 71.67%,\n                32% 71.53%,\n                34% 71.51%,\n                36% 71.61%,\n                38% 71.83%,\n                40% 72.17%,\n                42% 72.6%,\n                44% 73.12%,\n                46% 73.71%,\n                48% 74.34%,\n                50% 75%,\n                52% 75.66%,\n                54% 76.29%,\n                56% 76.88%,\n                58% 77.4%,\n                60% 77.83%,\n                62% 78.17%,\n                64% 78.39%,\n                66% 78.49%,\n                68% 78.47%,\n                70% 78.33%,\n                72% 78.07%,\n                74% 77.7%,\n                76% 77.23%,\n                78% 76.69%,\n                80% 76.08%,\n                82% 75.44%,\n                84% 74.78%,\n                86% 74.13%,\n                88% 73.51%,\n                90% 72.94%,\n                92% 72.45%,\n                94% 72.04%,\n                96% 71.75%,\n                98% 71.56%,\n                100% 71.5%\n            )" }
  }, _attrs))}><div class="h-[100%] w-[100%] relative z-10 flex items-center justify-center"><div class="h-[100%] w-[100%] absolute opacity-50 bg-slate-900 top-0 left-0 z-10"></div></div><div class="absolute z-20 text-center"><h1 class="font-black text-5xl text-white z-20"> Welcome to Foodtrips </h1></div></div>`);
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
