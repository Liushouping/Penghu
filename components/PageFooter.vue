<script setup>
const Year = new Date().getFullYear();
</script>
<template>
    <div class="w-full h-full flex justify-center items-center bg-[#DBC24F]">
        <div class="max-w-[1024px] w-full px-4 xl:px-0 py-20">
            <ul class="flex flex-col space-y-6">
                <li class="txt-thin text-[12px] text-gray-950">海迷禮</li>
                <li class="txt-thin text-[12px] text-gray-950">1.購買澎湖冒險海賊包可獲贈送夜釣小管票券 1 張，非花火施放日海上皇宮或和慶，需由澎湖之美預先訂位方可折抵（無法現場折抵，遇停航或其他因素無法兌換恕無法折換現金)使用期限即日起至113.09.30 止）</li>
                <li class="txt-thin text-[12px] text-gray-950">2.持集章冊至二崁村波姐蓋章贈送粉圓冰或飲品（每冊附乙杯兌換券）使用期限 113.4.20 至 113.09.30 止（遇商家店休或其他因素無法兌換恕無法折換現金）</li>
                <li class="txt-thin text-[12px] text-gray-950">3.在 Google 給澎湖之美旅行社五星評分並寫評論，每則可獲 BBQ 抵用券 100 元乙張，需由澎湖之美預先訂位方可折抵（無法現場折抵，遇商家店休或其他因素無法兌換恕無法折換現金，使用期限即日起至113.09.30 止）</li>
                <li class="txt-thin text-[12px] text-gray-950">以上活動我司保留隨時更改、變更、暫停或終止本活動內容之權利，以我司網站公告為準（https://www.topenghu.com.tw https://topenghu.ego.tw）</li>
            </ul>
        </div>
    </div>
    <footer class="w-full h-[60px] flex justify-center items-center bg-gray-950 txt-thin py-6">
        <p class="text-gray-50 text-[12px]">© Copyright {{ Year }} Footer. All rights reserved</p>
    </footer>
</template>