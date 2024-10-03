<template>
    <div class="bg-[#F9FAFB]">
        <div class="container mt-7 mb-10 flex flex-col gap-4 lg:gap-7">
            <HeadingFour>{{ course.courseName }}</HeadingFour>
            <Paragraph>{{ course.aboutText }}</Paragraph>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 lg:gap-[30px] bg-gray p-2.5 lg:p-[30px] rounded-lg">
                <div v-for="skill of course.skills" :key="skill.name">
                    <Skill :skill/>
                </div>
            </div>
        </div>

        <div class="bg-white py-7">
            <div class="container">
                <div class="lg:text-2xl font-medium lg:py-10 flex flex-col gap-4 lg:gap-7">
                    <div class="flex flex-col gap-2.5 md:gap-7">
                        <HeadingFive>Dasturlash tillari va Texnologiyalar</HeadingFive>
                        <div
                            v-for="skill of course.filteredSkills"
                            :key="skill.id"
                        >
                            <Skill class="float-left min-w-[7.5rem] lg:min-w-[15rem] mr-2.5 lg:mr-5" :skill/>
                            <Paragraph>{{ skill?.text }}</Paragraph>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                            <li v-if="module.getModule.courses" class="animation-fade-in"><i class="font-semibold">O’qituvchi: </i>{{ moduleTeacherFullName }}</li>
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
        <div class="bg-white py-7">
            <div class="container flex flex-col gap-4 lg:gap-7">
                <CoursesRadioButtonLoader v-if="module.isCoursesLoading"/>
                <div v-if="!module.isCoursesLoading" class="flex flex-col gap-2.5 md:gap-7 md:mt-6">
                    <HeadingFive>Kursni tanlang</HeadingFive>
                    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                        <KRadioButton
                            v-for="course of module.getModules.models"
                            :key="course.id" v-model="selectedCourseId"
                            :value="course.id"
                            :label="course.name"
                            :sup="course.discountPercent ? course.discountPercent + '%' : ''"
                            name="course"
                            @change="clearCheckedCourses"
                        />
                    </div>
                </div>
