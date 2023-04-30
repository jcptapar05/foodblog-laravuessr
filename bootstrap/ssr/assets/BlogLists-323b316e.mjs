import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const BlogLists_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "BlogLists",
  __ssrInlineRender: true,
  props: {
    blogs: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><table class="w-full mt-10 text-center border"><thead><tr><th class="py-6 bg-slate-200">Name</th><th class="py-6 bg-slate-200">Image</th><th class="py-6 bg-slate-200">Video link</th><th class="py-6 bg-slate-200">Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.blogs, (blog) => {
        _push(`<tr><td class="py-2 border">${ssrInterpolate(blog.name)}</td><td class="py-2 border"><img${ssrRenderAttr("src", `/storage/image/${blog.image}`)} class="h-16 mx-auto"${ssrRenderAttr("alt", blog.name)}></td><td class="py-2 border text-center"><a${ssrRenderAttr("href", blog.video)} target="_blank" class="turncate-1 mx-auto text-blue-400">${ssrInterpolate(blog.video)}</a></td><td class="py-2 border">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("blogs.edit", blog.slug),
          class: "rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 me-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Edit `);
            } else {
              return [
                createTextVNode(" Edit ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("blogs.destroy", blog.slug),
          method: "delete",
          as: "button",
          class: "rounded-lg bg-red-600 hover:bg-red-700 text-white py-3 px-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Delete `);
            } else {
              return [
                createTextVNode(" Delete ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/partials/BlogLists.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
