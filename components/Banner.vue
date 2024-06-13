<template>
    <div 
    class="relative w-full h-[75vh] sm:h-[100vh] bg-gray-950 flex flex-col space-y-2 justify-start items-center bg-cover bg-bottom overflow-hidden"
    style="background-image: url(/banner.jpg);">
        <div class="flex flex-row space-x-4 justify-start items-center pt-20 md:pt-28 lg:pt-6">
            <p class="text-gray-50 text-[16px] sm:text-[32px] txt-Black flex flex-row items-center justify-center">
                <span class="txt-shadow pr-2">2024</span>
                5/2
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
                </svg>
            7/30</p>
            <ul class="text-gray-50">
                <li class="text-[8px] sm:text-[12px] txt-Medium">主場 試放場(馬公觀音亭園區) 煙火施放時間 | 21:00</li>
                <li class="text-[8px] sm:text-[12px] txt-Medium">離島區 煙火施放時間 | 21:00</li>
            </ul>
        </div>
        <div>
            <ul class="text-gray-50 flex flex-col justify-center items-center">
                <li class="text-[36px] sm:text-[72px] txt-Black">澎湖國際海上花火節</li>
                <li class="text-[18px] sm:text-[28px] txt-Black">航海王動畫25週年催燦之夜</li>
            </ul>
        </div>
        <!-- 航海王夥伴 -->
        <div class="absolute -bottom-6 sm:-bottom-4">
            <NuxtImg preload format="webp" class="w-[960px] sm:w-[720px] 2xl:w-[960px] aspect-[3/2] object-contain" src="/25th.webp" alt="onepiece 25th" />
        </div>
        <!-- 澎湖 Logo -->
        <div class="absolute -right-4 sm:right-0 top-4 z-10">
            <NuxtImg preload format="webp" class="w-[75px] sm:w-[90px] lg:w-[180px] aspect-[3/2] object-contain" src="/penghu.png" alt="penghu" />
        </div>
        <!-- 東映 Logo -->
        <div class="absolute -left-2 sm:left-4 bottom-4 z-10">
            <NuxtImg preload format="webp" class="w-[75px] sm:w-[120px] lg:w-[180px] aspect-[3/2] object-contain" src="/toei.png" alt="toei" />
        </div>
        <!-- 航海王 Logo -->
        <div class="absolute right-2 sm:right-16 bottom-4 z-10">
            <NuxtImg preload format="webp" class="w-[75px] sm:w-[90px] lg:w-[180px] aspect-[3/2] object-contain" src="/onepiece.png" alt="onepiece" />
        </div>
    </div>
</template>
<style scoped>
.txt-shadow {
    filter: brightness(110%);
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffcc00,
                 0 0 35px #ffcc00, 0 0 40px #ffcc00, 0 0 50px #ffcc00, 0 0 75px #ffcc00;
}
</style>
