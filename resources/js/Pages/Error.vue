<template>
    <Head title="Page not Found!">
        <meta
            head-key="description"
            name="description"
            content="Explore the beauty and flavor of the Philippines with our food and travel guide. Discover authentic Filipino cuisine and exciting travel destinations."
        />
    </Head>
    
    <div class="h-screen flex items-center justify-center">
        <div class="text-center">
            <img
                class="h-96 w-100 mx-auto mb-10"
                src="/storage/image/not-found/not-found.png"
                alt="404 Not Found Image"
            />
            <p class="my-5">{{ description }}</p>

            <a href="/" class="text-4xl">Back to homepage!</a>
        </div>
    </div>
</template>

<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { computed } from "vue";

// const back = () => {
//     window.history.back();
// };

const props = defineProps({ status: Number });

const title = computed(() => {
    return {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden",
    }[props.status];
});

const description = computed(() => {
    return {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page.",
    }[props.status];
});
</script>
