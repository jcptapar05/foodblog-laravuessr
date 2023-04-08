<template>
    <div class="mx-auto w-100 p-0 mb-40 h-3/5">
        <Carousel :autoplay="3000" :wrap-around="true">
            <Slide v-for="slide in imgs" :key="slide">
                <div class="carousel__item h-[44rem]">
                    <div class="relative h-100 w-100">
                        <img
                            class="h-[44rem] object-cover w-screen object-left-center cursor-grab"
                            :src="`/storage/image/sliders/${slide}`"
                            :alt="slide"
                        />
                    </div>
                    <h1 class="mb-32 font-black text-5xl absolute z-20">
                        Welcome to PinoyFoodTrip
                    </h1>
                    <div
                        class="absolute h-screen w-screen opacity-50 bg-slate-900 top-0 left-0 z-10 cursor-grab"
                    ></div>
                </div>
            </Slide>

            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "Autoplay",
    components: {
        Carousel,
        Slide,
        Pagination,
    },

    data() {
        return {
            imgs: [
                "home-img-3.jpg",
                "home-img-1.jpg",
                "home-img-2.jpg",
                "home-img-4.jpg",
                "home-img-5.jpg",
            ],
        };
    },
});
</script>

<style>
.carousel__item {
    width: 100%;
    /* background-color: green; */
    color: var(--vc-clr-white);
    font-size: 20px;
    /* border-radius: 8px; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>
