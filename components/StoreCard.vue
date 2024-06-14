<script setup>
const StoreCards = [
    { 
        id: 1,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '南海跳島｜七美+萬安',
        body: '原價1190/人，通關密語『我是海迷』享專屬優惠，<br>含2島上機車，機車2人1台遇單人騎補收$135/台',
        image: '/p-1.png',
        price: '全票 $950/人 未滿3歲 $100/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2',
        delay: 100
    },
    { 
        id: 2,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '七美一日遊｜A浮潛 B透明獨木舟',
        body: '原價1800/人，通關密語『我是海迷』享專屬優惠。<br>含島上機車(機車2人1台遇單人騎補收$135/台)+活動2選1(A浮潛、B透明獨木舟)',
        image: '/p-2.png',
        price: '全票 $1399/人<br>滿3-12歲 $1199/人 未滿3歲 $100/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2',
        delay: 250
    },
    { 
        id: 3,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '本島不限次數水上活動',
        body: '陽光沙灘水上活動。<br>原價1000/人，通關密語『我是海迷』享專屬優惠。<br>時間：早上場(09:00-12:00) 下午場(13:30-17:30)',
        image: '/p-3.png',
        price: '$800/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2',
        delay: 400
    },
    { 
        id: 4,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '海洋牧場',
        body: '烤蚵不限量+海鮮粥吃到飽。<br>原價600/人，通關密語『我是海迷』享專屬優惠。',
        image: '/p-4.png',
        price: '全票 $439/人<br>滿3-未滿12歲 $350/人 未滿3歲 $50/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2 mt-0 sm:mt-8 lg:mt-0',
        delay: 550
    },
    { 
        id: 5,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '東海一日遊｜戀夏東海一日遊',
        body: '巡航+海上戲水+海釣+午餐。可加購潮間帶+200<br>原價1200/人，通關密語『我是海迷』享專屬優惠。',
        image: '/p-5.png',
        price: '全票 $1000/人<br>滿3-8歲 $900/人 未滿3歲 $100/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2 mt-0 sm:mt-8',
        delay: 700
    },
    { 
        id: 6,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '東海一日遊｜鉅航A行程',
        body: '巡航+水上活動或海釣2選1+潮間帶+午餐<br>原價1700/人，通關密語『我是海迷』享專屬優惠。',
        image: '/p-6.png',
        price: '全票 $1200/人<br>滿3-7歲 $1000/人 未滿3歲 $100/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2 mt-0 sm:mt-8',
        delay: 850
    },
    { 
        id: 7,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '東海半日遊｜白猿坑東海半日',
        body: '巡航+鮮蚵+贈小管+風茹茶飲<br>原價650/人，通關密語『我是海迷』享專屬優惠。<br>時間：早上場(09:00) 下午場(14:00)',
        image: '/p-7.png',
        price: '全票 &580/人 5歲以下免費',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2 mt-0 sm:mt-8',
        delay: 1000
    },
    { 
        id: 8,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '自助 BBQ 吃到飽',
        body: '大姐燒烤/南海燒烤/澎島之星/鳳姐燒烤。<br>原價550/人，通關密語『我是海迷』享專屬優惠。',
        image: '/p-8.png',
        price: '全票 $500/人<br>100-130公分 $250/人 110以下 $100/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2 mt-0 sm:mt-8',
        delay: 1150
    },
];
</script>

<template>
    <div 
    class="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <NuxtLink 
            v-for="(card, index) in StoreCards" 
            :key="index" 
            :to="card.link" 
            target="_blank" 
            data-aos="fade-up" 
            :data-aos-delay="card.delay" 
            external
        >
            <div :class="card.class">
                <div class="w-full h-[160px] relative overflow-hidden bg-gray-300">
                    <NuxtImg 
                        format="webp" 
                        :placeholder="[50, 25, 75, 5]" 
                        loading="lazy" 
                        :src="card.image" 
                        alt="Store" 
                        class="w-full h-full object-cover duration-500 ease hover:scale-110" 
                    />
                </div>

                <div class="p-2 bg-white h-[175px]">
                    <div class="h-[100px]">
                        <div class="txt-Bold text-[#222222] text-[15px] mb-2">{{ card.title }}</div>
                        <p class="text-[#666666] text-[9px]" v-html="card.body"></p>
                    </div>
                    <div class="h-[60px] flex justify-end items-end">
                        <p class="text-[#F03742] text-[12px] text-right">
                            {{ card.price }}
                        </p>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
