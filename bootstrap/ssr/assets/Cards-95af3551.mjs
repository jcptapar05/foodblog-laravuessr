import { mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Cards",
  __ssrInlineRender: true,
  props: {
    blogs: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.blogs, (blog) => {
        _push(ssrRenderComponent(unref(Link), {
          key: blog.id,
          href: _ctx.route("blog.single", blog.slug),
          class: "max-w-sm bg-white rounded-2xl shadow hover:-translate-y-1 hover:shadow-md transition duration-150 ease-out mx-auto sm:mx-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="rounded-t-2xl h-60 w-screen object-cover"${ssrRenderAttr("src", "/storage/image/" + blog.image)}${ssrRenderAttr("alt", "/storage/image/" + blog.name + "image")}${_scopeId}><div class="p-5 grid grid-cols-1 gap-4 content-around"${_scopeId}><div${_scopeId}><h2 class="mb-2 text-3xl font-bold tracking-tight text-gray-900"${_scopeId}>${ssrInterpolate(blog.name)}</h2><p class="mb-3 font-normal text-gray-700 truncate"${_scopeId}>${ssrInterpolate(blog.description)}</p></div><div class="w-full"${_scopeId}><!--[-->`);
              ssrRenderList(blog.categories, (cat) => {
                _push2(`<small class="px-3 py-2 bg-green-600 rounded-2xl text-white me-3 inline-block mb-3"${_scopeId}>${ssrInterpolate(cat)}</small>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              return [
                createVNode("img", {
                  class: "rounded-t-2xl h-60 w-screen object-cover",
                  src: "/storage/image/" + blog.image,
                  alt: "/storage/image/" + blog.name + "image"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "p-5 grid grid-cols-1 gap-4 content-around" }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "mb-2 text-3xl font-bold tracking-tight text-gray-900" }, toDisplayString(blog.name), 1),
                    createVNode("p", { class: "mb-3 font-normal text-gray-700 truncate" }, toDisplayString(blog.description), 1)
                  ]),
                  createVNode("div", { class: "w-full" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(blog.categories, (cat) => {
                      return openBlock(), createBlock("small", { class: "px-3 py-2 bg-green-600 rounded-2xl text-white me-3 inline-block mb-3" }, toDisplayString(cat), 1);
                    }), 256))
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Cards/Cards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
