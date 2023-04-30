<template>
    <div
        class="h-[95vh] w-100 relative flex items-center justify-center bg-no-repeat bg-cover bg-center" :style="{ background: 'url( ' + heroImg + ') no-repeat center center', backgroundSize: 'cover' }"
        style="
            clip-path: polygon(
                100% 0%,
                0% 0%,
                0% 78.5%,
                2% 78.44%,
                4% 78.25%,
                6% 77.96%,
                8% 77.55%,
                10% 77.06%,
                12% 76.49%,
                14% 75.87%,
                16% 75.22%,
                18% 74.56%,
                20% 73.92%,
                22% 73.31%,
                24% 72.77%,
                26% 72.3%,
                28% 71.93%,
                30% 71.67%,
                32% 71.53%,
                34% 71.51%,
                36% 71.61%,
                38% 71.83%,
                40% 72.17%,
                42% 72.6%,
                44% 73.12%,
                46% 73.71%,
                48% 74.34%,
                50% 75%,
                52% 75.66%,
                54% 76.29%,
                56% 76.88%,
                58% 77.4%,
                60% 77.83%,
                62% 78.17%,
                64% 78.39%,
                66% 78.49%,
                68% 78.47%,
                70% 78.33%,
                72% 78.07%,
                74% 77.7%,
                76% 77.23%,
                78% 76.69%,
                80% 76.08%,
                82% 75.44%,
                84% 74.78%,
                86% 74.13%,
                88% 73.51%,
                90% 72.94%,
                92% 72.45%,
                94% 72.04%,
                96% 71.75%,
                98% 71.56%,
                100% 71.5%
            );
        "
    >
        <div
            class="h-[100%] w-[100%] relative z-10 flex items-center justify-center"
        >
            <div
                class="h-[100%] w-[100%] absolute opacity-50 bg-slate-900 top-0 left-0 z-10"
            ></div>
        </div>
        <div class="absolute z-20 text-center">
            <h1 class="font-black text-5xl text-white z-20">
                {{ hero[0].name }}
            </h1>
        </div>
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
    hero: Object
})

const heroImg = computed(() => {
    return '/storage/image/' + props.hero[0].image;
});

</script>
