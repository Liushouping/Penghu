<template>
<div 
      data-aos="fade-up" data-aos-delay="150"
      class="mt-4 grid grid-cols-1">
        <div class="bg-gray-50 w-full h-full min-h-[600px] sm:min-h-[360px] flex flex-col sm:flex-row transition-transform hover:-translate-y-2">
          <div class="w-full sm:w-1/3 flex justify-center items-center pt-6">
            <NuxtImg format="webp" loading="lazy" class="w-[360px] aspect-[3/2] object-contain" src="/info-4.png" alt="store" />
          </div>

          <div class="relative w-full sm:w-2/3 h-full relative p-4 flex flex-col justify-center items-start">
            <div class="mb-24">
              <ul class="txt-Black text-[12px]">
                <li class="text-gray-900">航海王冰淇淋霸氣登場，獨家贈品只送不賣！</li>
                <li class="mt-2 text-[14px] sm:text-[18px] text-red-400">三種口味 ( 北海道牛奶/抹茶/金箔 ) 180元/杯</li>
                <li class="text-gray-900">購買冰淇淋 <span class="text-[14px] sm:text-[18px]">一支</span> 即送 <span class="ml-1 text-[16px] text-red-400">魯夫五檔手機氣囊支架 (隨機款)</span></li>
                <li class="text-gray-900">購買冰淇淋 <span class="text-[14px] sm:text-[18px]">二支</span> 再送 <span class="ml-1 text-[16px] text-red-400">航海王迷你鋪克牌</span></li>
              </ul>
              <ul class="mt-8 txt-thin text-[10px]">
                <li>每日各商售店限量提供贈品。恕無法挑款，每日數量送完為止</li>
                <li>備註：贈品無法轉售，每日各店數量有限 (昇恆昌三號港主題商售店無販售)</li>
                <li>主辦單位保有解釋、說明及更動之權利</li>
              </ul>
            </div>

            <div class="absolute right-0 sm:right-4 -bottom-0 sm:top-4">
              <NuxtImg format="webp" loading="lazy" class="w-[160px] lg:w-[240px] aspect-[3/2] object-contain" src="/info-5.png" alt="store" />
            </div>
            <div class="absolute left-0 sm:left-96 bottom-0">
              <NuxtImg format="webp" loading="lazy" class="w-[180px] sm:w-[360px] aspect-[3/2] object-contain" src="/info-6.png" alt="store" />
            </div>
          </div>
        </div>
      </div>
</template>