import Multiselect from "@vueform/multiselect";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
/* empty css                                                            */import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  components: {
    Multiselect
  },
  data() {
    return {
      value: null,
      options: ["Batman", "Robin", "Joker"]
    };
  },
  methods: {
    selectCategory() {
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Multiselect = resolveComponent("Multiselect");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Multiselect, {
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    mode: "tags",
    "close-on-select": false,
    searchable: true,
    "create-option": true,
    options: $data.options,
    class: "focus:outline-none focus:ring-0 shadow",
    onClick: () => {
    }
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/partials/CategoryDropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CategoryDropdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CategoryDropdown as default
};
