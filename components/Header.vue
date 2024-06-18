
<template>
    <div>
        <header class="flex justify-between pt-6 px-6">
            <div class="logo">
                <img src="~/assets/logo.png" class="w-12 h-12 objet-cover">
            </div>
            <ul class="text-stone-400 space-x-6   flex">
                <li class="text-white">Home 
                    <br> 
                    <div class="flex  justify-center items-center">
                        <span class="text-xl  text-red-700 active text-center">.</span>
                    </div>
                </li>
                <li class="">Get tickets</li>
                <li class="">Video</li>
                <li class="">Cast</li>
                <li class="">About</li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>              
        </header>
    </div>
</template>

<style scoped>

.active {
    color: red!important;
    font-weight: 600!important;
    font-size: 2rem!important;
    text-align: center!important;
}

</style>