<!--                <transition-->
<!--                    enter-active-class="transition-all duration-400 ease-out"-->
<!--                    leave-active-class="transition-all duration-100 ease-in"-->
<!--                    enter-from-class="-translate-x-[200px] opacity-0"-->
<!--                    leave-to-class="-translate-x-[200px] opacity-0"-->
<!--                >-->
<!--                    <DiscountBanner v-if="selectedCourseId" :discount-percent="module.getModule.discountPercent" remains-time="2 : 00 : 48 : 30"/>-->
<!--                </transition>-->
            </div>
        </div>
        <div class="container py-7">
            <PaymentLoader v-if="module.isCoursesLoading || module.isCourseLoading"/>
            <div v-if="!module.isCourseLoading" class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
                <div>
                    <p>Eng chuqur o’rgatilgan 0 dan to Strong Junior+ gacha bo’lgan kurs. 4 oy davom etadi</p>
                    <ul>
                        <li class="flex items-center gap-5 border-b border-[#D4D4D4] py-4 lg:py-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.9998" cy="11.9998" r="9.00375" fill="#80007F" fill-opacity="0.2"/>
                                <path d="M8.44141 12.3387L10.6093 14.5066L10.5953 14.4926L15.4863 9.60156" stroke="#80007F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p v-if="module.getModule.courses">Boshlanish oyi : {{ module.getModule?.courses[0]?.startMonth.name }}</p>
                        </li>
                        <li class="flex items-center gap-5 border-b border-[#D4D4D4] py-4 lg:py-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.9998" cy="11.9998" r="9.00375" fill="#80007F" fill-opacity="0.2"/>
                                <path d="M8.44141 12.3387L10.6093 14.5066L10.5953 14.4926L15.4863 9.60156" stroke="#80007F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Dushanba va payshanba kunlari</p>
                        </li>
                        <li class="flex items-center gap-5 border-b border-[#D4D4D4] py-4 lg:py-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.9998" cy="11.9998" r="9.00375" fill="#80007F" fill-opacity="0.2"/>
                                <path d="M8.44141 12.3387L10.6093 14.5066L10.5953 14.4926L15.4863 9.60156" stroke="#80007F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Soat 20:00 dan 22:00 gacha</p>
                        </li>
                        <li class="flex items-center gap-5 border-b border-transparent py-4 lg:py-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.9998" cy="11.9998" r="9.00375" fill="#80007F" fill-opacity="0.2"/>
                                <path d="M8.44141 12.3387L10.6093 14.5066L10.5953 14.4926L15.4863 9.60156" stroke="#80007F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p v-if="module.getModule.courses"><b class="text-purple">{{ module.getModule?.courses[0]?.countOfStudents }} ta</b> bo’sh o’rin qoldi</p>
                        </li>
                    </ul>
                </div>
                <div class="overflow-hidden">
                    <p class="text-sm lg:text-xl font-medium mb-1">To’lov turi</p>
                    <div class="flex flex-col gap-4 lg:gap-8">
                        <div class="w-full grid grid-cols-2 gap-4 md:gap-7 m-0.5">
                            <KRadioButton v-model="selectedPayment" value="fully" label="To’liq"/>
                            <KRadioButton v-model="selectedPayment" value="monthly" label="Oylik"/>
                        </div>
                        <transition
                            enter-active-class="transition-all duration-400 ease-out"
                            leave-active-class="transition-all duration-100 ease-in"
                            enter-from-class="-translate-x-[200px] opacity-0"
                            leave-to-class="-translate-x-[200px] opacity-0"
                        >
                            <div v-if="selectedPayment === 'fully'" class="w-full grid grid-cols-2 gap-4 md:gap-7">
                                <p class="text-xl lg:text-[34px] font-gilroy-medium">{{ (coursePriceWithDiscount / 100).toLocaleString('en-US').replace(/,/g, ' ') }} <sub class="font-gilroy text-sm lg:text-2xl">uzs</sub></p>
                                <p v-if="module.getModule.courses.length && module.getModule.discountPercent" class="text-xl text-lightGray lg:text-[34px] font-gilroy-medium"><span class="line-through">{{ (module.getModule.courses?.reduce((acc, courseItem) => acc + courseItem?.price, 0) / 100).toLocaleString('en-US').replace(/,/g, ' ') }}</span> <sub class="font-gilroy text-sm lg:text-2xl">uzs</sub></p>
                                <p v-if="module.getModule.discountPercent" class="lg:text-xl text-green-700 col-span-2">Kursni summasini to'liq to'lov qilishda chegirma <span class="underline text-2xl">{{ module.getModule.discountPercent }}%</span></p>
                                <div class="col-span-2">
                                    <KButton class="text-white w-1/2 font-gilroy-semibold">To’lovni amalga oshirish</KButton>
                                </div>
                            </div>
                        </transition>
                        <transition
                            enter-active-class="transition-all duration-400 ease-in"
                            leave-active-class="transition-all duration-100 ease-out"
                            enter-from-class="translate-x-[200px] opacity-0"
                            leave-to-class="translate-x-[200px] opacity-0"
                        >
                            <div v-if="selectedPayment === 'monthly'">
                                <div class="w-full grid grid-cols-2 gap-4 md:gap-7" v-if="module.getModule.courses.length === 1">
                                    <div class="flex flex-col gap-4">
                                        <p v-if="module.getModule.courses.length" class="text-xl lg:text-[34px] font-gilroy-medium">{{ parseInt((module.getModule.courses[0].price / 100) / 12).toLocaleString('en-US').replace(/,/g, ' ') }} <sub class="font-gilroy text-sm lg:text-2xl">uzs/oyiga</sub></p>
                                        <p class="lg:text-xl font-medium col-span-2">12 to’lov</p>
                                    </div>
                                    <div class="flex flex-col gap-4">
                                        <p class="lg:text-xl">Oyma-oy to'lov qilish uchun administrator bilan bog'laning.</p>
                                        <div class="flex flex-col gap-2">
                                            <a href="tel:+998901305020" class="flex items-center gap-2 transition-all italic group hover:text-purple lg:text-xl">
                                                <svg class="size-6 text-dark group-hover:text-purple transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/>
                                                    </path>
                                                </svg>
                                                +998 90 130 50 20
                                            </a>
                                            <a href="https://t.me/kadirovDevAdmin" class="flex items-center gap-2 transition-all italic group hover:text-purple lg:text-xl">
                                                <svg class="size-6 text-dark group-hover:text-purple transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                        <path stroke-dasharray="20" stroke-dashoffset="20" d="M21 5l-2.5 15M21 5l-12 8.5">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"/>
                                                        </path>
                                                        <path stroke-dasharray="24" stroke-dashoffset="24" d="M21 5l-19 7.5">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path>
                                                        <path stroke-dasharray="14" stroke-dashoffset="14" d="M18.5 20l-9.5 -6.5">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="14;0"/></path>
                                                        <path stroke-dasharray="10" stroke-dashoffset="10" d="M2 12.5l7 1">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="10;0"/></path>
                                                        <path stroke-dasharray="8" stroke-dashoffset="8" d="M12 16l-3 3M9 13.5l0 5.5">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="8;0"/></path>
                                                    </g>
                                                </svg>
                                                @kadirovDevAdmin
                                            </a>
                                            <a href="https://www.instagram.com/kadirovdevadmin/" class="flex items-center gap-2 transition-all italic group hover:text-purple lg:text-xl">
                                                <svg class="size-6 text-dark group-hover:text-purple transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0">
                                                        <animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"/>
                                                    </circle>
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                        <path stroke-dasharray="72" stroke-dashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"/>
                                                        </path>
                                                        <path stroke-dasharray="28" stroke-dashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"/>
                                                        </path>
                                                    </g>
                                                </svg>
                                                @kadirovDevAdmin
                                            </a>
                                        </div>
                                    </div>
                                </div>
