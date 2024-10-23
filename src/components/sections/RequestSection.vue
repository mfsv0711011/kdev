<template>
    <div id="contact" class=" pt-[50px]"></div>
    <section class="py-[50px] lg:py-[100px] bg-[#1E1E1E] selection:text-dark selection:bg-white">
        <div class="container flex flex-col gap-5 lg:gap-[50px]">
            <div class="flex flex-col gap-2.5 lg:gap-5 animation-fade-in">
                <h4 class="text-white text-center lg:text-start text-2xl lg:text-[35px] font-gilroy-semibold">Biz bilan bog'lanish</h4>
                <p class="text-white/70 text-lg">Qayta aloqaga chiqishimiz uchun, iltimos koʻrsatilgan barcha ma’lumotlarni kiriting.</p>
                <div class="grid grid-cols-2 lg:flex-row gap-2.5 lg:gap-5">
                    <div class="flex flex-col gap-2.5 lg:gap-5 col-span-2 lg:col-span-1">
                        <KInput
                            v-model="fullName"
                            placeholder="Ism Sharif"
                            :error-message="errors.fullName"
                        />
                        <KInput
                            class="text-white text-xl"
                            v-model="phone"
                            placeholder="+998991234567"
                            :error-message="errors.phone"
                        />
                        <KInput
                            v-model="telegramUsername"
                            placeholder="@telegramusername"
                            :error-message="errors.telegramUsername"
                        />
                    </div>
                    <KTextarea class="col-span-2 lg:col-span-1" v-model="message" placeholder="Xabaringizni qoldiring..." :error-message="errors.message" />
                    <button
                        @click="check"
                        :disabled="requestForCallStore.isLoading"
                        :class="{
                            'bg-[#cccccc] text-[#666666]': requestForCallStore.isLoading,
                            'text-dark bg-white': !requestForCallStore.isLoading
                        }"
                        class="animation-fade-in h-fit mt-auto col-span-2 w-full lg:w-fit ml-auto rounded text-xl lg:text-2xl font-gilroy-medium flex justify-center items-center px-[100px] py-4 lg:py-5 outline-purple"
                    >
                        <div v-if="requestForCallStore.isLoading" class="h-7 w-[94px] flex justify-center items-center">
                            <svg class="animate-spin size-5 lg:size-6 text-purple" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                <path fill="currentColor" d="M16 8a7.92 7.92 0 0 0-2.431-5.568A7.78 7.78 0 0 0 5.057.896c-.923.405-1.758.992-2.449 1.712S1.371 4.182 1.011 5.105a7.53 7.53 0 0 0 .115 5.742c.392.892.961 1.7 1.658 2.368S4.307 14.41 5.2 14.758a7.3 7.3 0 0 0 2.799.493a7.16 7.16 0 0 0 6.526-4.547a7 7 0 0 0 .415-1.622l.059.002a1 1 0 0 0 .996-1.083h.004zm-1.589 2.655c-.367.831-.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434a6.8 6.8 0 0 1-2.608.454a6.68 6.68 0 0 1-4.685-2.065a6.6 6.6 0 0 1-1.38-2.173a6.5 6.5 0 0 1 .116-4.976c.342-.77.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326a6.27 6.27 0 0 1 4.784.116c.74.329 1.41.805 1.963 1.387s.988 1.27 1.272 2.011a6 6 0 0 1 .397 2.32h.004a1 1 0 0 0 .888 1.077a7 7 0 0 1-.481 1.578z"/>
                            </svg>
                        </div>
                       <span v-else>Yuborish</span>
                    </button>
                </div>
            </div>
            <div class="text-center animation-fade-in">
                <HeadingOne class="text-white">Kontaktimiz</HeadingOne>
                <HeadingTwo class="text-white">Barcha savollaringizga javob olish uchun quyidagi kontaktlarga aloqaga chiqing.</HeadingTwo>
            </div>
            <div class="flex flex-col lg:flex-row text-center justify-between text-white gap-2.5 animation-fade-in">
                <div class="flex flex-col gap-1">
                    <p class="text-[20px] lg:text-[35px] font-gilroy-semibold">+998 90 130 50 20</p>
                    <p class="lg:text-[20px] font-gilroy-medium">Telefon raqamimiz</p>
                </div>
                <div class="flex flex-col gap-1">
                    <p class="text-[20px] lg:text-[35px] font-gilroy-semibold">kadirovdev@gmail.com</p>
                    <p class="lg:text-[20px] font-gilroy-medium">Elektron po’chtamiz</p>
                </div>
                <div class="flex flex-col gap-1">
                    <p class="text-[20px] lg:text-[35px] font-gilroy-semibold">kadirovdev</p>
                    <p class="lg:text-[20px] font-gilroy-medium">Instagram tarmog’imiz</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import HeadingOne from "@/components/UI/HeadingOne.vue";
import HeadingTwo from "@/components/UI/HeadingTwo.vue";
import {useRequestForCallStore} from "@/stores/modules/requestForCall.js";
import {useToast} from "vue-toastification";
import KInput from "@/components/UI/KInput.vue";
import {useField, useForm} from "vee-validate";
import { object, string } from 'yup'
import KTextarea from "@/components/UI/KTextarea.vue";

const requestForCallStore = useRequestForCallStore()
const toast = useToast()

const schema = object({
    fullName: string().required('Qatorni to\'diring.').min(2, 'Kamida 2ta belgidan iborat bo\'lishi kerak.'),
    phone: string()
        .required('Qatorni to\'diring.')
        .test('is-valid-phone', 'Telefon raqam \'+\' belgisi bilan boshlanishi kerak va raqamlardan iborat bo\'lishi kerak', val => {
            return val.match(/^\+\d+$/)
        })
    ,
    telegramUsername: string()
        .required('Qatorni to\'diring.')
        .min(5, 'Kamida 5ta belgidan iborat bo\'lishi kerak.')
        .test('is-valid-username', 'Username \'@\' belgisi bilan boshlanishi kerak', val => {
            return val.startsWith('@')
        }),
    message: string().required('Qatorni to\'diring.').min(16, 'Kamida 15ta belgidan iborat bo\'lishi kerak.'),
})

const { handleSubmit, errors } = useForm({ validationSchema: schema })

const check = handleSubmit(async (values, { resetForm }) => {
    try {
        await requestForCallStore.pushRequestForCall(values)

        resetForm()
        toast.success('Xabaringiz muvofaqqiyatli yuborildi!\nTez orada operatorlarimiz sizga aloqaga chiqishadi.')
    } catch (err) {
        toast.error(requestForCallStore.error)
    }
})

const { value: fullName } = useField('fullName')
const { value: phone } = useField('phone')
const { value: telegramUsername } = useField('telegramUsername')
const { value: message } = useField('message')

</script>
