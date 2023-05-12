<template>
    <AuthenticatedLayout>
        <NavLink :href="route('hero.edit', 1)">Edit Homepage</NavLink>
        <NavLink :href="route('logo.edit', 1)">Edit Logo</NavLink>
    </AuthenticatedLayout>
</template>

<script setup>
import NavLink from "@/Components/NavLink.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
</script>