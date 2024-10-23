<template>
    <div class="container flex flex-col justify-center min-h-dvh pt-4">
        <img class="h-12 lg:h-20" src="/logo-full.svg" alt="logo">
        <h2 class="text-lg lg:text-[30px] font-medium text-dark text-center mt-5 lg:mt-10">OOO <span class="font-gilroy-semibold">"The Kadirov Group"</span> kompaniyasining onlayn darslari uchun ommaviy oferta</h2>
        <ol class="list-decimal list-outside ml-5 lg:mt-5 sm:ml-0">
            <li class="lg:text-2xl mt-5 font-gilroy-medium" v-for="item of offerList" :key="item">
                <p class="font-gilroy">{{ item }}</p>
            </li>
        </ol>
        <KButton @click="$router.back" class="px-10 my-10 w-fit ml-auto">Ortga</KButton>
    </div>
</template>

<script setup>
import KButton from "@/components/UI/KButton.vue";

const offerList = [
    'Barcha darslar zoom, yoki boshqa dasturlar orqali o\'tiladi.',
    'Darslardan maqsad dasturlashni o\'rganish.\n',
    'Ushbu darslarda siz dasturlashni o\'rganishingiz mumkin, lekin kompaniyamiz sizni ish bilan ta\'minlab berish mas\'uliyatini olmaydi.',
    'Biror sababga ko\'ra darslarni davom ettira olmasangiz, bir marta keyingi guruhda davom ettirishingiz mumkin bo\'ladi. Buning uchun administratorga murojaat qilishingiz kerak bo\'ladi.',
    'To\'lovni amalga oshirgandan so\'ng, 5 (besh) kun ichida o\'qimaslikka qaror qilsangiz, to\'langan summa qaytarib beriladi. Lekin, kompaniyada sizning to\'lovingiz uchun turli xarajatlar bo\'lgani uchun, qaytariladigan summadan 10% ushlab qolinadi. To\'lov amalga oshirilgach, 5 (besh) kundan so\'ng pulni qaytarib olish mumkin emas.',
    'O\'qituvchi belgilangan vaqt tartibida dars o\'tish imkoniyatiga ega bo\'lmasa, darsni guruh o\'quvchilari bilan kelishgan holda boshqa kunga yoki keyingi dars sanasiga qoldirishga haqli. Lekin, darslar o\'qituvchi tomonidan kurs davomida 10 (o\'n) martadan ko\'p ko\'chirilishi yoki qoldirilishi mumkin emas (O\'quvchilarning davomati va darslarga tayyor bo\'lmasdan qatnashganda, darsni o\'qituvchi tomonidan qoldirilishi bundan mustasno).',
    'Ofertani qabul qilish bilan birga, barcha topshiriqlarni o\'z vaqtida bajarish, darslarni jiddiy sababsiz qoldirmaslik majburiyatini o\'z zimmangizga olgan bo\'lasiz.'
]
</script>