<!--                                <div v-else class="p-5 bg-white shadow-md rounded mb-2 flex flex-col gap-4">-->
<!--                                    <label-->
<!--                                        v-for="(course, index) of module.getModule.courses"-->
<!--                                        :key="course.id"-->
<!--                                        class="flex relative w-full justify-between items-start group hover:bg-gray/20 transition-all rounded border border-lightGray/30 has-[:checked]:bg-blue has-[:checked]:text-white p-4 cursor-pointer has-[:disabled]:bg-loaderGray/15 has-[:disabled]:opacity-50"-->
<!--                                        :class="{'text-red-500': !course.isActive}"-->
<!--                                    >-->
<!--                                        <div class="flex items-center gap-4">-->
<!--                                            <input :disabled="!course.isActive" type="checkbox" class="invisible absolute">-->
<!--                                            <p class="text-xl">{{ index + 1 }} - oy</p>-->
<!--                                        </div>-->
<!--                                        <div>-->
<!--                                            <div class="border-b border-lightGray/40 w-52">Boshlanish oyi: {{ course.startMonth.name }}</div>-->
<!--                                            <div class="border-b border-lightGray/40 w-52">Narxi: {{ course.price }}</div>-->
<!--                                            <div class="border-b border-lightGray/40 w-52"><span class="text-[#0d6efd] group-has-[:checked]:text-purple">{{ course.countOfStudents }}</span> ta joydan <span class="text-red-500 group-has-[:checked]:text-dark">{{ showFreePlace(course.countOfStudents, course.members) }}</span> ta qoldi.</div>-->
<!--                                        </div>-->
<!--                                    </label>-->
<!--                                </div>-->
                                <div v-else class="p-5 bg-white shadow-md rounded mb-2 flex flex-col gap-4">
                                    <label
                                        v-for="(course, index) of module.getModule.courses"
                                        :key="course.id"
                                        class="flex relative w-full justify-between items-start group transition-all rounded border border-lightGray/30 p-4 cursor-pointer"
                                        :class="{
                                            'bg-blue text-white': isChecked(index, course.isActive),
                                            'bg-gray/20': isHovered(index),
                                            'opacity-50': !course.isActive,
                                            'text-red-500': !course.isActive
                                        }"
                                        @mouseenter="hoverIndex = index"
                                        @mouseleave="hoverIndex = null"
                                        @mousedown="toggleChecked(index)"
                                    >
                                        <div class="flex items-center gap-4">
                                            <input :disabled="!course.isActive" type="checkbox" class="invisible absolute" :checked="isChecked(index, course.isActive)" >
                                            <p class="text-xl">{{ index + 1 }} - oy</p>
                                        </div>
                                        <div>
                                            <div class="border-b border-lightGray/40 w-52">Boshlanish oyi: {{ course.startMonth.name }}</div>
                                            <div class="border-b border-lightGray/40 w-52">Narxi: {{ course.price }}</div>
                                            <div class="border-b border-lightGray/40 w-52">
                                                <div v-if="showFreePlace(course.countOfStudents, course.members) < 0">Ushbu kursda joy qolmadi.</div>
                                                <div v-else>
                                                    <span class="text-[#0d6efd]" :class="{'text-purple': isChecked(index, course.isActive)}">{{ course.countOfStudents }}</span>
                                                    ta joydan
                                                    <span class="text-red-500" :class="{'text-dark': isChecked(index, course.isActive)}">{{ showFreePlace(course.countOfStudents, course.members) }}</span>
                                                    ta qoldi.
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeadingFour from "@/components/UI/HeadingFour.vue";
import Paragraph from "@/components/UI/Paragraph.vue";
import { juniorSkills, middleSkills } from '@/constants/courses.js'
import Skill from "@/components/Skill.vue";
import {computed, onMounted, ref, watch} from "vue";
import KRadioButton from "@/components/UI/KRadioButton.vue";
import HeadingFive from "@/components/UI/HeadingFive.vue";
import {useRoute} from "vue-router";
import KLink from "@/components/UI/KLink.vue";
import {useModule} from "@/stores/modules/temp/module.js";
import PaymentLoader from "@/components/loaders/PaymentLoader.vue";
import CoursesRadioButtonLoader from "@/components/loaders/CoursesRadioButtonLoader.vue";
import KButton from "@/components/UI/KButton.vue";
// import DiscountBanner from "@/components/DiscountBanner.vue";

