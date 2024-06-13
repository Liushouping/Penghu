<template>
    <div class="w-full fixed top-0 flex justify-center z-30">
        <nav class="relative w-full py-6 flex justify-center transition-all duration-1000">
            <!--  -->
            <div class="bg-black/10 backdrop-blur-xl w-full h-full absolute top-0 z-10"></div>
            <!--  -->
			<div class="max-w-[80%] w-full flex flex-col sm:flex-row justify-between items-center z-20">
                <!--  -->
				<NuxtLink to="/">
					<NuxtImg format="webp" src="https://one-piece.com/common-one-piece/img/contents/header/logo.png" class="w-[90px]" alt="bbtaipei logo" />
				</NuxtLink>
                <!--  -->
                <ul class="flex flex-row space-x-4 txt-thin">
                    <li>A href</li>
                    <li>B href</li>
                    <li>C href</li>
                </ul>
			</div>
        </nav>
    </div>
</template>