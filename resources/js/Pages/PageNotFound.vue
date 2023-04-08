<template>
    <div class="h-screen flex items-center justify-center">
        <div class="text-center">
            <img
                class="h-96 w-100 mx-auto mb-10"
                src="/storage/image/not-found/not-found.png"
                alt="404 Not Found Image"
            />

            <Link href="/" class="text-4xl">Back to homepage!</Link>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

const back = () => {
    window.history.back();
};
</script>
