<script setup>

</script>

<template>
  <div class="py-36">
    <span class="text-gray-50 text-[18px] txt-thin">By the makers of Tailwind CSS</span>
    <h5 class="text-gray-50 text-[48px] txt-Bold">
      Build your next idea even faster.
    </h5>
    <h5 class="text-gray-950 text-[48px] txt-Bold">
      “Best practices” don’t actually work.
    </h5>
    
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