<template>
    <div
        :class="['flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4 transition-opacity motion-reduce:transition-none duration-500', showProject ? 'opacity-1' : 'opacity-0']">
        <div v-if="!project.alignLeft" class="order-first pb-4 lg:pb-0 lg:order-none lg:block">
            <img @load="showProject = !showProject" :src="getImageUrl(project.imageLink)" class="shadow-md"
                loading="lazy" />
        </div>

        <div class="flex flex-col space-y-4" :class="project.alignLeft ? 'text-left' : 'lg:text-right'">
            <!-- <p>{{ project.yearCompleted }}</p> -->
            <h3 class="text-xl font-extrabold pb-2">{{ project.projectName }}</h3>
            <p class="text-slate-500 dark:text-slate-300">{{ project.description }}</p>
            <p class="text-slate-600">{{ project.techStack }}</p>
            <div class="flex space-x-6 items-center text-slate-400" :class="!project.alignLeft ? 'lg:justify-end' : ''">
                <a v-for="link in project.links" :href="link.url"
                    class="flex items-center space-x-2 hover:text-link-color focus:text-link-color active:text-link-color"
                    target="_blank">
                    <span v-if="link.type == 'git'" class="flex items-center space-x-2">
                        <font-awesome-icon icon="fa-brands fa-github" class="h-7 w-7"></font-awesome-icon>
                        <span>{{ link.label }}</span>
                    </span>
                    <span v-else-if="link.type == 'external'" class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-youtube h-7 w-7"
                            viewBox="0 0 16 16">
                            <path
                                d="M15.445 3.045C15.219 2.82 14.98 2.755 14.549 2.73C13.801 2.676 8 2.676 8 2.676S2.199 2.676 1.451 2.73C1.02 2.755 0.781 2.82 0.555 3.045C0.104 3.496 0 4.035 0 5.035v5.93c0 1 0.104 1.54 0.555 1.991C0.781 13.18 1.02 13.245 1.451 13.27C2.199 13.324 8 13.324 8 13.324s5.801 0 6.549-0.054c0.431-0.025 0.67-0.090 0.896-0.315C15.896 12.505 16 11.966 16 10.966v-5.93c0-1-0.104-1.54-0.555-1.991zM6.5 10.227V5.773L11 8l-4.5 2.227z" />
                        </svg>
                        <!-- <ArrowTopRightOnSquareIcon class="h-7 w-7" /> -->

                        <span>{{ link.label }}</span>
                    </span>
                    <span v-else class="flex items-center space-x-2">
                        <LinkIcon class="h-6 w-6" />
                        <span>{{ link.label }}</span>
                    </span>
                </a>
            </div>
        </div>
        <div>
            <div v-if="project.alignLeft" class="order-first pb-4 lg:pb-0 lg:order-none lg:block mb-5">
                <img @load="showProject = !showProject" :src="getImageUrl(project.imageLink)" class="shadow-md"
                    loading="lazy" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const props=defineProps({
    project: Object
})

// Static Images
const showProject=ref(false)

let getImageUrl=(path) => {
    return new URL(`../assets/${path}`, import.meta.url).href
}

</script>