const module = useModule()
const route = useRoute()
const isJuniorRoute = route.params.slug === 'junior-full-stack-web-developer'

const juniorCourse = {
    courseName: 'Junior Full Stack Developer Kursi',
    aboutText: 'Endi dasturlashni o’rgangan odam junior dasturchi bo’ladi. Bu “kichik” dasturchi degani. Junior dasturchining ko’p hollarda tajribasi bo’lmaydi, chunki ular endi boshlagan bo’lishadi. Bu kursimizda siz 12ta texnologiyalar orqali veb sayt yaratishni o’rganasiz. O’zingiz uchun portfolio yaratishni o’rganasiz. 5-6 oy davom etadigan bu kursimiz onlayn jonli tarzda bo’lib o’tadi.',
    skills: juniorSkills,
    filteredSkills: juniorSkills.filter(skill => skill.text !== '')
}

const middleCourse = {
    courseName: 'Middle Full Stack Developer Kursi',
    aboutText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet atque consequuntur cumque cupiditate deleniti dicta dolores error esse est, expedita facere fuga hic inventore ipsam itaque iure labore laudantium nesciunt perferendis quaerat quis saepe sunt tempora velit veritatis voluptates voluptatum! Cum ex, expedita impedit ipsum iste non nulla placeat.',
    skills: middleSkills,
    filteredSkills: middleSkills.filter(skill => skill.text !== '')
}

const course = computed(() => isJuniorRoute ? juniorCourse : middleCourse)
const coursePriceWithDiscount = computed(() => (module.getModule.courses?.reduce((acc, courseItem) => acc + courseItem?.price, 0) - (module.getModule.courses.reduce((acc, courseItem) => acc + courseItem?.price, 0) * (module.getModule.discountPercent / 100))) || module.getModule.courses.reduce((acc, courseItem) => acc + courseItem?.price, 0))
const moduleTeacherFullName = computed(() => module.getModule?.courses[0]?.teacher?.givenName + ' ' + module.getModule?.courses[0]?.teacher?.familyName)

const selectedCourseId = ref()
const selectedPayment = ref('fully')

watch(selectedCourseId, () => {
    module.fetchModule(selectedCourseId.value)
})

const showFreePlace = (countOfStudents, members) => {
    if (members <= 0) return countOfStudents;

    const freePlace = countOfStudents - members;

    if (freePlace > 10) {
        const secondDigit = freePlace % 10;
        return secondDigit > 5 ? secondDigit - 5 : secondDigit;
    }

    return freePlace;
};

onMounted(async () => {
    await module.fetchModules({ isArchive: false, courseType: isJuniorRoute ? 'web-junior' : 'web-middle' })
    selectedCourseId.value = module.getModules.models[0]?.id
})


const hoverIndex = ref(null);
const checkedCourses = ref([]);

const clearCheckedCourses = () => {
    checkedCourses.value = []
}

const isHovered = index => {
    if (hoverIndex.value === null || checkedCourses.value.includes(index)) return false;

    for (let i = 0; i <= hoverIndex.value; i++) {
        if (i === index && module.getModule.courses[i].isActive) {
            return true;
        }
    }
    return false;
};

const isChecked = (index, isActive) => isActive ? checkedCourses.value.includes(index) : false

const toggleChecked = (index) => {
    if (checkedCourses.value.includes(index)) {
        checkedCourses.value = checkedCourses.value.filter(i => i !== index && i < index);
    } else {
        for (let i = 0; i <= index; i++) {
            if (module.getModule.courses[i].isActive && !checkedCourses.value.includes(i)) {
                checkedCourses.value.push(i);
            }
        }
    }
};

</script>

<style scoped>

</style>