<script setup>
const Year = new Date().getFullYear();
</script>
<template>
    <footer class="w-full h-[60px] flex justify-center items-center bg-gray-950 txt-thin py-6">
        <p class="text-gray-50 text-[12px]">© Copyright {{ Year }} Footer. All rights reserved</p>
    </footer>
</template>