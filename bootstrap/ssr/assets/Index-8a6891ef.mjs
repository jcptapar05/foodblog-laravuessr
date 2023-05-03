import { unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BlogLayout-febf0ef7.mjs";
import { Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const Index_vue_vue_type_style_index_0_scoped_89dc35db_lang = "";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    blog: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-89dc35db${_scopeId}>${ssrInterpolate(__props.blog.name)}</title><meta head-key="description" name="description"${ssrRenderAttr("content", __props.blog.description)} data-v-89dc35db${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.blog.name), 1),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: __props.blog.description
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto w-full md:w-8/12 px-4" data-v-89dc35db${_scopeId}><h1 class="mb-10 font-black text-5xl" data-v-89dc35db${_scopeId}>${ssrInterpolate(__props.blog.name)}</h1><img class="w-full object-cover rounded-3xl"${ssrRenderAttr("src", `/storage/image/${__props.blog.image}`)}${ssrRenderAttr("alt", __props.blog.image)} data-v-89dc35db${_scopeId}><p class="my-10" data-v-89dc35db${_scopeId}>${ssrInterpolate(__props.blog.description)}</p><div class="mb-10" data-v-89dc35db${_scopeId}><div class="mb-3 flex items-center gap-x-2" data-v-89dc35db${_scopeId}><h4 class="text-lg font-semibold" data-v-89dc35db${_scopeId}>Ingredients</h4><small class="mt-0" data-v-89dc35db${_scopeId}>(mga sangkap)</small></div><div data-v-89dc35db${_scopeId}><!--[-->`);
            ssrRenderList(__props.blog.receipts, (receipt) => {
              _push2(`<div data-v-89dc35db${_scopeId}><input type="checkbox"${ssrRenderAttr("name", receipt.receipt)}${ssrRenderAttr("id", receipt.receipt)} data-v-89dc35db${_scopeId}><label${ssrRenderAttr("for", receipt.receipt)} class="${ssrRenderClass([!receipt.done && "line-through", "ms-4 cursor-pointer"])}" data-v-89dc35db${_scopeId}>${ssrInterpolate(receipt.receipt)}</label></div>`);
            });
            _push2(`<!--]--></div></div><div class="mt-10 mb-12" data-v-89dc35db${_scopeId}><div class="mb-3 flex items-center gap-x-2" data-v-89dc35db${_scopeId}><h4 class="text-lg font-semibold" data-v-89dc35db${_scopeId}>Instruction</h4><small class="mt-0" data-v-89dc35db${_scopeId}>(pagluluto)</small></div><p data-v-89dc35db${_scopeId}>${__props.blog.instructions}</p></div><h4 class="mb-2 text-lg font-semibold" data-v-89dc35db${_scopeId}>Sample video: (CTTO)</h4><iframe class="w-full rounded-2xl" height="500"${ssrRenderAttr("src", __props.blog.video)} data-v-89dc35db${_scopeId}>
            </iframe></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto w-full md:w-8/12 px-4" }, [
                createVNode("h1", { class: "mb-10 font-black text-5xl" }, toDisplayString(__props.blog.name), 1),
                createVNode("img", {
                  class: "w-full object-cover rounded-3xl",
                  src: `/storage/image/${__props.blog.image}`,
                  alt: __props.blog.image
                }, null, 8, ["src", "alt"]),
                createVNode("p", { class: "my-10" }, toDisplayString(__props.blog.description), 1),
                createVNode("div", { class: "mb-10" }, [
                  createVNode("div", { class: "mb-3 flex items-center gap-x-2" }, [
                    createVNode("h4", { class: "text-lg font-semibold" }, "Ingredients"),
                    createVNode("small", { class: "mt-0" }, "(mga sangkap)")
                  ]),
                  createVNode("div", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.blog.receipts, (receipt) => {
                      return openBlock(), createBlock("div", {
                        key: receipt.id
                      }, [
                        createVNode("input", {
                          type: "checkbox",
                          name: receipt.receipt,
                          id: receipt.receipt,
                          onClick: ($event) => receipt.done = !receipt.done
                        }, null, 8, ["name", "id", "onClick"]),
                        createVNode("label", {
                          class: ["ms-4 cursor-pointer", !receipt.done && "line-through"],
                          for: receipt.receipt
                        }, toDisplayString(receipt.receipt), 11, ["for"])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "mt-10 mb-12" }, [
                  createVNode("div", { class: "mb-3 flex items-center gap-x-2" }, [
                    createVNode("h4", { class: "text-lg font-semibold" }, "Instruction"),
                    createVNode("small", { class: "mt-0" }, "(pagluluto)")
                  ]),
                  createVNode("p", {
                    innerHTML: __props.blog.instructions
                  }, null, 8, ["innerHTML"])
                ]),
                createVNode("h4", { class: "mb-2 text-lg font-semibold" }, "Sample video: (CTTO)"),
                createVNode("iframe", {
                  class: "w-full rounded-2xl",
                  height: "500",
                  src: __props.blog.video
                }, "\r\n            ", 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Single/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-89dc35db"]]);
export {
  Index as default
};
