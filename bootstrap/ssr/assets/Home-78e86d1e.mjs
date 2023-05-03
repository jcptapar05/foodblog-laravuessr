import { mergeProps, unref, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./BlogLayout-febf0ef7.mjs";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./Cards-95af3551.mjs";
import { computed } from "@vue/reactivity";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[50vh] md:h-[80vh] container mx-auto flex items-center" }, _attrs))}><div class="w-full md:w-1/2 px-4 md:px-0"><div class="md:ps-32"><h1 class="font-black text-5xl">${ssrInterpolate(__props.hero[0].name)}</h1><p class="my-6"> Journey to the Heart of the Philippines: Where Flavor Meets Adventure. </p><div class="mt-12"><a href="#" class="me-4 px-4 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white capitalize mb-3 inline-block">view recipes</a><a href="#" class="px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white capitalize inline-block">See more</a></div></div></div><div class="md:w-1/2 hidden md:block px-8"><img class="mx-auto w-full max-w-[400px] md:max-w-[440px] rotate-12"${ssrRenderAttr("src", unref(heroImg))} alt=""></div></div>`);
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Taste of the Philippines: Food & Travel Adventures" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta head-key="description" name="description" content="Explore the beauty and flavor of the Philippines with our food and travel guide. Discover authentic Filipino cuisine and exciting travel destinations."${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: "Explore the beauty and flavor of the Philippines with our food and travel guide. Discover authentic Filipino cuisine and exciting travel destinations."
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
            _push2(`<div class="container mx-auto px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { blogs: __props.blogs }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "container mx-auto px-4" }, [
                createVNode(_sfc_main$3, { blogs: __props.blogs }, null, 8, ["blogs"])
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
