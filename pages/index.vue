<script setup>
// import data from '~/data/travel.json';
// const title = data.title;

  const alert = ref(false);

  onMounted(() => {
    document.oncontextmenu = function() {
      alert.value = true;
      return false;
    };
    window.addEventListener("keydown", function(event) {
      if (event.key === "F12") {
        alert.value = true;
      }
    });
  });
</script>
<template>
  <div class="relative py-24 flex flex-col space-y-20 px-4 xl:px-0">
    <!-- 澎湖推薦店家 -->
    <div class="relative max-w-[1024px] w-full mx-auto h-full z-30">
      <!-- Title -->
      <div class="relative p-6 bg-[#DBC24F] w-full flex flex-row justify-between">
        <!---->
        <div class="h-[160px] flex justify-center items-center">
          <NuxtImg format="webp" class="w-[120px] sm:w-[240px] aspect-[1/1] sm:aspect-[3/2] object-contain" src="/info-1.png" alt="Penghu Store" />
        </div>
        <!---->
        <ul class="flex flex-col justify-center items-end tracking-[2px]">
          <li><h5 class="text-gray-50 text-[26px] sm:text-[36px] txt-Black" style="text-shadow: 0.1em 0.1em 0.2em #3C3C3C">澎湖推薦店家</h5></li>
          <li class="text-gray-50 text-[18px] txt-Black text-right" style="text-shadow: 0.1em 0.1em 0.2em #3C3C3C">-精選活動系列-</li>
        </ul>
      </div>

      <!-- StoreCard -->
      <StoreCard />
    </div>

    <!-- 澎湖交通辦法 -->
    <div class="relative max-w-[1024px] w-full mx-auto h-full z-30">
      <!-- Title -->
      <div class="relative p-6 bg-[#DBC24F] w-full flex flex-row justify-between">
        <!---->
        <div class="h-[160px]">
          <div class="absolute sm:-top-12 mt-4 sm:mt-0">
            <NuxtImg format="webp" class="w-[120px] sm:w-[360px] aspect-[1/1] sm:aspect-[3/2] object-contain" src="/info-2.png" alt="Penghu itinerary" />
          </div>
        </div>
        <!---->
        <ul class="flex flex-col justify-center items-end tracking-[2px]">
          <li><h5 class="text-gray-50 text-[26px] sm:text-[36px] txt-Black" style="text-shadow: 0.1em 0.1em 0.2em #3C3C3C">澎湖交通辦法</h5></li>
          <li class="text-gray-50 text-[18px] txt-Black text-right" style="text-shadow: 0.1em 0.1em 0.2em #3C3C3C">-精選交通系列-</li>
        </ul>
      </div>

      <!-- TrafficCard -->
       <TrafficCard />
    </div>

    <!-- 澎湖美食饗宴 -->
    <div class="relative max-w-[1024px] w-full mx-auto h-full z-20">
      <div class="absolute -top-80 -right-16 z-0">
        <NuxtImg format="webp" class="w-[480px] aspect-[3/2] object-contain" src="/ab-1.webp" alt="Penghu Food" />
      </div>
      <!-- Title -->
      <div class="relative p-6 bg-[#DBC24F] w-full flex flex-row justify-between">
        <!---->
        <div class="h-[160px] flex justify-center items-center">
          <NuxtImg format="webp" class="w-[120px] sm:w-[240px] aspect-[1/1] sm:aspect-[3/2] object-contain" src="/info-3.png" alt="Penghu Food" />
        </div>
        <!---->
        <ul class="flex flex-col justify-center items-end tracking-[2px]">
          <li><h5 class="text-gray-50 text-[26px] sm:text-[36px] txt-Black" style="text-shadow: 0.1em 0.1em 0.2em #3C3C3C">澎湖美食饗宴</h5></li>
          <li class="text-gray-50 text-[18px] txt-Black text-right" style="text-shadow: 0.1em 0.1em 0.2em #3C3C3C">-精選美食系列-</li>
        </ul>
      </div>

      <!-- Card -->
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
      
    </div>
    <!-- left -->
    <div class="absolute bottom-[960px] -left-24 z-0">
      <NuxtImg format="webp" class="w-full" src="/ab-4.webp" alt="onepiece" />
    </div>
    <!-- right -->
    <div class="absolute bottom-[1320px] -right-60 z-0">
      <NuxtImg format="webp" class="w-full" src="/ab-3.webp" alt="onepiece" />
    </div>
    <!-- bottom -->
    <div class="absolute -bottom-12 sm:-bottom-36 right-0 z-0">
      <NuxtImg format="webp" class="w-full" src="/ab-2.webp" alt="onepiece" />
    </div>
  </div>
  <!-- -->
  <Teleport to="body">
    <transition name="slide-fade">
      <div 
      v-if="alert === true" 
      class="fixed top-0 left-0 w-full h-screen flex justify-center items-center px-4 z-[999]">

        <div @click="alert = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-lg z-20"></div>

        <div class="relative bg-gray-50 rounded-md flex flex-col space-y-2 justify-center items-start drop-shadow-xl p-8 z-50">
            <div class="absolute right-2 top-2 cursor-pointer hover:text-red-500 z-50" @click="alert = false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
            </div>
            <span class="flex flex-row space-x-2 justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
              </svg>
              <p class="txt-Bold text-[12px] tracking-[2px]">禁止網站<u class="underline-offset-1 text-red-500">圖片轉載</u>使用。</p>
            </span>
            <hr class="w-full h-[1px] bg-black">
            <p class="text-[12px] tracking-[2px]">Reproduction and use of website images is prohibited.</p>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(25px);
  opacity: 0;
}
</style>
