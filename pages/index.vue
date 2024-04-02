<script setup>
const isLoaded = ref(false);
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 500);
});
</script>

<template>
  <div class="py-36">
    
    <div>
      <div 
      v-if="!isLoaded"
      class="rounded-lg bg-surface-0 dark:bg-surface-800 mb-4 p-8">
          <div class="flex mb-4">
              <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
              <div>
                  <Skeleton width="10rem" class="mb-2"></Skeleton>
                  <Skeleton width="5rem" class="mb-2"></Skeleton>
                  <Skeleton height=".5rem"></Skeleton>
              </div>
          </div>
          <Skeleton width="100%" height="150px"></Skeleton>
          <!-- <div class="flex justify-between mt-4">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
          </div> -->
      </div>

      <div v-else>
      <span class="text-gray-50 text-[18px] txt-thin">By the makers of CCSSSS</span>
      <h5 class="text-gray-50 text-[48px] txt-Bold">
        2024年你不能錯過的盛事，草帽一行人霸氣登場！
      </h5>
      <h5 class="text-gray-950 text-[48px] txt-Bold">
        “Best practices” don’t actually work.
      </h5>
      </div>
    </div>

    <div class="flex flex-row space-x-6 justify-around">
      <Image alt="Image" preview>
        <template #indicatoricon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </template>
        <template #image>
            <img src="https://cdn1.cybassets.com/media/W1siZiIsIjE1MTAyL3Byb2R1Y3RzLzM5NzcwNTMxLzE2Nzc4MjI1ODBfZDY0MjkwYmQxMmUyYjc0NzRiMmUuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=bef53746605ae29d" alt="image" />
        </template>
        <template #preview="slotProps">
            <img src="https://cdn1.cybassets.com/media/W1siZiIsIjE1MTAyL3Byb2R1Y3RzLzQ1MzYwNDg0LzE3MTA3NDc4NDdfNzUzNGIyZmRmZjMwMDA0MTE0NjYuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=bb13c5ebe47fb677" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
        </template>
      </Image>

      <!-- <Image alt="Image" preview>
        <template #indicatoricon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </template>
        <template #image>
            <img src="https://cdn1.cybassets.com/media/W1siZiIsIjE1MTAyL3Byb2R1Y3RzLzM5NzcwNTMxLzE2Nzc4MjI1ODBfZDY0MjkwYmQxMmUyYjc0NzRiMmUuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=bef53746605ae29d" alt="image" />
        </template>
        <template #preview="slotProps">
            <img src="https://cdn1.cybassets.com/media/W1siZiIsIjE1MTAyL3Byb2R1Y3RzLzQ1MzYwNDg0LzE3MTA3NDc4NDdfNzUzNGIyZmRmZjMwMDA0MTE0NjYuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=bb13c5ebe47fb677" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
        </template>
      </Image> -->
    </div>

    <div class="text-gray-50 text-[12px] txt-thin py-12 tracking-[2px]">
      <p>I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it.</p>
    </div>

  </div>
</template>

<style>

</style>