<script setup>
const Year = new Date().getFullYear();
</script>
<template>
    <div class="w-full h-full flex justify-center items-center bg-yellow-300">
        <div class="max-w-[1024px] w-full px-4 xl:px-0 py-20">
            <ul class="flex flex-col space-y-6">
                <li class="text-[12px] text-gray-950">海迷禮</li>
                <li class="text-[12px] text-gray-950">1.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                <li class="text-[12px] text-gray-950">2.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                <li class="text-[12px] text-gray-950">3.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
            </ul>
        </div>
    </div>
    <footer class="w-full h-[60px] flex justify-center items-center bg-gray-950 txt-thin py-6">
        <p class="text-gray-50 text-[12px]">© Copyright {{ Year }} Footer. All rights reserved</p>
    </footer>
</template>