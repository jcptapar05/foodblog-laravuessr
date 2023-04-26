import { unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BlogLayout-9f2eb68d.mjs";
import { Head } from "@inertiajs/vue3";
import _sfc_main$2 from "./Cards-cf880866.mjs";
import { computed } from "@vue/reactivity";
import Hero from "./Hero-e1be81af.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    blogs: Object
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
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Hero, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Hero)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { blogs: unref(blogsComputed) }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-4" }, [
                createVNode(_sfc_main$2, { blogs: unref(blogsComputed) }, null, 8, ["blogs"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
