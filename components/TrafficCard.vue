<script setup>
const TrafficCards = [
    { 
        id: 1,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '布袋-澎湖來回 (平日)',
        body: '原價1950/人。通關密語『我是海迷』享專屬優惠。',
        image: '/p-9.png',
        price: '聯營 $1490/人 百麗 $1590/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2',
        delay: 100
    },
    { 
        id: 2,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '布袋-澎湖來回 (假日)',
        body: '原價1950/人。通關密語『我是海迷』享專屬優惠。<br>日期：5/1~5/3、9/15~9/17、10/10~10/12<br>出發 (週五、六) 回程 (週日、一)',
        image: '/p-10.png',
        price: '聯營 $1590/人 百麗 $1690/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2',
        delay: 250
    },
    { 
        id: 3,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '布袋-澎湖來回 (連假)',
        body: '原價1950/人。通關密語『我是海迷』享專屬優惠。<br>日期：端午連假 (6/8~6/10)',
        image: '/p-11.png',
        price: '聯營 $1900/人 百麗 $1950/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2',
        delay: 400
    },
    { 
        id: 4,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '布袋-澎湖來回 (敬老/兒童票)',
        body: '975/人 - 不分平/假/連假。兒童票限滿3歲-未滿12歲，敬老票限滿65歲才能購買。',
        image: '/p-12.png',
        price: '$975/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2 mt-0 sm:mt-8 lg:mt-0',
        delay: 550
    },
    { 
        id: 5,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '布袋-澎湖來回 (保險票)',
        body: '195/人 - 不分平/假/連假。限未滿3歲才能購買。',
        image: '/p-13.png',
        price: '聯營 $1490/人 百麗 $1590/人',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2 mt-0 sm:mt-8',
        delay: 700
    },
    { 
        id: 6,
        link: 'https://line.me/R/ti/p/@yew4806b?oat_content=url', 
        title: '馬公機車',
        body: '原價500/天/台。通關密語『我是海迷』享專屬優惠。<br>三天二夜每台 1000。 ',
        image: '/p-14.png',
        price: '$1000/台/3天2夜',
        class: 'w-full overflow-hidden shadow-lg tracking-[0px] transition-transform hover:-translate-y-2 mt-0 sm:mt-8',
        delay: 850
    }
];
</script>

<template>
    <div 
    class="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 relative z-30">
        <NuxtLink 
            v-for="(card, index) in TrafficCards" 
            :key="index" 
            :to="card.link" 
            target="_blank" 
            data-aos="fade-up" 
            :data-aos-delay="card.delay" 
            external
        >
            <div :class="card.class">
                <div class="w-full h-[160px] relative overflow-hidden  bg-gray-300">
                    <NuxtImg 
                        format="webp" 
                        :placeholder="[50, 25, 75, 5]" 
                        loading="lazy" 
                        :src="card.image" 
                        alt="TrafficCard" 
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
