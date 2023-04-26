import { unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-8d4e0858.mjs";
import { Head, Link } from "@inertiajs/vue3";
import _sfc_main$2 from "./BlogLists-323b316e.mjs";
import "./ApplicationLogo-8b847249.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    blogs: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Blogs" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-100 text-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/admin/blogs/create",
              class: "rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Add Food`);
                } else {
                  return [
                    createTextVNode("Add Food")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$2, { blogs: __props.blogs }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "w-100 text-end" }, [
                createVNode(unref(Link), {
                  href: "/admin/blogs/create",
                  class: "rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Add Food")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_sfc_main$2, { blogs: __props.blogs }, null, 8, ["blogs"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
