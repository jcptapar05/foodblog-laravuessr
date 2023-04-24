import { reactive, ref, unref, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-af2b1b53.mjs";
import { useForm, Head } from "@inertiajs/vue3";
import Multiselect from "@vueform/multiselect";
/* empty css                                                            */import "./ApplicationLogo-8b847249.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = reactive({
      options: ["Pork", "Beef", "Vegetables", "Dessert", "Chicken", "Fish", "Sea Foods", "Street Foods", "Goat", "Carabao", "Cakes", "Others"]
    });
    const categoriesValue = ref(null);
    const receipts = ref([
      {
        done: false,
        receipt: null
      }
    ]);
    const addReceipt = () => {
      receipts.value.push({
        done: false,
        receipt: null
      });
    };
    const item = useForm({
      name: null,
      description: null,
      receipts: receipts.value,
      image: null,
      video: null,
      instructions: null,
      categories: categoriesValue
    });
    const submit = () => {
      item.post(route("blogs.store"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Blogs" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-[90%] md:max-w-[50%] mx-auto"${_scopeId}><div class="mb-6"${_scopeId}><h1 class="text-4xl"${_scopeId}>Add Blog</h1></div><form method="post"${_scopeId}><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2"${_scopeId}> Name </label><input class="focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"${ssrRenderAttr("value", unref(item).name)}${_scopeId}></div><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2"${_scopeId}> Description </label><textarea class="focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" rows="10"${_scopeId}>${ssrInterpolate(unref(item).description)}</textarea></div><!--[-->`);
            ssrRenderList(receipts.value, (receipt) => {
              _push2(`<div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2"${_scopeId}> Receipt </label><input class="focus:ring-transparent w-3/4 shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"${ssrRenderAttr("value", receipt.receipt)}${_scopeId}><div class="w-1/4 text-start ps-3 inline-block"${_scopeId}><button type="button" class="rounded-full bg-blue-600 hover:bg-blue-700 text-white"${_scopeId}><i class="fa-solid fa-plus px-1.5 py-1"${_scopeId}></i></button></div></div>`);
            });
            _push2(`<!--]--><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2"${_scopeId}> Instructions </label><textarea class="focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" rows="10"${_scopeId}>${ssrInterpolate(unref(item).instructions)}</textarea></div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Multiselect), {
              modelValue: categoriesValue.value,
              "onUpdate:modelValue": ($event) => categoriesValue.value = $event,
              mode: "tags",
              "close-on-select": false,
              searchable: true,
              "create-option": true,
              options: categories.options
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2"${_scopeId}> Image </label><input class="focus:ring-transparent focus:outline-none" type="file"${_scopeId}></div><div class="mb-10"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2"${_scopeId}> Video link </label><input class="focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Optional"${ssrRenderAttr("value", unref(item).video)}${_scopeId}></div><div class="w-100 text-end"${_scopeId}><button class="rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4"${_scopeId}> Add Blog </button></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-[90%] md:max-w-[50%] mx-auto" }, [
                createVNode("div", { class: "mb-6" }, [
                  createVNode("h1", { class: "text-4xl" }, "Add Blog")
                ]),
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
                    createVNode("label", { class: "block text-gray-700 text-sm font-bold mb-2" }, " Description "),
                    withDirectives(createVNode("textarea", {
                      class: "focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                      type: "text",
                      "onUpdate:modelValue": ($event) => unref(item).description = $event,
                      rows: "10"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(item).description]
                    ])
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(receipts.value, (receipt) => {
                    return openBlock(), createBlock("div", {
                      class: "mb-4",
                      key: receipt.name
                    }, [
                      createVNode("label", { class: "block text-gray-700 text-sm font-bold mb-2" }, " Receipt "),
                      withDirectives(createVNode("input", {
                        class: "focus:ring-transparent w-3/4 shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                        type: "text",
                        "onUpdate:modelValue": ($event) => receipt.receipt = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, receipt.receipt]
                      ]),
                      createVNode("div", { class: "w-1/4 text-start ps-3 inline-block" }, [
                        createVNode("button", {
                          onClick: addReceipt,
                          type: "button",
                          class: "rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                        }, [
                          createVNode("i", { class: "fa-solid fa-plus px-1.5 py-1" })
                        ])
                      ])
                    ]);
                  }), 128)),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-gray-700 text-sm font-bold mb-2" }, " Instructions "),
                    withDirectives(createVNode("textarea", {
                      class: "focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                      type: "text",
                      "onUpdate:modelValue": ($event) => unref(item).instructions = $event,
                      rows: "10"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(item).instructions]
                    ])
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode(unref(Multiselect), {
                      modelValue: categoriesValue.value,
                      "onUpdate:modelValue": ($event) => categoriesValue.value = $event,
                      mode: "tags",
                      "close-on-select": false,
                      searchable: true,
                      "create-option": true,
                      options: categories.options
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-gray-700 text-sm font-bold mb-2" }, " Image "),
                    createVNode("input", {
                      class: "focus:ring-transparent focus:outline-none",
                      type: "file",
                      onChange: ($event) => unref(item).image = $event.target.files[0]
                    }, null, 40, ["onChange"])
                  ]),
                  createVNode("div", { class: "mb-10" }, [
                    createVNode("label", { class: "block text-gray-700 text-sm font-bold mb-2" }, " Video link "),
                    withDirectives(createVNode("input", {
                      class: "focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                      type: "text",
                      placeholder: "Optional",
                      "onUpdate:modelValue": ($event) => unref(item).video = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(item).video]
                    ])
                  ]),
                  createVNode("div", { class: "w-100 text-end" }, [
                    createVNode("button", { class: "rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4" }, " Add Blog ")
                  ])
                ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
