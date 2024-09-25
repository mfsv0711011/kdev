<template>
    <div class="bg-[#F9FAFB]">
        <div class="container mt-7">
            <div class="lg:text-2xl font-medium flex flex-col gap-4 lg:gap-7" v-if="$route.params.slug === 'junior-full-stack-web-developer'">
                <HeadingFour>Junior Full Stack Developer Kursi</HeadingFour>
                <Paragraph class="leading-10">Endi dasturlashni o’rgangan odam junior dasturchi bo’ladi. Bu “kichik” dasturchi degani. Junior dasturchining ko’p hollarda tajribasi bo’lmaydi, chunki ular endi boshlagan bo’lishadi. Bu kursimizda siz 12ta programma orqali veb sayt yaratishni organasiz. O’zingiz uchun partfoliyo yaratishni organasiz. 5-6 oy davom etadigan bu kursimiz onlayn jonli tarzda bo’lib o’tadi.</Paragraph>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 lg:gap-[30px] bg-gray p-2.5 lg:p-[30px] rounded-lg">
                    <div v-for="skill of juniorSkills" :key="skill.name">
                        <Skill :skill/>
                    </div>
                </div>
                <div
                    v-for="skill of filteredJuniorSkills"
                    :key="skill.id"
                >
                    <Skill class="float-left min-w-[7.5rem] lg:min-w-[15rem] mr-2.5 lg:mr-5" :skill/>
                    <Paragraph>{{ skill?.text }}</Paragraph>
                </div>
<!-- TODO create checkboxes -->
                <label class="peer-checked/draft:border-sky-500 border border-gray/20">
                    <input class="peer/draft" type="radio" name="status" checked />
                    <span class="peer-checked/draft:text-sky-500">Draft</span>
                </label>

                <label class="peer-checked/draft2:border-sky-500 border border-gray/20">
                    <input class="peer/draft2" type="radio" name="status" checked />
                    <span class="peer-checked/draft2:text-sky-500">Draft</span>
                </label>

            </div>

            <div class="lg:text-2xl font-medium flex flex-col gap-4 lg:gap-7" v-if="$route.params.slug === 'middle-full-stack-web-developer'">
                <HeadingFour>Middle Full Stack Developer Kursi</HeadingFour>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae eum laudantium natus nemo perspiciatis reprehenderit temporibus voluptatibus. Asperiores at, consequuntur debitis dignissimos iste nemo saepe. Beatae consectetur ducimus eum eveniet explicabo fugiat hic iusto magnam minima natus neque nostrum numquam provident ratione reiciendis, repellat reprehenderit sint soluta veniam voluptates?</Paragraph>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 lg:gap-[30px] bg-gray p-2.5 lg:p-[30px] rounded-lg">
                    <div v-for="skill of middleSkills" :key="skill.name">
                        <Skill :skill/>
                    </div>
                </div>
                <div
                    v-for="skill of filteredMiddleSkills"
                    :key="skill.id"
                >
                    <Skill class="float-left min-w-[7.5rem] lg:min-w-[15rem] mr-2.5 lg:mr-5" :skill/>
                    <Paragraph>{{ skill?.text }}</Paragraph>
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
import {computed} from "vue";

const filteredJuniorSkills = computed(() => juniorSkills.filter(skill => skill.text !== ''))
const filteredMiddleSkills = computed(() => middleSkills.filter(skill => skill.text !== ''))
</script>

<style scoped>

</style>