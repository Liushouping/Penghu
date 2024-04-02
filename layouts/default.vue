<template>
    <div class="bg h-full flex flex-col justify-center items-center tracking-[1px] overflow-hidden">
        <NavBar />
        <main class="px-4 xl:px-0">
            <slot/>
        </main>
        <PageFooter />
        <GotoTop />
    </div>
</template>

<style>
.bg {
    background: #EB3349;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #F45C43, #EB3349);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #F45C43, #EB3349); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>