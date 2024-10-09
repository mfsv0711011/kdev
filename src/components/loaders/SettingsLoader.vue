<template>
    <div class="p-5 rounded w-full bg-white shadow-md grid grid-cols-12 justify-between gap-5">
        <div class="col-span-12">
            <div class="flex flex-col gap-2">
                <div class="animate-pulse h-4 w-fit flex-none bg-loaderGray text-transparent">Ism</div>
                <div class="animate-pulse h-fit w-full flex-none bg-loaderGray">
                    <KInput bordered no-animation size="normal" class="opacity-0"/>
                </div>
            </div>
        </div>
        <div class="col-span-12">
            <div class="flex flex-col gap-2">
                <div class="animate-pulse h-5 w-fit flex-none bg-loaderGray text-transparent">Familiya</div>
                <div class="animate-pulse h-fit w-full flex-none bg-loaderGray">
                    <KInput bordered no-animation size="normal" class="opacity-0"/>
                </div>
            </div>
        </div>
        <div class="col-span-12">
            <div class="flex flex-col gap-2">
                <div class="animate-pulse h-5 w-fit flex-none bg-loaderGray text-transparent">Email</div>
                <div class="animate-pulse h-fit w-full flex-none bg-loaderGray">
                    <KInput bordered no-animation size="normal" class="opacity-0"/>
                </div>
            </div>
        </div>
        <div class="col-span-12">
            <div class="flex flex-col gap-2">
                <div class="animate-pulse h-5 w-fit flex-none bg-loaderGray text-transparent">Telefont raqam</div>
                <div class="animate-pulse h-fit w-full flex-none bg-loaderGray">
                    <KInput bordered no-animation size="normal" class="opacity-0"/>
                </div>
            </div>
        </div>
        <div class="col-span-12">
            <div class="flex flex-col gap-2">
                <div class="animate-pulse h-5 w-fit flex-none bg-loaderGray text-transparent">Telegram username</div>
                <div class="animate-pulse h-fit w-full flex-none bg-loaderGray">
                    <KInput bordered no-animation size="normal" class="opacity-0"/>
                </div>
            </div>
        </div>
        <div class="col-span-12 flex justify-end">
            <div class="animate-pulse h-fit w-fit flex-none bg-loaderGray">
                <KButton type="submit" class="opacity-0 px-5 font-gilroy-semibold text-lg">Saqlash</KButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import KInput from "@/components/UI/KInput.vue";
import KButton from "@/components/UI/KButton.vue";
</script>