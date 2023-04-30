import { withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-9d298de0.mjs";
import { useForm, router } from "@inertiajs/vue3";
import "./ApplicationLogo-8b847249.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    hero: Object
  },
  setup(__props) {
    const props = __props;
    const item = useForm({
      name: props.hero.name,
      image: props.hero.image
    });
    const submit = () => {
      router.post(route("hero.update", 1), {
        _method: "put",
        name: item.name,
        image: item.image
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-[600px] mx-auto"${_scopeId}><form method="post"${_scopeId}><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2"${_scopeId}> Name </label><input class="focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"${ssrRenderAttr("value", unref(item).name)}${_scopeId}></div><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2"${_scopeId}> Image </label><input class="focus:ring-transparent focus:outline-none" type="file"${_scopeId}></div><div class="w-100 text-end"${_scopeId}><button class="rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4"${_scopeId}> Update </button></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-[600px] mx-auto" }, [
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"]),
                  method: "post"
                }, [
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-gray-700 text-sm font-bold mb-2" }, " Name "),
                    withDirectives(createVNode("input", {
                      class: "focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                      type: "text",
                      "onUpdate:modelValue": ($event) => unref(item).name = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(item).name]
                    ])
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-gray-700 text-sm font-bold mb-2" }, " Image "),
                    createVNode("input", {
                      class: "focus:ring-transparent focus:outline-none",
                      type: "file",
                      onChange: ($event) => unref(item).image = $event.target.files[0]
                    }, null, 40, ["onChange"])
                  ]),
                  createVNode("div", { class: "w-100 text-end" }, [
                    createVNode("button", { class: "rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4" }, " Update ")
                  ])
                ], 40, ["onSubmit"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Hero/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
