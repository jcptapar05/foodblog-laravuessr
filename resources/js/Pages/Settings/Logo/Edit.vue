<template>
    <AuthenticatedLayout>
        <div class="max-w-[600px] mx-auto">
            <form @submit.prevent="submit" method="post">

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Image
                    </label>
                    <input
                        class="focus:ring-transparent focus:outline-none"
                        type="file"
                        @change="item.image = $event.target.files[0]"
                    />
                </div>

                <div class="w-100 text-end">
                    <button
                        class="rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { router, useForm } from "@inertiajs/vue3";

const props = defineProps({
    logo: Object,
});

const item = useForm({
    image: props.logo.image,
});


const submit = () => {
    router.post(route("logo.update", 1), {
        _method: "put",
        image: item.image,
    });
};

</script>