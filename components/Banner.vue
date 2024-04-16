<script setup>

</script>
<template>
    <div 
    class="w-full h-[100vh] bg-gray-950 flex flex-col space-y-2 justify-start items-center bg-cover bg-bottom"
    style="background-image: url(/banner.jpg);">
        <div class="flex flex-row space-x-4 items-center">
            <p class="text-gray-50 text-[32px] txt-bold flex flex-row items-center justify-center">
                <span class="ba pr-2">2024</span>
                5/2
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
                </svg>
            7/30</p>
            <ul class="text-gray-50">
                <li class="text-[12px] txt-thin">主場 試放場(馬公觀音亭園區) 煙火施放時間 | 21:00</li>
                <li class="text-[12px] txt-thin">離島區 煙火施放時間 | 21:00</li>
            </ul>
        </div>
        <div>
            <ul class="text-gray-50 flex flex-col justify-center items-center">
                <li class="text-[72px] txt-Bold">澎湖國際海上花火節</li>
                <li class="text-[28px] txt-Bold">航海王動畫25週年催燦之夜</li>
            </ul>
        </div>
    </div>
</template>

<style>
.ba {
    filter: brightness(110%);
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffcc00,
        0 0 35px #ffcc00, 0 0 40px #ffcc00, 0 0 50px #ffcc00, 0 0 75px #ffcc00;
    animation: pink 1.5s ease-in-out infinite alternate;
}
</style>
