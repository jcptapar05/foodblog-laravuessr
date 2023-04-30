import { ref, watch, unref, withCtx, createVNode, withDirectives, isRef, vModelText, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Cards-95af3551.mjs";
import { _ as _sfc_main$1 } from "./BlogLayout-9f2eb68d.mjs";
import { router, Head, Link } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    blogs: Object,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    let search = ref(props.filters.search);
    watch(search, (value) => {
      router.get(
        "/foods",
        { search: value },
        {
          preserveState: true,
          replace: true
        }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Filipino Foods</title><meta head-key="description" name="description" content="Embark on a culinary journey through the Philippines with our guide to authentic Filipino cuisine. Discover the rich flavors and diverse regional dishes that make Filipino food unique. Join us in exploring the best places to eat and experience the Philippines&#39; vibrant food culture!"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Filipino Foods"),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: "Embark on a culinary journey through the Philippines with our guide to authentic Filipino cuisine. Discover the rich flavors and diverse regional dishes that make Filipino food unique. Join us in exploring the best places to eat and experience the Philippines' vibrant food culture!"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4"${_scopeId}><div class="text-center"${_scopeId}><h1 class="mb-32 font-black text-7xl"${_scopeId}>Filipino Foods</h1></div><div${_scopeId}><input${ssrRenderAttr("value", unref(search))} type="text" class="rounded-3xl ps-6" placeholder="Search..."${_scopeId}></div>`);
            if (__props.blogs.data.length > 0) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                blogs: __props.blogs.data,
                class: "my-16"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="text-center"${_scopeId}><img class="h-96 w-100 mx-auto" src="/storage/image/not-found/not-found.png" alt="404 Not Found Image"${_scopeId}></div>`);
            }
            if (__props.blogs.links.length > 3) {
              _push2(`<div class="flex justify-center space-x-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.blogs.links, (link, index) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: index,
                  class: ["px-4 py-3 text-sm leading-4 rounded hover:bg-green-500 hover:text-white", link.active && "text-white bg-green-600"],
                  href: link.url
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-4" }, [
                createVNode("div", { class: "text-center" }, [
                  createVNode("h1", { class: "mb-32 font-black text-7xl" }, "Filipino Foods")
                ]),
                createVNode("div", null, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : search = $event,
                    type: "text",
                    class: "rounded-3xl ps-6",
                    placeholder: "Search..."
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(search)]
                  ])
                ]),
                __props.blogs.data.length > 0 ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  blogs: __props.blogs.data,
                  class: "my-16"
                }, null, 8, ["blogs"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center"
                }, [
                  createVNode("img", {
                    class: "h-96 w-100 mx-auto",
                    src: "/storage/image/not-found/not-found.png",
                    alt: "404 Not Found Image"
                  })
                ])),
                __props.blogs.links.length > 3 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "flex justify-center space-x-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.blogs.links, (link, index) => {
                    return openBlock(), createBlock(unref(Link), {
                      key: index,
                      class: ["px-4 py-3 text-sm leading-4 rounded hover:bg-green-500 hover:text-white", link.active && "text-white bg-green-600"],
                      href: link.url,
                      innerHTML: link.label
                    }, null, 8, ["class", "href", "innerHTML"]);
                  }), 128))
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Foods/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
