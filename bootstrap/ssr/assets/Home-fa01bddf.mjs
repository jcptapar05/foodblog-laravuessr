import { mergeProps, unref, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./BlogLayout-9f2eb68d.mjs";
import { Head } from "@inertiajs/vue3";
import { computed } from "@vue/reactivity";
import { _ as _sfc_main$3 } from "./Cards-95af3551.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main$1 = {
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    hero: Object
  },
  setup(__props) {
    const props = __props;
    const heroImg = computed(() => {
      return "/storage/image/" + props.hero[0].image;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "h-[95vh] w-100 relative flex items-center justify-center bg-no-repeat bg-cover bg-center",
        style: [{ background: "url( " + unref(heroImg) + ") no-repeat center center", backgroundSize: "cover" }, { "clip-path": "polygon(\r\n                100% 0%,\r\n                0% 0%,\r\n                0% 78.5%,\r\n                2% 78.44%,\r\n                4% 78.25%,\r\n                6% 77.96%,\r\n                8% 77.55%,\r\n                10% 77.06%,\r\n                12% 76.49%,\r\n                14% 75.87%,\r\n                16% 75.22%,\r\n                18% 74.56%,\r\n                20% 73.92%,\r\n                22% 73.31%,\r\n                24% 72.77%,\r\n                26% 72.3%,\r\n                28% 71.93%,\r\n                30% 71.67%,\r\n                32% 71.53%,\r\n                34% 71.51%,\r\n                36% 71.61%,\r\n                38% 71.83%,\r\n                40% 72.17%,\r\n                42% 72.6%,\r\n                44% 73.12%,\r\n                46% 73.71%,\r\n                48% 74.34%,\r\n                50% 75%,\r\n                52% 75.66%,\r\n                54% 76.29%,\r\n                56% 76.88%,\r\n                58% 77.4%,\r\n                60% 77.83%,\r\n                62% 78.17%,\r\n                64% 78.39%,\r\n                66% 78.49%,\r\n                68% 78.47%,\r\n                70% 78.33%,\r\n                72% 78.07%,\r\n                74% 77.7%,\r\n                76% 77.23%,\r\n                78% 76.69%,\r\n                80% 76.08%,\r\n                82% 75.44%,\r\n                84% 74.78%,\r\n                86% 74.13%,\r\n                88% 73.51%,\r\n                90% 72.94%,\r\n                92% 72.45%,\r\n                94% 72.04%,\r\n                96% 71.75%,\r\n                98% 71.56%,\r\n                100% 71.5%\r\n            )" }]
      }, _attrs))}><div class="h-[100%] w-[100%] relative z-10 flex items-center justify-center"><div class="h-[100%] w-[100%] absolute opacity-50 bg-slate-900 top-0 left-0 z-10"></div></div><div class="absolute z-20 text-center"><h1 class="font-black text-5xl text-white z-20">${ssrInterpolate(__props.hero[0].name)}</h1></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Hero/Hero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    blogs: Object,
    hero: Object
  },
  setup(__props) {
    const props = __props;
    const blogsComputed = computed(() => {
      return props.blogs.splice(0, 4);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Home" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta head-key="description" name="description" content="Experience the best of Filipino cuisine and culture with our food and travel guide to the Philippines. Discover mouth-watering local dishes, breathtaking landscapes, and insider tips from locals. Start planning your trip to the Philippines today!"${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: "Experience the best of Filipino cuisine and culture with our food and travel guide to the Philippines. Discover mouth-watering local dishes, breathtaking landscapes, and insider tips from locals. Start planning your trip to the Philippines today!"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, { hero: __props.hero }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, { hero: __props.hero }, null, 8, ["hero"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { blogs: unref(blogsComputed) }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-4" }, [
                createVNode(_sfc_main$3, { blogs: unref(blogsComputed) }, null, 8, ["blogs"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Home/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
