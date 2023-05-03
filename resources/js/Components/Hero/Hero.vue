<template>
    <div class="h-[50vh] md:h-[80vh] container mx-auto flex items-center">
        <div class="w-full md:w-1/2 px-4 md:px-0">
            <div class="md:ps-32">
                <h1 class="font-black text-5xl">
                    {{ hero[0].name }}
                </h1>
                <p class="my-6">
                    Journey to the Heart of the Philippines: Where Flavor Meets
                    Adventure.
                </p>
                <div class="mt-12">
                    <a
                        href="#"
                        class="me-4 px-4 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white capitalize mb-3 inline-block"
                        >view recipes</a
                    >
                    <a
                        href="#"
                        class="px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white capitalize inline-block"
                        >See more</a
                    >
                </div>
            </div>
        </div>
        <div class="md:w-1/2 hidden md:block px-8">
            <img class="mx-auto w-full max-w-[400px] md:max-w-[440px] rotate-12" :src="heroImg" alt="" />
        </div>
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
    hero: Object,
});

const heroImg = computed(() => {
    return "/storage/image/" + props.hero[0].image;
});
</script>
