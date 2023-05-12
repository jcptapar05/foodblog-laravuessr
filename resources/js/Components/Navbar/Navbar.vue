<template>
    <nav class="shadow">
        <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
        >
            <Link href="/" class="flex items-center">
                <span
                    class="self-center text-2xl font-semibold whitespace-nowrap"
                >
                    <img
                        :src="`/storage/image/${logos}`"
                        alt="Foodtrips"
                        style="height: 80px"
                    />
                </span>
            </Link>
            <button
                data-collapse-toggle="navbar-solid-bg"
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-solid-bg"
                :aria-expanded="isOpen"
                @click="isOpen = !isOpen"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
            <div
                :class="
                    !isOpen
                        ? 'hidden w-full md:block md:w-auto'
                        : 'w-full md:block md:w-auto'
                "
                id="navbar-solid-bg"
            >
                <ul
                    class="flex flex-col md:items-center font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent"
                >
                    <li>
                        <Link
                            href="/"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 md:dark:hover:bg-transparent"
                            aria-current="page"
                            :class="
                                $page.url == '/'
                                    ? 'text-green-600'
                                    : 'text-gray-900'
                            "
                            >Home</Link
                        >
                    </li>
                    <li>
                        <Link
                            href="/foods"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 md:dark:hover:bg-transparent"
                            :class="
                                $page.url == '/foods'
                                    ? 'text-green-600'
                                    : 'text-gray-900'
                            "
                            >Blogs</Link
                        >
                    </li>
                    <!-- <li>
                        <a
                            href="#"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                            :class="$page.url == '/travels' ? 'text-blue-600' : 'text-gray-900'">Travels</a
                        >
                    </li> -->
                    <li>
                        <!-- <input type="text" class="rounded-3xl ps-6" placeholder="Search..."> -->
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { ref, computed } from "vue";

const page = usePage();

const isOpen = ref(false);

const logos = computed(() => page.props.logo.logo[0].image);
</script>
