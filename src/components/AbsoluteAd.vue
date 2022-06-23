<template>
    <n-card v-show="show" :class="{ 'bg-[#f5f5f5]': store.theme === 'background', 'show-animate': show }"
        class="fixed bottom-10 right-10 w-fit h-fit cursor-pointer shadow-md rounded-md" :borderd="false"
        @click="openLink(socialNetworks[i].link)">
        <div class="flex justify-center items-center pr-2">
            <i class='bx text-4xl px-1' :class="socialNetworks[i].icon" style="color: #18a058"></i>
            <span class="font-semibold">{{ socialNetworks[i].text }}</span>
        </div>
    </n-card>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/stores";

const store = useStore();

const show = ref(false)

setTimeout(() => {
    show.value = true
    setTimeout(() => show.value = false, 20000);
}, 5000);

const socialNetworks = ref([
    {
        icon: 'bxl-twitter',
        text: 'follow us on twitter',
        link: 'https://twitter.com/todolist_ir'
    },
    {
        icon: 'bxl-instagram-alt',
        text: 'follow us on instagram',
        link: 'https://instagram.com/todolist_ir'
    },
    {
        icon: 'bxl-telegram',
        text: 'follow us on telegram',
        link: 'https://t.me/todolist_ir'

    },
])

const i = ref(Math.trunc(Math.random() * socialNetworks.value.length))

const openLink = (link) => window.open(link)

</script>

<style scoped>
.show-animate {
    animation: show-animate .5s;
}

@keyframes show-animate {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>