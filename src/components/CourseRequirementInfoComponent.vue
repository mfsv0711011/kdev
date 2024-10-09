<template>

    <div class="bg-dark">
        <div class="container py-7 selection:text-dark selection:bg-white">
            <div v-if="isJuniorRoute" class="flex text-white flex-col lg:py-10 lg:text-2xl font-medium gap-2.5 lg:gap-5 animation-fade-in font-gilroy-semibold">
                <div>
                    <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kursda qatnashish uchun nimalar kerak bo’ladi?</h4>
                    <ul class="list-disc ml-6 flex flex-col gap-3 lg:pt-2">
                        <li class="animation-fade-in"><i class="font-semibold">Kompyuter, yoki noutbuk</i></li>
                        <li class="animation-fade-in"> Darslar<i class="font-semibold"> Zoom, Discord </i> va <i class="font-semibold">Telemost</i> dasturlarining biri orqali onlayn tarzda o'tiladi. Siz o’qituvchi va uning elektron doskasini ko’rib turasiz. Ushbu dasturlarni bu yerdan yuklab olishingiz mumkin: <br><KLink href="https://zoom.us/download" target="_blank">Zoom</KLink>, <KLink href="https://discord.com/download" target="_blank">Discord</KLink>, <KLink href="https://play.google.com/store/apps/details?id=ru.yandex.telemost&amp;hl=ru&amp;gl=US" target="_blank"> Telemost </KLink> <br></li>
                        <li class="animation-fade-in"><i class="font-semibold">Internet tezligi</i> video a’loqa qilish uchun yetarli bo’lishi kerak. Tekshirish uchun fast.com saytiga kiring. Tezligingiz yetarli darajada bo’lishi uchun sayt kamida 2 mega bit tezlik ko’rsatishi kerak. </li>
                        <li class="animation-fade-in">O’qituvchi ba boshqa o’quvchilar bilan suhbat qilish uchun <i class="font-semibold">mikrofoni bor naushnik</i> kerak bo’ladi. Telefon naushniklari ham to’g’ri keladi. </li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kurs vaqti</h4>
                    <ul class="list-disc ml-6 flex flex-col gap-3 lg:pt-2">
                        <li class="animation-fade-in"><i class="font-semibold">Haftasiga 2 kun</i></li>
                        <li class="animation-fade-in"><i class="font-semibold"> Davomiyligi 2 soat </i>(Dars davomiyiligi, rejaga qarab, ikki soatdan oshishi yoki kamayishi mumkin). Toshkent vaqti bilan soat 20:00 dan 22:00 gacha. Yaxshi dasturchi bo’lish uchun dars bo’lmagan kunlar ham kamida 2 soatdan vaqt ajratish maslahat beriladi.</li>
                        <li class="animation-fade-in"><i class="font-semibold">Dars videoga yozib boriladi. </i>Agar biror sababga ko’ra darsda qatnasha olmasangiz, video sizga yuboriladi. Lekin, ko’p darsga qatnasha olmasangiz, siz bilan xayrlashishga to’g’ri kelishi mumkin. Chunki faqat video orqali o’rgansangiz – bu kurs siz uchun oddiy video-darslik bo’lib qoladi. Biz esa bunga qarshimiz.</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kurs haqida</h4>
                    <ul class="list-disc ml-6 flex flex-col gap-3 lg:pt-2">
                        <li class="animation-fade-in"><i class="font-semibold">Kurs davomiyligi: </i>5 oy</li>
                        <li class="animation-fade-in"><i class="font-semibold">To’lov turlari: </i>O'zbekistonlik o'quvchilar uzcard yoki Humo kartalari orqali saytimizdan to'lov qilishlari mumkin. Chet eldagi vatandoshlar mastercard yoki visa kartalariga pul o’tkazish orqali to’lovni amalga oshirishlari mumkin bo'ladi.</li>
                        <li class="animation-fade-in"><i class="font-semibold">Kurs tili: </i>O’zbekcha</li>
                        <li class="animation-fade-in"><i class="font-semibold">O’qituvchi: </i>{{ teacherFullName }}</li>
                        <li class="animation-fade-in"><i class="font-semibold">Kursga yozilish uchun: </i>100% oldindan, yoki har oy bo'lib to'lashingiz mumkin.</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kursdan maqsad</h4>
                    <ul class="list-disc ml-6 flex flex-col gap-3 lg:pt-2">
                        <li class="animation-fade-in">5 oy mobaynida sizga 10 dan ortiq texnologiyalarni o’rgatish. Sizni mustaqil ishlay oladigan professional dasturchiga aylantirish.</li>
                    </ul>
                </div>
            </div>
            <div v-if="!isJuniorRoute" class="flex text-white flex-col lg:py-10 lg:text-2xl font-medium gap-2.5 lg:gap-5 animation-fade-in font-gilroy-semibold">
                <div>
                    <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kursda qatnashish uchun nimalar kerak bo’ladi?</h4>
                    <ul class="list-disc ml-6 flex flex-col gap-3 lg:pt-2">
                        <li class="animation-fade-in"><i class="font-semibold">"Junior Full Stack Web Developer"</i> kursini tugatgan bo'lishingiz kerak.</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kurs vaqti</h4>
                    <ul class="list-disc ml-6 flex flex-col gap-3 lg:pt-2">
                        <li class="animation-fade-in"><i class="font-semibold">Haftasiga 2 kun</i></li>
                        <li class="animation-fade-in"><i class="font-semibold"> Davomiyligi 2 soat </i>(Dars davomiyiligi, rejaga qarab, ikki soatdan oshishi yoki kamayishi mumkin). Toshkent vaqti bilan soat 20:00 dan 22:00 gacha. Yaxshi dasturchi bo’lish uchun dars bo’lmagan kunlar ham kamida 2 soatdan vaqt ajratish maslahat beriladi.</li>
                        <li class="animation-fade-in"><i class="font-semibold">Dars videoga yozib boriladi. </i>Agar biror sababga ko’ra darsda qatnasha olmasangiz, video sizga yuboriladi. Lekin, ko’p darsga qatnasha olmasangiz, siz bilan xayrlashishga to’g’ri kelishi mumkin. Chunki faqat video orqali o’rgansangiz – bu kurs siz uchun oddiy video-darslik bo’lib qoladi. Biz esa bunga qarshimiz.</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kurs haqida</h4>
                    <ul class="list-disc ml-6 flex flex-col gap-3 lg:pt-2">
                        <li class="animation-fade-in"><i class="font-semibold">Kurs davomiyligi: </i>5 oy</li>
                        <li class="animation-fade-in"><i class="font-semibold">To’lov turlari: </i>O'zbekistonlik o'quvchilar uzcard yoki Humo kartalari orqali saytimizdan to'lov qilishlari mumkin. Chet eldagi vatandoshlar mastercard yoki visa kartalariga pul o’tkazish orqali to’lovni amalga oshirishlari mumkin bo'ladi.</li>
                        <li class="animation-fade-in"><i class="font-semibold">Kurs tili: </i>O’zbekcha</li>
                        <li class="animation-fade-in"><i class="font-semibold">O’qituvchi: </i>Akmal Kadirov</li>
                        <li class="animation-fade-in"><i class="font-semibold">Kursga yozilish uchun: </i>100% oldindan, yoki har oy bo'lib to'lashingiz mumkin.</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kursdan maqsad</h4>
                    <ul class="list-disc ml-6 flex flex-col gap-3 lg:pt-2">
                        <li class="animation-fade-in">5 oy mobaynida bilimlaringizni oshirib, sizni tajribali Middle dasturchi darajasiga olib chiqish.</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kursni tugatgach</h4>
                    <ul class="list-disc ml-6 flex flex-col gap-3 lg:pt-2">
                        <li class="animation-fade-in">Bizning kompanyamizda 2 oylik amaliyot (практика) o'taysiz. Bunda siz, kurs davomida olgan bilimlaringizni haqiqiy loyihalarda sinash imkoniga ega bo'lasiz.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import KLink from "@/components/UI/KLink.vue";

defineProps({
    isJuniorRoute: {
        type: Boolean,
        required: true
    },
    teacherFullName: {
        type: String,
        required: true
    }
})
</script>

<style scoped>

</style>