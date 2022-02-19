<template>
<div class="container mx-auto px-4 mb-12">
    <form>
       <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
                <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700"
                >Example textarea</label
                >
                <textarea
                class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message"
                ></textarea>
            </div>
        </div>
        <div class="flex justify-center">
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
    </form>
</div>
</template>