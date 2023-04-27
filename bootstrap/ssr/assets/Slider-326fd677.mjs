import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const carousel = "";
const Slider_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination
  },
  data() {
    return {
      imgs: [
        "home-img-3.jpg",
        "home-img-1.jpg",
        "home-img-2.jpg",
        "home-img-4.jpg",
        "home-img-5.jpg"
      ]
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-100 p-0 mb-40 h-3/5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Carousel, {
    autoplay: 3e3,
    "wrap-around": true
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Pagination, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Pagination)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.imgs, (slide) => {
          _push2(ssrRenderComponent(_component_Slide, { key: slide }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="carousel__item h-[44rem]"${_scopeId2}><div class="relative h-100 w-100"${_scopeId2}><img class="h-[44rem] object-cover w-screen object-left-center cursor-grab"${ssrRenderAttr("src", `/storage/image/sliders/${slide}`)}${ssrRenderAttr("alt", slide)}${_scopeId2}></div><h1 class="mb-32 font-black text-5xl absolute z-20"${_scopeId2}> Welcome to PinoyFoodTrip </h1><div class="absolute h-screen w-screen opacity-50 bg-slate-900 top-0 left-0 z-10 cursor-grab"${_scopeId2}></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "carousel__item h-[44rem]" }, [
                    createVNode("div", { class: "relative h-100 w-100" }, [
                      createVNode("img", {
                        class: "h-[44rem] object-cover w-screen object-left-center cursor-grab",
                        src: `/storage/image/sliders/${slide}`,
                        alt: slide
                      }, null, 8, ["src", "alt"])
                    ]),
                    createVNode("h1", { class: "mb-32 font-black text-5xl absolute z-20" }, " Welcome to PinoyFoodTrip "),
                    createVNode("div", { class: "absolute h-screen w-screen opacity-50 bg-slate-900 top-0 left-0 z-10 cursor-grab" })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.imgs, (slide) => {
            return openBlock(), createBlock(_component_Slide, { key: slide }, {
              default: withCtx(() => [
                createVNode("div", { class: "carousel__item h-[44rem]" }, [
                  createVNode("div", { class: "relative h-100 w-100" }, [
                    createVNode("img", {
                      class: "h-[44rem] object-cover w-screen object-left-center cursor-grab",
                      src: `/storage/image/sliders/${slide}`,
                      alt: slide
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("h1", { class: "mb-32 font-black text-5xl absolute z-20" }, " Welcome to PinoyFoodTrip "),
                  createVNode("div", { class: "absolute h-screen w-screen opacity-50 bg-slate-900 top-0 left-0 z-10 cursor-grab" })
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Home/Slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Slider = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Slider as default
};
