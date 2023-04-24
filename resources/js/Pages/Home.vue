<template>
    <Head title="Home">
        <meta
            head-key="description"
            name="description"
            content="Experience the best of Filipino cuisine and culture with our food and travel guide to the Philippines. Discover mouth-watering local dishes, breathtaking landscapes, and insider tips from locals. Start planning your trip to the Philippines today!"
        />
    </Head>

    <BlogLayout>
        <template #header>
            <!-- <Slider></Slider> -->
            <Hero></Hero>
        </template>
        <div class="px-4">
            <Cards :blogs="blogsComputed"></Cards>
        </div>
    </BlogLayout>
</template>

<script setup>
import BlogLayout from "@/Layouts/BlogLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
// import Slider from "./Public/Home/Slider.vue";
import Cards from "./Public/Home/Cards.vue";
import { computed } from "@vue/reactivity";
import Hero from "./Public/Home/Hero.vue";

const props = defineProps({
    blogs: Object,
});

const blogsComputed = computed(() => {
    return props.blogs.splice(0, 4);
});

</script>
