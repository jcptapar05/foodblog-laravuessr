<template>
    <Navbar></Navbar>

    <div class="p-0">
        <div class="w-100 mb-16">
            <slot name="header"></slot>
        </div>
        <div class="container mx-auto mb-32 md:px-10">
            <slot></slot>
        </div>
    </div>

    <Footer></Footer>
</template>

<script setup>
import Footer from "@/Components/Footer/Footer.vue";
import Navbar from "@/Components/Navbar/Navbar.vue";
import { Head } from "@inertiajs/vue3";
</script>
