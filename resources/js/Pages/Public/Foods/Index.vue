<template>
    <Head>
        <title>Filipino Foods</title>
        <meta
            head-key="description"
            name="description"
            content="Embark on a culinary journey through the Philippines with our guide to authentic Filipino cuisine. Discover the rich flavors and diverse regional dishes that make Filipino food unique. Join us in exploring the best places to eat and experience the Philippines' vibrant food culture!"
        />
    </Head>

    <BlogLayout>
        <div class="px-4">
            <div class="text-center">
                <h1 class="mb-32 font-black text-7xl">Filipino Foods</h1>
            </div>

            <div>
                <input
                    v-model="search"
                    type="text"
                    class="rounded-3xl ps-6"
                    placeholder="Search..."
                />
            </div>
            
            <template v-if="blogs.data.length > 0">
                <Cards :blogs="blogs.data" class="my-16"></Cards>
            </template>
            <template v-else>
                <div class="text-center">
                    <img class="h-96 w-100 mx-auto" src="/storage/image/not-found/not-found.png" alt="404 Not Found Image">
                </div>
            </template>

            <div
                v-if="blogs.links.length > 3"
                class="flex justify-center space-x-4"
            >
                <Link
                    v-for="(link, index) in blogs.links"
                    :key="index"
                    class="px-4 py-3 text-sm leading-4 rounded hover:bg-green-500 hover:text-white"
                    :class="link.active && 'text-white bg-green-600' "
                    :href="link.url"
                    v-html="link.label"
                />
            </div>
        </div>
    </BlogLayout>
</template>

<script setup>
import Cards from "@/Components/Cards/Cards.vue";
import BlogLayout from "@/Layouts/BlogLayout.vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { ref, watch } from "vue";

const props = defineProps({
    blogs: Object,
    filters: Object
});

let search = ref(props.filters.search);

watch(search, (value) => {
    router.get(
        "/foods",
        { search: value },
        {
            preserveState: true,
            replace: true,
        }
    );
});


</script>
